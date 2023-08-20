const url = 'https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/2/elon-musk-smoking-elon-musk.jpg';
const pic = document.querySelector('.image');

const promiseURL = (url) => {
    return new Promise((resolve, reject) => {
        const image = new Image();

        image.onload = function() {
            resolve(image);
        }
        image.onerror = function() {
            reject(new Error('Где то ты накосячил!'));
        }

        image.src = url;
    })
}
promiseURL(url)
  .then((image) => {
    pic.innerHTML = `<img src="${image.src}">`;
  })
  .catch((error) => {
    console.error('Ошибка изображения:', error);
  });

