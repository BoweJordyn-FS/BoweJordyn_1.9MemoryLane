import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import posts from '../posts/index';

const BlogPost = () => {
	const { slug } = useParams();

	const postData = posts.find((p) => p.slug === slug);
	const { data, content } = matter(postData.raw);

	return (
		<article className="max-w-2xl mx-auto p-6">
			<Link
				to="/"
				className="text-blue-600 hover:underline"
			>
				← Back
			</Link>
			<h1 className="text-3xl font-bold mt-4 mb-2">{data.title}</h1>
			<div className="prose mt-6">
				<ReactMarkdown>{content}</ReactMarkdown>
			</div>
		</article>
	);
};

export default BlogPost;
