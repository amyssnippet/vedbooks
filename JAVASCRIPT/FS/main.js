const openDialogButton = document.getElementById('open-fullscreen');
const closeDialogButton = document.getElementById('close-fullscreen');
const fullscreen = document.getElementById('fullscreen');
const body = document.body;

openDialogButton.addEventListener('click', () => {
  fullscreen.style.display = 'flex';
});

closeDialogButton.addEventListener('click', () => {
  fullscreen.style.display = 'none';
});
