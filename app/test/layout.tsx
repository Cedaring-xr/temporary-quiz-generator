import React, { useState, FormEvent } from 'react'

export default function TestLayout({ children }: { children }) {
	return (
		<section>
			<nav className="w-full bg-slate-100">
				<div id="nav-container">
					<h1>Created Test Individual Name</h1>
				</div>
			</nav>
			{children}
		</section>
	)
}
