let count = 0;

document.getElementById("increaseBtn").onclick = function increase() {
  count = count + 1;
  document.getElementById("counterDisplay").innerHTML = count;
};

document.getElementById("resetBtn").onclick = function reset() {
  count = 0;
  document.getElementById("counterDisplay").innerHTML = count;
};
document.getElementById("decreaseBtn").onclick = function decrease() {
  count = count - 1;
  document.getElementById("counterDisplay").innerHTML = count;
};
