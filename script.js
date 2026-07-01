/* ============================================================
   Mansonware // Portfolio — interactions
   ============================================================ */
"use strict";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouch = window.matchMedia("(hover: none)").matches;

/* ===== MATRIX BACKGROUND ===== */
(function matrix() {
  const canvas = document.getElementById("matrix");
  const ctx = canvas.getContext("2d");
  const FONT = 16;
  const CHARS = "01アﾝｿ0NWAR3CYBSECﾘﾃｨLINUXHACK".split("");
  let drops = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drops = new Array(Math.ceil(canvas.width / FONT)).fill(0)
      .map(() => Math.random() * -canvas.height / FONT);
  }

  function draw() {
    ctx.fillStyle = "rgba(5, 7, 10, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = FONT + "px monospace";
    for (let i = 0; i < drops.length; i++) {
      const char = CHARS[(Math.random() * CHARS.length) | 0];
      const y = drops[i] * FONT;
      // leading char brighter for depth
      ctx.fillStyle = Math.random() > 0.96 ? "#d8ffe9" : "#00ff88";
      ctx.fillText(char, i * FONT, y);
      if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }

  resize();
  window.addEventListener("resize", resize);
  if (!reduceMotion) setInterval(draw, 50);
  else { ctx.fillStyle = "#00ff88"; }
})();

/* ===== BOOT SEQUENCE ===== */
(function boot() {
  const screen = document.getElementById("bootScreen");
  const log = document.getElementById("bootLog");
  const bar = document.getElementById("bootProgress");
  const lines = [
    "[ OK ] Mounting /dev/operator",
    "[ OK ] Loading module: linux",
    "[ OK ] Loading module: networking",
    "[ OK ] Loading module: python-automation",
    "[ OK ] Initializing cybersecurity environment",
    "[ OK ] Establishing secure shell",
    "[ OK ] Access granted",
    "> welcome, operator_"
  ];
  let i = 0;

  if (reduceMotion) { screen.classList.add("done"); return; }

  function step() {
    if (i < lines.length) {
      log.textContent += lines[i] + "\n";
      bar.style.width = Math.round(((i + 1) / lines.length) * 100) + "%";
      i++;
      setTimeout(step, 260);
    } else {
      setTimeout(() => {
        screen.classList.add("done");
        document.getElementById("termInput")?.blur();
      }, 500);
    }
  }
  setTimeout(step, 300);
})();

/* ===== TYPED ROLE ===== */
(function typedRole() {
  const el = document.getElementById("typedRole");
  if (!el) return;
  const roles = [
    "ethical hacker", "linux operator", "automation engineer",
    "security researcher", "terminal native"
  ];
  let r = 0, c = 0, deleting = false;

  function tick() {
    const word = roles[r];
    el.textContent = word.slice(0, c);
    if (!deleting && c < word.length) { c++; }
    else if (deleting && c > 0) { c--; }
    else if (!deleting && c === word.length) { deleting = true; setTimeout(tick, 1400); return; }
    else { deleting = false; r = (r + 1) % roles.length; }
    setTimeout(tick, deleting ? 45 : 90);
  }
  if (reduceMotion) { el.textContent = roles[0]; return; }
  tick();
})();

/* ===== SCROLL REVEAL ===== */
(function reveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach(e => e.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        // trigger skill bars
        if (en.target.classList.contains("skill")) animateSkill(en.target);
        if (en.target.classList.contains("tilt")) en.target.classList.add("scan-in");
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.2 });
  els.forEach(e => io.observe(e));
})();

function animateSkill(skill) {
  const level = +skill.dataset.level;
  const bar = skill.querySelector(".skill-bar i");
  const pct = skill.querySelector(".skill-pct");
  bar.classList.add("animating");
  bar.style.width = level + "%";
  let n = 0;
  const t = setInterval(() => {
    n++;
    pct.textContent = n + "%";
    if (n >= level) {
      clearInterval(t);
      bar.classList.remove("animating");
    }
  }, 1200 / level);
}

/* ===== STAT COUNTERS ===== */
(function counters() {
  const nums = document.querySelectorAll(".stat-num");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target;
      const target = +el.dataset.target;
      let n = 0;
      const step = Math.max(1, Math.ceil(target / 40));
      const t = setInterval(() => {
        n = Math.min(target, n + step);
        el.textContent = n;
        if (n >= target) clearInterval(t);
      }, 30);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  nums.forEach(n => io.observe(n));
})();

/* ===== NAV ===== */
(function nav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  const navEl = document.getElementById("nav");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      links.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
  // hide nav on scroll down, show on scroll up
  let last = 0;
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    navEl.style.transform = (y > last && y > 120) ? "translateY(-100%)" : "translateY(0)";
    last = y;
  }, { passive: true });
})();

/* ===== GLOW CURSOR (desktop) ===== */
(function glow() {
  const g = document.getElementById("glowCursor");
  if (isTouch) return;
  window.addEventListener("mousemove", (e) => {
    g.style.opacity = "1";
    g.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
  window.addEventListener("mouseout", () => { g.style.opacity = "0"; });
})();

/* ===== TILT CARDS (mouse) + TOUCH GLOW ===== */
(function tilt() {
  const cards = document.querySelectorAll(".tilt");
  cards.forEach(card => {
    if (!isTouch) {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform =
          `perspective(800px) rotateY(${px * 12}deg) rotateX(${-py * 12}deg) translateY(-4px)`;
      });
      card.addEventListener("mouseleave", () => { card.style.transform = ""; });
    } else {
      card.addEventListener("touchstart", () => card.classList.add("active"), { passive: true });
      card.addEventListener("touchend", () => card.classList.remove("active"));
    }
  });
})();

/* ===== TOUCH RIPPLE ===== */
(function ripple() {
  if (!isTouch || reduceMotion) return;
  window.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    const el = document.createElement("span");
    el.className = "ripple";
    el.style.left = t.clientX + "px";
    el.style.top = t.clientY + "px";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 600);
  }, { passive: true });
})();

/* ===== INTERACTIVE TERMINAL ===== */
(function terminal() {
  const body = document.getElementById("termBody");
  const input = document.getElementById("termInput");
  const term = document.getElementById("term");
  const hackFx = document.getElementById("hackFx");
  const history = [];
  let hPos = -1;

  const commands = {
    help: () =>
      "comandos disponíveis:\n" +
      "  whoami     quem é o operador\n" +
      "  skills     stack técnica\n" +
      "  projects   projetos em destaque\n" +
      "  social     links e contato\n" +
      "  banner     exibe o logo\n" +
      "  date       data/hora do sistema\n" +
      "  hack       inicia sequência (apenas diversão)\n" +
      "  clear      limpa o terminal",
    whoami: () =>
      "operator :: Mansonware\n" +
      "cybersecurity • linux • automation • ethical hacking\n" +
      "\"vivo no terminal, automatizo o resto.\"",
    skills: () =>
      "linux/bash ........ 92%\npython ............ 88%\nnetworking ........ 80%\n" +
      "pentesting ........ 75%\nweb security ...... 70%\ncloud/docker ...... 65%",
    projects: () =>
      "[1] recon-suite  — recon automatizado (python/bash)\n" +
      "[2] sentinel-log — monitor de logs em tempo real\n" +
      "[3] dotfiles     — ambiente de operador pronto",
    social: () =>
      "github  → https://github.com/Mansonware\n" +
      "email   → mansonware0101@gmail.com",
    date: () => new Date().toString(),
    banner: () =>
      " __  __                            \n" +
      "|  \\/  | __ _ _ __  ___  ___  _ __  \n" +
      "| |\\/| |/ _` | '_ \\/ __|/ _ \\| '_ \\ \n" +
      "| |  | | (_| | | | \\__ \\ (_) | | | |\n" +
      "|_|  |_|\\__,_|_| |_|___/\\___/|_| |_|  ware",
    clear: () => { body.innerHTML = ""; return null; }
  };

  function print(text, cls) {
    if (text === null || text === undefined) return;
    const div = document.createElement("div");
    div.className = "term-line" + (cls ? " " + cls : "");
    div.textContent = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  function hack() {
    const steps = [
      "establishing reverse shell...",
      "bypassing firewall [████████░░] 80%",
      "cracking hashes: 4f2a... a91c... done",
      "exfiltrating... (just kidding 😏)",
      "ACCESS GRANTED — você é um(a) hacker agora."
    ];
    let i = 0;
    if (!reduceMotion && hackFx) {
      hackFx.classList.remove("run");
      // force reflow so the same CSS animation can restart on repeated "hack"
      void hackFx.offsetWidth;
      hackFx.classList.add("run");
    }
    (function next() {
      if (i < steps.length) { print(steps[i++], "hl"); setTimeout(next, 600); }
    })();
  }

  function run(raw) {
    const cmd = raw.trim().toLowerCase();
    print("operator@mansonware:~$ " + raw, "cmd");
    if (!cmd) return;
    history.unshift(raw); hPos = -1;
    if (cmd === "hack") return hack();
    const fn = commands[cmd];
    if (fn) print(fn());
    else print(`comando não encontrado: ${cmd} — digite 'help'`);
  }

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { run(input.value); input.value = ""; }
    else if (e.key === "ArrowUp") {
      if (hPos < history.length - 1) input.value = history[++hPos] || "";
      e.preventDefault();
    } else if (e.key === "ArrowDown") {
      if (hPos > 0) input.value = history[--hPos] || "";
      else { hPos = -1; input.value = ""; }
      e.preventDefault();
    }
  });

  // focus terminal when clicking anywhere in it
  term.addEventListener("click", () => input.focus());
})();

/* ===== YEAR ===== */
document.getElementById("year").textContent = new Date().getFullYear();
