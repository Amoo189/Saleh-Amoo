// موزیک
let playing = false;
function toggleMusic() {
  const music = document.getElementById("bgMusic");
  playing ? music.pause() : music.play();
  playing = !playing;
}

// مودال
function openModal(type) {
  const modal = document.getElementById("modal");
  const text = document.getElementById("modalText");
  text.innerText = type === 'creator'
    ? 'ساخته شده توسط صالح عمو'
    : 'صالح عمو';
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// انیمیشن اسکرول
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = 1;
      e.target.style.transform = 'translateY(0)';
      e.target.style.transition = '1s';
    }
  });
});

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));




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


document.addEventListener("mousemove", e => {
  const c = document.getElementById("cursor");
  c.style.left = e.pageX + "px";
  c.style.top = e.pageY + "px";
});


const text = "SA23 — لِول بعدی برنامه‌نویسی";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 80);
  }
}
typeEffect();
