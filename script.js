function fetchQuote() {
    let keyword = document.getElementById("keyword").value;
    fetch(`https://api.quotable.io/random?tags=${keyword}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("quote").innerText = data.content || "No quote found!";
        })
        .catch(error => console.error("Error fetching quote:", error));
}
