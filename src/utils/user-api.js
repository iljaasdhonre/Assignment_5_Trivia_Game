//Fetch funcions for users

// Fetch all categories
const apiUrl = "https://opentdb.com/api_category.php";
let categories = [];

 export async function getCategories() {
   await fetch(apiUrl)
    .then((response) => response.json())
    .then((result) => {
    categories = result.trivia_categories;
    });
    return categories;
}

/**
 * 
 * End fetch categories
 * 
 **/