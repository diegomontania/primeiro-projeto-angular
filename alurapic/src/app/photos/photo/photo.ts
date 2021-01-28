// define uma interface para a api, ou seja, tipando os campos recebidos
export interface PhotoAPI{
    id: number;
    postDate: Date;
    url: string;
    description: string;
    allowComments: boolean;
    likes: number;
    comments: number;
    userId: number;
}