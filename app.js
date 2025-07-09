
const switchBtn = document.getElementById('switch');
const app = document.getElementById('app');
const hcBtn = document.getElementById('hardcoreBtn');
const hcText = document.getElementById('hardcore');

switchBtn.addEventListener('click', () => {
    if (app.classList.contains('brutal')) {
        app.classList.remove('brutal');
        app.classList.add('sweet');
        switchBtn.textContent = '💀 Переключить стиль';
    } else {
        app.classList.remove('sweet');
        app.classList.add('brutal');
        switchBtn.textContent = '🍭 Переключить стиль';
    }
});

hcBtn.addEventListener('click', () => {
    const code = prompt('Введите код для Хардкора:');
    if (code === 'FORTITVDO') {
        hcText.style.display = 'block';
        alert('🔥 Хардкор активирован!');
    } else {
        alert('❌ Неверный код.');
    }
});
