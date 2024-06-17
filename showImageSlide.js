function showImageSlides(results) {
    const btnRight = document.getElementById('rightBtn');
    const leftBtn = document.getElementById('leftBtn');
    const container = document.getElementById('slideshow-container');
    let currentIndex = 0;

    results.forEach((u, index) => {
        const largePhotoUrl = u.picture.large;
        const userImageDiv = createImage(largePhotoUrl, index + 1);
        container.appendChild(userImageDiv);
    });

    const slides = container.getElementsByClassName('mySlides');
    //Перевіряємо чи є слайди у контейнері якщо є додаємо клас актів
    if (slides.length > 0) {
        slides[0].classList.add('active');
    }

    btnRight.onclick = function () {
        if (slides.length > 0) {
            //Поточний слайд, індекс якого зберігається в currentIndex, видаляємо клас актів опасіті 0 прозоро
            slides[currentIndex].classList.remove('active');
            //індекс+1, використ оператор модул (%), щоб повернутися до 1 слайду, коли кінець списку слайдів 
            currentIndex = (currentIndex + 1) % slides.length;
            //Новий поточ слайд знов додаємо актів опасіті 1 відімость
            slides[currentIndex].classList.add('active');                
        }
    };
    leftBtn.onclick = function () {
        if (slides.length > 0) {
              slides[currentIndex].classList.remove('active');
              currentIndex = (currentIndex - 1 + slides.length) % slides.length;
              slides[currentIndex].classList.add('active');


            // slides[currentIndex].style.display = 'none';
            // currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            // slides[currentIndex].style.display = 'inline';
        }
    }
}