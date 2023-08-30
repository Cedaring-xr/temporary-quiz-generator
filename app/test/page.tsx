import type { Metadata } from 'next'
import getUsers from '@/lib/getUsers'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Users'
}
export default async function TestPage() {
	const usersData: Promise<User[]> = getUsers()

	const users = await usersData

	const content = (
		<section>
			<div>
				<h2>Input test ID</h2>
				<input type="text"></input>
				<p>Don't have a test ID, check out one of the pre-made tests below</p>
				<button>Pre-made test 1</button>
				<button>Pre-made test 2</button>
				<button>Pre-made test 3</button>
			</div>
			<br></br>
			{users.map((user) => {
				return (
					<>
						<p key={user.id}>
							<Link href={`/users/${user.id}`}>{user.name}</Link>
						</p>
						<br></br>
					</>
				)
			})}
		</section>
	)

	return content
}
