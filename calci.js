function appendValue(value) {
  document.getElementById("result").value += value;
}

function clearResult() {
  document.getElementById("result").value = result.value.slice(0, -1);
  
}
function AllClear() {
    document.getElementById("result").value = "";
}

function calculate() {
  var result = document.getElementById("result").value;
  var answer = eval(result);
  document.getElementById("result").value = answer;
}

