async function fetchQuote() {
    let keyword = document.getElementById("keyword").value;
    let apiKey = "YOUR_OPENAI_API_KEY";  // 🔹 Replace with your actual API key

    let response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: `Give me a quote about ${keyword}` }],
            max_tokens: 50
        })
    });

    let data = await response.json();
    document.getElementById("quote").innerText = data.choices[0].message.content || "No quote found!";
}
