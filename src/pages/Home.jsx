import { Link } from 'react-router-dom';
import posts from '../posts/index';
import Navigation from '../components/Navigation';
import { MdxFlowExpression } from '../../node_modules/mdast-util-mdx-expression/index.d';

export default function Home() {
	return (
		<div>
			<Navigation />
			<main className="max-w-4xl mx-auto px-6 py-16 page-enter">
				<h1 className="text-5xl font-bold mb-4 tracking-wide ">
					<span className="text-white  text-ink-50 leading-tight mb-4 font-display">
						Memory
					</span>{' '}
					<span className="text-[#F9BE25] italic">Lane</span>
				</h1>
				<p className="text-lg text-[#8D7762] font-display tracking-wide">
					A collection of posts on things I'm learning during my journey through
					the world of web development.
				</p>
				<hr className="fancy-rule m-6" />
				<h3 className="font-mono text-xs text-amber-500 tracking-widest uppercase">
					{' '}
					The Archive
				</h3>
				<ul className="space-y-4 m-3">
					{posts.map((post) => (
						<li
							key={post.slug}
							className="border border-[#F9BE25] p-4 rounded-lg bg-[#1A140F]"
						>
							<div>
								<Link
									to={`/post/${post.slug}`}
									className="text-xl font-semibold hover:underline"
								>
									{post.title}
								</Link>
								<p className="text-lg text-gray-600">{post.excerpt}</p>
							</div>
							<div>read more →</div>
						</li>
					))}
				</ul>
			</main>
		</div>
	);
}
