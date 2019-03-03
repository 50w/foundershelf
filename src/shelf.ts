import {Shelf, Person, People, Book, Books} from './types'
import Library from './books'

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
    "Jeff Bezos" : {
        name: "Jeff Bezos",
        img: "https://specials-images.forbesimg.com/imageserve/5b8eb1b3a7ea434b99d54b36/960x0.jpg?fit=scale",
        description: "American entrepreneur Jeff Bezos is the founder and chief executive officer of Amazon.com and owner of 'The Washington Post.' His successful business ventures have made him one of the richest people in the world.",
        company: "Amazon & The Washington Post",
        books: titlesToBooks(["The Remains of the Day", "Built to Last: Successful Habits of Visionary Companies", "Creation: Life and How to Make It", "Good to Great: Why Some Companies Make the Leap … and Others Don't", "The Innovator's Dilemma", "Sam Walton: Made in America", "The Mythical Man-Month"]), 
    },
    "Mark Zuckerberg" : {
        name: "Mark Zuckerberg",
        img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/05/13/0.jpg?w968",
        description: "",
        company: "Facebook",
        books: titlesToBooks([]),
    },
    "Bill Gates" : {
        name: "Bill Gates",
        img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/05/13/0.jpg?w968",
        description: "",
        company: "Microsoft",
        books: titlesToBooks([]),
    }
}


const shelf:Shelf = {
    people: namesToPeople(["Tobias Lütke","Elon Musk", "Jeff Bezos", "Mark Zuckerberg","Tobias Lütke","Elon Musk", "Jeff Bezos", "Mark Zuckerberg", "Tobias Lütke","Elon Musk", "Jeff Bezos", "Mark Zuckerberg"])
}

export default shelf