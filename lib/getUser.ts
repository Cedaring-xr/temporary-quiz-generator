import React from 'react'

export default async function getUser() {
	const res = await fetch('')

	if (!res.ok) throw Error('failed to fetch user')
	return res.json()
}
