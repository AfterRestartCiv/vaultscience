$(document).ready(function () {
    var open_btn = $(".menu_btn");
    var close_btn = $(".close_btn");
    var title = $(".title")
  
    var panels = $(".panel");
    var links = $(".litem");
    var lines = $(".line");
    var headers = $(".headers")
    var data_content = $(".data__content");
    var data_sub = $(".data__sub");
    var footer = $(".footer");
  
    var tl = new TimelineLite({ paused: true });
  
    tl.to(panels, 0.5, { width: "50%" })
      .to(
        open_btn,
        0.5,
        { opacity: 0, visibility: "hidden", "z-index": 0 },
        "-=0.5"
      )
      .to(
        title,
        0.5,
        { opacity: 0, visibility: "hidden", "z-index":0 },
        "-=0.5"
      )
      .to(data_content, 0.5, { y: 0, opacity: 1 })
      .to(data_sub, 0.5, { y: 0, opacity: 1 }, "-=0.25")
      .staggerTo(links, 0.3, { y: 0 }, 0.05, "-=0.75")
      .staggerTo(headers, 0.3, { y: 0 }, 0.05, "-=0.75")
      .to(lines, 0.5, { opacity: 1 })
      .to(footer, 0.5, { opacity: 1 }, "-=0.5");
  
    open_btn.on("click", function (e) {
      e.preventDefault();
      tl.play();
    });
  
    close_btn.on("click", function (e) {
      e.preventDefault();
      tl.reverse();
    });
    class TextScramble {
      constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
      }
      setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise(resolve => this.resolve = resolve);
        this.queue = [];
        for (let i = 0; i < length; i++) {
          const from = oldText[i] || '';
          const to = newText[i] || '';
          const start = Math.floor(Math.random() * 40);
          const end = start + Math.floor(Math.random() * 40);
          this.queue.push({
            from,
            to,
            start,
            end
          });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
      }
      update() {
        let output = '';
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
          let {
            from,
            to,
            start,
            end,
            char
          } = this.queue[i];
          if (this.frame >= end) {
            complete++;
            output += to;
          } else if (this.frame >= start) {
            if (!char || Math.random() < 0.42) {
              char = this.randomChar();
              this.queue[i].char = char;
            }
            output += `<span class="dud">${char}</span>`;
          } else {
            output += from;
          }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
          this.resolve();
        } else {
          this.frameRequest = requestAnimationFrame(this.update);
          this.frame++;
        }
      }
      randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
      }
    }
    
    const phrases = ['vault science', 'protect yourself from evildoers', 'with massive obsidian structures'];
    const el = document.querySelector('.text');
    const fx = new TextScramble(el);
    let counter = 0;
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 800);
      });
      counter = (counter + 1) % phrases.length;
    };
    next();
  });
  