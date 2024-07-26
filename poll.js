document.addEventListener('DOMContentLoaded', () => {
    const pollForm = document.getElementById('pollForm');
    const formMessage = document.getElementById('formMessage');

    pollForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(pollForm);

        fetch('http://127.0.0.1:5500/send_poll.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(result => {
            formMessage.innerText = result;
            formMessage.style.display = 'block';
            pollForm.reset();
        })
        .catch(error => {
            formMessage.innerText = 'There was an error sending your submission. Please try again later.';
            formMessage.style.color = 'red';
            formMessage.style.display = 'block';
        });
    });
});
