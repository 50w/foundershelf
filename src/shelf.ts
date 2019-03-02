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

// Utilities ------------------------------------
function titlesToBooks(arr: string[]):Book[] {
    const books: Book[] = []
    arr.forEach(element => {
        library[element] ? books.push(library[element]) : null;
    });
    return books
}

function namesToPeople(arr: string[]):Person[] {
    const people: Person[] = []
    arr.forEach(element => {
        persons[element] ? people.push(persons[element]) : null;
    });
    return people
}

// Data -----------------------------------------
const library:Books = {
    "Mindset": {
        title: "Mindset",
        author: "Carol Dweck",
        img: "https://images.gr-assets.com/books/1364251156l/1307582.jpg"
    },
    "Thinking in Systems": {
        title: "Thinking in Systems",
        author: "Donella Meadows",
        img: "https://images-na.ssl-images-amazon.com/images/I/61npQHfWgAL.jpg",
    },
    "Why We Sleep: Unlocking the Power of Sleep and Dreams": {
        title: "Why We Sleep: Unlocking the Power of Sleep and Dreams",
        author: "Matthew Walker",
        img: "https://images-na.ssl-images-amazon.com/images/I/81w6RZ6xm1L.jpg"
    },
    "The Hitchhiker's Guide to the Galaxy": {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        img: "",
    },
    "Einstein: His Life and Universe": {
        title: "Einstein: His Life and Universe",
        author: "Walter Isaacson",
        img: ""
    },
    "Structures: Or Why Things Don't Fall Down": {
        title: "Structures: Or Why Things Don't Fall Down",
        author: "J.E. Gordon",
        img: "",
    },
    "Superintelligence: Paths, Dangers, Strategies": {
        title: "Superintelligence: Paths, Dangers, Strategies",
        author: "Nick Bostrom",
        img: "",
    },
    "Zero to One: Notes on Startups, or How to Build the Future": {
        title: "Zero to One: Notes on Startups, or How to Build the Future",
        author: "Peter Thiel",
        img: "",
    },
    },
    'Why We Sleep: Unlocking the Power of Sleep and Dreams': {
        title: 'Why We Sleep: Unlocking the Power of Sleep and Dreams',
        author: 'Matthew Walker',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81w6RZ6xm1L.jpg'
    }
}

const persons:People = {
    "Tobias Lütke" : {
        name: "Tobias Lütke",
        img: "https://avatars2.githubusercontent.com/u/347?s=400&v=4",
        description: "Tobias Lütke (born 1980) is the German-born founder and CEO of Shopify, a commerce company based in Ottawa, Canada. He has served on the core team of the Ruby on Rails framework and has created open source libraries such as Active Merchant.",
        company: "Shopify",
        books: titlesToBooks(["Mindset", "Thinking in Systems", "Why We Sleep: Unlocking the Power of Sleep and Dreams"]), 
    },
    "Elon Musk" : {
        name: "Elon Musk",
        img: "https://amp.businessinsider.com/images/5b7440dcb354cd32108b5396-750-563.jpg",
        description: "South African entrepreneur Elon Musk is known for founding Tesla Motors and SpaceX, which launched a landmark commercial spacecraft in 2012.",
        company: "Tesla Motors & SpaceX",
        books: titlesToBooks(["The Hitchhiker's Guide to the Galaxy", "Einstein: His Life and Universe", "Structures: Or Why Things Don't Fall Down", "Superintelligence: Paths, Dangers, Strategies", "Zero to One: Notes on Startups, or How to Build the Future",]), 
    },
    }
}


const shelf:Shelf = {
    people: namesToPeople(['Tobias Lütke','Tobias Lütke','Tobias Lütke','Tobias Lütke','Tobias Lütke'])
}

export default shelf