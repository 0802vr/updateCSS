const inputs = document.querySelectorAll("input");

function handleUnput() {
  const sufix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(`--${this.name}`,this.value + sufix);
}

inputs.forEach((item) => item.addEventListener("change", handleUnput));
inputs.forEach((item) => item.addEventListener("mousemove", handleUnput));


function sumbitButton(event) {
  event.preventDefault();
  document.querySelector("img").src = document.querySelector(".text").value;
  document.querySelector("form").reset();
}
document.querySelector("form").addEventListener("submit", sumbitButton);
