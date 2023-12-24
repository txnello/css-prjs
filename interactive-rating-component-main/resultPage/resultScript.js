window.onload = function() {
    var grade = localStorage.getItem('grade');

    if (grade < 1 || grade > 5 || grade === null || grade === undefined) {
        window.location.href = '../index.html';
        return;
    }

    document.getElementById("box").classList.remove("hideBox");

    document.getElementById('resultText').innerText = "You selected " + grade + " out of 5";
};