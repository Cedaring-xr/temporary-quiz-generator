'use client'

import React, { useState, FormEvent } from 'react'
import styles from './page.module.css'

interface Question {
	id: number
}

const questions = [{}]

export default function Page() {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [error, setError] = useState<string | null>(null)
	// const [questions, setQuestions] = useState<Question[]>([])
	const [questionCount, setQuestionCount] = useState<Question[]>([]) //number of questions added, starts at 0

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

	function addQuestion() {
		console.log('test add question')
		const timeStamp = new Date().getTime()
		const random = Math.floor(Math.random() * 1000)
		const newQuestion = {
			id: timeStamp + random,
			name: 'test'
		}
		setQuestionCount([...questionCount, newQuestion])
	}

	function removeQuestion() {
		console.log('remove question clicked')
		// get the question array length and key of the question to remove
		// remove the question from the array based on the key used
		// return the new array
	}

	return (
		<div className="h-screen">
			<div className="mx-20 p-2 rounded-md bg-neutral-600">
				{error && <div style={{ color: 'red' }}>{error}</div>}
				<form onSubmit={onSubmit} className=" text-neutral-100 flex flex-col">
					<label className="mx-2 mt-2">Quiz Name</label>
					<input
						type="text"
						name="name"
						placeholder="Test Name"
						className="rounded-md border-amber-900 m-2 p-1 w-64 text-slate-900"
					/>
					<button
						className="bg-emerald-600 text-neutral-100 rounded-md p-2 w-fit mx-auto"
						type="button"
						onClick={addQuestion}
					>
						Add New Question
					</button>

					{questionCount.map((question) => (
						<div id="questionForm" className="flex flex-col" key={question.id}>
							<h3>Question number</h3>
							<label className="mx-2 mt-2">Question Name</label>
							<input
								type="text"
								placeholder="Name"
								className="rounded-md border-amber-900 m-2 p-0.5 w-64 text-slate-900"
							></input>
							<h3 className="m-1 mt-4">Please select the radio button for the correct answer</h3>
							<label className="mx-2 mt-1">Answer Option 1</label>
							<div className="flex flex-row align-top p-2">
								<input type="radio" name="choose"></input>
								<textarea
									placeholder="Option one"
									className="rounded-md border-amber-900 mx-2 p-0.5 w-64 text-slate-900"
								></textarea>
							</div>
							<label className="mx-2 mt-2">Answer Option 2</label>
							<div className="flex flex-row align-top p-2">
								<input type="radio" name="choose"></input>
								<textarea
									placeholder="Option two"
									className="rounded-md border-amber-900 mx-2 p-0.5 w-64 text-slate-900"
								></textarea>
							</div>
							<label className="mx-2 mt-2">Answer Option 3</label>
							<div className="flex flex-row align-top p-2">
								<input type="radio" name="choose"></input>
								<textarea
									placeholder="Option three"
									className="rounded-md border-amber-900 mx-2 p-0.5 w-64 text-slate-900"
								></textarea>
							</div>
							<label className="mx-2 mt-2">Answer Option 4</label>
							<div className="flex flex-row align-top p-2">
								<input type="radio" name="choose"></input>
								<textarea
									placeholder="Option four"
									className="rounded-md border-amber-900 m-2 w-64 p-0.5 text-slate-900"
								></textarea>
							</div>
							<button
								type="button"
								onClick={removeQuestion}
								className="bg-red-600 text-neutral-100 rounded-md p-2 w-fit mx-auto"
							>
								Remove Question
							</button>
						</div>
					))}

					<button
						type="submit"
						disabled={isLoading}
						className="bg-teal-600 text-neutral-100 rounded-md w-3/4 mx-auto p-2"
					>
						{isLoading ? 'Loading...' : 'Finalize Quiz'}
					</button>
				</form>
			</div>
		</div>
	)
}
