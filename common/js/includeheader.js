document.addEventListener("DOMContentLoaded", function () {
  const response = fetch("/common/template/header-w.html");
  const headerContent = response.text();
  document.getElementById("header-placeholder").innerHTML = headerContent;
});
