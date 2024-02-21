window.onload = function(){

    var click1 = document.querySelector(".movie__select__reserve");
    var click2 = document.querySelector(".movie__select__orderBy");

    click1.onclick = function(){
        event.target.style.color = "black";
        event.target.style.fontWeight = "bold";
        click2.firstChild.style.color = "gray";
        click2.firstChild.style.fontWeight = "normal";
    }

    click2.onclick = function(){
        event.target.style.color = "black";
        event.target.style.fontWeight = "bold";
        click1.firstChild.style.color = "gray";
        click1.firstChild.style.fontWeight = "normal";
    }

    ///////////////////////////////////////////////////////////////////////

    var click3 = document.querySelector(".theator__all");
    var click4 = document.querySelector(".theator__art__house");
    var click5 = document.querySelector(".theator__special");

    click3.onclick = function(){
        event.target.style.fontWeight = "bold";
        event.target.parentElement.style.border = "3px solid black";
        event.target.parentElement.style.borderBottom = "none";
        click4.firstChild.style.fontWeight = "normal";
        click4.style.border = "1px solid gray";
        click4.style.borderBottom = "3px solid black"
        click5.firstChild.style.fontWeight = "normal";
        click5.style.border = "1px solid gray";
        click5.style.borderBottom = "3px solid black";
    }

    click4.onclick = function(){
        event.target.style.fontWeight = "bold";
        event.target.parentElement.style.border = "3px solid black";
        event.target.parentElement.style.borderBottom = "none";
        click3.firstChild.style.fontWeight = "normal";
        click3.style.border = "1px solid gray";
        click3.style.borderBottom = "3px solid black"
        click5.firstChild.style.fontWeight = "normal";
        click5.style.border = "1px solid gray";
        click5.style.borderBottom = "3px solid black"
    }

    click5.onclick = function(){
        event.target.style.fontWeight = "bold";
        event.target.parentElement.style.border = "3px solid black";
        event.target.parentElement.style.borderBottom = "none";
        click3.firstChild.style.fontWeight = "normal";
        click3.style.border = "1px solid gray";
        click3.style.borderBottom = "3px solid black"
        click4.firstChild.style.fontWeight = "normal";
        click4.style.border = "1px solid gray";
        click4.style.borderBottom = "3px solid black"
    }


    var list = document.querySelectorAll(".body__date__day .date__day");

    list.forEach(function(item){
        item.addEventListener("click", function(){
            var selectedId = this.getAttribute('data-id');

            list.forEach(function(otherItem){
                if(otherItem != item){
                    otherItem.classList.remove("active");
                }
            });
            item.classList.toggle('active');
        })
    })

}