function openModal(type) {
  const modal = document.getElementById('modal');
  const text = document.getElementById('modal-text');

  if (type === 'creator') {
    text.innerText = 'ساخته شده توسط صالح عمو';
  } else if (type === 'designer') {
    text.innerText = 'صالح عمو';
  }

  modal.style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// انیمیشن ورود المان‌ها
window.addEventListener('load', () => {
  document.querySelectorAll('section').forEach((sec, i) => {
    sec.style.opacity = 0;
    sec.style.transform = 'translateY(30px)';
    setTimeout(() => {
      sec.style.transition = '0.8s';
      sec.style.opacity = 1;
      sec.style.transform = 'translateY(0)';
    }, i * 300);
  });
});
