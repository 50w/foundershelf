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

