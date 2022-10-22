var slides = document.getElementsByClassName('carousel-item');
// console.log(slides); // HTMLCollection
var dots = document.querySelectorAll('.dot');
// console.log(dots); // NodeList


var currslide = 1;

// Previous Btn
document.querySelector('#prev').addEventListener('click',function(){
    carousel(currslide -= 1);
});

// Next Btn
document.querySelector('#next').addEventListener('click',function(){
    carousel(currslide += 1);
});

for(var q = 0; q < dots.length; q++){
    // console.log(q);

    dots[q].addEventListener('click',function(){
        // console.log(this.getAttribute('data-bs-slide-to'));

        // carousel(this.getAttribute('data-bs-slide-to'));

        currslide = this.getAttribute('data-bs-slide-to');
        carousel(currslide);
        
    });
}

carousel(currslide);


function carousel(slidenum){

    var x,y;

    for(x = 0; x < slides.length; x++){
        slides[x].style.display = "none";
    }

    for(y = 0; y < dots.length; y++){
        dots[y].classList.remove("active");
        // dots[y].className = "dot";
        // dots[y].className = dots[y].className.replace("active","");
    }

    if(slidenum > slides.length){
        currslide = 1;
    }else if(slidenum < 1){
        currslide = 3;
    }

    // console.log(currslide);

    slides[currslide-1].style.display = "block";    

    // dots[currslide-1].className = "dot active";
    // dots[currslide-1].className += " active";
    dots[currslide-1].classList.add("active");
}
