document.querySelectorAll('.accord-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const icon=button.parentElement.previousSibling

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            
        }
    });
});
