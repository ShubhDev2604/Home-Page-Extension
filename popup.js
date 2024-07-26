let timerValue = 25 * 60; // 25 minutes in seconds
let timerInterval;
let pomodoroCount = 0; // Initialize the Pomodoro count

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timerValue--;
        document.getElementById('timerDisplay').textContent = formatTime(timerValue);
        if (timerValue === 0) {
            clearInterval(timerInterval);
            // Handle end of Pomodoro (e.g., play a sound, show a notification)
            pomodoroCount++; // Increment the Pomodoro count
            document.getElementById('pomodoroCount').textContent = `Pomodoros completed: ${pomodoroCount}`;
        }
    }, 1000);
}

function stopAndResetTimer() {
    clearInterval(timerInterval);
    timerValue = 25 * 60;
    document.getElementById('timerDisplay').textContent = formatTime(timerValue);
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('reset').addEventListener('click', stopAndResetTimer);
