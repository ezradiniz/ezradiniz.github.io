
const body = document.querySelector('body');
setInterval(() => {
  fetch('https://picsum.photos/1920/1080/?random')
    .then(photo => {
      body.style.backgroundImage = `url('${photo.url}')`;
    });
}, 6000);
