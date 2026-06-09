import matter from 'gray-matter';
import loveReactRaw from './why-i-love-react.md?raw';
import secondPostRaw from './second-post.md?raw';

const files = [
	{ slug: 'why-i-love-react', raw: loveReactRaw },
	{ slug: 'second-post', raw: secondPostRaw },
	// Add more posts here
];

const posts = files.map(({ slug, raw }) => {
	const { data } = matter(raw);
	return { slug, raw, ...data };
});

export default posts;
