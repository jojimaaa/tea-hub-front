export interface WikiPost {
    id : string,
    title : string,
    body : string | JSON,
    author_name : string,
    created_date : Date | string,
    topic_id : string
};

export interface WikiTopic {
    id : string,
    name : string 
}