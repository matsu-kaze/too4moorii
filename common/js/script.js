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

  // アニメーション終了後にローディング画面を非表示
  setTimeout(() => {
    loadingScreen.style.display = "none";
    loadingScreen2.style.display = "none";
    content.style.opacity = "1"; // コンテンツをフェードイン
    document.body.classList.remove("f-no-scroll");
  }, 2000); // アニメーション時間に合わせる
});

// fontによるボックスコンテンツのdescent値対応
const textElements = document.querySelectorAll(".l-circle");

// 画像拡大
function expandImage() {
  console.log("expandImage called!"); // 関数が呼び出されているか確認
  console.log("Clicked Element:", this); // `this`がクリックされた要素か確認

  const overlay = document.getElementById("f-overlay");
  console.log("Overlay element:", overlay); // `#f-overlay`が取得できているか確認

  const overlayImage = document.getElementById("f-overlayImage");
  const fullImageSrc = this.getAttribute("data-full");
  console.log("Full Image Source:", fullImageSrc); // `data-full`属性が正しいか確認

  overlayImage.src = fullImageSrc;
  overlay.style.display = "flex";
}
function closeOverlay() {
  console.log("closeOverlay called!"); // 関数が呼び出されているか確認

  const overlay = document.getElementById("f-overlay");
  const overlayImage = document.getElementById("f-overlayImage");
  overlay.style.display = "none";
  overlayImage.src = "";
}

// 実行
document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScriptファイルが読み込まれました");

  textElements.forEach((textElement) => {
    const computedFont = window.getComputedStyle(textElement).fontFamily;

    if (computedFont.includes("Josefin Sans")) {
      textElement.style.lineHeight = "3.5rem";
    } else {
      textElement.style.textAlign = "center";
    }
  });

  document.querySelectorAll(".f-expandImage").forEach(function (element) {
    console.log("Expand Image Element:", element); // 各`.f-expandImage`要素が取得できているか確認
    element.addEventListener("click", expandImage);
  });
  document.querySelector("#f-overlay").addEventListener("click", closeOverlay);
});
