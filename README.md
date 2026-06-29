# 💀 mansonware-portfolio

Portfólio pessoal imersivo com tema **hacker / cybersecurity** — uma experiência em página única (HTML/CSS/JS puro, **sem dependências**), com terminal interativo, efeitos glitch, fundo Matrix com profundidade e design totalmente responsivo (mouse **e** toque).

> Cybersecurity • Linux • Automation • Ethical Hacking

---

## ✨ Destaques

- 💻 **Terminal interativo de verdade** — digite `help`, `whoami`, `skills`, `projects`, `social`, `banner`, `hack`, `clear`. Tem histórico de comandos (setas ↑ ↓).
- ⚡ **Tela de boot animada** que carrega e revela o site (estilo systemd).
- 🌀 **Título com efeito glitch** (RGB split) e **digitação automática** de funções.
- 🟢 **Fundo Matrix** em `<canvas>` com caracteres de profundidade variável + scanlines CRT.
- 🪪 **Cards de projeto com tilt 3D** seguindo o mouse — e estado de toque no celular.
- 📊 **Barras de skill e contadores** que animam ao entrar na tela (scroll reveal).
- 🖱️ **Cursor com glow** no desktop / **ripple** ao toque no mobile.
- 📱 **Menu responsivo** e layout fluido com `clamp()`.
- ♿ **Acessível**: respeita `prefers-reduced-motion`, usa `aria-live`/`role` e navegação por teclado.

## 🛠️ Tecnologias

| Camada | Stack |
|--------|-------|
| Estrutura | HTML5 semântico |
| Estilo | CSS3 (variáveis, `clamp()`, grid, animações, media queries) |
| Lógica | JavaScript (ES6, Canvas API, IntersectionObserver) |
| Dependências | **nenhuma** — zero build, zero npm |

## 🚀 Como executar

```bash
git clone https://github.com/Mansonware/mansonware-portfolio.git
cd mansonware-portfolio
```

Abra o `index.html` direto no navegador, ou sirva localmente (recomendado):

```bash
# Python 3
python3 -m http.server 8000
# acesse http://localhost:8000
```

## ⌨️ Comandos do terminal

| Comando | Ação |
|---------|------|
| `help` | lista os comandos |
| `whoami` | apresentação do operador |
| `skills` | stack técnica |
| `projects` | projetos em destaque |
| `social` | links e contato |
| `banner` | exibe o logo ASCII |
| `date` | data/hora do sistema |
| `hack` | sequência divertida 😏 |
| `clear` | limpa o terminal |

## 📁 Estrutura

```
mansonware-portfolio/
├── index.html   # marcação / conteúdo
├── style.css    # tema, animações e responsividade
├── script.js    # matrix, boot, terminal, tilt, reveal
└── README.md
```

## 📬 Contato

- GitHub: [@Mansonware](https://github.com/Mansonware)
- E-mail: mansonware0101@gmail.com
