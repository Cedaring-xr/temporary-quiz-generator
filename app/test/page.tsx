'use client'

import { useState } from 'react'
import tempData from '../../data/first.json'

interface Question {
	'question-id': string
	'question-text': string
	options: any[]
}

export default function TestPage() {
	const [testID, setTestID] = useState('')
	const [searchQuery, setSearchQuery] = useState<string>('')
	const [showTest, setShowTest] = useState<boolean>(false)
	const [questionData, setQuestionData] = useState<Question[]>([])

	const fetchData = () => {
		console.log('test fetching data')
		console.log('temp data', tempData)
		setShowTest(true)
		setQuestionData(tempData['quiz-data'])
		// quizData = tempData['quiz-data']
	}

	const handleSearchChange = (event: any) => {
		setSearchQuery(event.target.value)
	}

	const handleQuizSubmit = () => {
		console.log('submit quiz')
		// return alert if all questions are not answered

		//compare responses to correct answsers

		// output overall score
		// calculate score
		calculateScore()
		// hide quiz questions
		setShowTest(false)
		// show results div
	}

	const calculateScore = () => {}

	return (
		<div className="bg-slate-300 p-4 mx-auto w-4/5 h-screen rounded-xl">
			<div className="flex flex-col">
				<h2>Input test ID</h2>
				<input type="text" value={searchQuery} onChange={handleSearchChange}></input>
				<button
					onClick={() => fetchData()}
					className="bg-emerald-600 text-neutral-100 rounded-md p-2 w-fit mx-auto"
				>
					Search for Test
				</button>

				{!showTest ? (
					<>
						<p className="mt-8">Don't have a test ID, check out one of the pre-made tests below</p>
						<div className="flex flex-row gap-2">
							<button className="bg-neutral-600 text-neutral-100 rounded-md p-2 w-fit mx-auto">
								Pre-made test 1
							</button>
							<button className="bg-neutral-600 text-neutral-100 rounded-md p-2 w-fit mx-auto">
								Pre-made test 2
							</button>
							<button className="bg-neutral-600 text-neutral-100 rounded-md p-2 w-fit mx-auto">
								Pre-made test 3
							</button>
						</div>
					</>
				) : (
					''
				)}
			</div>
			<div id="test-container">
				{showTest ? (
					<div>
						<h2>{tempData['quiz-title']}</h2>
						{questionData.map((question) => (
							<div key={question['question-id']}>
								<h3>{question['question-text']}</h3>
								<div className="grid grid-cols-[30px_minmax(900px,_1fr)] ">
									<input type="radio" name={question['question-id']}></input>
									<label>{question.options[0]['option-text']}</label>
									<input type="radio" name={question['question-id']}></input>
									<label>{question.options[1]['option-text']}</label>
									<input type="radio" name={question['question-id']}></input>
									<label>{question.options[2]['option-text']}</label>
									<input type="radio" name={question['question-id']}></input>
									<label>{question.options[3]['option-text']}</label>
								</div>
							</div>
						))}
						<button
							className="bg-emerald-600 text-neutral-100 rounded-md p-2 w-fit mx-auto"
							onClick={() => handleQuizSubmit()}
						>
							Submit Quiz
						</button>
					</div>
				) : (
					''
				)}
			</div>
		</div>
	)
}
