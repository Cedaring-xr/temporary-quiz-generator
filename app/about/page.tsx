import React from 'react'

function page() {
	return (
		<div className="bg-slate-200 h-screen flex p-4 flex-col">
			<h2 className="m-2 text-xl">How to use:</h2>
			<p className="mx-2">
				Write questions and answers for any topic that you want. Share link to your test with others that can
				take the test. All tests and questions will be automatically deleted after 2 weeks. Information is
				private to anyone with the test link but is not confidential, please do not write any information that
				you do not wish to be public.
			</p>
			<h2 className="m-2 text-xl">Quiz Privacy:</h2>
			<p className="mx-2">
				Created tests are semi-private. Each one can only be accessed by using the test ID. Anyone with the test
				ID can take the created test.
			</p>
			<h2 className="m-2 text-xl">Quiz Longevity:</h2>
			<p className="mx-2">
				Tests are available for 2 weeks past creation time. After that they will be automatically deleted
			</p>
		</div>
	)
}

export default page
