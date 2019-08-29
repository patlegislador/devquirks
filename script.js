const choice = document.querySelectorAll('.choice');

//  DISPLAY BOX
const box = document.querySelector('.topic-box');
const displayTitle = document.querySelector('.topic-title');
const boxText = document.querySelector('.topic-body')

//  BUTTONS
const randomBtn = document.querySelector('.random');
const studyBtn = document.querySelector('.study');
const quitBtn = document.querySelector('.quit');

let category = 'None';
choice.forEach(function(item) {
    item.addEventListener('click', function() {
        hideBox();
        showBox();
        displayTitle.textContent = item.value;
        category = item.value;
        boxText.innerHTML = '<h1 style="font-size: 90px; text-align: center; opacity: 0.1;">' + item.value + '</h1>'
    })
});

quitBtn.addEventListener('click', btn => {
    hideBox();
    displayTitle.textContent = 'Choose A Category';
    category = 'None';
});

randomBtn.addEventListener('click', btn => {
    if(category === 'None') { 
        alert("Please select a category first.");
    } else {
        let topic = data[category][(Math.floor(Math.random() * data[category].length))];
        boxText.innerHTML = topic; 
    }
})

function showBox() {
    box.style.visibility = 'visible';
    box.classList.remove('bounceIn', 'bounceOut');
    box.classList.add('bounceIn');
}

function hideBox() {
    box.classList.remove('bounceIn');
    box.classList.add('bounceOut');
}