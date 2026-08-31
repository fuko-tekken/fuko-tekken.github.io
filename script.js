function toggleMenu(element) {
  element.classList.toggle("active");
}

var gas = "https://script.google.com/macros/s/AKfycbwISysNe1a6ftaQIyogNOPHi4af0tiodFv_CiNKUOwGAfApfVamkjuOCIR9D28vbIrzzQ/exec"

async function countUp(event, link, name) {
  event.preventDefault();

  // クリック直後に新しいタブを確保
  const newWindow = window.open("", "_blank");

  if (!newWindow) {
    alert("ポップアップを許可してください。");
    return;
  }

  const data = new URLSearchParams();
  data.append("name", name);

  try {
    const response = await fetch(gas, {
      method: "POST",
      body: data
    });

    if (!response.ok) {
      throw new Error("HTTP error: " + response.status);
    }

    const result = await response.text();

    if (result !== "OK") {
      throw new Error("GAS returned: " + result);
    }

    // GAS成功 → 新しいタブを目的ページへ
    newWindow.location.href = link.href;

  } catch (error) {
    console.error(error);

    // GAS失敗 → 開いたタブを閉じる
    newWindow.close();

    alert("ページを開けませんでした。もう一度お試しください。");
  }
}