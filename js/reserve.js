
window.onload = function(){

    var list = document.querySelectorAll(".line__list");

    for(var i=0; i<list.length; i++){

        list[i].onclick = function(){
            event.target.parentElement.classList.toggle("active");    
        }
    }

    var count__num = document.querySelectorAll(".name__count__num");

    count__num.forEach(function(item){
        item.addEventListener("click", function(){
            var selectedId = this.getAttribute('data-id');

            count__num.forEach(function(otherItem){
                if(otherItem != item){
                    otherItem.classList.remove("active");
                }
            });
            item.classList.toggle('active');
        })
    })

    var bigBtn = document.getElementById("bigBtn");
    var seat = document.querySelector(".below__left__seat");

    bigBtn.onclick = function(){
        seat.classList.toggle("active");
    }
}