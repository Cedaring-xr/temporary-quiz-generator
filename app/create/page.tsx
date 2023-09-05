'use client'

import React, { useState, FormEvent } from 'react'
import styles from './page.module.css'
import { useFormik } from 'formik'

interface Question {
	name: string
	id: number
}

export default function Page() {
	// const [isLoading, setIsLoading] = useState<boolean>(false)   // not used right now
	const [questionCount, setQuestionCount] = useState<Question[]>([]) //number of questions added, starts at 0

	const formik = useFormik({
		initialValues: {
			//one for each input value
			testName: '',
			questionName: ''
		},
		onSubmit: (values) => {
			console.log('submit form', values)
			// alert(JSON.stringify(values, null, 2))
		}
	})

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

	function removeQuestion(questionID: number) {
		console.log('remove question clicked', questionID)
		const updatedQuestions = questionCount.filter((question) => question.id !== questionID)
		setQuestionCount(updatedQuestions)
	}

	return (
		<div className="h-screen">
			<div className="mx-20 p-2 rounded-md bg-neutral-600">
				<form onSubmit={formik.handleSubmit} className=" text-neutral-100 flex flex-col">
					<label className="mx-2 mt-2">Quiz Name</label>
					<input
						id="testName"
						name="testName"
						type="text"
						placeholder="Test Name"
						onChange={formik.handleChange}
						value={formik.values.testName}
						className="rounded-md border-amber-900 m-2 p-1 w-64 text-slate-900"
						required
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
							<label className="mx-2 mt-2">Question Name</label>
							<input
								type="text"
								placeholder="Name"
								className="rounded-md border-amber-900 m-2 p-0.5 w-64 text-slate-900"
								required
							></input>
							<h3 className="m-1 mt-4">Please select the radio button for the correct answer</h3>
							<label className="mx-2 mt-1">Answer Option 1</label>
							<div className="flex flex-row align-top p-2">
								<input type="radio" name="choose" required></input>
								<textarea
									placeholder="Option one"
									className="rounded-md border-amber-900 mx-2 p-0.5 w-64 text-slate-900"
									required
								></textarea>
							</div>
							<label className="mx-2 mt-2">Answer Option 2</label>
							<div className="flex flex-row align-top p-2">
								<input type="radio" name="choose" required></input>
								<textarea
									placeholder="Option two"
									className="rounded-md border-amber-900 mx-2 p-0.5 w-64 text-slate-900"
									required
								></textarea>
							</div>
							<label className="mx-2 mt-2">Answer Option 3</label>
							<div className="flex flex-row align-top p-2">
								<input type="radio" name="choose" required></input>
								<textarea
									placeholder="Option three"
									className="rounded-md border-amber-900 mx-2 p-0.5 w-64 text-slate-900"
									required
								></textarea>
							</div>
							<label className="mx-2 mt-2">Answer Option 4</label>
							<div className="flex flex-row align-top p-2">
								<input type="radio" name="choose" required></input>
								<textarea
									placeholder="Option four"
									className="rounded-md border-amber-900 m-2 w-64 p-0.5 text-slate-900"
									required
								></textarea>
							</div>
							<button
								type="button"
								onClick={() => removeQuestion(question.id)}
								className="bg-red-600 text-neutral-100 rounded-md p-2 w-fit mx-auto"
							>
								Remove Question
							</button>
						</div>
					))}

					<button type="submit" className="bg-teal-600 text-neutral-100 rounded-md w-3/4 mx-auto p-2">
						Finalize Quiz
					</button>
				</form>
			</div>
		</div>
	)
}
