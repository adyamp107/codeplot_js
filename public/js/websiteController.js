const getHomeButton = document.getElementById('home-button');
const getAboutUsButton = document.getElementById('about-us-button');
const getStartedButton = document.getElementById('get-started-button');

const getHomeBorder = document.getElementById('home-border');
const getAboutUsBorder = document.getElementById('about-us-border');

const getPythonFeatures = document.getElementById('python-features');
const getPythonFeaturesText = document.getElementById('python-features-text');
const getViewport3 = document.getElementById('viewport-3');


getHomeButton.addEventListener('pointerenter', () => {
    getHomeBorder.style.width = '100%';
});

getHomeButton.addEventListener('pointerleave', () => {
    getHomeBorder.style.width = '0';
});

getAboutUsButton.addEventListener('pointerenter', () => {
    getAboutUsBorder.style.width = '100%';
});

getAboutUsButton.addEventListener('pointerleave', () => {
    getAboutUsBorder.style.width = '0';
});

getStartedButton.addEventListener('click', () => {
    window.location.href = './chat/index.html';
});

getAboutUsButton.addEventListener('click', () => {
    window.location.href = './about/index.html';
});

function layoutSetting() {
    if(window.innerWidth < 750) {
        getPythonFeatures.insertBefore(getPythonFeaturesText, getViewport3);
    } else {
        getPythonFeatures.insertBefore(getViewport3, getPythonFeaturesText);
    }
}

window.addEventListener('resize', () => {
    layoutSetting();
});

layoutSetting();
