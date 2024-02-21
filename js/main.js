
function changeImage(newSrc){
    var mainImage = document.getElementById("special1");
    mainImage.src = newSrc;
}


window.onload = function(){

    var list = document.querySelector(".list__content");
    var mainTitle = document.querySelector(".mainTitle");
    var subTitle = document.querySelector(".subTitle");


    list.onmouseenter = function(){
        var hideList = document.querySelector(".list__hide__content");
        hideList.classList.add("active");
    }

    list.onmouseleave = function(){
        var hideList = document.querySelector(".list__hide__content");
        hideList.classList.remove("active");
    }

    // 무한 슬라이드 swiper js
    var swiper = new Swiper('.swiper', {
        slidesPerView: 6,
        direction: getDirection(),
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            resize: function () {
            swiper.changeDirection(getDirection());
            },
        },
    });
    
    function getDirection() {
        var windowWidth = window.innerWidth;
        var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
    
        return direction;
    }
    

    var slide1 = document.querySelector(".swiper.swiper1");
    var slide2 = document.querySelector(".swiper.swiper2");

    // 무비차트 / 상영 예정작 클릭 
    mainTitle.onclick = function(){
        event.target.style.color = "black";
        event.target.style.fontWeight = "bold";
        subTitle.firstChild.style.color = "gray"; 
        subTitle.firstChild.style.fontWeight = "normal";
        slide2.style.display = "none";
        slide1.style.display = "block";
        
    }

    subTitle.onclick = function(){
        event.target.style.color = "black";
        event.target.style.fontWeight = "bold"; 
        mainTitle.firstChild.style.color = "gray"; 
        mainTitle.firstChild.style.fontWeight = "normal"; 
        slide2.style.display = "block";
        slide1.style.display = "none";
    }

    // 무한 슬라이드 swiper js
    var swiper = new Swiper('.swiper.swiper__event', {
        slidesPerView: 3,
        direction: getDirection(),
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            resize: function () {
            swiper.changeDirection(getDirection());
            },
        },
    });
    
    function getDirection() {
        var windowWidth = window.innerWidth;
        var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
    
        return direction;
    }

}


