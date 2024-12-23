var user = {}
user.correctAnswers = 0;
user.incorrectAnswers = 0;

function startGame() {
    loadOptions()
    document.querySelector('.startPage').style.display = 'none';
    document.querySelector('.gamePage').style.display = 'flex';
    var audio = new Audio('instrumental.mp3');
    audio.play();
}

var tailColors =
    [
        ['ariel-orange-tail.png', 'Idea'],
        ['ariel-pink-tail.png', 'Happy'],
        ['ariel-purple-tail.png', 'Moody'],
        ['ariel-white-tail.png', 'Warm']
    ];

var moods = []
var images = []


function organizeSection(index, array) {
    for (let i = 0; i < tailColors.length; i++) {
        array[i] = tailColors[i][index];
    }
    return array
}


function shuffle(array) {
    var i = array.length;
    while (i != 0) {
        var randomNum = Math.floor(Math.random() * i);
        i = i - 1;
        [array[i], array[randomNum]] = [array[randomNum], array[i]];
    }
    return array
}

function loadOptions() {
    images = organizeSection(0, images);
    var optionsArray = shuffle(organizeSection(1, moods));

    var options = document.querySelectorAll('.option');
    for (let i = 0; i < options.length; i++) {
        options[i].innerHTML = optionsArray[i];
    }

    var imageBox = document.querySelector('.ariel-image');
    var randomNum = Math.floor(Math.random() * images.length);
    imageBox.src = images[randomNum];
    imageBox.id = randomNum;
    console.log(randomNum)
    console.log(tailColors[randomNum][1])
}


function pick(button) {
    var cAnswers = document.getElementById('correctAnswers')
    var icAnswers = document.getElementById('incorrectAnswers')

    var moodChosen = button.innerHTML;
    var index = document.querySelector('.ariel-image').id;
    var correctMood = tailColors[index][1];

    if (moodChosen == correctMood) {
        console.log('correct answer')
        button.classList.add('correct')
        user.correctAnswers++;
        cAnswers.innerText = user.correctAnswers;
    }
    else {
        button.classList.add('incorrect')
        user.incorrectAnswers++;
        console.log('incorrect')
        icAnswers.innerText = user.incorrectAnswers;
    }

    setTimeout(() => {
        if (button.classList.contains('incorrect')) {
            button.classList.remove('incorrect')
        }
        else if (button.classList.contains('correct')) {
            button.classList.remove('correct')
        }
        loadOptions()
    }, 400);

}
