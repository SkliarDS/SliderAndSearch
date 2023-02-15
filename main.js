const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slider__slide');
const dotsBox = slider.querySelector('.slider__dots');
const controls = slider.querySelector('.slider__controls');
let length = slides.length - 1;

controls.addEventListener('click', (e) => {
    showSlide(e);
});
dotsBox.addEventListener('click', (e) => {
    showDots(e);
});

dotsCreate();

function showDots(e){
    let clickElement= e.target;    
    let clickElementIndex = e.target.dataset.dot;    
    let dots = dotsBox.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    clickElement.classList.add('active');

    slides.forEach(slide => {
        slide.classList.remove('active');
    });    
    const activeSlide = slider.querySelector(`[data-slide="${clickElementIndex}"]`);    
    activeSlide.classList.add('active');
};

function showSlide(e){
    let clickElement = e.target;
    let btnAtribut = clickElement.dataset.btn;    
    const currentSlide = slider.querySelector('.active');
    currentSlide.classList.remove('active');
    const currentSlideIndex = +currentSlide.dataset.slide;

    if (btnAtribut == 'next') {
        nextSlideIndex = currentSlideIndex === length  ? 0 : currentSlideIndex + 1; 
    } else {
        nextSlideIndex = currentSlideIndex === 0  ?  slides.length - 1 :   currentSlideIndex - 1; 
    }
    const nextSlide = slider.querySelector(`[data-slide="${nextSlideIndex}"]`);
    nextSlide.classList.add('active');

    let dots = dotsBox.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    const activeDot = dotsBox.querySelector(`[data-dot="${nextSlideIndex}"]`);    
    activeDot.classList.add('active');
};

function dotsCreate(){
    for(i = 0; i < slides.length; i++){
        let dot = document.createElement('span');
        dot.className = "dot";
        dotsBox.insertAdjacentElement('beforeend', dot);    
        dot.setAttribute('data-dot', i);
        slides[i].dataset.slide = i;
        const currentDot = dotsBox.querySelector('[data-dot="0"]');
        currentDot.classList.add('active');
    };
};