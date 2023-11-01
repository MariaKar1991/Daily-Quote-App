// Get references to HTML elements with specific IDs
const quote = document.getElementById("quote");
const author = document.getElementById("author");

// API URL for fetching a random quote
const api_url = "https://api.quotable.io/random";

// Function to fetch a new quote from the specified API URL
async function getquote(url) {
  // Fetch data from the API
  const response = await fetch(url);
  var data = await response.json();

  // Update the inner HTML of quote and author elements with new data
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

// Call the getquote function to display an initial quote on page load
getquote(api_url);

// Function to open a new window for tweeting the current quote and author
function tweet() {
  // Open a new window with a Twitter intent to compose a tweet
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "  ---- by " +
      author.innerHTML,
    "Tweet Window",
    "width=600",
    "height=300"
  );
}
