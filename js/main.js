"use strict";
// humbuger menu---------------
{
  // 時間の指定
  var timer = 5000;
  // スライドする要素を取得
  var imgs = document.querySelectorAll("#slider img");
  // 最初の画像を表示
  imgs[0].classList.add("show");
  // 画像の番号
  var imgNum = 0;
  function showImg() {
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].classList.remove("show");
    }
    if (imgNum >= imgs.length - 1) {
      imgNum = 0;
    } else {
      imgNum++;
    }
    imgs[imgNum].classList.add("show");
    showImgTimer();
  }
  function showImgTimer() {
    setTimeout(showImg, timer);
  }
  showImgTimer();
}
{
  const btn = document.querySelector(".btn");
  const container = document.querySelector("#js-nav");

  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    container.classList.toggle("active");
  });
}

// about fadeIn animation---------------
{
  let fadeInTarget = document.querySelectorAll(".fadeIn");
  window.addEventListener("scroll", () => {
    for (let i = 0; i < fadeInTarget.length; i++) {
      const rect = fadeInTarget[i].getBoundingClientRect().top;
      const scroll = window.pageXOffset || document.documentElement.scrollTop;
      const offset = rect + scroll;
      const windowHeight = window.innerHeight;
      if (scroll > offset - windowHeight + 160) {
        fadeInTarget[i].classList.add("scroll-in");
      }
    }
  });
}
//  review fadeIn animation---------------

let fadeInTarget = document.querySelectorAll(".scale");
// スクロールイベントの宣言
window.addEventListener("scroll", () => {
  // 繰り返し処理
  for (let i = 0; i < fadeInTarget.length; i++) {
    // 上からターゲットまでの位置を取得する
    const rect = fadeInTarget[i].getBoundingClientRect().top;
    const scroll = window.pageXOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      fadeInTarget[i].classList.add("scroll-scale");
    }
  }
});
