export interface ForumPost {
    id: string,
    title: string,
    body: string,
    topic: ForumTopicDTO,
    user: UserDTO,
    created_at: Date | string,
    comments: ForumCommentDTO[], //lista de comentários do post, nos moldes de ForumCommentDTO

}

export interface ForumPostDTO extends ForumPost{
    likeCount: number
    likedByMe: boolean
}

export interface ForumPostSchema {
    title: string,
    body: string,
    topic_id: string,
    username: string,
}

export interface ICommentForm {
    comment_body: string,
}

export interface IEditPostForm {
    body: string,
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
    likeCount: number, // count das linhas de tb_comment_likes cujo id do comentário seja aquele fornecido
    likedByMe: boolean, // verificar se id do usuário está presente na tabela SELECT (*) from tb_comment_likes WHERE comment_id == {$comment_id}
}

export interface UpdateCommentSchema {
    comment_id: string,
    comment_body: string,
    username: string
}

export interface ForumTopicDTO {
    id: string,
    name: string
}

export interface ToggleCommentLikeSchema {
    comment_id: string,
    username: string
}

export interface TogglePostLikeSchema {
    post_id: string,
    username: string,
}