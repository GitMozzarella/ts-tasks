interface IProps {
	id: string
	title: string
	body: string
}
interface NormalizedData {
	byId: { [postId: string]: IProps }
	allIds: string[]
}

const posts: IProps[] = [
	{
		id: '62e69d5a5458aac0ed320b35',
		title: 'id labore ex et quam laborum',
		body: 'laudantium enim quasi est quidem magnam voluptate ipsam eostempora quo necessitatibusdolor quam autem quasireiciendis et nam sapiente accusantium'
	},
	{
		id: '62e69d5a5458aac0ed320b1c',
		title: 'quo vero reiciendis velit similique earum',
		body: 'est natus enim nihil est dolore omnis voluptatem numquamet omnis occaecati quod ullam at voluptatem error expedita pariaturnihil sint nostrum voluptatem reiciendis et'
	},
	{
		id: '62e69d5a5458aac0ed320b32',
		title: 'odio adipisci rerum aut animi',
		body: 'quia molestiae reprehenderit quasi aspernaturaut expedita occaecati aliquam eveniet laudantiumomnis quibusdam delectus saepe quia accusamus maiores nam estcum et ducimus et vero voluptates excepturi deleniti ratione'
	},
	{
		id: '62e69d5a5458aac0ed320b39',
		title: 'alias odio sit',
		body: 'non et atqueoccaecati deserunt quas accusantium unde odit nobis qui voluptatemquia voluptas consequuntur itaque doloret qui rerum deleniti ut occaecati'
	},
	{
		id: '62e69d5a5458aac0ed320b53',
		title: 'vero eaque aliquid doloribus et culpa',
		body: 'harum non quasi et rationetempore iure ex voluptates in rationeharum architecto fugit inventore cupiditatevoluptates magni quo et'
	}
]

const normalizeData = (data: IProps[]): NormalizedData => {
	const byId: { [key: string]: IProps } = {}
	const allIds: string[] = []

	data.map(post => {
		byId[post.id] = post
		allIds.push(post.id)
	})

	return { byId, allIds }
}

console.log(normalizeData(posts))
