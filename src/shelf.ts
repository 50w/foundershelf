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
        description: "Mark Zuckerberg is co-founder and CEO of the social-networking website Facebook, as well as one of the world's youngest billionaires.",
        company: "Facebook",
        books: titlesToBooks([]),
    },
    "Bill Gates" : {
        name: "Bill Gates",
        img: "https://yt3.ggpht.com/a-/AAuE7mD8j66Gv5r4oLf48Ij7PMljbIm_-GrASQ-CSA=s900-mo-c-c0xffffffff-rj-k-no",
        description: "Entrepreneur Bill Gates founded the world's largest software business, Microsoft, with Paul Allen, and subsequently became one of the richest men in the world.",
        company: "Microsoft",
        books: titlesToBooks(['Buffett: The Making of an American Capitalist',
        'Blitzscaling: The Lightning-Fast Path to Building Massively Valuable Companies',
        'The Headspace Guide to Meditation and Mindfulness: How Mindfulness Can Change Your Life in Ten Minutes a Day',
        'Army of None: Autonomous Weapons and the Future of War',
        'Educated: A Memoir',
        'The Magic of Reality: How We Know What’s Really True',
        'How to Lie with Statistics',
        'On Immunity: An Inoculation',
        'Collapse: How Societies Choose to Fail or Succeed',
        'Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World With OKRs',
        'Winners Take It All: The Elite Charade of Changing the World',
        'Enlightenment Now: The Case for Reason, Science, Humanism, and Progress',
        '21 Lessons for the 21st Century',
        'Bad Blood: Secrets and Lies in a Silicon Valley Startup',
        'Origin Story: A Big History of Everything',
        'Lincoln in the Bardo',
        'Everything Happens for a Reason and Other Lies I’ve Loved',
        'Factfulness: Ten Reasons We’re Wrong about the World–and Why Things Are Better Than You Think']),
    }
}


const shelf:Shelf = {
    people: namesToPeople(["Tobias Lütke","Elon Musk", "Jeff Bezos", "Mark Zuckerberg","Bill Gates"])
}

export default shelf