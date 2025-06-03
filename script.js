function secondHighest(arr) {
  if (arr.length < 2) return -Infinity;

  const unique = [...new Set(arr)];
  if (unique.length < 2) return -Infinity;

  unique.sort((a, b) => b - a); // Descending order
  return unique[1];
}

function handleSecondHighest() {
  const input = document.getElementById("inputArray").value;
  const arr = input
    .split(",")
    .map(val => parseFloat(val.trim()))
    .filter(val => !isNaN(val));
  const result = secondHighest(arr);
  document.getElementById("result").textContent = `Second Highest: ${result}`;
}
