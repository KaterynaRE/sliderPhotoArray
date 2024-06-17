//+ 0.Зробити запит за отриманням даних:
// https://randomuser.me/api/?results=3
//+ 1.Витягнути в окремий масив: picture.large
//+ 2.Відобразити картинки у вигляді слайдера.
//+ 3.Перехід між слайдами має бути плавним.
//+ 4.Слайди мають переходи як барабан

// const promise = fetch('https://randomuser.me/api/?results=3');
// const userI = [];
// function ShowInfo(title, first) {
//     const userInfo = `${title}, ${first}`;
//     userI.push(userInfo);
//     console.log(userInfo);
// }
// function renderUsers(results) {
//     results.forEach(u => {
//         const { title, first } = u.name;
//         ShowInfo(title, first);
//     });
// }
// fetch('https://randomuser.me/api/?results=3')
//     .then((response) => response.json())
//     .then((data) => renderUsers(data.results))
//     .catch((error) => console.log(error));


const promise = fetch('https://randomuser.me/api/?results=3');
const userI = [];

function ShowInfo(large) {
    const userPicture = large;
    userI.push(userPicture);
}
function renderUsers(results) {
    showImageSlides(results);
}
fetch('https://randomuser.me/api/?results=3')
    .then((response) => response.json())
    .then((data) => renderUsers(data.results))
    .catch((error) => console.log(error));

