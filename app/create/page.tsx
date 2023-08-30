'use client'

import React, { useState, FormEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Page() {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [error, setError] = useState<string | null>(null)

	async function addTest(data: FormData) {}

	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setIsLoading(true)
		setError(null) // Clear previous errors when a new request starts

		try {
			const formData = new FormData(event.currentTarget)
			const response = await fetch('/api/submit', {
				method: 'POST',
				body: formData
			})

			if (!response.ok) {
				throw new Error('Failed to submit the data. Please try again.')
			}

			// Handle response if necessary
			const data = await response.json()
		} catch (error) {
			// Capture the error message to display to the user
			setError(error.message)
			console.error(error)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div>
			<div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-400 bg-gradient-to-b from-zinc-300 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-300 lg:p-4 lg:dark:bg-zinc-800/30">
				<Link href="/">Home</Link>
			</div>
			<div>
				{error && <div style={{ color: 'red' }}>{error}</div>}
				<form onSubmit={onSubmit} className={styles.main}>
					<label>Test Name</label>
					<input type="text" name="name" />
					<div>
						<label>question number</label>
						<input type="text" placeholder="Name"></input>
						<label>Answer Option 1</label>
						<input type="text" placeholder="Option one"></input>
						<label>Answer Option 2</label>
						<input type="text" placeholder="Option two"></input>
						<label>Answer Option 3</label>
						<input type="text" placeholder="Option three"></input>
						<label>Answer Option 4</label>
						<input type="text" placeholder="Option four"></input>
					</div>
					<button>add new question</button>
					<br></br>
					<button type="submit" disabled={isLoading}>
						{isLoading ? 'Loading...' : 'Submit'}
					</button>
				</form>
			</div>
		</div>
	)
}
