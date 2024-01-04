const appendStyles = (path) => {
  let head = document.getElementsByTagName('head')[0];
  let link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.href = path;
  head.insertBefore(link, head.lastChild);
};
appendStyles('./css/normalize.css');
appendStyles('./css/style.css');
