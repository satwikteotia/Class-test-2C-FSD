document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const modal = document.getElementById('modal');
    const doneBtn = document.getElementById('doneBtn');
    const bulbContainer = document.getElementById('bulbContainer');
    const resetBtn = document.getElementById('resetBtn');
    const bulbCountInput = document.getElementById('bulbCount');

    startBtn.addEventListener('click', () => {
        startBtn.style.display = 'none';
        modal.classList.remove('hidden');
    });

    doneBtn.addEventListener('click', () => {
        const bulbCount = bulbCountInput.value || 4;
        modal.classList.add('hidden');
        createBulbs(bulbCount);
        resetBtn.classList.remove('hidden');
    });

    resetBtn.addEventListener('click', () => {
        bulbContainer.innerHTML = '';
        resetBtn.classList.add('hidden');
        startBtn.style.display = 'block';
    });

    function createBulbs(count) {
        for (let i = 0; i < count; i++) {
            const bulb = document.createElement('div');
            bulb.classList.add('bulb', 'bulb-off');
            bulb.addEventListener('click', () => toggleBulb(bulb));
            bulbContainer.appendChild(bulb);
        }
    }

    function toggleBulb(bulb) {
        if (bulb.classList.contains('bulb-off')) {
            bulb.classList.remove('bulb-off');
            bulb.classList.add('bulb-on');

            
            setTimeout(() => {
                bulb.classList.remove('bulb-on');
                bulb.classList.add('bulb-off');
            }, 10000);
        } else {
            bulb.classList.remove('bulb-on');
            bulb.classList.add('bulb-off');
        }
    }
});
