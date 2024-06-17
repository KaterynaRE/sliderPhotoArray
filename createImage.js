function createImage(url, photoNumber) {
    const div = document.createElement('div');
    div.classList.add(`mySlides`,`mySlides${photoNumber}`);

    const img = document.createElement('img');
    img.setAttribute('src', url);
    img.setAttribute('alt', 'photo');

    img.onerror = function () {
        img.remove();
        const textFallback = document.createElement('div');
        textFallback.classList.add('card-text-fallback');
        textFallback.innerText = 'Image not available';
        div.appendChild(textFallback);
    };

    div.appendChild(img);
    return div;
}







