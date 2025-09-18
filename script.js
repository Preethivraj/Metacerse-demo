function checkAnswer() {
  const ans = document.getElementById('ans').value.trim();
  const result = document.getElementById('result');
  if (ans === "5") {
    result.textContent = "✅ Correct!";
  } else {
    result.textContent = "❌ Try Again";
  }
}
