//     // 현재 시간 < 종료 시간 (2026-5-15,23,59,59)
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = today.getMonth();
//     const date = today.getDate();


//         console.log(today);
//     const popupWrap = document.querySelector(".popup-wrap");
//     const closeBtn = popupWrap.querySelector(".close-btn");
//     const checkBox = popupWrap.querySelector("input");
//     const label = popupWrap.querySelector("label");

// // 닫기 버튼 클릭
// closeBtn.addEventListener("click",function(){
//     // if(checkBox.checked){
//     //     localStorage.setItem("hidePopup","yes"); // 체크o
//     // }else{
//     //     localStorage.setItem("hidePopup","no"); // 체크x
//     // }

//     //
//     if(checkBox.checked){
//         // 오늘 팝업이 종료되는 시간
//         const endDate = new Date(year, month, date, 23,59,59 );

//         // 로컬스토리지에 저장
//         localStorage.setItem("popupEnd",endDate);
    
//     }
//     popupWrap.style.display = "none";
// })

// // 체크박스 off/on -change
// checkBox.addEventListener("change", function(){
//     console.log(checkBox.checked); // true 또는 false
//     if(checkBox.checked){
//         label.classList.add("check");
//     }else{
//         label.classList.remove("check");
//     }
// }) 

// // // 로컬스토리지에 저장된 값을 기준으로 조건 생성(팝업 보이게/안보이게)
// //     const hidePopup = localStorage.getItem("hidePopup");
// //     console.log(hidePopup); // null, yes or no

// //     if(hidePopup && hidePopup == "yes"){
// //         popupWrap.style.display = "none";
// //     }

//     const popupEnd = localStorage.getItem("popupEnd");
//     if(popupEnd){
//         // 저장된 시간
//        const endDate = new Date(popupEnd);

//         if(today < endDate){
//             popupWrap.style.display = "none";
//         }
//     }