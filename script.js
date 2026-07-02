/* ==========================================
   旬彩創作ひまち
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       スクロールアニメーション
    ========================== */

    const fadeItems = document.querySelectorAll(".fade");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:0.2

    });

    fadeItems.forEach(item=>{

        observer.observe(item);

    });




    /* ==========================
       TOPへ戻るボタン
    ========================== */

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 300){

            topBtn.style.display="block";

        }else{

            topBtn.style.display="none";

        }

    });

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });




    /* ==========================
       ヘッダー背景変更
    ========================== */

    const header=document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>80){

            header.style.background="rgba(0,0,0,.95)";
            header.style.padding="12px 8%";

        }else{

            header.style.background="rgba(0,0,0,.75)";
            header.style.padding="18px 8%";

        }

    });




    /* ==========================
       メニューカードアニメーション
    ========================== */

    const cards=document.querySelectorAll(".menu-card");

    cards.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateY(-10px)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="translateY(0px)";

        });

    });




    /* ==========================
       コースカード
    ========================== */

    const course=document.querySelectorAll(".course-card");

    course.forEach(item=>{

        item.addEventListener("mouseenter",()=>{

            item.style.transform="scale(1.03)";

        });

        item.addEventListener("mouseleave",()=>{

            item.style.transform="scale(1)";

        });

    });




    /* ==========================
       ギャラリー画像
    ========================== */

    const gallery=document.querySelectorAll(".gallery-grid img");

    gallery.forEach(photo=>{

        photo.addEventListener("click",()=>{

            window.open(photo.src);

        });

    });




    /* ==========================
       電話ボタン
    ========================== */

    const call=document.querySelector(".call-button");

    call.addEventListener("mouseenter",()=>{

        call.style.opacity="0.9";

    });

    call.addEventListener("mouseleave",()=>{

        call.style.opacity="1";

    });

});

