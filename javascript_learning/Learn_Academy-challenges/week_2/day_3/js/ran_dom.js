function checkIsRandom() {
    var value = document.getElementById("inputField").value;

    if (value > 2 * Math.random() * value) {
      document.getElementById("outputText").innerHTML = "It's Random";

    } else {
      document.getElementById("outputText").innerHTML = "It's <em>NOT</em> Random";
    }
}
