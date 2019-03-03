import {Shelf, Person, People, Book, Books} from './types'
import library from './books'

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
        books: titlesToBooks(['Zero to One: Notes on Startups, or How to Build the Future',
        'Ender’s Game',
        'Why Nations Fail: The Origins of Power, Prosperity, and Poverty',
        'Genome: The Autobiography of a Species in 23 Chapters',
        'Portfolios of the Poor: How the World’s Poor Live on $2 a Day',
        'Orwell’s Revenge: The 1984 Palimpsest',
        'Rational Ritual: Culture, Coordination, and Common Knowledge',
        'The Muqaddimah',
        'The Player Of Games',
        'The Beginning of Infinity: Explanations That Transform the World',
        'World Order',
        'The Idea Factory: Bell Labs and the Great Age of American Innovation',
        'William James: Writings 1902-1910',
        'The Better Angels of Our Nature: Why Violence Has Declined',
        'The Three-Body Problem',
        'Gang Leader for a Day: A Rogue Sociologist Takes to the Streets',
        'Energy: A Beginner’s Guide',
        'The Structure of Scientific Revolutions']),
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
    },
    "Warren Buffett" : {
        name: "Warren Buffett",
        img: "https://cdn-images-1.medium.com/max/1200/1*2Frkle0S00XNwxT6v6EcBg.jpeg"
        description: 'Known as the "Oracle of Omaha," Warren Buffett is an investment guru and one of the richest and most respected businessmen in the world.',
        company: "Berkshire Hathaway",
        books: titlesToBooks(['Mastering the Market Cycle: Getting the Odds on Your Side',
        'The Essays of Warren Buffett: Lessons for Corporate America',
        'Nuclear Terrorism',
        'Take on the Street: How to Fight for Your Financial Future',
        'First a Dream',
        'DREAM BIG',
        'The Most Important Thing Illuminated: Uncommon Sense for the Thoughtful Investor',
        'Poor Charlie’s Almanack: The Wit and Wisdom of Charles T. Munger',
        'The Little Book of Common Sense Investing: The Only Way to Guarantee Your Fair Share of Stock Market Returns',
        'Essays in Persuasion',
        'Where Are the Customers’ Yachts?: or A Good Hard Look at Wall Street',
        'The Clash of the Cultures: Investment vs. Speculation',
        'The Outsiders: Eight Unconventional CEOs and Their Radically Rational Blueprint for Success',
        'Stress Test: Reflections on Financial Crises',
        'Common Stocks and Uncommon Profits',
        'Security Analysis',
        'The Intelligent Investor',
        'Business Adventures: Twelve Classic Tales from the World of Wall Street']),
    },
    "Tim Ferriss" : {
        name: "Tim Ferriss",
        img: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fbenjaminphardy%2Ffiles%2F2017%2F12%2F1482346021-tim_ferriss_tickets.jpg",
        description: "Tim Ferriss is an author, blogger and motivational speaker known for his books The 4-Hour Workweek and The 4-Hour Body.",
        company: "Personal brand",
        books: titlesToBooks(['Live Your Truth',
        'How to Fail at Almost Everything and Still Win Big: Kind of the Story of My Life',
        'Radical Acceptance: Embracing Your Life With the Heart of a Buddha',
        'Bad Science: Quacks, Hacks, and Big Pharma Flacks',
        'A talk about depression &amp; suicide among entrepreneurs: Tim Ferriss &amp; Peter Attia',
        'Tribe of Mentors: Short Life Advice from the Best in the World',
        'Tools of Titans: The Tactics, Routines, and Habits of Billionaires, Icons, and World-Class Performers',
        'The 4-Hour Chef: The Simple Path to Cooking Like a Pro, Learning Anything, and Living the Good Life',
        'The 4 Hour Body: An Uncommon Guide to Rapid Fat Loss, Incredible Sex and Becoming Superhuman',
        'The 4-Hour Workweek: Escape 9-5, Live Anywhere, and Join the New Rich',
        'Growth Hacker Marketing',
        'Trust Me, I’m Lying: Confessions of a Media Manipulator',
        'The Art of Asking: How I Learned to Stop Worrying and Let People Help',
        'The Year Without Pants: WordPress.com and the Future of Work',
        'The Brief Wondrous Life of Oscar Wao',
        'High Fidelity',
        'Musashi',
        'Discipline Equals Freedom: Field Manual']),
    },
    "Oprah Winfrey" : {
        name: "Oprah Winfrey",
        img: "https://pmcvariety.files.wordpress.com/2015/12/oprah-variety-power-of-women-charity.jpg?w=1000",
        description: "Billionaire media giant and philanthropist Oprah Winfrey is best known for hosting her own internationally popular talk show from 1986 to 2011. From there, she launched her own television network, OWN.",
        company: "OWN",
        books: titlesToBooks(['East of Eden',
        'We Were the Mulvaneys',
        'The Story of Edgar Sawtelle',
        'The Pillars of the Earth',
        'The Road',
        'White Oleander',
        'The Good Earth',
        'The Measure of a Man',
        'The Heart Is a Lonely Hunter',
        'The Corrections',
        'The Deep End of the Ocean',
        'One Hundred Years of Solitude',
        'Freedom']),
    },
    "Barack Obama" : {
        name: "Barack Obama",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg",
        description: "Barack Obama was the 44th president of the United States, and the first African American to serve in the office. First elected to the presidency in 2008, he won a second term in 2012.",
        company: "44th US President",
        books: titlesToBooks(['The World as It Is: A Memoir of the Obama White House',
        'Why Liberalism Failed',
        'Warlight: A novel',
        'Things Fall Apart',
        'The Return: Fathers, Sons and the Land in Between',
        'The New Geography of Jobs',
        'In the Shadow of Statues: A White Southerner Confronts History',
        'How Democracies Die',
        'A House for Mr. Biswas',
        'A Grain of Wheat',
        'Futureface: A Family Mystery, an Epic Quest, and the Secret to Belonging',
        'The Broken Ladder: How Inequality Affects the Way We Think, Live, and Die',
        'An American Marriage: A Novel',
        'Washington Black: A novel',
        'There There: A novel',
        'Life 3.0: Being Human in the Age of Artificial Intelligence',
        'The Largesse of the Sea Maiden: Stories',
        'Immigrant, Montana: A novel']),
    },

}


const shelf:Shelf = {
    people: namesToPeople(["Tobias Lütke","Elon Musk", "Jeff Bezos", "Mark Zuckerberg","Bill Gates"])
}

export default shelf