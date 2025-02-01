async function shortenUrl() {
    let longUrl = document.getElementById("longUrl").value;
    
    if (!longUrl) {
        alert("Please enter a URL!");
        return;
    }

    let apiUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`;

    try {
        let response = await fetch(apiUrl);
        let shortUrl = await response.text();

        document.getElementById("shortenedUrl").innerHTML = `
            Shortened URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a>
        `;
    } catch (error) {
        console.log("Error:", error);
        document.getElementById("shortenedUrl").innerText = "Failed to shorten URL!";
    }
}
