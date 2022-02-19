document.getElementById("submit").addEventListener("click", generate);

function generate() {
  let input = document.querySelector("#input").value;
  let operation = document.getElementById("choice").options[choice.selectedIndex].id;
  let output = document.getElementById("output");

  switch (operation) {
    case "1":
      output.textContent = input.charAt(0).toUpperCase() + input.substring(1).toLowerCase();
      break;

    case "2":
      output.textContent = input.substring(0, input.indexOf(" "));
      break;
    case "3":
      output.textContent = input.substring(0, input.indexOf(" ")).length;
      break;
    case "4":
      output.textContent = "Start middle name position: " + (input.indexOf(" ") + 1) + " " + "End middle name position: " + (input.lastIndexOf(" ") - 1) + " Middle name is: " + input.substring(input.indexOf(" ") + 1, input.lastIndexOf(" "));
      break;
    case "5":
      if (input.endsWith(".jpg")) {
        output.textContent = " it is a .jpg";
      } else if (input.endsWith(".png")) {
        output.textContent = " it is a .png";
      } else {
        output.textContent = " it is neither .jpg nor .png";
      }
      break;
    case "6":
      output.textContent = "*".repeat(input.length);
      break;
    case "7":
      output.textContent = input.substring(0, 2).toLowerCase() + input.charAt(2).toUpperCase() + input.substring(3).toLowerCase();
      break;
    case "8":
      let temp = "";
      let temp2 = "";
      let array = input.split(" ");
      array.forEach(upperCase);
      function upperCase(word) {
        word = word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
        console.log(word);
        temp = temp + " " + word;
      }
      console.log(temp);
      let array2 = temp.split("-");
      array2.slice(1).forEach(upperCase2);
      function upperCase2(word) {
        word = word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
        console.log(word);
        temp2 = temp2 + "-" + word;
      }
      output.textContent = array2[0] + temp2;
      break;
  }
}
