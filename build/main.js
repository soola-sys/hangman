/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/gallows.js":
/*!***************************!*\
  !*** ./src/js/gallows.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   insertImg: () => (/* binding */ insertImg)\n/* harmony export */ });\nfunction insertImg(className) {\r\n  document.querySelector(className).innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"298.232\" height=\"291\" viewBox=\"0 0 298.232 291\">\r\n    <g id=\"Group_700\" data-name=\"Group 700\" transform=\"translate(-16059.232 -14400)\">\r\n      <rect id=\"Rectangle_2987\" data-name=\"Rectangle 2987\" width=\"5\" height=\"289\" rx=\"2.5\" transform=\"translate(16107.232 14400)\"/>\r\n      <g id=\"Group_697\" data-name=\"Group 697\">\r\n        <rect id=\"Rectangle_2974\" data-name=\"Rectangle 2974\" width=\"5\" height=\"61.733\" transform=\"translate(16150.859 14400.247) rotate(45)\"/>\r\n        <rect id=\"Rectangle_2966\" data-name=\"Rectangle 2966\" width=\"5\" height=\"298.232\" rx=\"2.5\" transform=\"translate(16357.465 14686) rotate(90)\"/>\r\n        <rect id=\"Rectangle_2988\" data-name=\"Rectangle 2988\" width=\"187\" height=\"5\" rx=\"2.5\" transform=\"translate(16107.232 14400)\"/>\r\n        <rect id=\"Rectangle_2989\" data-name=\"Rectangle 2989\" width=\"5\" height=\"49\" rx=\"2.5\" transform=\"translate(16289.232 14401)\"/>\r\n        <g id=\"Group_696\" data-name=\"Group 696\">\r\n          <rect id=\"Rectangle_2970\" class=\"body__part body__left-hand\" data-name=\"Rectangle 2970\" width=\"5\" height=\"56\" rx=\"2.5\" transform=\"translate(16289.197 14498.247) rotate(45)\"/>\r\n          <rect id=\"Rectangle_2967\" class=\"body__part body__left-leg\" data-name=\"Rectangle 2967\" width=\"5\" height=\"56\" rx=\"2.5\" transform=\"translate(16291.197 14565.247) rotate(45)\"/>\r\n          <rect id=\"Rectangle_2971\" class=\"body__part body__right-hand\"  data-name=\"Rectangle 2971\" width=\"5\" height=\"56\" rx=\"2.5\" transform=\"translate(16290.732 14501.782) rotate(-45)\"/>\r\n          <path id=\"Path_355\" class=\"body__part body__right-leg\" data-name=\"Path 355\" d=\"M5,2.5v51a2.5,2.5,0,0,1-5,0V2.5C0,1.119,5,1.119,5,2.5Z\" transform=\"translate(16288.732 14568.783) rotate(-45)\"/>\r\n          <g id=\"Ellipse_32\" class=\"body__part body__head\"  data-name=\"Ellipse 32\" transform=\"translate(16263.732 14445.247)\" fill=\"none\" stroke=\"#000\" stroke-width=\"5\">\r\n            <circle cx=\"27.5\" cy=\"27.5\" r=\"27.5\" stroke=\"none\"/>\r\n            <circle cx=\"27.5\" cy=\"27.5\" r=\"25\" fill=\"none\"/>\r\n          </g>\r\n          <rect id=\"Rectangle_2990\" class=\"body__part body__corpus\" data-name=\"Rectangle 2990\" width=\"5\" height=\"73\" rx=\"2.5\" transform=\"translate(16289.232 14498)\"/>\r\n        </g>\r\n      </g>\r\n    </g>\r\n  </svg>\r\n  `;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://hangman/./src/js/gallows.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _questions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions.js */ \"./src/js/questions.js\");\n/* harmony import */ var _gallows_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallows.js */ \"./src/js/gallows.js\");\n/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys.js */ \"./src/js/keys.js\");\n\r\n\r\n\r\n\r\nfunction createNewArray(value) {\r\n  const result = [];\r\n  for (let i = 0; i < value; i += 1) {\r\n    result.push(i);\r\n  }\r\n  return result;\r\n}\r\nconsole.log('gegege');\r\nfunction shuffle(arr) {\r\n  let newArr = [...arr];\r\n  let currentIndex = arr.length;\r\n  let randomIndex;\r\n  // While there remain elements to shuffle.\r\n  while (currentIndex > 0) {\r\n    // Pick a remaining element.\r\n    randomIndex = Math.floor(Math.random() * currentIndex);\r\n    currentIndex -= 1;\r\n\r\n    // And swap it with the current element.\r\n    [newArr[currentIndex], newArr[randomIndex]] = [\r\n      newArr[randomIndex],\r\n      newArr[currentIndex]\r\n    ];\r\n  }\r\n  return newArr;\r\n}\r\nlet randIndex = createNewArray(_questions_js__WEBPACK_IMPORTED_MODULE_0__.questions.length);\r\nlet tempWord = shuffle(randIndex).slice(0, 1).pop();\r\nlet activeWord = _questions_js__WEBPACK_IMPORTED_MODULE_0__.questions[tempWord];\r\nlet counter = 0;\r\nlet maxLimit = 6;\r\nlet lettersArr = activeWord.answer.replaceAll(' ', '').split('');\r\nlet correctLettersArr = new Array(lettersArr.length).fill('_');\r\n\r\nconst appendStyles = (path) => {\r\n  let head = document.getElementsByTagName('head')[0];\r\n  let link = document.createElement('link');\r\n  link.setAttribute('rel', 'stylesheet');\r\n  link.href = path;\r\n  head.insertBefore(link, head.lastChild);\r\n};\r\nappendStyles('./css/normalize.css');\r\nappendStyles('./css/style.css');\r\n\r\nconst insertNode = (parentEl, node, className, text = '') => {\r\n  let div = document.createElement(node);\r\n  div.classList.add(className);\r\n  if (text) {\r\n    div.textContent = text;\r\n  }\r\n  document.querySelector(parentEl).appendChild(div);\r\n};\r\n// head, body, left arm, right arm, left leg, right leg\r\nconst resetGallows = () => {\r\n  Array.from(document.querySelectorAll('.body__part')).forEach((el) => {\r\n    el.classList.add('hide-gallows');\r\n  });\r\n};\r\nconst initKeyboardKeys = (obj) => {\r\n  // document.querySelector('.keyboard__row').innerHTML = '';\r\n  Object.entries(obj).forEach(([key, value]) => {\r\n    const buttonEl = document.createElement('button');\r\n    buttonEl.classList.add('keyboard__key');\r\n    buttonEl.setAttribute('data-key', `${key}`);\r\n    buttonEl.textContent = value.toUpperCase();\r\n    document.querySelector('.keyboard__row').append(buttonEl);\r\n  });\r\n};\r\n\r\nconst initUnderscores = () => {\r\n  document.querySelector('.underscore').innerHTML = '';\r\n  let ulEl = document.createElement('ul');\r\n  ulEl.classList.add('word');\r\n  lettersArr.forEach((el) => {\r\n    let element = document.createElement('li');\r\n    element.classList.add('letter');\r\n    element.textContent = '_';\r\n    element.setAttribute('data-li', el.toLowerCase());\r\n    ulEl.appendChild(element);\r\n  });\r\n  document.querySelector('.underscore').append(ulEl);\r\n};\r\n\r\nconst displayModal = (text) => {\r\n  document.querySelector('.modal-word').textContent = text;\r\n  document.querySelector('.modal-secret').textContent = activeWord.answer;\r\n  document.querySelector('.modal-container').style.display = 'flex';\r\n}; \r\n\r\nconst initHints = (hintObj, count) => {\r\n  document.querySelector('.letter-part').innerHTML = '';\r\n  let div = document.createElement('div');\r\n  if (hintObj) {\r\n    div.innerHTML = `<p class=\"hint\">Hint:<span class=\"answer-text\" data-hint=${hintObj.id}>${hintObj.hint}</span></p>\r\n    <p class=\"guesses\">Incorrect guesses: <b class=\"counter\">${count}</b><span>/</span><b class=\"maxlimit\">6</b></p>`;\r\n  }\r\n  document.querySelector('.letter-part').appendChild(div);\r\n};\r\n\r\nconst initModal = () => {\r\n  document.querySelector('.modal-container').innerHTML = '';\r\n  let modalContent = document.createElement('div');\r\n  let modalBtn = document.createElement('button');\r\n  modalBtn.setAttribute('type', 'button');\r\n  modalBtn.classList.add('close-btn');\r\n  modalBtn.textContent = 'Play again';\r\n  modalContent.classList.add('modal');\r\n  modalContent.insertAdjacentHTML('afterbegin', '<p class=\"modal-word\"></p>');\r\n  modalContent.insertAdjacentHTML('afterbegin', '<p>The secret word was: <b class=\"modal-secret\"></b></p>');\r\n  modalContent.appendChild(modalBtn);\r\n  document.querySelector('.modal-container').appendChild(modalContent);\r\n};\r\n/* eslint no-param-reassign: \"error\" */\r\n\r\nconst addBodyPart = (count) => {\r\n  const hangObj = {\r\n    head: 'body__head',\r\n    body: 'body__corpus',\r\n    leftHand: 'body__left-hand',\r\n    rightHand: 'body__right-hand',\r\n    leftLeg: 'body__left-leg',\r\n    rightLeg: 'body__right-leg'\r\n  };\r\n  let className = Object.values(hangObj)[count];\r\n  let node = document.querySelector(`.${className}`);\r\n  if (node.classList.contains('hide-gallows')) {\r\n    node.classList.remove('hide-gallows');\r\n  }\r\n};\r\n\r\nfunction updateGuess() {\r\n  let arr = Array.from(document.querySelectorAll('.letter'));\r\n  arr.forEach((node, index) => {\r\n    node.textContent = correctLettersArr[index];\r\n  });\r\n}\r\n\r\nfunction checkGuess(str, item) {\r\n  let currentKey = _keys_js__WEBPACK_IMPORTED_MODULE_2__.keysObj[item.dataset.key];\r\n  if (str.includes(currentKey)) {\r\n    for (let i = 0; i < str.length; i += 1) {\r\n      if (str[i] === currentKey) {\r\n        correctLettersArr[i] = currentKey;\r\n      }\r\n    }\r\n  } else {\r\n    addBodyPart(counter);\r\n    counter += 1;\r\n    document.querySelector('.counter').textContent = counter;\r\n    if (counter === maxLimit) displayModal('You Lost');\r\n  }\r\n}\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  document.body.insertAdjacentHTML(\r\n    'afterbegin',\r\n    '<div class=\"wrapper\"><div class=\"container\"><div class=\"content\"></div></div></div>'\r\n  );\r\n  insertNode('.content', 'div', 'gallows');\r\n  insertNode('.content', 'div', 'quiz');\r\n  insertNode('.content', 'div', 'modal-container');\r\n  (0,_gallows_js__WEBPACK_IMPORTED_MODULE_1__.insertImg)('.gallows');\r\n  insertNode('.gallows', 'p', 'subtitle', 'hangman game');\r\n  insertNode('.quiz', 'div', 'text');\r\n  insertNode('.quiz', 'div', 'keyboard');\r\n  insertNode('.text', 'div', 'underscore');\r\n  insertNode('.text', 'div', 'letter-part');\r\n  initUnderscores();\r\n  initHints(activeWord, counter);\r\n  initModal();\r\n  resetGallows();\r\n  insertNode('.keyboard', 'div', 'keyboard__row');\r\n  initKeyboardKeys(_keys_js__WEBPACK_IMPORTED_MODULE_2__.keysObj);\r\n  // document.querySelector('.keyboard')();\r\n  const modal = document.querySelector('.modal-container');\r\n  document.querySelector('.keyboard').addEventListener('click', (e) => {\r\n    let item = e.target;\r\n    let str = activeWord.answer.toLowerCase();\r\n    if (item.classList.contains('keyboard__key') && (item.closest('button'))) {\r\n      checkGuess(str, item);\r\n      if (!correctLettersArr.includes('_')) displayModal('You win');\r\n      updateGuess();\r\n      item.classList.add('disabled');\r\n    }\r\n  });\r\n  document.querySelector('.close-btn').addEventListener('click', () => {\r\n    modal.style.display = 'none';\r\n    counter = 0;\r\n    while (activeWord === _questions_js__WEBPACK_IMPORTED_MODULE_0__.questions[tempWord]) {\r\n      tempWord = shuffle(randIndex).slice(0, 1).pop();\r\n      if (activeWord !== _questions_js__WEBPACK_IMPORTED_MODULE_0__.questions[tempWord]) {\r\n        activeWord = _questions_js__WEBPACK_IMPORTED_MODULE_0__.questions[tempWord];\r\n        break;\r\n      }\r\n    }\r\n    lettersArr = activeWord.answer.replaceAll(' ', '').split('');\r\n    correctLettersArr = new Array(lettersArr.length).fill('_');\r\n    initUnderscores();\r\n    initHints(activeWord, counter);\r\n    resetGallows();\r\n    Array.from(document.querySelectorAll('.keyboard__key')).forEach((el) => {\r\n      el.classList.remove('disabled');\r\n    });\r\n  });\r\n  document.addEventListener('keydown', (e) => {\r\n    let item = document.querySelector(`.keyboard__key[data-key=\"${e.code}\"]`);\r\n    let str = activeWord.answer.toLowerCase();\r\n    if (item.classList.contains('disabled')) {\r\n      return;\r\n    }\r\n    if (item.closest('button')) {\r\n      checkGuess(str, item);\r\n      // let currentKey = keysObj[item.dataset.key];\r\n      // if (str.includes(currentKey)) {\r\n      //   for (let i = 0; i < str.length; i += 1) {\r\n      //     if (str[i] === currentKey) {\r\n      //       correctLettersArr[i] = currentKey;\r\n      //     }\r\n      //   }\r\n      // } else {\r\n      //   addBodyPart(counter);\r\n      //   counter += 1;\r\n      //   document.querySelector('.counter').textContent = counter;\r\n      //   if (counter === maxLimit) {\r\n      //     displayModal('You Lost');\r\n      //     Array.from(document.querySelectorAll('.keyboard__key')).forEach((el) => {\r\n      //       el.classList.add('disabled');\r\n      //     });\r\n      //   }\r\n      // }\r\n      if (!correctLettersArr.includes('_')) {\r\n        displayModal('You win');\r\n        Array.from(document.querySelectorAll('.keyboard__key')).forEach((el) => {\r\n          el.classList.add('disabled');\r\n        });\r\n      }\r\n      updateGuess();\r\n      item.classList.add('disabled');\r\n    }\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://hangman/./src/js/index.js?");

/***/ }),

/***/ "./src/js/keys.js":
/*!************************!*\
  !*** ./src/js/keys.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   keysObj: () => (/* binding */ keysObj)\n/* harmony export */ });\nlet keysObj = {\r\n  KeyA: 'a',\r\n  KeyB: 'b',\r\n  KeyC: 'c',\r\n  KeyD: 'd',\r\n  KeyE: 'e',\r\n  KeyF: 'f',\r\n  KeyG: 'g',\r\n  KeyH: 'h',\r\n  KeyI: 'i',\r\n  KeyJ: 'j',\r\n  KeyK: 'k',\r\n  KeyL: 'l',\r\n  KeyM: 'm',\r\n  KeyN: 'n',\r\n  KeyO: 'o',\r\n  KeyP: 'p',\r\n  KeyQ: 'q',\r\n  KeyR: 'r',\r\n  KeyS: 's',\r\n  KeyT: 't',\r\n  KeyU: 'u',\r\n  KeyV: 'v',\r\n  KeyW: 'w',\r\n  KeyX: 'x',\r\n  KeyY: 'y',\r\n  KeyZ: 'z'\r\n};\r\n\r\n\n\n//# sourceURL=webpack://hangman/./src/js/keys.js?");

/***/ }),

/***/ "./src/js/questions.js":
/*!*****************************!*\
  !*** ./src/js/questions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   questions: () => (/* binding */ questions)\n/* harmony export */ });\nlet questions = [{\r\n  id: 0,\r\n  hint: 'The Holiday',\r\n  answer: 'Halloween'\r\n}, {\r\n  id: 1,\r\n  hint: 'What you might get on Holiday',\r\n  answer: 'scared'\r\n}, {\r\n  id: 2,\r\n  hint: 'The Treat',\r\n  answer: 'candy'\r\n}, {\r\n  id: 3,\r\n  hint: 'What a with rides',\r\n  answer: 'Broomstick'\r\n}, {\r\n  id: 4,\r\n  hint: 'Spongebob friend',\r\n  answer: 'Patrick'\r\n}, {\r\n  id: 5,\r\n  hint: 'Might haunt you',\r\n  answer: 'Ghost'\r\n}, {\r\n  id: 6,\r\n  hint: 'Makes a good pie',\r\n  answer: 'pumpkin'\r\n}, {\r\n  id: 7,\r\n  hint: 'Find in Graveyard',\r\n  answer: 'skeleton'\r\n}];\r\n\r\n\n\n//# sourceURL=webpack://hangman/./src/js/questions.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;