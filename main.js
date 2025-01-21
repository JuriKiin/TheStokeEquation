let lengthInput, widthInput, heightInput, boardInput, result;


function calculateVolume() {
    lengthInput = document.getElementById('length');
    widthInput = document.getElementById('width');
    heightInput = document.getElementById('height');
    boardInput = document.getElementById('board');
    result = document.getElementById('result');

    if (lengthInput.value && widthInput.value && heightInput.value) {
        console.log(boardInput.value);
        let boardFactor = boardInput.value == null || boardInput.value == undefined || boardInput.value == "" ? 1 : boardInput.value;
        result.innerHTML = lengthInput.value * widthInput.value * heightInput.value * boardFactor + " liters";
    }
}