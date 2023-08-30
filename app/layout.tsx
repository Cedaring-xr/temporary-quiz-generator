import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Test Creator',
	description: 'create and share custom multiple choice tests'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<nav className="w-full bg-emerald-300">
					<div id="nav-container">
						<h1>Quiz Generator</h1>
					</div>
				</nav>
				{children}
			</body>
		</html>
	)
}
