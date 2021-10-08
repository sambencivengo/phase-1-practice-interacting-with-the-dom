// ================================================
// MANUAL INCREMENT & DECREMENT
// ================================================
const counter = document.getElementById('counter');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
function increment() {
  counter.textContent++;
}
function decrement() {
  counter.textContent--;
}

plus.addEventListener('click', increment);
minus.addEventListener('click', decrement);
function stop() {
  clearInterval(timer);
  pause.textContent = 'resume';
  if (pause.textContent === 'resume') {
    pause.addEventListener('click', () => {
      pause.textContent = 'pause';
      start();
    });
  }
}
// ================================================
// LIKES LI AND APPEDNDING
// ================================================
const likeContainer = document.querySelector('ul.likes');
const likeButton = document.getElementById('heart');
likeButton.addEventListener('click', () => {
  counter;
  let likes = 0;
  const li = document.createElement('li');
  li.textContent = `Number ${counter.textContent} has ${likes++} likes`;
  likeContainer.append(li);
});

// ================================================
// COMMENTS
// ================================================
const commentForm = document.querySelector('form');
const commentContainer = document.getElementById('list');

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = e.target.children[0].value;
  console.log(inputValue);
  const comment = document.createElement('li');
  comment.textContent = inputValue;
  if (inputValue.length < 1) {
    alert('Please fill out form');
  } else {
    commentContainer.append(comment);
    e.target.reset();
  }
});

// ================================================
// TIMER, PAUSE AND RESUME
// ================================================

let timer;
const pause = document.getElementById('pause');
pause.addEventListener('click', stop);

function clock() {
  if (!timer) {
    timer = setInterval(increment, 1000);
  }
}

function start() {
  clock();
}

document.addEventListener('DOMContentLoaded', start);
