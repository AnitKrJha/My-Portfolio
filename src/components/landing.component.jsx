import "../sass/components/landing.styles.scss";
import Button from "./button.component";
import LeftHandle from "./lefthandle.component";
import AccentHeading from "./accent-heading.component";
import { useEffect } from "react";
const Landing = () => {
  useEffect(() => {
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

        if (
          this.y * this.fontSize > this.canvasHeight &&
          Math.random() > 0.97
        ) {
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
    const fps = 15;
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
  }, []);

  return (
    <div className="landing-container relative" id="home">
     
      <section className="h-[93vh] max-w-7xl w-[100%] sm:w-[92%] lg:w-[80%] m-auto flex items-baseline justify-center flex-col gap-5 landing-section">
        <AccentHeading align={"left"}>Hi, I Am </AccentHeading>
        <h1 className="Name text-content-100 text-5xl sm:text-6xl font-bold md:text-6xl lg:text-7xl">
          <span className="styled-name">Anit</span> Jha
        </h1>
        <h1 className="Name text-content-200 text-3xl sm:text-4xl font-bold md:text-5xl lg:text-6xl">
          I Build things for the web
        </h1>

        <p className="landing-content text-content-300 text-[16.5px]  max-w-lg  mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ex, dolor
          libero possimus, suscipit itaque tempore officiis laboriosam eaque
          dignissimos minima facilis veritatis eos eum placeat quos ipsum nulla
          consequatur!
        </p>
        <a href="#about">
          <Button>Check Out My Profile</Button>
        </a>
        <LeftHandle />
      </section>
    </div>
  );
};

export default Landing;
