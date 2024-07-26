// script.js
document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chatBox');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');

    function addMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        messageDiv.textContent = content;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
    }

    async function getJoke() {
        try {
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            const jokeData = await response.json();
            return `${jokeData.setup} - ${jokeData.punchline}`;
        } catch (error) {
            return 'Sorry, I couldn\'t fetch a joke at the moment.';
        }
    }

    sendButton.addEventListener('click', async () => {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            userInput.value = '';

            // Fetch a joke and display it
            const joke = await getJoke();
            addMessage(joke, 'bot');
        }
    });

    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });
});
