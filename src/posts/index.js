import matter from 'gray-matter';
import firstPostRaw from './first-post.md?raw';
import secondPostRaw from './second-post.md?raw';
import thirdPostRaw from './third-post.md?raw';
import aboutRaw from './about-me.md?raw';

const files = [
	{ slug: 'first-post', raw: firstPostRaw },
	{ slug: 'second-post', raw: secondPostRaw },
	{ slug: 'third-post', raw: thirdPostRaw },

	// Add more posts here
];
const aboutFiles = [
	{ slug: 'about', raw: aboutRaw },
	// Add more posts here
];

const posts = files.map(({ slug, raw }) => {
	const { data } = matter(raw);
	return { slug, raw, ...data };
});

const about = aboutFiles.map(({ slug, raw }) => {
	const { data } = matter(raw);
	return { slug, raw, ...data };
});
export { posts, about };
