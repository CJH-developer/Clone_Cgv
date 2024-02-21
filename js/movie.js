window.onload = function(){

    var btn1 = document.querySelector(".header__content__special");
    var btn2 = document.querySelector(".header__content__movie");
    var btn3 = document.querySelector(".header__content__club");
    var btn4 = document.querySelector(".header__content__theator");
    var btn5 = document.querySelector(".header__content__discount");
    
    btn2.firstChild.style.color="red";

    btn1.onclick = function(){
        event.target.style.color = "red";
        event.target.style.fontWeight = "bold";
        location.href='event.html';

        btn2.firstChild.style.color = "gray";
        btn3.firstChild.style.color = "gray";
        btn4.firstChild.style.color = "gray";
        btn5.firstChild.style.color = "gray";
    }

    btn2.onclick = function(){
        event.target.style.color = "red";
        event.target.style.fontWeight = "bold";
        location.href='movie.html';

        btn1.firstChild.style.color = "gray";
        btn3.firstChild.style.color = "gray";
        btn4.firstChild.style.color = "gray";
        btn5.firstChild.style.color = "gray";
    }

    btn3.onclick = function(){
        event.target.style.color = "red";
        event.target.style.fontWeight = "bold";
        location.href="memberShip.html";

        btn1.firstChild.style.color = "gray";
        btn2.firstChild.style.color = "gray";
        btn4.firstChild.style.color = "gray";
        btn5.firstChild.style.color = "gray";
    }

    btn4.onclick = function(){
        event.target.style.color = "red";
        event.target.style.fontWeight = "bold";
        location.href="theator.html";

        btn1.firstChild.style.color = "gray";
        btn2.firstChild.style.color = "gray";
        btn3.firstChild.style.color = "gray";
        btn5.firstChild.style.color = "gray";
    }

    btn5.onclick = function(){
        event.target.style.color = "red";
        event.target.style.fontWeight = "bold";
        location.href="discount.html";

        btn1.firstChild.style.color = "gray";
        btn2.firstChild.style.color = "gray";
        btn3.firstChild.style.color = "gray";
        btn4.firstChild.style.color = "gray";
    }

}




