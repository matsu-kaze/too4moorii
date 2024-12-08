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

window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('f-loading');
  const loadingScreen2 = document.getElementById('f-loading2');
  const content = document.querySelector('.f-content');

  // アニメーション終了後にローディング画面を非表示
  setTimeout(() => {
    loadingScreen.style.display = 'none'; // ローディング画面を削除
    loadingScreen2.style.display = 'none';
    content.style.opacity = '1'; // コンテンツをフェードイン
    document.body.classList.remove('f-no-scroll');
  }, 2000); // アニメーション時間に合わせる
});



