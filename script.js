var randomNumber = Math.floor(Math.random() * 100) + 1;
    var attempts = 0;

    function guessNumber() {
      var guess = parseInt(document.getElementById("guessInput").value);
      attempts++;
      var feedback = document.getElementById("feedback");

      if (guess > randomNumber) {
        feedback.innerText = "Too high!";
      } else if (guess < randomNumber) {
        feedback.innerText = "Too low!";
      } else {
        feedback.innerText = `Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts.`;
      }
    }
    // console.log(randomNumber);