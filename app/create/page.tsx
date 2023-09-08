'use client'

import React, { useState, FormEvent } from 'react'
import styles from './page.module.css'
import { useFormik } from 'formik'

interface Question {
	name: string
	id: number
}

export default function Page() {
	const [questionCount, setQuestionCount] = useState<Question[]>([]) //number of questions added
	const [toggleTab, setToggleTab] = useState<Number>(1)

	const showTab = (index) => {
		console.log(index)
		setToggleTab(index)
	}

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
			number: questionCount.length + 1,
			name: 'test'
		}
		setQuestionCount([...questionCount, newQuestion])
		showTab(questionCount.length + 1)
	}

	function removeQuestion(questionID: number) {
		console.log('remove question clicked', questionID)
		// refresh questio count number
		// TODO: set any other tabs as active
		const updatedQuestions = questionCount.filter((question) => question.id !== questionID)
		setQuestionCount(updatedQuestions)
		showTab(questionCount.length - 1)
	}

	return (
		<div className="h-screen">
			<div className="tabs-container mx-20 p-2 rounded-md bg-neutral-600">
				<form onSubmit={formik.handleSubmit} className=" text-neutral-100 flex flex-col">
					<label htmlFor="testName" className="mx-2 mt-2">
						Quiz Name
					</label>
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
						className="bg-emerald-600 text-neutral-100 rounded-md p-2 w-fit mx-auto border-2 border-neutral-900"
						type="button"
						onClick={addQuestion}
					>
						Add New Question
					</button>
					<div className="">
						{questionCount.map((question) => (
							<div
								key={question.id}
								className={
									('tabs w-24 h-12 bg-slate-700 text-white inline-block',
									toggleTab === question.number ? styles['active-tab'] : styles.tab)
								}
								onClick={() => showTab(question.number)}
							>
								<h4 className="p-2">{'#' + question.number}</h4>
							</div>
						))}
					</div>

					{questionCount.map((question) => (
						<div
							id="questionForm"
							className={toggleTab === question.number ? styles['active-content'] : styles.content}
							key={question.id}
						>
							<h3 className="p-2">{'Question #' + question.number}</h3>
							<label htmlFor="questionName" className="mx-2 mt-2">
								Question Name
							</label>
							<input
								name="questionName"
								type="text"
								placeholder="Name"
								className="rounded-md border-amber-900 m-2 p-0.5 w-64 text-slate-900"
								required
							></input>
							<h3 className="m-1 mt-4">Please select the radio button of the correct answer</h3>
							<label className="mx-2 mt-1">Answer Option 1</label>
							<div className="flex flex-row align-top p-2">
								<input type="radio" name="choose" required></input>
								<textarea
									placeholder="Option one"
									className="rounded-md border-amber-900 mx-2 p-0.5 min-w-[400px] resize text-slate-900"
									required
								></textarea>
							</div>
							<label className="mx-2 mt-2">Answer Option 2</label>
							<div className="flex flex-row align-top p-2">
								<input type="radio" name="choose" required></input>
								<textarea
									placeholder="Option two"
									className="rounded-md border-amber-900 mx-2 p-0.5 w-64 min-w-[400px] resize text-slate-900"
									required
								></textarea>
							</div>
							<label className="mx-2 mt-2">Answer Option 3</label>
							<div className="flex flex-row align-top p-2">
								<input type="radio" name="choose" required></input>
								<textarea
									placeholder="Option three"
									className="rounded-md border-amber-900 mx-2 p-0.5 w-64 min-w-[400px] resize text-slate-900"
									required
								></textarea>
							</div>
							<label className="mx-2 mt-2">Answer Option 4</label>
							<div className="flex flex-row align-top p-2">
								<input type="radio" name="choose" required></input>
								<textarea
									placeholder="Option four"
									className="rounded-md border-amber-900 m-2 w-64 p-0.5 min-w-[400px] resize text-slate-900"
									required
								></textarea>
							</div>
							<button
								type="button"
								onClick={() => removeQuestion(question.id)}
								className="bg-red-600 text-neutral-100 rounded-md p-2 w-fit relative float-right border-2 border-neutral-900 mx-12 -translate-y-2"
							>
								Remove Question
							</button>
						</div>
					))}

					<button
						type="submit"
						className="bg-teal-600 text-neutral-100 border-2 border-neutral-900 rounded-md w-3/4 mx-auto p-2 my-3 max-w-[400px]"
					>
						Finalize Quiz
					</button>
				</form>
			</div>
		</div>
	)
}
