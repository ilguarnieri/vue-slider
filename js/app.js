const slides = [
    {
        title:'Svezia',
        img:'img/01.jpg',        
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis',
        active: true
    },
    {
        title:'Svizzera',
        img:'img/02.jpg',        
        description:'Lorem ipsum',
        active: false
    },
    {
        title:'Gran Bretagna',
        img:'img/03.jpg',        
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
        active: false
    },
    {
        title:'Germania',
        img:'img/04.jpg',        
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam',
        active: false
    },
    {
        title:'Paradise',
        img:'img/05.jpg',        
        description:'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam',
        active: false
    }
];

const slide_wrapper = document.querySelector('.slide-wrapper');
const thumbnails = document.querySelector('.thumbnails');
const btn_up = document.querySelector('.up');
const btn_down = document.querySelector('.down');
let activeIndex = 0;

slides.forEach(createElement);

function createElement(el, i){

    const {title, img, description, active} = el;

    //creazione div slide
    const slide_item = document.createElement('div');
    slide_item.classList.add('slide-item');
    //creazione inserimento img
    const fix_img = document.createElement('img');
    fix_img.src = img;
    //creazione div text
    const slide_text = document.createElement('div');
    slide_text.classList.add('slide-text');
    const tag_title = document.createElement('h1');
    tag_title.innerHTML = title;
    const tag_descr = document.createElement('h3');
    tag_descr.innerHTML = description;
    //append slide
    slide_text.append(tag_title, tag_descr);
    slide_item.append(fix_img, slide_text);
    slide_wrapper.append(slide_item);

    //creazione ed inserimento delle preview
    const thumb_item = document.createElement('div');
    thumb_item.classList.add('thumb-item');
    //creazione inserimento img
    const pre_img = document.createElement('img');
    pre_img.src = img;
    //append thumb
    thumb_item.append(pre_img);
    thumbnails.append(thumb_item);

    if(active){
        slide_item.classList.add('active');
        thumb_item.classList.add('active');
    }

    //click sulle thumbnail
    thumb_item.addEventListener('click', function(){

        controllActive(activeIndex);
        activeIndex = i;
        controllActive(activeIndex);
    })
}

//creazione array
const slide_active = [...document.getElementsByClassName('slide-item')];
const thumb_active = [...document.getElementsByClassName('thumb-item')];

//click up
btn_up.addEventListener('click', function(){

    controllActive(activeIndex);
    activeIndex--;
    if(activeIndex < 0){activeIndex = slide_active.length - 1}
    controllActive(activeIndex);
})

//click down
btn_down.addEventListener('click', function(){

    controllActive(activeIndex);    
    activeIndex++;
    if(activeIndex > slide_active.length - 1){activeIndex = 0}
    controllActive(activeIndex);
})

function controllActive(activeIndex){
    slide_active[activeIndex].classList.toggle('active');
    thumb_active[activeIndex].classList.toggle('active');
}