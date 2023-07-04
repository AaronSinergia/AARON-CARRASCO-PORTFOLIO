(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) c(o);
  new MutationObserver((o) => {
    for (const r of o)
      if (r.type === 'childList')
        for (const a of r.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && c(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const r = {};
    return (
      o.integrity && (r.integrity = o.integrity),
      o.referrerPolicy && (r.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (r.credentials = 'include')
        : o.crossOrigin === 'anonymous'
        ? (r.credentials = 'omit')
        : (r.credentials = 'same-origin'),
      r
    );
  }
  function c(o) {
    if (o.ep) return;
    o.ep = !0;
    const r = n(o);
    fetch(o.href, r);
  }
})();
const m = [
  {
    name: 'RNOVA',
    alt: 'rnova_logo',
    image: '../assets/img/rnova-sll_li1.png',
    dataset: 'Ayudante de instalación de sistemas fotovoltáicos',
  },
  {
    name: 'EMERGIA',
    alt: 'emergia_logo',
    image: '../assets/img/emergia.jpg',
    dataset: 'Team Leader para equipo de comerciales telefónicos',
  },
  {
    name: 'VODAFONE',
    alt: 'vodafone_logo',
    image: '../assets/img/vodafone.png',
    dataset: 'Gestión de BBDD, para empresa de telefonía y red de comerciales',
  },
  {
    name: 'ARGOM',
    alt: 'argom_logo',
    image: '../assets/img/argom.jpeg',
    dataset: 'Gestor de almacén y gestión de clientes',
  },
  {
    name: 'DXC',
    alt: 'dxc_logo',
    image: '../assets/img/dxc.png',
    dataset: 'Service Desk para empresa contratadora bancaria',
  },
];
const y = () => {
    const e = document.createElement('h1');
    return (
      (e.className = 'title_name'),
      (e.innerHTML = '.../Experiencia'),
      e.outerHTML
    );
  },
  f = () => {
    const e = document.createElement('section'),
      t = document.createElement('div');
    (e.className = 'gallery'), (t.className = 'column');
    for (let n = 0; n < m.length; n++) {
      const c = m[n],
        o = document.createElement('img');
      (o.src = c.image),
        (o.alt = c.alt),
        o.setAttribute('data-img-show', c.dataset),
        t.appendChild(o),
        e.appendChild(t);
    }
    return e.outerHTML;
  },
  _ = () => {
    const e = document.createElement('div'),
      t = document.createElement('div'),
      n = document.createElement('span'),
      c = document.createElement('img'),
      o = document.createElement('h2');
    return (
      (o.className = 'text_img_description'),
      (e.className = 'overlay hidden'),
      (t.className = 'slideshow'),
      (n.className = 'btn_close'),
      (n.textContent = 'X'),
      (c.src = ''),
      (c.alt = ''),
      (c.id = 'img_slideshow'),
      t.appendChild(o),
      t.appendChild(c),
      t.appendChild(n),
      e.appendChild(t),
      e.outerHTML
    );
  },
  v = () => {
    const e = document.querySelector('#container');
    e.innerHTML = `
    ${y()}
    ${f()}
    ${_()}
  `;
    const t = (r) => {
      const a = document.querySelector('.overlay'),
        s = document.querySelector('#img_slideshow'),
        l = r.target,
        h = l.getAttribute('src'),
        g = l.dataset.imgShow,
        d = document.querySelector('.text_img_description');
      d && d.remove(), s.setAttribute('src', h), a.classList.remove('hidden');
      const i = document.createElement('h2');
      (i.className = 'text_img_description'),
        (i.textContent = g),
        document.querySelector('.slideshow').insertBefore(i, s);
    };
    document.querySelectorAll('.column').forEach((r) => {
      r.addEventListener('click', t);
    });
    const c = () => {
      document.querySelector('.overlay').classList.add('hidden');
      const a = document.querySelector('.img_exp_text');
      a && a.remove();
    };
    document.querySelector('.btn_close').addEventListener('click', c);
  };
const E = () => {
    const e = document.createElement('h1');
    return (
      (e.className = 'title_name'),
      (e.textContent = '.../AARON_CARRASCO'),
      e.outerHTML
    );
  },
  C = () => {
    const e = document.createElement('div'),
      t = document.createElement('h3');
    (e.className = 'data_box_1'),
      (t.className = 'datos_personales'),
      (t.innerText =
        './RESIDENCIA/BCN.html ./EDAD/32_AÑOS.css ./ACTUALMENTE/DXC/HelpDeskIt.js'),
      e.appendChild(t);
    const n = document.createElement('h3');
    return (
      (n.className = 'frase'),
      (n.textContent =
        '"Los peces muertos son los únicos que siguen la corriente"'),
      e.appendChild(n),
      e.appendChild(t),
      e.outerHTML
    );
  },
  N = () => {
    const e = document.createElement('div'),
      t = document.createElement('h2'),
      n = document.createElement('img'),
      c = document.createElement('h2');
    return (
      (e.className = 'curly_and_aaronphoto'),
      (t.className = 'curlybracket'),
      (t.textContent = '{'),
      (n.className = 'aaron_photo'),
      (n.src = './assets/img/aaron.png'),
      (n.alt = 'aaron_photo'),
      (c.className = 'curlybracket'),
      (c.textContent = '}'),
      e.appendChild(t),
      e.appendChild(n),
      e.appendChild(c),
      e.outerHTML
    );
  },
  b = () => {
    const e = document.createElement('div'),
      t = document.createElement('h3'),
      n = document.createElement('h3');
    return (
      (e.className = 'data_box_2'),
      (t.className = 'my_aspirations'),
      (t.innerText =
        'Mis aspiraciones son entrar en el mundo de la programación como web developer y mejorar día a día como frontend dónde creo que tengo mucho que decir y aportar.'),
      (n.className = 'my_work_valors'),
      (n.textContent =
        'Actualmente trabajo para una empresa IT la cual ofrece servicios a un importante banco a nivel mundial. A demás, soy músico y trabajo en ocasiones como músico de sesión, y grabando música para otros artistas.'),
      e.appendChild(t),
      e.appendChild(n),
      e.outerHTML
    );
  },
  u = () => {
    const e = document.querySelector('#container');
    e.innerHTML = `
    ${E()}
    ${C()}
    ${N()}
    ${b()}
  `;
  };
const p = [
    {
      name: 'PROYECTO ADOPTAUNHEAVY',
      image: '../assets/img/previewfotoadoptaunheavy.jpg',
      url: 'https://proyecto-html-css-aaroncarrasco.netlify.app/',
    },
    {
      name: 'PROYECTO TIENDADEROPA',
      image: '../assets/img/previewfototiendaderopa.jpg',
      url: 'https://01-js-dom-proyecto-aaroncarrasco.netlify.app/',
    },
  ],
  L = () => {
    const e = document.createElement('h1');
    return (
      (e.className = 'title_name'), (e.innerHTML = '.../Proyectos'), e.outerHTML
    );
  },
  S = () => {
    const e = document.createElement('h2');
    return (e.className = 'curly_up'), (e.textContent = '{'), e.outerHTML;
  },
  x = () => {
    const e = document.createElement('div');
    e.className = 'general_div_photo_projects';
    for (let t = 0; t < p.length; t++) {
      const n = p[t],
        c = document.createElement('a'),
        o = document.createElement('img');
      (c.href = n.url),
        (o.className = 'projects_photos'),
        (o.src = n.image),
        (o.alt = n.name),
        c.appendChild(o),
        e.appendChild(c);
    }
    return e.outerHTML;
  },
  H = () => {
    const e = document.createElement('h2');
    return (e.className = 'curly_down'), (e.textContent = '}'), e.outerHTML;
  },
  T = () => {
    const e = document.querySelector('#container');
    e.innerHTML = `
    ${L()}
    ${S()}
    ${x()}
    ${H()}
  `;
  },
  A = () => {
    u();
    const e = document.querySelector('#navbar'),
      t = document.createElement('div'),
      n = document.createElement('a'),
      c = document.createElement('a'),
      o = document.createElement('a');
    (t.className = 'navbar'),
      (n.className = 'principal_links_bar is_home'),
      (n.href = '/home'),
      (n.textContent = './Página_Principal'),
      (c.className = 'principal_links_bar is_experience'),
      (c.href = '/experience'),
      (c.textContent = './Experiencia'),
      (o.className = 'principal_links_bar is_projects'),
      (o.href = '/projects'),
      (o.textContent = './Proyectos_en_Producción');
    const r = (a) => {
      a.preventDefault();
      const s = a.target.getAttribute('href');
      s === '/experience'
        ? v()
        : s === '/projects'
        ? T()
        : s === '/home' && u();
    };
    n.addEventListener('click', r),
      c.addEventListener('click', r),
      o.addEventListener('click', r),
      t.appendChild(n),
      t.appendChild(c),
      t.appendChild(o),
      e.appendChild(t);
  },
  M = () => {
    const e = document.querySelector('#render_mail'),
      t = document.createElement('h3'),
      n = document.createElement('a');
    (t.className = 'mail_contact'),
      (n.className = 'mail_link'),
      (n.href = 'mailto:a.carrasco9@me.com'),
      (n.textContent = 'Abierto a nuevos proyectos'),
      t.appendChild(n),
      e.appendChild(t);
  },
  k = () => {
    const e = document.querySelector('#render_rrss_icons'),
      t = document.createElement('article'),
      n = document.createElement('a'),
      c = document.createElement('img'),
      o = document.createElement('a'),
      r = document.createElement('img'),
      a = document.createElement('a'),
      s = document.createElement('img');
    (t.className = 'rrss'),
      (n.className = 'github_link'),
      (n.href = 'https://github.com/AaronSinergia?tab=repositories'),
      (c.className = 'github'),
      (c.src = '../assets/img/GitHubLogo.png'),
      (c.alt = 'github_logo'),
      (o.className = 'linkedin_link'),
      (o.href = 'https://www.linkedin.com/in/aaron-carrasco-romero/'),
      (r.className = 'linkedin'),
      (r.src = '../assets/img/1384014.png'),
      (r.alt = 'linkedin_logo'),
      (a.className = 'netlify_link'),
      (a.href = 'https://app.netlify.com/teams/aaronsinergia/sites'),
      (s.className = 'netlify'),
      (s.src = '../assets/img/netlify_logo_icon_169924.png'),
      (s.alt = 'netlify_logo'),
      n.appendChild(c),
      t.appendChild(n),
      o.appendChild(r),
      t.appendChild(o),
      a.appendChild(s),
      t.appendChild(a),
      e.appendChild(t);
  },
  w = () => {
    const e = document.querySelector('#render_footer'),
      t = document.createElement('footer');
    (t.className = 'footer'),
      (t.textContent = '© Todos los derechos reservados - 2023'),
      e.appendChild(t);
  },
  j = () => {
    const e = document.querySelector('body');
    (e.innerHTML += `
    <div id="navbar"></div>
    <div id="container"></div>
    <div id="render_mail"></div>
    <div id="render_rrss_icons"></div>
    <div id="render_footer"></div>
    `),
      A(),
      M(),
      k(),
      w();
  };
j();
