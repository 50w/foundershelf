import { string } from "prop-types";



// Interfaces -----------------------------------
interface Book {
    title: string;
    author: string;
    img: string;
}

interface Books {
    [key: string]: Book
}

interface Person {
    name: string;
    img: string;
    description: string;
    company: string;
    books: Book[];
}

interface People {
    [key: string]: Person
}
interface Shelf {
    people: Person[]
}

