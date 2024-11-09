document.addEventListener("DOMContentLoaded", async function () {
  try {
    const response = await fetch("/common/template/head-w.html");
    const headContent = await response.text();
    document.head.innerHTML = headContent;
    document.dispatchEvent(new Event("headLoaded"));
  } catch (error) {
    console.error("Error fetching head:", error);
  }
});
