document.addEventListener("DOMContentLoaded", async function () {
  try {
    const headResponse = await fetch("/too4moorii/common/template/head-w.html");
    //const headResponse = await fetch("/common/template/head-w.html");
    const headContent = await headResponse.text();
    document.head.innerHTML = headContent;

    const headerResponse = await fetch("/too4moorii/common/template/header-w.html");
    //const headerResponse = await fetch("/common/template/header-w.html");
    const headerContent = await headerResponse.text();
    document.getElementById("header-placeholder").innerHTML = headerContent;

    const footerResponse = await fetch("/too4moorii/common/template/footer-w.html");
    //const footerResponse = await fetch("/common/template/footer-w.html");
    const footerContent = await footerResponse.text();
    document.getElementById("footer-placeholder").innerHTML = footerContent;

    document.dispatchEvent(new Event("headLoaded"));
  } catch (error) {
    console.error("Error fetching head:", error);
  }
});
