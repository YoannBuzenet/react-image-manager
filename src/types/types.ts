export type Image =  {
    id: number;
    path: string;
    name: string;
    language: string;
    credits: string;
    createdAt: string;
    updatedAt: string;
    Tags: {
        id: number;
        name: string;
        language: string;
        createdAt: string;
        updatedAt: string;
        ImageTag: { 
        };
    }[];
}

export type Tag = {
    id: number;
    name: string;
    language: string;
    createdAt: string;
    updatedAt: string;
}