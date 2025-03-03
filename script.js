function fetchQuote() {
    fetch("https://api.quotable.io/random") // No tags, just a random quote
        .then(response => response.json())
        .then(data => {
            document.getElementById("quote").innerText = `"${data.content}" - ${data.author}`;
        })
        .catch(error => {
            console.error("Error fetching quote:", error);
            document.getElementById("quote").innerText = "Could not fetch a quote. Try again!";
        });
}
