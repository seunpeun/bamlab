const revealItems = document.querySelectorAll('.reveal');

window.addEventListener('DOMContentLoaded', () => {
  revealItems.forEach((item, index) => {
    window.setTimeout(() => {
      item.classList.add('is-visible');
    }, 80 * index);
  });
});
