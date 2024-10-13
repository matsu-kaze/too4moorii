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

// フォーム送信時のメッセージ
const form = document.querySelector("#contact-form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // フォーム送信を停止

  // 確認メッセージを表示
  alert("Thank you! Your message has been sent.");

  // フォームをリセット
  form.reset();
});
