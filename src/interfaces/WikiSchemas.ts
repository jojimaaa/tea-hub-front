export interface WikiPostSchema {
    id : string,
    title : string,
    body : string,
    author_name : string,
    created_date : Date | string,
    topic : WikiTopic,
    imageUrl: string
};

export interface WikiTopicSchema {
    id : string,
    name : string 
}

export interface WikiSearchTitle {
    title: string,
}

export interface WikiTopic {
    id:string,
    name:string
}