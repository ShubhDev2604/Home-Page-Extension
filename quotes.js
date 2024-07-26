window.addEventListener('load', fetchQuote);

function fetchQuote() {
    fetch('https://recite.onrender.com/api/random/quote-from-db')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('quote').innerText = `"${data.quote}"`;
            document.getElementById('book').innerText = `Book: ${data.book}`;
            document.getElementById('author').innerText = `- ${data.author}`;
        })
        .catch(error => {
            document.getElementById('quote').innerText = 'Sorry, something went wrong. Please try again later.';
            document.getElementById('book').innerText = '';
            document.getElementById('author').innerText = '';
            console.error('Error fetching quote:', error);
        });
}
