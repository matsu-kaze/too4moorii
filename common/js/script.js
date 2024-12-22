// スクロールアニメーション
window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".animate-on-scroll");
  const windowHeight = window.innerHeight;

  elements.forEach((element) => {
    const positionFromTop = element.getBoundingClientRect().top;

    if (positionFromTop - windowHeight <= 0) {
      element.classList.add("fade-in");
    }
  });
});

window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("f-loading");
  const loadingScreen2 = document.getElementById("f-loading2");
  const content = document.querySelector(".f-content");
  let storage_data = sessionStorage.getItem('LOAD_ID');

  // アニメーション終了後にローディング画面を非表示
  setTimeout(() => {
    if (loadingScreen && loadingScreen2) {
      loadingScreen.style.display = "none";
      loadingScreen2.style.display = "none";
      content.style.opacity = "1"; // コンテンツをフェードイン
      document.body.classList.remove("f-no-scroll");
    }
  }, storage_data ? 0 : 2000); // アニメーション時間に合わせる、2回目は省略
  sessionStorage.setItem('LOAD_ID', 'shown');
});

// fontによるボックスコンテンツのdescent値対応
const textElements = document.querySelectorAll(".c-circle");

// 画像拡大
function expandImage() {
  const overlay = document.getElementById("f-overlay");
  const overlayImage = document.getElementById("f-overlayImage");
  const fullImageSrc = this.getAttribute("data-full");
  overlayImage.src = fullImageSrc;
  overlay.style.display = "flex";
}
function closeOverlay() {
  const overlay = document.getElementById("f-overlay");
  const overlayImage = document.getElementById("f-overlayImage");
  overlay.style.display = "none";
  overlayImage.src = "";
}

// 実行
document.addEventListener("DOMContentLoaded", function () {
  textElements.forEach((textElement) => {
    const computedFont = window.getComputedStyle(textElement).fontFamily;

    if (computedFont.includes("Josefin Sans")) {
      textElement.style.lineHeight = "3.5rem";
    } else {
      textElement.style.textAlign = "center";
    }
  });

  document.querySelectorAll(".f-expandImage").forEach(function (element) {
    element.addEventListener("click", expandImage);
  });
  document.querySelector("#f-overlay").addEventListener("click", closeOverlay);
});
