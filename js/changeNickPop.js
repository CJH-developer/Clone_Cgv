
function change(){
    window.open("../popup/changeNick.html", "닉네임변경", "width=600, height=600, left=200, top=200 , location=0;");
}

function discount(){

    var wrapper = document.querySelector(".wrapper");

    window.open("../popup/discount.html", "할인정보", "width=700, height=800, left=200, top=200");
    
    window.onload = function(){
        wrapper.classList.style.opacity = "0.1";
    }
    
    
}

