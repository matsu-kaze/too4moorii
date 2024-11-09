document.addEventListener("DOMContentLoaded", async function () {
  try {
    const response = await fetch("/common/template/head-w.html");
    const headContent = await response.text();
    document.documentElement.innerHTML =
      headContent + headerContent + document.documentElement.innerHTML;
  } catch (error) {}
});
