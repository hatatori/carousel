# Carousel

```Exemplo```
https://hatatori.github.io/carousel/carousel.html

```Explicação```
https://hatatori.github.io/carousel

## CDN
```html
<link rel="stylesheet" href="https://hatatori.github.io/carousel/carousel.css">
<script src="https://hatatori.github.io/carousel/carousel.js"></script>
```

## Buttons

O botão deve conter o atributo ```target```, pois ele referencia ao ```id``` do carousel referente.
```html 
<button target="carousel" class="bt-carousel-prev"> ◄ </button> 
<button target="carousel" class="bt-carousel-next"> ► </button> 
```
As classes ```bt-carousel-prev``` e  ```bt-carousel-next``` indicam a ordem.

Os botões devem conter as classes ```class="bt-carousel-prev"``` e ```class="bt-carousel-next"```.

## Estrutura

Uma classe ```item``` é uma div inteira que avança para o lado.

```html
<button target="test" class="bt-carousel-prev"> ◄ </button> 
<button target="test" class="bt-carousel-next"> ► </button> 

<div class="carousel" id="test">

    <div class="item center"> 
        <div class="carousel-card center">A</div>
        <div class="carousel-card center">B</div>
        <div class="carousel-card center">C</div>
    </div>

    <div class="item center">
        <div class="carousel-card center">D</div>
        <div class="carousel-card center">E</div>
    </div>

</div>
```

# Final
```html
<link rel="stylesheet" href="https://hatatori.github.io/carousel/carousel.css">

<div class="container">
    <button target="carousel" class="bt-carousel-prev">◄</button>
    <div class="carousel" id="carousel">
        <div class="item center">
            <div class="carousel-card center"><img src='imgs/1.jpg'></div>
            <div class="carousel-card center"><img src='imgs/2.jpg'></div>
            <div class="carousel-card center"><img src='imgs/3.jpg'></div>
            <div class="carousel-card center"><img src='imgs/4.jpg'></div>
            <div class="carousel-card center"><img src='imgs/5.jpg'></div>
        </div>
        <div class="item center">
            <div class="carousel-card center"><img src='imgs/6.jpg'></div>
            <div class="carousel-card center"><img src='imgs/7.jpg'></div>
            <div class="carousel-card center"><img src='imgs/8.jpg'></div>
            <div class="carousel-card center"><img src='imgs/9.jpg'></div>
            <div class="carousel-card center"><img src='imgs/10.jpg'></div>
        </div>
        <div class="item center">
            <div class="carousel-card center"><img src='imgs/11.jpg'></div>
            <div class="carousel-card center"><img src='imgs/12.jpg'></div>
            <div class="carousel-card center"><img src='imgs/13.jpg'></div>
            <div class="carousel-card center"><img src='imgs/14.jpg'></div>
            <div class="carousel-card center"><img src='imgs/15.jpg'></div>
        </div>          
    </div>
    <button target="carousel" class="bt-carousel-next">►</button>
</div>

<script src="https://hatatori.github.io/carousel/carousel.js"></script>
```
