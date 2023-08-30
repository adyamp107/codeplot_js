const getHomeButton = document.getElementById('home-button');
const getAboutUsButton = document.getElementById('about-us-button');
const getStartedButton = document.getElementById('get-started-button');

const getHomeBorder = document.getElementById('home-border');
const getAboutUsBorder = document.getElementById('about-us-border');


getHomeButton.addEventListener('pointerenter', () => {
    getHomeBorder.style.width = '100%';
});

getHomeButton.addEventListener('pointerleave', () => {
    getHomeBorder.style.width = '0';
});

getHomeButton.addEventListener('click', () => {
    window.location.href = '../index.html';
});

getAboutUsButton.addEventListener('pointerenter', () => {
    getAboutUsBorder.style.width = '100%';
});

getAboutUsButton.addEventListener('pointerleave', () => {
    getAboutUsBorder.style.width = '0';
});

getStartedButton.addEventListener('click', () => {
    window.location.href = '../chat/index.html';
});

