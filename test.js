function createTag(tagName, props, textContent = '') {
  const element = document.createElement(tagName);

  if (props) {
    Object.keys(props).forEach(function (key) {
      element[key] = props[key];
    })
  }

  if (textContent) {
    element.textContent = textContent;
  }

  return element;

}

const root = document.getElementById('root');

const asd = { width: "100px" };
const div = createTag('div', asd, "asdsad");
root.append(div);

// const div1 = createTag('div', { style: { backgroundColor: 'blue', color: 'white' } }, 'asd');
// const div1 = createTag('div', { style: { backgroundColor: 'blue', color: 'white' } }, 'asd');
const div1 = createTag('div', { style: 'background-color: blue; color: white;' }, 'asd');



root.appendChild(div1);
