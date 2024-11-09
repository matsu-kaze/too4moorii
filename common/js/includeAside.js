document.addEventListener("headLoaded", async function () {
  try {
    const asideResponse = await fetch("/common/template/aside-w.html");
    const asideContent = await asideResponse.text();
    const asideElement = document.getElementById("aside-placeholder");
    asideElement.outerHTML = asideContent;

    const ulElement = document.getElementById("workstag-list");
    liItems.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ulElement.appendChild(li);
    });
  } catch (error) {
    console.error("Error fetching aside:", error);
  }
});
