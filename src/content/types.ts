export interface Book {
    title: string;
    author: string;
    img: string;
    recommendations: Person['name'][]
}

export interface Books {
    [key: string]: Book
}

export interface Person {
    name: string;
    img: string;
    description: string;
    company: string;
    books?: Book[];
}

export interface People {
    [key: string]: Person
}

export interface Shelf {
    people: Person[]
}