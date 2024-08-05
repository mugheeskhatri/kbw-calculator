var inputValue = document.getElementById("displayData")

var notAbleOnStart = ["*", "/", "+"]
var operators = ["+", "-", "*", "/"]

function buttonCLick(num) {
    if (inputValue.value.replace("-", "") === "") {
        if (notAbleOnStart.includes(num)) {
        } else {
            var lastIndex = inputValue.value.slice(inputValue.value.length - 1)
            if (operators.includes(lastIndex) && operators.includes(num)) {
                inputValue.value = inputValue.value.replace(lastIndex, num)
            } else {
                inputValue.value += num
            }
        }
    } else {
        var lastIndex = inputValue.value.slice(inputValue.value.length - 1)
        if (operators.includes(lastIndex) && operators.includes(num)) {
            inputValue.value = inputValue.value.replace(lastIndex, num)
        } else {
            inputValue.value += num
        }
    }
}
function allClear() {
    inputValue.value = ""
}
function calculator() {
    inputValue.value = eval(inputValue.value)
}
function closeOne() {
    var newValue = inputValue.value.slice(0, -1);
    inputValue.value = newValue
}