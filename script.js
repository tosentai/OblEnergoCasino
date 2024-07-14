document.getElementById('spinButton').addEventListener('click', spin);

function spin() {
    const icons = ['🚨', '💡'];
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');
    const result = document.getElementById('result');

    reel1.classList.add('spin');
    reel2.classList.add('spin');
    reel3.classList.add('spin');

    result.textContent = '';

    setTimeout(() => {
        const icon1 = icons[Math.floor(Math.random() * icons.length)];
        const icon2 = icons[Math.floor(Math.random() * icons.length)];
        const icon3 = icons[Math.floor(Math.random() * icons.length)];

        reel1.textContent = icon1;
        reel2.textContent = icon2;
        reel3.textContent = icon3;

        reel1.classList.remove('spin');
        reel2.classList.remove('spin');
        reel3.classList.remove('spin');

        if (icon1 === '💡' && icon2 === '💡' && icon3 === '💡') {
            result.textContent = '🎉 У вас буде світло 🎉';
        } else {
            result.textContent = 'Фіг вам, а не світло';
        }
    }, 1000);
}
