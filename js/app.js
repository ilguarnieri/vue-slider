const app = new Vue({
    el: '#app',
    data: {
        slides: [
            {
                title:'Svezia',
                img:'img/01.jpg',        
                description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis'
            },
            {
                title:'Svizzera',
                img:'img/02.jpg',        
                description:'Lorem ipsum'
            },
            {
                title:'Gran Bretagna',
                img:'img/03.jpg',        
                description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit'
            },
            {
                title:'Germania',
                img:'img/04.jpg',        
                description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam'
            },
            {
                title:'Paradise',
                img:'img/05.jpg',        
                description:'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam'
            }
        ],
        currentIndex: 0,
    }
})







function createElement(el, i){


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