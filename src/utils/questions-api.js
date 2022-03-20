// Fetch all categories
const apiCategoriesUrl = "https://opentdb.com/api_category.php";
let categories = [];

 export async function getCategories() {
   await fetch(apiCategoriesUrl)
    .then((response) => response.json())
    .then((result) => {
    categories = result.trivia_categories;
    });
    return categories;
}

//Fetch questions based on given parameters
let questions = [];

export async function getQuestions(apiQuestionsUrl) {
  await fetch(apiQuestionsUrl)
   .then((response) => response.json())
   .then((result) => {
    questions = result.results;
   });
   return questions;
  }