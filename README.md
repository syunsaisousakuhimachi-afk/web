<!DOCTYPE html>
<html lang="ja">
    
<head>
<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width, initial-scale=1.0">

<title>旬彩創作ひまち</title>

<meta name="description"
content="...">

<link rel="stylesheet" href="style.css">
</head>
<body>

<header>

<div class="logo">
<h1>旬彩創作ひまち</h1>
<p>四季を味わう創作和食</p>
</div>

<nav>

<a href="#about">お店について</a>

<a href="#menu">お料理</a>

<a href="#course">宴会コース</a>

<a href="#access">アクセス</a>

<a href="#instagram">Instagram</a>

</nav>

</header>


<section class="hero">

<div class="overlay">

<h2>旬を味わう贅沢な時間</h2>

<p>
愛媛・新居浜で四季折々の旬の食材を楽しめる
創作和食居酒屋
</p>

<a class="reserve-btn" href="tel:0897668755">
📞 電話予約はこちら
</a>
</div>

</section>



<section id="about" class="fade">

<h2>お店について</h2>

<p>

旬彩創作ひまちは、

新鮮な魚介・旬の野菜・厳選した食材を使用した

創作和食を楽しめる居酒屋です。

ご家族でのお食事から接待、

宴会まで幅広くご利用いただけます。

</p>

</section>



<section id="menu" class="fade">

<h2>おすすめ料理</h2>

<div class="cards">

<div class="card">

<img src="images/sashimi.jpg">

<h3>お造り盛り合わせ</h3>

<p>
その日仕入れた新鮮な鮮魚を
豪華に盛り合わせました。
</p>

</div>

<div class="card">

<img src="images/steak.jpg">

<h3>和牛ステーキ</h3>

<p>
厳選した和牛を絶妙な焼き加減で。
</p>

</div>

<div class="card">

<img src="images/yakitori.jpg">

<h3>炭火焼き</h3>

<p>
香ばしく焼き上げた自慢の逸品。
</p>

</div>

</div>

</section>



<section id="course" class="fade">

<h2>宴会コース</h2>

<div class="course">

<div>

<h3>飲み放題付き 5,000円コース</h3>

<p>
人気メニューを楽しめる定番コース
</p>

</div>

<div>

<h3>飲み放題付き 6,000円コース</h3>

<p>
旬のおすすめ料理を堪能
</p>

</div>

<div>

<h3>飲み放題付き 8,000円コース</h3>

<p>
特別な日におすすめ
</p>

</div>

</div>

</section>



<section id="instagram" class="fade">

<h2>Instagram</h2>

<p>

最新情報はこちらからご覧ください。

</p>

<a
class="insta"

href="https://www.instagram.com/himachi_n/"

target="_blank">

Instagramを見る

</a>

</section>



<section id="access" class="fade">

<h2>アクセス</h2>

<p>

〒792-0021

愛媛県新居浜市泉宮町9-38

</p>

<div class="map">

<iframe
src="https://www.google.com/maps?q=愛媛県新居浜市泉宮町9-38&output=embed"
width="100%"
height="450"
style="border:0;"
loading="lazy">
</iframe>

</div>

</section>



<section class="contact">

<h2>ご予約</h2>

<p>

お電話でお気軽にご予約ください。

</p>

<a class="call-button"

href="tel:0897668755"

📞 今すぐ電話する

</a>

</section>



<footer>

<h3>旬彩創作ひまち</h3>

<p>

〒792-0021

愛媛県新居浜市泉宮町9-38

</p>

<p>

営業時間

17:30〜24:00

</p>

<p>

定休日

水曜日・第4日曜日

</p>

<p>

©2026 HIMACHI

</p>

</footer>


<script src="script.js"></script>

</body>

<styie.css>

/* ===========================
   SHUNSAI HIMACHI
   style.css
=========================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{
    font-family:"Yu Gothic","Hiragino Kaku Gothic ProN",sans-serif;
    background:#111;
    color:#fff;
    line-height:1.8;
}

/* ===========================
HEADER
=========================== */

header{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    background:rgba(0,0,0,.9);
    backdrop-filter:blur(8px);
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:18px 8%;
    z-index:999;
    border-bottom:1px solid rgba(255,215,0,.25);
}

.logo h1{
    color:#d4af37;
    font-size:32px;
    letter-spacing:3px;
}

.logo p{
    color:#ddd;
    font-size:13px;
}

nav{
    display:flex;
    gap:30px;
}

nav a{
    color:white;
    text-decoration:none;
    transition:.3s;
    font-size:15px;
}

nav a:hover{
    color:#d4af37;
}

/* ===========================
HERO
=========================== */

.hero{
    height:100vh;
    background:url(images/hero.jpg) center center/cover;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    position:relative;
}

.hero::before{
    content:"";
    position:absolute;
    inset:0;
    background:rgba(0,0,0,.55);
}

.overlay{
    position:relative;
    z-index:2;
}

.overlay h2{
    font-size:60px;
    margin-bottom:20px;
    letter-spacing:6px;
}

.overlay p{
    font-size:20px;
    color:#ddd;
    margin-bottom:35px;
}

.reserve-btn{
    display:inline-block;
    padding:16px 45px;
    background:#d4af37;
    color:#111;
    text-decoration:none;
    border-radius:50px;
    font-weight:bold;
    transition:.4s;
}

.reserve-btn:hover{
    transform:translateY(-4px);
    box-shadow:0 15px 30px rgba(212,175,55,.35);
}

/* ===========================
SECTION
=========================== */

section{
    padding:100px 10%;
}

section h2{
    font-size:42px;
    color:#d4af37;
    margin-bottom:35px;
    text-align:center;
}

section p{
    font-size:17px;
    color:#ddd;
}

/* ===========================
ABOUT
=========================== */

#about{
    max-width:1100px;
    margin:auto;
    text-align:center;
}

/* ===========================
MENU
=========================== */

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:35px;
}

.card{
    background:#1b1b1b;
    border-radius:15px;
    overflow:hidden;
    transition:.4s;
    border:1px solid rgba(212,175,55,.25);
}

.card:hover{
    transform:translateY(-10px);
}

.card img{
    width:100%;
    height:240px;
    object-fit:cover;
}

.card h3{
    padding:20px;
    color:#d4af37;
}

.card p{
    padding:0 20px 25px;
}

/* ===========================
COURSE
=========================== */

.course{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
    gap:30px;
}

.course div{
    background:#191919;
    padding:35px;
    border-left:5px solid #d4af37;
    border-radius:12px;
}

.course h3{
    color:#d4af37;
    margin-bottom:15px;
}

/* ===========================
INSTAGRAM
=========================== */

#instagram{
    text-align:center;
    padding:80px 10%;
}
