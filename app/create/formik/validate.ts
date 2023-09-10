validate: (values) => {
	let errors = {}
	if (!values['quiz-title']) {
		errors['quiz-title'] = 'required'
	}
	return errors
}
