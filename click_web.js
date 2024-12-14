const i = document.getElementById("i");
const l = document.getElementById("l");
const o = document.getElementById("o");
const v = document.getElementById("v");
const e = document.getElementById("e");
const u = document.getElementById("u");
const iloveu = document.getElementById("complet");

const letters = [i, l, o, v, e, u];
const sequence = ["I", "L", "O", "V", "E", "U"];
let index = 0;

letters.forEach((letter, idx) => {
  letter.addEventListener("click", () => {
    if (idx === index) {
      iloveu.textContent += sequence[index];
      index++;
      letter.style.display = "none"; // Hide the clicked letter
      if (index === sequence.length) {
        iloveu.textContent = "I LOVE U ❤️";
      }
    }
  });
});

iloveu.addEventListener("click", () => {
  // Reset
  iloveu.textContent = "";
  index = 0;
  letters.forEach(letter => (letter.style.display = "block"));
});
