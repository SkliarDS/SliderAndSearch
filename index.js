
function Slider(slider, slides, dotsBox, controls){
    this.slider = slider,
    this.slides = slides, 
    this.dotsBox = dotsBox,
    this.controls = controls,
    this.dotsCreate = function(){
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
    this.showSlide = function(){
        controls.addEventListener('click', (e) => {
            let clickElement = e.target;
            if(clickElement.hasAttribute('data-btn')){
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
        });
    };
    this.showDots = function(){
        dotsBox.addEventListener('click', (e) => {
            let clickElement= e.target;
            if(clickElement.hasAttribute('data-dot')){
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
        });
    }
};



const sliderMy = new Slider(
    slider = document.querySelector('.slider'),
    slides = slider.querySelectorAll('.slider__slide'),
    dotsBox = slider.querySelector('.slider__dots'),
    controls = slider.querySelector('.slider__controls'),
    length = slides.length - 1,
);

sliderMy.dotsCreate();
sliderMy.showSlide();
sliderMy.showDots();


const searcBlocks = document.querySelectorAll('.search');
searcBlocks.forEach(searchBlock => {
    const search = searchBlock.querySelector('#search');
    const listItems = searchBlock.querySelectorAll('.list li');

    search.addEventListener('keyup', function(){
        let searchText = search.value.trim().toLowerCase();
        listItems.forEach(item => {
            let text = item.textContent.toLowerCase();
            if(searchText !== ''){
                if(text.search(searchText) == -1){
                    item.classList.add('hide');
                } else {
                    item.classList.remove('hide');
                }
            } else {
                item.classList.remove('hide');
            }

        });
    });
});
















