function toggleImages() {
    const imageContainer = document.getElementById('image-container');
    const thaiMessage = document.getElementById('thai-message');
    if (imageContainer.classList.contains('hidden')) {
        imageContainer.classList.remove('hidden');
        thaiMessage.classList.remove('hidden');
    } else {
        imageContainer.classList.add('hidden');
        thaiMessage.classList.add('hidden');
    }

}