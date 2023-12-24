var selectedVote = -1;

function setVote(id) {
    document.getElementById("submitButton").classList.remove("readOnlySubmitButton");

    for (let i = 0; i < 5; i++) {
        document.getElementById("grade" + i).classList = ["grade"];
    }

    document.getElementById("grade" + id).classList = ["gradeClick"];
    selectedVote = id + 1;
}

function saveVote() {
    localStorage.setItem("grade", selectedVote);
    window.location.href = 'resultPage/result.html';
}