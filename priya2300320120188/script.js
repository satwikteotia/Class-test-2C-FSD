const startButton = document.getElementById('startButton');
const modal = document.getElementById('modal');
const closeButton = document.getElementsByClassName('close')[0];
const doneButton = document.getElementById('doneButton');
const numberInput = document.getElementById('numberInput');
const bulbContainer = document.getElementById('bulbContainer');
const resetButton = document.getElementById('resetButton');
const toggleContainer = document.getElementById('toggleContainer');

const bulbOnImage = 'https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png';
const bulbOffImage = 'https://tse3.mm.bing.net/th?id=OIP.gCyfU_YjPSFedeV9kFlY_QAAAA&w=300&h=538&rs=1&pid=ImgDetMain';

startButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

doneButton.addEventListener('click', () => {
  const numBulbs = parseInt(numberInput.value);

  if (isNaN(numBulbs) || numBulbs <= 0) {
    alert('Please enter a valid number of bulbs.');
    return;
  }

  bulbContainer.innerHTML = '';
  toggleContainer.innerHTML = '';

  for (let i = 0; i < numBulbs; i++) {
    const bulb = document.createElement('div');
    bulb.classList.add('bulb');

    const bulbImage = document.createElement('img');
    bulbImage.classList.add('bulb-image');
    bulbImage.src = bulbOffImage;

    bulb.appendChild(bulbImage);
    bulbContainer.appendChild(bulb);

    // Create a toggle button
    const toggleButton = document.createElement('div');
    toggleButton.classList.add('toggle-button');
    toggleButton.setAttribute('data-index', i); // Store the bulb index

    toggleContainer.appendChild(toggleButton);
  }

  // Add event listeners to toggle buttons
  const toggleButtons = document.querySelectorAll('.toggle-button');
  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const bulbIndex = parseInt(button.getAttribute('data-index'));
      const bulbs = document.querySelectorAll('.bulb');
      const bulb = bulbs[bulbIndex];
      const bulbImage = bulb.querySelector('.bulb-image');

      if (bulbImage.src === bulbOffImage) {
        bulbImage.src = bulbOnImage;
        button.classList.add('active');
      } else {
        bulbImage.src = bulbOffImage;
        button.classList.remove('active');
      }
    });
  });

  modal.style.display = 'none';
});

resetButton.addEventListener('click', () => {
  // Remove all existing bulbs and toggle buttons
  bulbContainer.innerHTML = '';
  toggleContainer.innerHTML = '';

  // Show the start button again
  startButton.style.display = 'block';
});