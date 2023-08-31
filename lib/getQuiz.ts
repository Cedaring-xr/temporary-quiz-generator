import React from 'react'
import Data from '../data/first.json'

export default async function getQuiz(quizID: string) {
	// const res = await fetch(`https://jsonplaceholder.typicode.com/user/${userId}`)
	// if (!res.ok) throw Error('failed to fetch user')

	//placeholder - return template data from json file
	const res = Data

	return res
}
