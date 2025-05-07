function generatePassword() {
    const length = document.getElementById('length').value;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    document.getElementById('result').textContent = password;
}

function copyTo() {
    const password = document.getElementById('result').textContent;
    if (!password) {
        alert('No password to copy!');
        return;
    }
    navigator.clipboard.writeText(password).then(() => {
        alert('Password copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy password: ', err);
    });
}