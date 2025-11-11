export interface WikiPostSchema {
    id : string,
    title : string,
    body : string | JSON,
    author_name : string,
    created_date : Date | string,
    topic_id : string,
    imageUrl: string
};

export interface WikiTopicSchema {
    id : string,
    name : string 
}

export interface WikiSearchTitle {
    title: string,
}