import { Link } from 'react-router-dom';

export default function Navigation() {
	return (
		<nav>
			<header className="border-b border-amber-400 sticky top-0 z-50 backdrop-blur-sm">
				<div className="max-w-4xl mx-auto py-4 flex justify-between">
					{/* Logo/Brand */}
					<Link
						to="/"
						className="group flex items-center gap-3"
					>
						<span className="font-mono text-amber-400 text-lg font-medium tracking-tighter">
							Jordyn's<span className="text-ink-500"> </span>Archive
						</span>
						<span className="text-ink-600 text-xs font-mono hidden sm:block">
							// a tech journal
						</span>
					</Link>

					{/* Navigation */}
					<nav className="flex items-center gap-6">
						<Link
							to="/"
							className={`font-mono text-sm transition-colors duration-200 ${
								location.pathname === '/'
									? 'text-amber-400'
									: 'text-ink-400 hover:text-ink-100'
							}`}
						>
							The Archive
						</Link>
						<Link to="/about">About</Link>
					</nav>
				</div>
			</header>
		</nav>
	);
}
