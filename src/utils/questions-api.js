// Fetch all categories

const apiUrl = "https://opentdb.com/api_category.php";
let categories = [];
let questions = [];

 export async function getCategories() {
   await fetch(apiUrl)
    .then((response) => response.json())
    .then((result) => {
    categories = result.trivia_categories;
    });
    return categories;
}

export async function getInputUser(category="", difficulty="easy", amount="10") {
  if(category = "Any Category"){
  await fetch(`${apiUrl}?amount=${amount}&difficulty=${difficulty}`)
   .then((response) => response.json())
   .then((result) => {
    questions = result;
   });
   return questions;
  }else {
    await fetch(`${apiUrl}?amount=${amount}&difficulty=${difficulty}&category=${category}`)
   .then((response) => response.json())
   .then((result) => {
    questions = result;
   });
   return questions;

  }
}

/**
 * End fetch categories
 * https://opentdb.com/api.php?amount=10
 * https://opentdb.com/api.php?amount=10&category=9&difficulty=medium
 * 
 */
