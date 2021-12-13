"use strict";

let wrapper1 = document.getElementsByClassName('wrapper1')[0],
    wrapper2 = document.getElementsByClassName('wrapper2')[0],
    wrapper3 = document.getElementsByClassName('wrapper3')[0];
    
    
wrapper1.addEventListener('click', function (event) { 
    // если обработчик задан стрелкой, то this == window. в таком случае можновоспользоваться event.currentTarget
    console.log(event.currentTarget);
    // console.log(event.target);

    console.log(this);
    // event.target.classList.add('add');
    event.currentTarget.classList.add('add'); 
    // console.log(event.clientX);
    // console.log(event.clientY);
    event.stopPropagation(); // останавливает всплытие события после себя. то есть на нем событие происходит, но не всрлывет дальше
}, {once: true} /* данное свойство позволяет сразу же удалить обработчик после выполнения */);


wrapper2.addEventListener('click', function(event) {
    // event.stopPropagation();
    // console.log(event.target);
    console.log(this);
    // event.target.classList.add('add'); 
    this.classList.add('add'); 
});



// Делегирование
// wrapper3.addEventListener('click', function(event) {
    // if (event.target && event.target.classList.contains('wrapper1')) {
    //    event.target.classList.add('add');
    //    this.style.backgroundColor = 'yellow';  
    // }
    // console.log(event.target);
    // console.log(this);
    
    // this.classList.add('add'); 
// });


