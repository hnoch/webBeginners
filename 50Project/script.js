const panels = document.querySelectorAll('.panel'); // 클래스가 패널인 것을 전부 가져오기

// console.log(panels);
// console.log(panels[0]);

panels.forEach((panel) => {
    // console.log(panel);
    // 클릭 이벤트
    panel.addEventListener('click', () => {
        // 누른 해당 패널의 클래스 active 기능을 삭제
        removeActiveClasses();
        // 클릭을 하면 active( active 시 flex: 5 )
        panel.classList.add('active');
    });
});

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}
