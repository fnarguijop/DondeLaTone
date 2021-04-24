/* Selectors */
const platesDescription = document.querySelectorAll('.plate-description');

const platesName = document.querySelectorAll('.plate-name');

const platesPrice = document.querySelectorAll('.price');

const platesBuyButton = document.querySelectorAll('.buy-btn');

platesDescription.forEach(function (plateDescription) {
    plateDescription.addEventListener('mouseenter', () => {
        plateDescription.style.transform = 'perspective(500px) translateZ(25px)';
    });
    plateDescription.addEventListener('mouseleave', () => {
        plateDescription.style.transform = 'perspective(0) translateZ(0)';
    });
});

platesName.forEach(function (plateName) {
    plateName.addEventListener('mouseenter', () => {
        plateName.style.transform = 'perspective(500px) translateZ(50px)';
    });
    plateName.addEventListener('mouseleave', () => {
        plateName.style.transform = 'perspective(0) translateZ(0)';
    });
});

platesPrice.forEach(function (platePrice) {
    platePrice.addEventListener('mouseenter', () => {
        platePrice.style.transform = 'perspective(500px) translateZ(50px)';
    });
    platePrice.addEventListener('mouseleave', () => {
        platePrice.style.transform = 'perspective(0) translateZ(0)';
    });
});

platesBuyButton.forEach(function (plateBuyButton) {
    plateBuyButton.addEventListener('mouseenter', () => {
        plateBuyButton.style.transform = 'perspective(500px) translateZ(50px)';
    });
    plateBuyButton.addEventListener('mouseleave', () => {
        plateBuyButton.style.transform = 'perspective(0) translateZ(0)';
    });
});