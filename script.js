const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
});

// Background Interactive Animation
const animationBackground = document.getElementById('background-animation');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    animationBackground.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
});
