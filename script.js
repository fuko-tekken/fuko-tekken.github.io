function toggleMenu(element) {
  element.classList.toggle("active");
}

async function countUp(event, link, name) {
  event.preventDefault();

  const data = new URLSearchParams();
  data.append("name", name);

  await fetch("https://script.google.com/macros/s/AKfycbwISysNe1a6ftaQIyogNOPHi4af0tiodFv_CiNKUOwGAfApfVamkjuOCIR9D28vbIrzzQ/exec", {
      method: "POST",
      body: data
  });

  location.href = link.href;
}