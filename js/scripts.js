document.querySelector('form').addEventListener('submit', function(event) {
    const input = document.querySelector('input[name="user-input"]');
    if (input.value.includes('<') || input.value.includes('>')) {
        event.preventDefault();
        alert('Ungültige Eingabe!');
    }
});
