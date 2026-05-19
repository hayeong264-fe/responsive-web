const libraryCh = document.querySelector("#librarych");
const libraryItem = libraryCh.querySelectorAll("li");

libraryCh.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        libraryItem.forEach(function (item) {
            item.classList.remove("show", "active");
        });
        e.target.classList.add("show", "active");
    }

    this.classList.toggle("open");
    const isOpen = this.classList.contains("open");
    
    libraryItem.forEach(function (item) {
        if (isOpen) {
            item.style.display = "block";
        } else {
            if (!item.classList.contains("show")) {
                item.style.display = "none";
            }
        }
    });
});

const libraryName = document.querySelector(".library-name");
const libraryContent = libraryName.querySelectorAll("li");

libraryName.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        libraryContent.forEach(function (item) {
            item.classList.remove("show");
        });
        e.target.classList.add("show");
    }

    this.classList.toggle("open");

    const isOpen = this.classList.contains("open");
    
    libraryContent.forEach(function (item) {
        if (isOpen) {
            item.style.display = "block";
        } else {
            if (!item.classList.contains("show")) {
                item.style.display = "none";
            }
        }
    });
});

const pagingBtn = document.querySelectorAll(".paging-box a");

pagingBtn.forEach(function(btn){

    btn.addEventListener("click", function(e){

        e.preventDefault();

        pagingBtn.forEach(function(item){
            item.classList.remove("active");
        });

        btn.classList.add("active");
    });
});






        

