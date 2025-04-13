const input = document.getElementById('searchInput');
const cards = document.querySelectorAll('.token-card');

input.addEventListener('keyup', function () {
  const filter = input.value.toLowerCase();
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(filter) ? 'block' : 'none';
  });
});
