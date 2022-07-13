'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', changeColor)
                                                          //action,result//
function changeColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256); 
  const b = Math.floor(Math.random() * 256);
 
 document.body.style.backgroundColor = "rgb(" + r + "," + g + ","+ b + ")";
  
  


  console.log('Button clicked and see magic!'); // feel free to change/delete this line
}

