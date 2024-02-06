import { questions } from './questions.js';
import { insertImg } from './gallows.js';
import { keysObj } from './keys.js';

function createNewArray(value) {
  const result = [];
  for (let i = 0; i < value; i += 1) {
    result.push(i);
  }
  return result;
}
function shuffle(arr) {
  let newArr = [...arr];
  let currentIndex = arr.length;
  let randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    [newArr[currentIndex], newArr[randomIndex]] = [
      newArr[randomIndex],
      newArr[currentIndex]
    ];
  }
  return newArr;
}
let randIndex = createNewArray(questions.length);
let tempWord = shuffle(randIndex).slice(0, 1).pop();
let activeWord = questions[tempWord];
console.log('Old', activeWord);
let lettersArr = activeWord.answer.replaceAll(' ', '').split('');
let counter = 0;
let maxLimit = 6;
let correctLettersArr = new Array(lettersArr.length).fill('_');
console.log('CORRECT LETTERS', correctLettersArr);

const appendStyles = (path) => {
  let head = document.getElementsByTagName('head')[0];
  let link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.href = path;
  head.insertBefore(link, head.lastChild);
};
appendStyles('./css/normalize.css');
appendStyles('./css/style.css');

const insertNode = (parentEl, node, className, text = '') => {
  let div = document.createElement(node);
  div.classList.add(className);
  if (text) {
    div.textContent = text;
  }
  document.querySelector(parentEl).appendChild(div);
};
// head, body, left arm, right arm, left leg, right leg
const resetGallows = () => {
  Array.from(document.querySelectorAll('.body__part')).forEach((el) => {
    el.classList.add('hide-gallows');
  });
};
const initKeyboardKeys = (obj) => {
  // document.querySelector('.keyboard__row').innerHTML = '';
  Object.entries(obj).forEach(([key, value]) => {
    const buttonEl = document.createElement('button');
    buttonEl.classList.add('keyboard__key');
    buttonEl.setAttribute('data-key', `${key}`);
    buttonEl.textContent = value.toUpperCase();
    document.querySelector('.keyboard__row').append(buttonEl);
  });
};

const initUnderscores = () => {
  document.querySelector('.underscore').innerHTML = '';
  let ulEl = document.createElement('ul');
  ulEl.classList.add('word');
  lettersArr.forEach((el) => {
    let element = document.createElement('li');
    element.classList.add('letter');
    element.textContent = '_';
    element.setAttribute('data-li', el.toLowerCase());
    ulEl.appendChild(element);
  });
  document.querySelector('.underscore').append(ulEl);
};

const displayModal = (text) => {
  document.querySelector('.modal-word').textContent = text;
  document.querySelector('.modal-secret').textContent = activeWord.answer;
  document.querySelector('.modal-container').style.display = 'flex';
}; 

const initHints = (hintObj, count) => {
  document.querySelector('.letter-part').innerHTML = '';
  let div = document.createElement('div');
  if (hintObj) {
    div.innerHTML = `<p class="hint">Hint:<span class="answer-text" data-hint=${hintObj.id}>${hintObj.hint}</span></p>
    <p class="guesses">Incorrect guesses: <b class="counter">${count}</b><span>/</span><b class="maxlimit">6</b></p>`;
  }
  document.querySelector('.letter-part').appendChild(div);
};

const initModal = () => {
  document.querySelector('.modal-container').innerHTML = '';
  let modalContent = document.createElement('div');
  let modalBtn = document.createElement('button');
  modalBtn.setAttribute('type', 'button');
  modalBtn.classList.add('close-btn');
  modalBtn.textContent = 'Play again';
  modalContent.classList.add('modal');
  modalContent.insertAdjacentHTML('afterbegin', '<p class="modal-word"></p>');
  modalContent.insertAdjacentHTML('afterbegin', '<p>The secret word was: <b class="modal-secret"></b></p>');
  modalContent.appendChild(modalBtn);
  document.querySelector('.modal-container').appendChild(modalContent);
};
/* eslint no-param-reassign: "error" */

const addBodyPart = () => {
  const hangObj = {
    head: 'body__head',
    body: 'body__corpus',
    leftHand: 'body__left-hand',
    rightHand: 'body__right-hand',
    leftLeg: 'body__left-leg',
    rightLeg: 'body__right-leg'
  };
  let className = Object.values(hangObj)[counter];
  let node = document.querySelector(`.${className}`);
  if (node.classList.contains('hide-gallows')) {
    node.classList.remove('hide-gallows');
  }
};
function updateGuess() {
  let arr = Array.from(document.querySelectorAll('.letter'));
  arr.forEach((node, index) => {
    node.textContent = correctLettersArr[index];
  });
}
document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML(
    'afterbegin',
    '<div class="wrapper"><div class="container"><div class="content"></div></div></div>'
  );

  insertNode('.content', 'div', 'gallows');
  insertNode('.content', 'div', 'quiz');
  insertNode('.content', 'div', 'modal-container');
  insertImg('.gallows');
  insertNode('.gallows', 'p', 'subtitle', 'hangman game');
  insertNode('.quiz', 'div', 'text');
  insertNode('.quiz', 'div', 'keyboard');
  insertNode('.text', 'div', 'underscore');
  insertNode('.text', 'div', 'letter-part');
  initUnderscores();
  initHints(activeWord, counter);
  initModal();
  resetGallows();
  insertNode('.keyboard', 'div', 'keyboard__row');
  initKeyboardKeys(keysObj);
  const modal = document.querySelector('.modal-container');
  document.querySelector('.keyboard').addEventListener('click', (e) => {
    let item = e.target;
    let str = activeWord.answer.toLowerCase();
    if (item.classList.contains('keyboard__key') && (item.closest('button'))) {
      let currentKey = keysObj[item.dataset.key];
      if (str.includes(currentKey)) {
        for (let i = 0; i < str.length; i += 1) {
          if (str[i] === currentKey) {
            correctLettersArr[i] = currentKey;
          }
        }
      } else {
        addBodyPart(counter);
        counter += 1;
        document.querySelector('.counter').textContent = counter;
        if (counter === maxLimit) displayModal('You Lost');
      }
      if (!correctLettersArr.includes('_')) displayModal('You win');
      updateGuess();
      item.classList.add('disabled');
    }
  });
  document.querySelector('.close-btn').addEventListener('click', () => {
    console.log(activeWord);
    modal.style.display = 'none';
    counter = 0;
    while (activeWord === questions[tempWord]) {
      tempWord = shuffle(randIndex).slice(0, 1).pop();
      if (activeWord !== questions[tempWord]) {
        activeWord = questions[tempWord];
        break;
      }
    }
    lettersArr = activeWord.answer.replaceAll(' ', '').split('');
    correctLettersArr = new Array(lettersArr.length).fill('_');
    initUnderscores();
    initHints(activeWord, counter);
    resetGallows();
    Array.from(document.querySelectorAll('.keyboard__key')).forEach((el) => {
      el.classList.remove('disabled');
    });
  });
});
