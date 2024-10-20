function addNumber(num) {
    var input = document.getElementById("num_operations");
    input.value += num;
}

function clearInput() {
    document.getElementById("num_operations").value = '';
}

function add(){
}

document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.num-button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            var value = this.textContent.trim();
            addNumber(value);
        });
    });

    // Add a separate event listener for the Clear button
    var clearButton = document.querySelector('.clear-button');
    if (clearButton) {
        clearButton.addEventListener('click', function(e) {
            e.preventDefault();
            clearInput();
        });
    }
});






