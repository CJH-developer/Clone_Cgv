
window.onload = function(){
    const btn1 = document.querySelector(".above__member__login");
    const btn2 = document.querySelector(".above__noMember__login");
    const btn3 = document.querySelector(".above__noMember__reserveCheck");
    
    btn1.onclick = function(e){
    
        if(e.currentTarget == btn1){
            btn1.classList.add("active");
            btn2.classList.remove("active");
            btn3.classList.remove("active");
        }
    }
    
    btn2.onclick = function(e){
    
        if(e.currentTarget == btn2){
            btn2.classList.add("active");
            btn1.classList.remove("active");
            btn3.classList.remove("active");
        }
    }
    
    btn3.onclick = function(e){
        
        if(e.currentTarget == btn3){
            btn3.classList.add("active");
            btn1.classList.remove("active");
            btn2.classList.remove("active");
        }
    }
}

