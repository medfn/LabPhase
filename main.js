function calculateScore() {

    const username = document.getElementById('name').value.trim();
    const nameError = document.getElementById('name-error');

    if (username.length == 0) {
        nameError.innerText = 'enter a valid name';
        return;
    } else {
        nameError.innerText = '';
    }

    let score = 0;

    // Question 1
    if (document.querySelector('input[name="options1"]:checked')?.value === "19") {
        score++;
    }

    // Question 2
    if (document.querySelector('input[name="options2"]:checked')?.value === "4") {
        score++;
    }

    // Question 3
    if (document.querySelector('input[name="options3"]:checked')?.value === "3") {
        score++;
    }

    // Question 4
    if (document.querySelector('input[name="options4"]:checked')?.value === "4") {
        score++;
    }

    // Question 5
    if (document.querySelector('input[name="options5"]:checked')?.value === "8866128975287528,-8778405442862239,-2736111468807040") {
        score++;
    }

    // Display the result
    document.getElementById('result').innerText = `Congratulations, ${username}! you scored ${score} correct answers out of 5 questions`;
}