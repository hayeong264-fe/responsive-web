const tabBtn = document.querySelectorAll(".icon-btn li");
const content = document.querySelectorAll(".kdc-box .ch");

tabBtn.forEach(function(btn, index){

    btn.addEventListener("click", function(){

        tabBtn.forEach(function(item){
            item.classList.remove("active");
        });

        this.classList.add("active");

        content.forEach(function(item){
            item.classList.remove("show");
        });

        if(content[index]){
            content[index].classList.add("show");
        }

    });

});