class Carousel{
    constructor(div){
        this.div = div
        this.x = 0
        this.n = 0 
        this.max = parseInt(this.div.scrollWidth/this.div.offsetWidth)     
    }

    next(){
        if( this.n < this.max){
            this.n++
            this.pos = this.n
        }
    }

    prev(){
        if( this.n > 0){
            this.n--
            this.pos = this.n
        }
    }

    set pos(n){ 
        this.n = n
        this.dx = this.n*this.div.offsetWidth 
    }

    set dx(x){
        this.x = x
        this.div.scrollTo(this.x,0)
    }
}

for(i of document.querySelectorAll(".carousel")){
    i.carousel = new Carousel(i)
}

for(i of document.querySelectorAll(".bt-carousel-next")){
    i.addEventListener('click',e=>{
        document.querySelector("#"+e.target.getAttribute('target')).carousel.next()
    })
}

for(i of document.querySelectorAll(".bt-carousel-prev")){
    i.addEventListener('click',e=>{
        document.querySelector("#"+e.target.getAttribute('target')).carousel.prev()
    })
}
