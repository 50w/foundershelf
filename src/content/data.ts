import { Person, Book } from "./types";
import books from "./books.json";
import founders from "./founders.json";

export interface People {
  [key: string]: Person;
}

export interface Recommendations {
  [key: string]: string[];
}

export function getRecommendationByFounder(): Person[] {
  return founders.map((founder: Person) => {
    founder.books = books.filter((book: Book) =>
      book.recommendations.includes(founder.name)
    );
    return founder;
  });
}
