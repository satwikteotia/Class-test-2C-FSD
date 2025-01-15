document.addEventListener('DOMContentLoaded', () => {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    const startButton = document.getElementById('startButton');
    const generateBulbsButton = document.getElementById('generateBulbs');
    const backButton = document.getElementById('backButton');
    const bulbContainer = document.getElementById('bulbContainer');
    const numBulbsInput = document.getElementById('numBulbs');
  
    startButton.addEventListener('click', () => {
      page1.style.display = 'none';
      page2.style.display = 'block';
    });
  
    generateBulbsButton.addEventListener('click', () => {
      const numBulbs = parseInt(numBulbsInput.value);
      bulbContainer.innerHTML = '';
      for (let i = 0; i < numBulbs; i++) {
        const bulbItem = document.createElement('div');
        const bulbImage = document.createElement('img');
        const switchLabel = document.createElement('label');
  
        bulbImage.src = 'https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png';
        switchLabel.classList.add('switch');
  
        const toggleInput = document.createElement('input');
        toggleInput.type = 'checkbox';
        const slider = document.createElement('span');
        slider.classList.add('slider');
  
        toggleInput.addEventListener('change', () => {
          bulbImage.src = toggleInput.checked ? 
            'onbulb.png' : 
            'offbulb.png';
        });
  
        switchLabel.appendChild(toggleInput);
        switchLabel.appendChild(slider);
  
        bulbItem.appendChild(bulbImage);
        bulbItem.appendChild(switchLabel);
  
        bulbContainer.appendChild(bulbItem);
      }
  
      page2.style.display = 'none';
      page3.style.display = 'block';
    });
  
    backButton.addEventListener('click', () => {
      page3.style.display = 'none';
      page1.style.display = 'block';
    });
  
    page1.style.display = 'block';
  });