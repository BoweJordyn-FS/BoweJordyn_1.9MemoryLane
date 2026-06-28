import matter from 'gray-matter';
import firstPostRaw from './first-post.md?raw';
import secondPostRaw from './second-post.md?raw';
import thirdPostRaw from './third-post.md?raw';
import fourthPostRaw from './fourth-post.md?raw';
import fifthPostRaw from './fifth-post.md?raw';
import sixthPostRaw from './sixth-post.md?raw';
import aboutRaw from './about-me.md?raw';

const files = [
	{ slug: 'first-post', raw: firstPostRaw },
	{ slug: 'second-post', raw: secondPostRaw },
	{ slug: 'third-post', raw: thirdPostRaw },
	{ slug: 'fourth-post', raw: fourthPostRaw },
	{ slug: 'fifth-post', raw: fifthPostRaw },
	{ slug: 'sixth-post', raw: sixthPostRaw },
];
const aboutFiles = [{ slug: 'about', raw: aboutRaw }];

const posts = files.map(({ slug, raw }) => {
	const { data } = matter(raw);
	return { slug, raw, ...data };
});

const about = aboutFiles.map(({ slug, raw }) => {
	const { data } = matter(raw);
	return { slug, raw, ...data };
});
export { posts, about };
