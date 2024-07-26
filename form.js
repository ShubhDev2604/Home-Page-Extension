document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);

    fetch('http://127.0.0.1:5500/send_poll.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('formMessage').textContent = data;
        document.getElementById('formMessage').style.display = 'block';
    })
    .catch(error => {
        document.getElementById('formMessage').textContent = 'There was an error sending your message.';
        document.getElementById('formMessage').style.display = 'block';
        document.getElementById('formMessage').style.color = 'red';
    });
});
