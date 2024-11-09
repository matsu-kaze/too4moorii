document.addEventListener("DOMContentLoaded", async function () {
  try {
    const response = await fetch("/common/template/header-w.html");
    const headerContent = await response.text();
    document.getElementById("header-placeholder").innerHTML = headerContent;
  } catch (error) {
    console.error("Error fetching header:", error);
  }
});
