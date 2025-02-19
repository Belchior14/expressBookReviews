const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  
  return res.status(300).json(books);
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
 let isbnNumber = req.params.isbn

 let book = books[isbnNumber];

 return res.status(300).json(book);
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here

  let filterAuths = {}

  let author = req.params.author;

   for (const key in books) {
        if (books[key].author === author) {
            filterAuths[key] = books[key];
        }
    }


  
  return res.status(300).json({filterAuths});
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here

  let filterTitles = {}

  let title = req.params.title;

   for (const key in books) {
        if (books[key].title === title) {
            filterTitles[key] = books[key];
        }
    }


  

  return res.status(300).json({filterTitles});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {

    let isbnNumber = req.params.isbn

    let book = books[isbnNumber].reviews;


  //Write your code here
  return res.status(300).json({book});
});

module.exports.general = public_users;
