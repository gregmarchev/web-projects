let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }


document.addEventListener('DOMContentLoaded', function () {
    // Function to show an image when the button is clicked
    document.getElementById('showImageButton').addEventListener('click', function() {
        var imageElement = document.getElementById('displayedImage');
        // Replace 'path/to/your/image.jpg' with the actual path to your image file
        imageElement.src = 'images/GregoryMarchevHeadshot.JPG';
    });

    // Function to show a personalized message when the button is clicked
    document.getElementById('showMessageButton').addEventListener('click', function() {
        var nameInputValue = document.getElementById('nameInput').value;
        if (nameInputValue.trim() !== '') {
            alert('Hello, ' + nameInputValue + '! Welcome to the webpage.');
        } else {
            alert('Please enter your name.');
        }
    });
});
