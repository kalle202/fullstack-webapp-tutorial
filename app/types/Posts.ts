export type PostType = {
    title: string
    id: string
    createAt: string
    user: {
        name:string
        image:string
    }
    Comment?: {
        createdAt: string
        id: string
        postId: string
        userId: string
    }[]
}