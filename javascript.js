function onInput() {
  var input = document.getElementById("input");
  var div = document.getElementById("div");
  if (div != null && input != null)
      div.innerHTML = input.value;
}