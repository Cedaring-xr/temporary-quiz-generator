import React from 'react'

type Params = {
	params: {
		userId: string
	}
}

function UserPage({ params: { userId } }: Params) {
	return <div>user page</div>
}

export default UserPage
