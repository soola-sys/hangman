import { questions } from './questions.js';
import { insertImg } from './gallows.js';
import { keysObj } from './keys.js';

const appendStyles = (path) => {
  let head = document.getElementsByTagName('head')[0];
  let link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.href = path;
  head.insertBefore(link, head.lastChild);
};
appendStyles('./css/normalize.css');
appendStyles('./css/style.css');

const insertNode = (node, className, text = '') => {
  let div = document.createElement(node);
  div.classList.add(className);
  if (text) {
    div.textContent = text;
  }
  return div;
};
// const insertImg = (path) => {
//   let img = document.createElement('img');
//   img.setAttribute('src', path);
//   img.setAttribute('alt', 'hangman');
//   return img;
// };

const resetGallows = () => {
  document.querySelectorAll('.body__part').forEach((el) => {
    el.classList.add('hide-gallows');
  });
};

const initKeyboardKeys = (obj) => {
  Object.entries(obj).forEach(([key, value]) => {
    const buttonEl = document.createElement('button');
    buttonEl.classList.add('keyboard__key');
    buttonEl.setAttribute('data-key', `${key}`);
    buttonEl.textContent = value.toUpperCase();
    document.querySelector('.keyboard__row').append(buttonEl);
  });
};

const renderLetters = (letterWrapper, questionsObj) => {
  document.querySelector(letterWrapper).innerHTML = '';
  questionsObj.forEach((el) => console.log(el));
  for (let i = 1; i <= 7; i += 1) {
    document.querySelector(letterWrapper).appendChild(insertNode('li', 'letter'));
  }
};

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML(
    'afterbegin',
    '<div class="wrapper"><div class="container"></div></div>'
  );

  const containerEl = document.querySelector('.container');
  containerEl.appendChild(insertNode('div', 'gallows'));
  containerEl.appendChild(insertNode('div', 'quiz'));
  // containerEl.appendChild(insertImg('./assets/hangman-new.svg'));
  insertImg('.gallows');
  resetGallows();
  document.querySelector('.gallows').appendChild(insertNode('p', 'subtitle', 'hangman game'));
  document.querySelector('.quiz').appendChild(insertNode('div', 'text'));
  document.querySelector('.quiz').appendChild(insertNode('div', 'keyboard'));
  document.querySelector('.text').insertAdjacentHTML('afterbegin', '<div class="underscore"><ul class="word"></ul></div>');
  document.querySelector('.text').insertAdjacentHTML('beforeend', '<p class="hint">Hint:<span class="answer-text">A vehicle-powered engine with two wheels</span></p>');
  document.querySelector('.text').insertAdjacentHTML('beforeend', '<p class="guesses">Incorrect guesses: <span class="count">0 / 6</span></p>');
  renderLetters('.word', questions);
  document.querySelector('.keyboard').appendChild(insertNode('div', 'keyboard__row'));
  initKeyboardKeys(keysObj);
});
