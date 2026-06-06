const randomBtn = document.getElementById("random-btn");
const shareBtn = document.getElementById("share-btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const tagsEl = document.getElementById("tags");

let quotes = [];

async function fetchQuotes() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/3-javascript/challenges/group_1/data/random-quotes.json",
    );
    quotes = await response.json();
    showRandomQuote();
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const item = quotes[randomIndex];

  quoteEl.innerHTML = `"${item.quote}"`;
  authorEl.innerHTML = item.author;

  tagsEl.innerHTML = "";
  item.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.innerHTML = tag;
    tagsEl.appendChild(span);
  });
}

randomBtn.addEventListener("click", showRandomQuote);

fetchQuotes();
