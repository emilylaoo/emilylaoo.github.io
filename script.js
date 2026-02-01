

document.addEventListener('DOMContentLoaded', () => {

const envelope = document.getElementById('envelope');

  setTimeout(() => {
    envelope.classList.add('open');
    envelope.classList.remove('close');
  }, 500);

  setTimeout(() => {
    document.querySelector('.flap').style.zIndex = -2;
}, 1700);



  const button = document.getElementById('no');

  window.addEventListener('mousemove', (event) => {
    const mousex = event.clientX;
    const mousey = event.clientY;

    const rect = button.getBoundingClientRect();
    const buttonx = rect.left + rect.width / 2;
    const buttony = rect.top + rect.height / 2;

    const distx = mousex - buttonx;
    const disty = mousey - buttony;
    const distance = Math.sqrt(distx * distx + disty * disty);

    if (distance < 100) {
      const rect2 = button.getBoundingClientRect();
      const btnW = rect2.width;
      const btnH = rect2.height;

      const maxX = window.innerWidth - btnW;
      const maxY = window.innerHeight - btnH;

      const newX = Math.floor(Math.random() * maxX);
      const newY = Math.floor(Math.random() * maxY);

      button.style.left = `${newX}px`;
      button.style.top = `${newY}px`;
      
      const yesbtn = document.getElementById('yes');
      
      yesbtn.style.width = `${parseInt(yesbtn.style.width) + 15}px`;
      yesbtn.style.height = `${parseInt(yesbtn.style.height) + 8}px`;
      yesbtn.style.fontSize = `${parseInt(yesbtn.style.fontSize || 16) + 1.5}px`;
    }
  });
});

window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('yes');
    button.addEventListener('click', () => {
        window.location.href = "yay.html";
    });
});