import {Shelf, Person, People, Book, Books} from './types'
import persons from './people'


function namesToPeople(arr: string[]):Person[] {
    const people: Person[] = []
    arr.forEach(element => {
        persons[element] ? people.push(persons[element]) : null;
    });
    return people
}


const shelf:Shelf = {
    people: namesToPeople(["Tobias Lütke","Elon Musk", "Jeff Bezos", "Mark Zuckerberg","Bill Gates", "Warren Buffett", "Tim Ferriss", "Oprah Winfrey", "Barack Obama", "Steve Jobs", "Marissa Mayer", "Sheryl Sandberg", "Tony Robbins", "Jack Dorsey", "Casey Neistat"])
}

export default shelf