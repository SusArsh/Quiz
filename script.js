let currentIndex = 0;
let next = document.getElementById('next');
let previous = document.getElementById('previous');
let calculate = document.getElementById('calculate');
let elements = document.getElementsByClassName('slide');
let container = document.getElementById('container');
let points = 0;
let form = document.forms['form'];
let answers = ['3', '3', '1', '2', '2', '3', '1', '2', '1', '2'];
let input = document.getElementsByTagName('input');


let start = document.getElementById('go');
start.addEventListener('click', function () {
  elements[currentIndex].style.display = 'block';
  next.style.display = 'inline';
  go.style.display = 'none';
  previous.style.display = 'none';

})



function forNext() {
  if (currentIndex < elements.length - 1) {
    elements[currentIndex].style.display = 'none';
    previous.style.display = 'block';
    ++currentIndex;
    elements[currentIndex].style.display = 'block';
  }
  if (currentIndex + 1 == elements.length) {
    next.style.display = 'none';
    calculate.style.display = 'block';
  }
}
document.getElementById('next').addEventListener('click', function () {
  if (form['quest-' + currentIndex].value !== '') {
    forNext();
  }
})


calculate.addEventListener('click', function () {
  container.style.display = 'none';

  calculate.innerHTML = 'OK';
  if (currentIndex === elements.length - 1) {

    answers.forEach((item, i) => {
      if (form['quest-' + i].value === item) {
        points += 1;
    return;


      }
    })
    let text = document.createElement('p');
    text.innerHTML = 'YOU HAVE A' + '   ' + points + '   ' + 'POINTS !!!!';
    
    document.body.append(text);
    text.style.fontSize = '50px';
    text.style.color = 'red';
    text.style.textAlign = 'center';


  }
})

function forPrev() {
  if (currentIndex != 0) {
    elements[currentIndex].style.display = 'none';
    --currentIndex;
    elements[currentIndex].style.display = 'block';
  };
}


previous.addEventListener('click', function () {


  forPrev();
})

