const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let cw = window.innerWidth;
let ch = window.innerHeight;
let charArr = [
  "頁",
  "設",
  "是",
  "煵",
  "엌",
  "嫠",
  "쯦",
  "案",
  "煪",
  "㍱",
  "從",
  "つ",
  "浳",
  "浤",
  "搰",
  "㍭",
  "煤",
  "洳",
  "橱",
  "橱",
  "迎",
  "事",
  "網",
  "計",
  "簡",
  "大",
  "㍵",
  "畱",
  "煵",
  "田",
  "煱",
  "둻",
  "睤",
  "㌹",
  "楤",
  "ぱ",
  "椹",
  "ぱ",
  "頹",
  "衙",
  "頁",
  "設",
  "是",
  "煵",
  "엌",
  "嫠",
  "쯦",
  "案",
  "煪",
  "㍱",
  "從",
  "つ",
  "浳",
  "浤",
  "搰",
  "㍭",
  "煤",
  "洳",
  "橱",
  "橱",
  "迎",
  "事",
  "網",
  "計",
  "簡",
  "大",
  "㍵",
  "畱",
  "煵",
  "田",
  "煱",
  "둻",
  "睤",
  "㌹",
  "楤",
  "ぱ",
  "椹",
  "ぱ",
  "頹",
  "衙",
];

let maxCharCount = 10000;
let fallingCharArr = [];
let fontSize = 13;
let maxColumns = cw / fontSize;

canvas.width = cw;
canvas.height = ch;

let frames = 0;

class FallingChar {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(ctx) {
    this.value =
      charArr[Math.floor(Math.random() * (charArr.length - 1))].toUpperCase();
    this.speed = (Math.random() * fontSize * 3) / 4 + (fontSize * 3) / 4;

    ctx.fillStyle = "rgba(0, 255, 0)";
    ctx.font = fontSize + "px san-serif";
    ctx.fillText(this.value, this.x, this.y);
    this.y += this.speed;

    if (this.y > ch) {
      this.draw.y = (Math.random() * ch) / 2 - 50;
      this.x = Math.floor(Math.random() * maxColumns) * fontSize;
      this.speed = (-Math.random() * fontSize * 3) / 4 + (fontSize * 3) / 4;
    }
  }
}

let update = () => {
  if (fallingCharArr.length < maxCharCount) {
    let fallingChar = new FallingChar(
      Math.floor(Math.random() * maxColumns) * fontSize,
      (Math.random() * ch) / 2 - 50
    );
    fallingCharArr.push(fallingChar);
  }
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, cw, ch);
  for (let i = 0; i < fallingCharArr.length && frames % 2 == 0; i++) {
    fallingCharArr[i].draw(ctx);
  }

  requestAnimationFrame(update);
  frames++;
};

update();
