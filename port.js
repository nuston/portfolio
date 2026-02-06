// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Toggle project details
document.querySelectorAll(".toggle-details").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-target");
    const panel = document.getElementById(id);
    const isHidden = panel.hasAttribute("hidden");

    if (isHidden) {
      panel.removeAttribute("hidden");
      btn.textContent = "Hide details";
    } else {
      panel.setAttribute("hidden", "");
      btn.textContent = "Project details";
    }
  });
});
