import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import { posts } from '../posts/index';

const BlogPost = () => {
	const { slug } = useParams();

	const postData = posts.find((p) => p.slug === slug);
	const { data, content } = matter(postData.raw);

	const heroSrc = data.heroImage
		? `${import.meta.env.BASE_URL.replace(/\/$/, '')}${data.heroImage}`
		: null;

	return (
		<article className="max-w-2xl mx-auto p-6">
			<Link
				to="/"
				className="text-[#986315] hover:underline font-mono"
			>
				← all posts
			</Link>
			{heroSrc && (
				<img
					src={heroSrc}
					alt=""
					className="w-full h-64 object-cover rounded-lg mt-6"
				/>
			)}
			<div>
				<h1 className="text-3xl font-bold mt-10 mb-2">{data.title}</h1>
				<h5 className="text-[#8D7762] italic mt-2">{data.excerpt}</h5>
				<p className="text-[#8D7762] font-mono text-xs flex justify-end mt-2">
					{data.date}
				</p>
			</div>
			<hr className="fancy-rule m-6" />
			<div className="prose prose-invert m-6">
				<ReactMarkdown
					components={{
						img: ({ src, alt, ...props }) => {
							const resolved = src?.startsWith('/')
								? `${import.meta.env.BASE_URL.replace(/\/$/, '')}${src}`
								: src;
							return <img src={resolved} alt={alt} {...props} />;
						},
					}}
				>
					{content}
				</ReactMarkdown>
			</div>
		</article>
	);
};

export default BlogPost;
