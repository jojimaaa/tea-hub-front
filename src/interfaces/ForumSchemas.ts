export interface ForumPostBase {
    id: string,
    title: string,
    topic: ForumTopicDTO,
    user: UserDTO,
    created_at: Date | string,
    like_count: number
}

export interface ForumPost extends ForumPostBase {
    body: string,
    comments: ForumCommentDTO[], //lista de comentários do post, nos moldes de ForumCommentDTO
}

export interface ForumFilterSchema {
    title?: string,
    topic_id?: number,
}

export interface ForumPostDTO extends ForumPost{
    liked_by_me: boolean
}

export interface ForumPostSchema {
    title: string,
    body: string,
    topic_id: number
}

export interface ICommentForm {
    comment_body: string,
}

export interface IEditPostForm {
    body: string,
    topic_id: number,
    title: string
}

export interface UserDTO {
    username: string,
    name: string,
}

export interface NewCommentSchema {
    body: string,
    post_id: string,
    username: string,
    parent_id: string,
}

export interface IComment {
    id: string,
    body: string,
    user: UserDTO,
    post_id: string,
    parent_id: string | undefined
    created_at: Date | string,
}

export interface ForumCommentDTO extends IComment {
    like_count: number, // count das linhas de tb_comment_likes cujo id do comentário seja aquele fornecido
    liked_by_me: boolean, // verificar se id do usuário está presente na tabela SELECT (*) from tb_comment_likes WHERE comment_id == {$comment_id}
}

export interface UpdateCommentSchema {
    comment_id: string,
    comment_body: string,
    username: string
}

export interface ForumTopicDTO {
    id: number,
    name: string
}

export interface ToggleCommentLikeSchema {
    comment_id: string,
    username: string
}

export interface ToggleCommentLikeDTO {
    comment_id: string,
    liked_by_me: boolean
}

export interface TogglePostLikeSchema {
    post_id: string,
    username: string,
}
export interface TogglePostLikeDTO {
    post_id: string,
    liked_by_me: boolean
}