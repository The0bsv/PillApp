function toggleTheme() {
    document.body.classList.toggle('light');
}
function hardcoreMode() {
    alert('⚡ Хардкор активирован! Готовься к полной перезагрузке 💥');
}
// Таймер курса
let daysLeft = 30;
setInterval(() => {
    if (daysLeft > 0) {
        document.getElementById('timer').innerText = 'До конца курса: ' + daysLeft + ' дней';
        daysLeft--;
    } else {
        document.getElementById('timer').innerText = '🎉 Курс завершён!';
    }
}, 86400000); // обновление каждые 24ч
