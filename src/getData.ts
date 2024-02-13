const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'

interface Comment {
	postId?: number
	id: number
	name?: string
	email: string
	body?: string
}

const getData = (url: string): Promise<Comment[]> => {
	return fetch(url)
		.then(response => {
			return response.json()
		})
		.then(data => {
			return data as Comment[]
		})
}

getData(COMMENTS_URL)
	.then((data: Comment[]) => {
		data.forEach(comment => {
			console.log(`ID: ${comment.id} , Email : ${comment.email}`)
		})
	})
	.catch((error: Error) => {
		console.error(error)
	})
