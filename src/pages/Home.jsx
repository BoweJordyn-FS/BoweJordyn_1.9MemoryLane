import { Link } from 'react-router-dom';
import { posts } from '../posts/index';

export default function Home() {
	return (
		<div>
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
						<Link
							to={`/post/${post.slug}`}
							className="text-xl font-semibold font-display tracking-wide "
						>
							<li
								key={post.slug}
								className="post-card border border-[#986315] p-4 rounded-sm bg-[#1A140F] mb-5 transition duration-150 hover:-translate-y-1 hover:scale-100 ease-in-out hover:bg-[#1A140F]/80"
							>
								<span className="hover:underline">{post.title}</span>
								<p className="text-sm text-[#8D7762] mt-2">{post.excerpt}</p>
								<div className="display flex flex-row justify-between items-center mt-4">
									<p className="text-[#8D7762] font-mono text-xs">
										{post.date}
									</p>
									<span className="text-amber-500 text-xs font-mono transition hover:translate-x-1 ease-in-out hover:text-[#986315]">
										read →
									</span>
								</div>
							</li>
						</Link>
					))}
				</ul>
			</main>
		</div>
	);
}
