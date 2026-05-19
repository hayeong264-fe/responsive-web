const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();


console.log(today);
const popupWrap = document.querySelector(".popup-wrap");
const closeBtn = popupWrap.querySelector(".close-btn");
const checkBox = popupWrap.querySelector("input");
const label = popupWrap.querySelector("label");

// 닫기 버튼 클릭
closeBtn.addEventListener("click",function(){
    if(checkBox.checked){
        const endDate = new Date(year, month, date, 23,59,59 );
        localStorage.setItem("popupEnd",endDate);
    }
    popupWrap.style.display = "none";
})

// 체크박스 off/on -change
checkBox.addEventListener("change", function(){
    console.log(checkBox.checked); // true 또는 false
    if(checkBox.checked){
        label.classList.add("check");
    }else{
        label.classList.remove("check");
    }
}) 

const popupEnd = localStorage.getItem("popupEnd");
    if(popupEnd){
    // 저장된 시간
    const endDate = new Date(popupEnd);

    if(today < endDate){
        popupWrap.style.display = "none";
    }
}