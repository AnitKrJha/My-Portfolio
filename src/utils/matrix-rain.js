export const CreateRain = () => {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let hue = 80;
  window.addEventListener("resize", () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    effect.resize(canvas.height, canvas.width);
  });

  class Symbol {
    constructor(x, y, fontSize, canvasHeight) {
      this.characters =
        "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
      this.x = x;
      this.y = y;
      this.color = "hsl(" + hue + ",100%,50%)";
      this.fontSize = fontSize;
      this.canvasHeight = canvasHeight;
    }
    draw(context) {
      this.color = "hsl(" + hue + ",100%,50%)";
      this.text = this.characters.charAt(
        Math.floor(Math.random() * this.characters.length)
      );
      context.fillStyle = this.color;
      context.fillText(
        this.text,
        this.x * this.fontSize,
        this.y * this.fontSize
      );

      if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.97) {
        this.y = 1;
      } else {
        this.y += 1;
      }
      hue = 160 + ((hue + 1) % 40);
    }
  }

  class Effect {
    constructor(width, height) {
      this.canvasWidth = width;
      this.canvasHeight = height;
      this.fontSize = Math.floor(15);
      this.columns = this.canvasWidth / this.fontSize;
      this.symbols = [];
      this.#init();
    }

    #init() {
      for (let i = 0; i < this.columns; i++) {
        this.symbols[i] = new Symbol(i, 1, this.fontSize, this.canvasHeight);
      }
    }
    resize(height, width) {
      this.canvasHeight = height;
      this.canvasWidth = width;
      this.columns = this.canvasWidth / this.fontSize;
      this.symbols = [];
      this.#init();
    }
  }

  const effect = new Effect(canvas.width, canvas.height);

  let lastTime = 0;
  const fps = 25;
  const nextFrame = 1000 / fps;
  let timer = 0;

  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    if (timer > nextFrame) {
      ctx.font = effect.fontSize + "px monospace";
      ctx.fillStyle = "rgb(10, 25, 47,0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let symbol of effect.symbols) {
        symbol.draw(ctx);
      }
      timer = 0;
    } else {
      timer += deltaTime;
    }
    hue++;
    requestAnimationFrame(animate);
  }
  animate(0);
};
