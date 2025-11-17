export interface ForumPostSchema {
    id: string,
    title: string,
    body: string,
    topic: ForumTopicSchema,
    user: UserSchema,
    created_at: Date | string,
    comments: CommentSchema[]
}

export interface ForumNewCommentSchema {
    new_comment_body: string;
}

export interface UserSchema {
    id: string,
    username: string,
    name: string,
    email: string,

}

export interface CommentSchema {
    id: string,
    body: string,
    user: UserSchema,
    post_id: string,
    parent_id: string | undefined
    created_at: Date | string,
}

export interface ForumTopicSchema {
    id: string,
    name: string
}