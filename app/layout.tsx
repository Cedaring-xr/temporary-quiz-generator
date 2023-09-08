import Link from 'next/link'
import './globals.css'
import type { Metadata } from 'next'
import { Noto_Serif } from '@next/font/google'

const noto = Noto_Serif({
	subsets: ['latin'],
	weight: '400'
})

export const metadata: Metadata = {
	title: 'Test Creator',
	description: 'create and share custom multiple choice tests'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="">
				<div id="nav-container">
					<h1 id="title" className="text-neutral-900 text-4xl my-4 mx-1">
						<Link href="/" className={noto.className}>
							Custom Quiz Generator
						</Link>
					</h1>
					<nav id="nav-buttons">
						<button className="bg-slate-600 text-neutral-100 font-bold m-2 p-2 rounded-xl">
							<Link href="/about">About</Link>
						</button>
						<button className="bg-slate-600 text-neutral-100 font-bold m-2 p-2 rounded-xl">
							<Link href="/create">Create New Quiz</Link>
						</button>
						<button className="bg-slate-600 text-neutral-100 font-bold m-2 p-2 rounded-xl">
							<Link href="/test">Take Quiz</Link>
						</button>
					</nav>
				</div>
				{children}
				<footer>
					{/* <p className="text-neutral-100 my-auto">
						created by:{' '}
						<a href="https://github.com/Cedaring-xr" target="blank" className="">
							Matt Ray
						</a>
					</p> */}
				</footer>
			</body>
		</html>
	)
}
