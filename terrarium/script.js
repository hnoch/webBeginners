dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));

function dragElement(terrariumElement) {
    //set 4 positions for positioning on the screen
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    terrariumElement.onpointerdown = pointerDrag; // 마우스 누를 때

    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        // clientX : 브라우저 페이지에서의 X좌표 위치를 반환
        // clienty : 브라우저 페이지에서의 y좌표 위치를 반환
        pos3 = e.clientX;
        pos4 = e.clientY;
        // when the mouse moves, start the drag > 마우스 움직이며, 드래그 할 때
        document.onpointermove = elementDrag;
        // when the mouse is lifted, stop the drag > 마우스 떼고, 드래그 멈출 때
        document.onpointerup = stopElementDrag;
        const para = document.querySelector('p');
    }

    function elementDrag(e) {
        // calculate the new cursor position
        // pos1 = where the Xmouse WAS - where it ISIS
        pos1 = pos3 - e.clientX;
        // pos2 = where the Ymouse WAS - where it IS
        pos2 = pos4 - e.clientY;
        //reset pos3 to current location of Xmouse
        pos3 = e.clientX;
        //reset pos4 to current location of Ymouse
        pos4 = e.clientY;
        console.log(pos1, pos2, pos3, pos4);
        // set the element's new position:
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    }

    function stopElementDrag() {
        // stop calculating when mouse is released
        document.onpointerup = null;
        document.onpointermove = null;
    }
}
