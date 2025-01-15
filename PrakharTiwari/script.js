document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const modal = document.getElementById('modal');
    const doneBtn = document.getElementById('doneBtn');
    const bulbContainer = document.getElementById('bulbContainer');
    const resetBtn = document.getElementById('resetBtn');
    const bulbCountInput = document.getElementById('bulbCount');

    
    document.getElementById('modal').style.display = 'none';
    document.getElementById('bulbContainer').style.display = 'none';

    startBtn.addEventListener('click', () => {
        startBtn.style.display = 'none';
        modal.style.display = 'block';
    });

    doneBtn.addEventListener('click', () => {
        const bulbCount = bulbCountInput.value || 4;
        modal.style.display = 'none';
        createBulbs(bulbCount);
        bulbContainer.style.display = 'block';
    });

    resetBtn.addEventListener('click', () => {
        bulbContainer.innerHTML = '';
        resetBtn.classList.add('hidden');
        startBtn.style.display = 'block';
    });

    function createBulbs(count) {
        for (let i = 0; i < count; i++) {
            const bulbContainer = document.createElement('div');
            bulbContainer.style.display = 'flex';
            bulbContainer.style.flexDirection = 'column';
            bulbContainer.style.alignItems = 'center';
            bulbContainer.style.margin = '20px';

            const bulb = document.createElement('div');
            bulb.classList.add('bulb', 'bulb-off');

            const switchLabel = document.createElement('label');
            switchLabel.className = 'switch';

            const switchInput = document.createElement('input');
            switchInput.type = 'checkbox';

            const switchSlider = document.createElement('span');
            switchSlider.className = 'switch-slider';

            switchLabel.appendChild(switchInput);
            switchLabel.appendChild(switchSlider);
            switchInput.addEventListener('change', () => {
                if (switchInput.checked) {
                    bulb.classList.remove('bulb-off');
                    bulb.classList.add('bulb-on');
                } else {
                    bulb.classList.remove('bulb-on');
                    bulb.classList.add('bulb-off');
                }
            });

            bulbContainer.appendChild(bulb);
            bulbContainer.appendChild(switchLabel);
            document.getElementById('bulbContainer').appendChild(bulbContainer);
        }
    }
});