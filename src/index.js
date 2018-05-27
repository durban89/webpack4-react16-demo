import _ from 'lodash';
import './index.css';
import DemoImage from './demo-image.png';
import Data from './data.xml';
import printMe from './print.js';


function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('red-color');

  let img = new Image();
  img.src = DemoImage;
  element.appendChild(img);

  console.log(Data);

  btn.innerHTML = '点击我并查看控制台! - Webpack-dev-server';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());