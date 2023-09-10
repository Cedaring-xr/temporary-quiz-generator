export interface CustomType {
	'quiz-id': number
	'quiz-share-string': string
	'quiz-title': string
	'quiz-data': [
		{
			'question-id': number
			'question-text': string
			options: [
				{
					'option-text': string
					answer: bool
				}
			]
		}
	]
}
