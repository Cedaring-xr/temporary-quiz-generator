'use client'

import { useState } from 'react'
import getUsers from '@/lib/getUsers'
import Link from 'next/link'
import tempData from '../../data/first.json'

export default function TestPage() {
	const [testID, setTestID] = useState('')
	const [searchQuery, setSearchQuery] = useState<string>('')
	const [showTest, setShowTest] = useState<boolean>(false)

	const fetchData = () => {
		console.log('test fetching data')
		console.log('temp data', tempData)
		setShowTest(true)
	}

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value)
	}

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
						{/* for each question map through and display the questions */}
						<h3>{tempData['quiz-data'][0]['question-text']}</h3>
						<div className="flex gap-2 flex-col">
							<input type="radio"></input>
							<p className="">{tempData['quiz-data'][0].options[0]['option-1']}</p>
							<input type="radio"></input>
							<p className="">{tempData['quiz-data'][0].options[1]['option-2']}</p>
							<input type="radio"></input>
							<p className="">{tempData['quiz-data'][0].options[2]['option-3']}</p>
							<input type="radio"></input>
							<p className="">{tempData['quiz-data'][0].options[3]['option-4']}</p>
						</div>
					</div>
				) : (
					''
				)}
			</div>
		</div>
	)
}
