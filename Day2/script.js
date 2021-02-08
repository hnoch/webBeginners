// id 값이 progress인 것
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
// 클래스가 .circle 인 것을 전부 가져오기
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

// next 버튼 클릭 이벤트
next.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

// prev 버튼 클릭 이벤트
prev.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');
  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
