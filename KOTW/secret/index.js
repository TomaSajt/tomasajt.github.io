var clicked = false;
var secret = new Audio('secret.m4a');
function openChest() {
    if (!clicked) {
        clicked = true;
        document.getElementById('secret').style.opacity = 0;
        setTimeout(xd, 3000);

        function xd() {
            document.getElementById('secret').src = '../../assets/Karesz.png'
            document.getElementById('secret').style.transition = 'none';
            document.getElementById('secret').style.opacity = 1;
            document.getElementById('secret').style.transform
            secret.play();
        }
    }
}