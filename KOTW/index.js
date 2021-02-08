class Robot {
    dir = 1
    x = 10;
    y = 10;
    step() {
        if (this.canStep(this.dir)) {
            switch (this.dir) {
                case 0:
                    this.y--;
                    break;
                case 1:
                    this.x++;
                    break;
                case 2:
                    this.y++;
                    break;
                case 3:
                    this.x--;
                    break;
            }
            update()
        } else {
            alert("I can't move")
        }
    }
    canStep(dir) {
        var nextX = this.x;
        var nextY = this.y;
        switch (dir) {
            case 0:
                nextY -= 1;
                break;
            case 1:
                nextX += 1;
                break;
            case 2:
                nextY += 1;
                break;
            case 3:
                nextX -= 1;
                break;
        }
        return nextX >= 0 && nextX < data.length && nextY >= 0 && nextY < data[0].length && data[nextX, nextY] != 1
    }
    getDirImage() {
        switch (this.dir) {
            case 0:
                return upImage
            case 1:
                return rightImage
            case 2:
                return downImage
            case 3:
                return leftImage
        }
    }
    turn(n) {
        this.dir = modulo(this.dir + n, 4)
        update()
    }
    turnRight() {
        this.turn(1)
    }
    turnLeft() {
        this.turn(-1)
    }
    
}
function modulo(a, b)
{
    if (a < 0)
        return b + a % b;
    else
        return a % b;
}
console.log(modulo(-1,4))
var upImage
var rightImage
var downImage
var leftImage
var canvas = document.createElement("canvas")
var imgSize = 20
var data = create2DArray(41, 31)
var karesz = new Robot()
window.onload = () => {
    upImage = document.getElementById('up')
    rightImage = document.getElementById('right')
    downImage = document.getElementById('down')
    leftImage = document.getElementById('left')
    console.log(upImage)
    start()
}
function getContext() {
    return canvas.getContext("2d");
}
function clear() {
    getContext().clearRect(0, 0, canvas.width, canvas.height);
}
function update() {
    clear()
    var ctx = getContext()
    for (var i = 0; i <= data.length; i++) {
        ctx.moveTo((imgSize + 1) * i, 0)
        ctx.lineTo((imgSize + 1) * i, canvas.height)
        ctx.stroke()
    }
    for (var i = 0; i <= data[0].length; i++) {
        ctx.moveTo(0, (imgSize + 1) * i)
        ctx.lineTo(canvas.width, (imgSize + 1) * i)
        ctx.stroke()
    }
    ctx.drawImage(karesz.getDirImage(), karesz.x * (imgSize + 1) + 1, karesz.y * (imgSize + 1), imgSize, imgSize)
}
function start() {
    canvas.width = data.length * (imgSize + 1) + 1;
    canvas.height = data[0].length * (imgSize + 1) + 1;
    canvas.style.padding = "10px"
    var ctx = getContext();
    ctx.translate(0.5, 0.5)
    document.body.appendChild(canvas)
    update()
}
function create2DArray(width, height) {
    var arr = [[]]
    arr = new Array(width);
    for (var i = 0; i < width; i++) {
        arr[i] = new Array(height);
    }
    return arr;
}

