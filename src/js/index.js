// const questions = [{
//   Hint: 'The Holiday',
//   answer: 'Halloween'
// }, {
//   Hint: 'What you might get on Holiday',
//   answer: 'scared'
// }, {
//   Hint: 'The Treat',
//   answer: 'candy'
// }, {
//   Hint: 'What a with rides',
//   answer: 'Broomstick'
// }, {
//   Hint: 'Witch',
//   answer: 'Casts a spell'
// }, {
//   Hint: 'Might haunt you',
//   answer: 'Ghost'
// }, {
//   Hint: 'Makes a good pie',
//   answer: 'pumpkin'
// }, {
//   Hint: 'Find in Graveyard',
//   answer: 'skeleton'
// }];

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
const insertImg = () => {
  document.querySelector('.gallows').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="298.232" height="291" viewBox="0 0 298.232 291">
  <g id="Group_700" data-name="Group 700" transform="translate(-16059.232 -14400)">
    <rect id="Rectangle_2987" data-name="Rectangle 2987" width="5" height="289" rx="2.5" transform="translate(16107.232 14400)"/>
    <g id="Group_697" data-name="Group 697">
      <rect id="Rectangle_2974" data-name="Rectangle 2974" width="5" height="61.733" transform="translate(16150.859 14400.247) rotate(45)"/>
      <rect id="Rectangle_2966" data-name="Rectangle 2966" width="5" height="298.232" rx="2.5" transform="translate(16357.465 14686) rotate(90)"/>
      <rect id="Rectangle_2988" data-name="Rectangle 2988" width="187" height="5" rx="2.5" transform="translate(16107.232 14400)"/>
      <rect id="Rectangle_2989" data-name="Rectangle 2989" width="5" height="49" rx="2.5" transform="translate(16289.232 14401)"/>
      <g id="Group_696" data-name="Group 696">
        <rect id="Rectangle_2970" class="body__part" data-name="Rectangle 2970" width="5" height="56" rx="2.5" transform="translate(16289.197 14498.247) rotate(45)"/>
        <rect id="Rectangle_2967" class="body__part" data-name="Rectangle 2967" width="5" height="56" rx="2.5" transform="translate(16291.197 14565.247) rotate(45)"/>
        <rect id="Rectangle_2971" class="body__part" data-name="Rectangle 2971" width="5" height="56" rx="2.5" transform="translate(16290.732 14501.782) rotate(-45)"/>
        <path id="Path_355" class="body__part" data-name="Path 355" d="M5,2.5v51a2.5,2.5,0,0,1-5,0V2.5C0,1.119,5,1.119,5,2.5Z" transform="translate(16288.732 14568.783) rotate(-45)"/>
        <g id="Ellipse_32" class="body__part" data-name="Ellipse 32" transform="translate(16263.732 14445.247)" fill="none" stroke="#000" stroke-width="5">
          <circle cx="27.5" cy="27.5" r="27.5" stroke="none"/>
          <circle cx="27.5" cy="27.5" r="25" fill="none"/>
        </g>
        <rect id="Rectangle_2990" class="body__part" data-name="Rectangle 2990" width="5" height="73" rx="2.5" transform="translate(16289.232 14498)"/>
      </g>
    </g>
  </g>
</svg>
`;
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

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML(
    'afterbegin',
    '<div class="wrapper"><div class="container"></div></div>'
  );

  const containerEl = document.querySelector('.container');
  containerEl.appendChild(insertNode('div', 'gallows'));
  containerEl.appendChild(insertNode('div', 'quiz'));
  // containerEl.appendChild(insertImg('./assets/hangman-new.svg'));
  insertImg();
  resetGallows();
  document.querySelector('.gallows').appendChild(insertNode('p', 'subtitle', 'hangman game'));
  document.querySelector('.quiz').appendChild(insertNode('div', 'text'));
  document.querySelector('.quiz').appendChild(insertNode('div', 'keyboard'));
  document.querySelector('.text').insertAdjacentHTML('afterbegin', '<div class="underscore"><ul class="word"></ul></div>');
  document.querySelector('.text').insertAdjacentHTML('beforeend', '<p class="hint">Hint:<span class="answer-text"></span></p>');
  document.querySelector('.text').insertAdjacentHTML('beforeend', ' <p class="guesses"><b>0 / 6</b></p>');
  
  for (let i = 1; i < 7; i += 1) {
    document.querySelector('.word').appendChild(insertNode('li', 'letter'));
  }
});
