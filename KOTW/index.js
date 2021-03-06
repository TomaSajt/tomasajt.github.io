class Robot {
    dir = 1
    x = 10;
    y = 10;
    time = 0
    stones = [NaN, NaN, 100, 100, 100, 100]
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
            this.time++;
            update()
        } else {
            alert("I can't move")
        }
    }
    getInFront() {
        var nextX = this.x;
        var nextY = this.y;
        switch (this.dir) {
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
        if (nextX >= 0 && nextX < data.length && nextY >= 0 && nextY < data[0].length) {
            return data[nextX][nextY];
        }
        return -1;
    }
    canStep() {
        var b = this.getInFront();
        return b != -1 && b != 1
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
        this.time++
        update()
    }
    turnRight() {
        this.turn(1)
    }
    turnLeft() {
        this.turn(-1)
    }
    getUnder() {
        return data[this.x][this.y]
    }
    isStone() {
        return this.getUnder() >= 2
    }
    getDirection() {
        return this.dir;
    }
    placeStone(color) {
        if (this.isStone())
            alert("I cannot place down the stone, because there already is one here!");
        else if (this.stones[color] <= 0)
            alert("I cannot place down a stone, because I don't have any!");
        else {
            data[this.x][this.y] = color;
            this.stones[color]--;
            this.time++
            update()
        }
    }
    pickUpStone() {
        if (this.isStone()) {
            this.stones[this.getUnder()]++;
            data[this.x][this.y] = 0;
            this.time++
            update()
        } else {
            alert("I cannot pick up the stone!");
        }
    }

}
function modulo(a, b) {
    if (a < 0)
        return b + a % b;
    else
        return a % b;
}
console.log(modulo(-1, 4))


document.addEventListener('mousedown', function (event) {
    if (event.detail > 1) {
        event.preventDefault();
    }
}, false);
function getContext() {
    return canvas.getContext("2d");
}
function clear() {
    getContext().clearRect(0, 0, canvas.width, canvas.height);
}
function update() {
    clear()
    var ctx = getContext()
    ctx.strokeStyle = "#3F3F3F"
    for (var i = 0; i <= data.length; i++) {
        ctx.beginPath()
        ctx.moveTo((imgSize + 1) * i, 0)
        ctx.lineTo((imgSize + 1) * i, canvas.height)
        ctx.stroke()
    }
    for (var i = 0; i <= data[0].length; i++) {
        ctx.beginPath()
        ctx.moveTo(0, (imgSize + 1) * i)
        ctx.lineTo(canvas.width, (imgSize + 1) * i)
        ctx.stroke()
    }
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[0].length; j++) {
            if (data[i][j] == 1) {
                ctx.fillStyle = "#3F3F3F"
                ctx.fillRect(i * (imgSize + 1), j * (imgSize + 1), imgSize + 1, imgSize + 1)
            }
            if (data[i][j] >= 2) {
                if (data[i][j] == 2) {
                    ctx.fillStyle = "black"
                } else if (data[i][j] == 3) {
                    ctx.fillStyle = "red"
                } else if (data[i][j] == 4) {
                    ctx.fillStyle = "green"
                } else if (data[i][j] == 5) {
                    ctx.fillStyle = "yellow"
                }
                ctx.beginPath()
                ctx.arc(i * (imgSize + 1) + imgSize / 2 + 0.5, j * (imgSize + 1) + imgSize / 2 + 0.5, (imgSize) / 2 - 0.5, 0, 2 * Math.PI)
                ctx.fill()
            }
        }
    }
    try {
        ctx.drawImage(karesz.getDirImage(), karesz.x * (imgSize + 1) + 1, karesz.y * (imgSize + 1))
    } catch (e) {
        console.log("could not draw karesz")
    }

}
function saveLevel() {
    var levelString = "";
    for (var j = 0; j < data[0].length; j++) {
        for (var i = 0; i < data.length; i++) {
            levelString += data[i][j]
            if (i != data.length - 1) {
                levelString += "\t";
            }
        }
        levelString += "\n";
    }
    var file = new Blob([levelString], { type: "text / plain" });
    var name = "level.txt";
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, name);
    else { // Others
        var a = document.createElement("a"),
            url = URL.createObjectURL(file);
        a.href = url;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}

var upImage
var rightImage
var downImage
var leftImage
var canvas = document.createElement("canvas")
var imgSize = 20
var data = Array(41).fill().map(function () { return Array(31).fill(0) })
data[3][4] = 1
data[3][5] = 1
data[4][6] = 1
data[5][6] = 1
data[6][6] = 1
data[7][6] = 1
data[8][6] = 1
data[9][6] = 1
data[10][5] = 1
data[10][4] = 1

data[5][1] = 1
data[8][1] = 1
var karesz = new Robot()






upImage = document.getElementById('up')
rightImage = document.getElementById('right')
downImage = document.getElementById('down')
leftImage = document.getElementById('left')

canvas.width = data.length * (imgSize + 1) + 1;
canvas.height = data[0].length * (imgSize + 1) + 1;
var ctx = getContext();
ctx.translate(0.5, 0.5)
ctx.imageSmoothingEnabled = false;
document.getElementById('canvasContainer').appendChild(canvas)


window.onload = update