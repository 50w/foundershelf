import { string } from "prop-types";
import {Shelf, Person, People, Book, Books} from './types'


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
    "The Remains of the Day": {
        title: "The Remains of the Day",
        author: "Kazuo Ishiguro",
        img: "https://sc.cnbcfm.com/applications/cnbc.com/resources/files/2017/03/28/71d9G7xwaLL.jpg",
    },
    "Built to Last: Successful Habits of Visionary Companies": {
        title: "Built to Last: Successful Habits of Visionary Companies",
        author: "Jim Collins",
        img: "https://sc.cnbcfm.com/applications/cnbc.com/resources/files/2017/03/28/412OMhMA+lL._SX330_BO1,204,203,200_.jpg",
    },
    "Creation: Life and How to Make It": {
        title: "Creation: Life and How to Make It",
        author: "Steve Grand",
        img: "https://sc.cnbcfm.com/applications/cnbc.com/resources/files/2017/03/28/41Y5MRAJP9L._SX328_BO1,204,203,200_.jpg"
    },
    "Good to Great: Why Some Companies Make the Leap … and Others Don't": {
        title: "Good to Great: Why Some Companies Make the Leap … and Others Don't",
        author: "Jim Collins",
        img: "https://sc.cnbcfm.com/applications/cnbc.com/resources/files/2017/03/28/41VrxaCVU2L.jpg"
    },
    "The Innovator's Dilemma": {
        title: "The Innovator's Dilemma",
        author: "Clayton Christensen",
        img: "https://sc.cnbcfm.com/applications/cnbc.com/resources/files/2016/09/28/TB-3_The_Innovators_Dilemma.jpg",
    },
    "Sam Walton: Made in America": {
        title: "Sam Walton: Made in America",
        author: "Sam Walton",
        img: "https://sc.cnbcfm.com/applications/cnbc.com/resources/files/2017/03/28/51hdHY1gTSL._SX299_BO1,204,203,200_.jpg"
    },
    "The Mythical Man-Month": {
        title: "The Mythical Man-Month",
        author: "Frederick P. Brooks, Jr.",
        img: "https://sc.cnbcfm.com/applications/cnbc.com/resources/files/2017/03/28/51XnDL5KC+L._SX334_BO1,204,203,200_.jpg"
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
    }
}


const shelf:Shelf = {
    people: namesToPeople(["Tobias Lütke","Elon Musk", "Jeff Bezos", "Mark Zuckerberg","Tobias Lütke","Elon Musk", "Jeff Bezos", "Mark Zuckerberg", "Tobias Lütke","Elon Musk", "Jeff Bezos", "Mark Zuckerberg"])
}

export default shelf