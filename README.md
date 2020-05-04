### 📚 FounderShelf
There is a wealth of books available that can change your perspecive on life. FounderShelf is the open source view into the currated 'best reads' for the worlds most successful founders! 

Our website is meant to help you see what might have contributed to the success of some of the worlds largest companies and innovative products but it takes work to maintain. If you are interested in the project take a minute to add a recommendation you might have heard recently in a podcast, interview, arcticle, ect.

![image](https://i.ibb.co/mRNJPNt/Screen-Shot-2020-05-04-at-7-01-35-PM.png)



### Want to add a recommendation? 

1. Check if the founder already exists in [founders.json](https://github.com/50w/foundershelf/blob/354adb976b70a415e788664a1be640da0e54f22b/src/content/founders.json) and if not add them!
2. See if the book is in [books.json](https://github.com/50w/foundershelf/blob/e22d1f9a44da54a399873ed42f1460fba00544ba/src/content/books.json) 
  - If it is add your founders name to `recommendations` 
  - If it isnt add the book to the array with your founder in `recommendations`

Founders are `person` type and have a `name`, `img`, `description`, and `company`. 

```
    "name": "Tobias Lütke",
    "img": "https://avatars2.githubusercontent.com/u/347?s=400&v=4",
    "description": "Tobias Lütke (born 1980) is the German-born founder and CEO of Shopify, a commerce company based in Ottawa, Canada. He has served on the core team of the Ruby on Rails framework and has created open source libraries such as Active Merchant.",
    "company": "Shopify"
```

Books are `book` type and have `title`, `author`, `img`, and `recommendations`:

```
    "title": "1984",
    "author": "George Orwell",
    "img": "https://www.theceolibrary.com/wp-content/uploads/2017/08/1984-George-Orwell.jpg",
    "recommendations": ["Steve Jobs"]
```

