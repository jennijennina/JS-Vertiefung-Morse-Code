const darkModeButton = document.getElementById("darkModeButton");
darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark_mode");
});
// AB HIER AUFGABE

// Eine alte Dame ist letztens in den Wald gegangen, um Pilze zu suchen und verirrte sich dort. Aus dem Wald half ihr ein alter Mann, der in den Bergen lebt. Sie scheinen sich auf den ersten Blick verliebt zu haben und wollen in Kontakt bleiben.
// Das Problem ist, dass der ältere Herr kein Telefon und kein Internet hat.
// Sie können nur mit Hilfe von Morsecode kommunizieren.
// Hilf der alten Dame eine Verbindung mit dem “Berg-Opa” herzustellen.
// ❤✉

// Aufgabenstellung

// Es muss eine Funktion entwickelt werden, mit der man einfachen Text in Morsecode übersetzen kann. Das Array ist im Kommentar angegeben.

let morseAlphabet = [
  { letter: "1", morseCode: ".----" },
  { letter: "2", morseCode: "..---" },
  { letter: "3", morseCode: "...--" },
  { letter: "4", morseCode: "....-" },
  { letter: "5", morseCode: "....." },
  { letter: "6", morseCode: "-...." },
  { letter: "7", morseCode: "--..." },
  { letter: "8", morseCode: "---.." },
  { letter: "9", morseCode: "----." },
  { letter: "0", morseCode: "-----" },
  { letter: " ", morseCode: "    " },
  { letter: "A", morseCode: ".-" },
  { letter: "B", morseCode: "-..." },
  { letter: "C", morseCode: "-.-." },
  { letter: "D", morseCode: "-.." },
  { letter: "E", morseCode: "." },
  { letter: "F", morseCode: "..-." },
  { letter: "G", morseCode: "--." },
  { letter: "H", morseCode: "...." },
  { letter: "I", morseCode: ".." },
  { letter: "J", morseCode: ".---" },
  { letter: "K", morseCode: "-.-" },
  { letter: "L", morseCode: ".-.." },
  { letter: "M", morseCode: "--" },
  { letter: "N", morseCode: "-." },
  { letter: "O", morseCode: "---" },
  { letter: "P", morseCode: ".--." },
  { letter: "Q", morseCode: "--.-" },
  { letter: "R", morseCode: ".-." },
  { letter: "S", morseCode: "..." },
  { letter: "T", morseCode: "-" },
  { letter: "U", morseCode: "..-" },
  { letter: "V", morseCode: "...-" },
  { letter: "W", morseCode: ".--" },
  { letter: "X", morseCode: "-..-" },
  { letter: "Y", morseCode: "-.--" },
  { letter: "Z", morseCode: "--.." },
];
console.log(morseAlphabet);
// Variablen bennen und deklarieren
let userInput = document.getElementById("userInput");
let userOutput = document.getElementById("userOutput");
// Funktion morseCode deklarieren
function btn() {
  // userOutput.innerHTML = userInput.value;
  // // for Loop
  let a = userInput.value.toUpperCase();
  for (let index = 0; index < a.length; index++) {
    // console.log(a[index]);
    // Kurzschreibform
    // Langform for (let grandpa = 0; grandpa < morseAlphabet.length; grandpa++)
    for (grandpa of morseAlphabet) {
      if (grandpa.letter === a[index]) {
        if (grandpa.letter === " ") {
          userOutput.innerHTML += "🏔";
        } else {
          userOutput.innerHTML += grandpa.morseCode;
        }
      }
    }
  }
}
