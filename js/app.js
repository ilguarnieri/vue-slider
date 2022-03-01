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
        clock: undefined,
    },
    methods: {
        click_pre: function(){
            this.currentIndex--;
            if(this.currentIndex < 0){this.currentIndex = this.slides.length - 1};
        },

        click_next: function(){
            this.currentIndex++;
            if(this.currentIndex > this.slides.length -1){this.currentIndex = 0};
        },

        thumb_click: function(i){
            this.currentIndex = i;
        },
        stop_play: function(){
            clearInterval(this.clock);
        },
        start_play: function(){
            this.clock = setInterval(this.click_next, 3000);
        }
    },
    mounted(){
        this.start_play();
    }
})

