const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'

interface Comment {
	postId?: number
	id: number
	name?: string
	email: string
	body?: string
}

const getData = async (url: string): Promise<Comment[]> => {
	try {
		const response = await fetch(url)
		const data = (await response.json()) as Comment[]

		if (!Array.isArray(data)) {
			throw new Error('Error receiving data')
		}

		return data.map(comment => ({
			id: comment.id,
			email: comment.email
		}))
	} catch (error) {
		console.error('Error fetching comments', error)
		throw error
	}
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
