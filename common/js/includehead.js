
document.addEventListener("DOMContentLoaded", async function () {
  try {
    const response = await fetch("/common/template/header-w.html");
    const headContent = await response.text();
    document.documentElement.innerHTML =
      headContent + document.documentElement.innerHTML;
  } catch (error) {}
});
