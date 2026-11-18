const $ = id => document.getElementById(id);

/* ---------- popup shared by projects and travel ---------- */
const box = $('box');
let slides = [], index = 0;

function showSlide() {
  $('photo').src = slides[index];
  const many = slides.length > 1;
  $('count').textContent = many ? `${index + 1} / ${slides.length}` : '';
  $('prev').hidden = $('next').hidden = !many;
}
function step(by) {
  index = (index + by + slides.length) % slides.length;
  showSlide();
}
// skillsHtml is only passed for projects; it switches the popup to the wide layout
function openPopup(title, text, images, skillsHtml = '') {
  slides = images;
  index = 0;
  $('title').textContent = title;
  $('text').textContent = text;
  $('skills').innerHTML = skillsHtml;
  box.classList.toggle('wide', !!skillsHtml);
  showSlide();
  box.showModal();
}

// a project's skills as colored tags, under one heading per group
function skillTags(project) {
  return GROUPS.map(group => {
    const tags = SKILLS
      .filter(s => s.group === group.id && project.skills.includes(s.id))
      .map(s => `<li class="tag ${s.group}">${s.label}</li>`)
      .join('');
    return tags ? `<h3>${group.label}</h3><ul class="tags">${tags}</ul>` : '';
  }).join('');
}
$('prev').onclick = () => step(-1);
$('next').onclick = () => step(1);
$('close').onclick = () => box.close();
box.onclick = e => { if (e.target === box) box.close(); };
box.onkeydown = e => {
  if (e.key === 'ArrowLeft') step(-1);
  if (e.key === 'ArrowRight') step(1);
};

// make an SVG group act like a button
function clickable(el, action) {
  el.onclick = action;
  el.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); action(); } };
}

/* ---------- skill graph ---------- */
// spot i of total, evenly around a circle, starting at top
function pointOnCircle(i, total, radius) {
  const angle = (i / total) * 2 * Math.PI - Math.PI / 2;
  return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
}

(function drawGraph() {
  let html = '<clipPath id="graph-round"><circle r="38" /></clipPath>';

  // lines first so they sit under everything; colored by skill group when highlighted
  PROJECTS.forEach((project, i) => {
    const p = pointOnCircle(i, PROJECTS.length, 170);
    project.skills.forEach(id => {
      const k = SKILLS.findIndex(skill => skill.id === id);
      const s = pointOnCircle(k, SKILLS.length, 340);
      html += `<line class="${SKILLS[k].group}" data-p="${project.id}" data-s="${id}" x1="${p.x}" y1="${p.y}" x2="${s.x}" y2="${s.y}" />`;
    });
  });

  // skills = outer ring
  SKILLS.forEach((skill, i) => {
    const dot = pointOnCircle(i, SKILLS.length, 340);
    const label = pointOnCircle(i, SKILLS.length, 365);
    const anchor = Math.abs(label.x) < 1 ? 'middle' : label.x > 0 ? 'start' : 'end';
    html += `
      <g class="skill ${skill.group}" data-s="${skill.id}">
        <circle cx="${dot.x}" cy="${dot.y}" r="9" />
        <text x="${label.x}" y="${label.y + 5}" text-anchor="${anchor}">${skill.label}</text>
      </g>`;
  });

  // projects = inner ring, round photos
  PROJECTS.forEach((project, i) => {
    const p = pointOnCircle(i, PROJECTS.length, 170);
    html += `
      <g class="project" data-p="${project.id}" tabindex="0" role="button" aria-label="${project.title}" transform="translate(${p.x}, ${p.y})">
        <circle r="41" />
        <image href="${project.image}" x="-38" y="-38" width="76" height="76"
               preserveAspectRatio="xMidYMid slice" clip-path="url(#graph-round)" />
        <text y="60" text-anchor="middle">${project.title}</text>
      </g>`;
  });

  const svg = $('graph');
  svg.innerHTML = html;
  svg.querySelectorAll('.project').forEach((g, i) => {
    const project = PROJECTS[i];
    clickable(g, () => openPopup(project.title, project.blurb, [project.image], skillTags(project)));
  });

  // hover a project to light up its skills, or a skill to light up its projects
  function highlight(lines) {
    const projects = new Set(lines.map(l => l.dataset.p));
    const skills = new Set(lines.map(l => l.dataset.s));
    svg.classList.add('focus');
    svg.querySelectorAll('line').forEach(l => l.classList.toggle('on', lines.includes(l)));
    svg.querySelectorAll('.project').forEach(g => g.classList.toggle('on', projects.has(g.dataset.p)));
    svg.querySelectorAll('.skill').forEach(g => g.classList.toggle('on', skills.has(g.dataset.s)));
  }
  function clear() { svg.classList.remove('focus'); }

  const lines = [...svg.querySelectorAll('line')];
  svg.querySelectorAll('.project').forEach(g => {
    const show = () => highlight(lines.filter(l => l.dataset.p === g.dataset.p));
    g.addEventListener('mouseenter', show);
    g.addEventListener('focus', show);
    g.addEventListener('mouseleave', clear);
    g.addEventListener('blur', clear);
  });
  svg.querySelectorAll('.skill').forEach(g => {
    g.addEventListener('mouseenter', () => highlight(lines.filter(l => l.dataset.s === g.dataset.s)));
    g.addEventListener('mouseleave', clear);
  });
})();

/* ---------- travel map ---------- */
(function drawMap() {
  const map = $('map');
  $('land').setAttribute('d', WORLD_PATH);

  for (const p of places) {
    // real location on the map (equirectangular)
    const px = (p.lon + 180) * 2.778, py = (85 - p.lat) * 2.778;
    map.insertAdjacentHTML('beforeend', `
      <g class="pin" tabindex="0" role="button" aria-label="${p.name}">
        <line class="stem" x1="${px}" y1="${py}" x2="${p.x}" y2="${p.y}"/>
        <circle class="dot" cx="${px}" cy="${py}" r="2.2"/>
        <image href="${PHOTOS[p.cover]}" x="${p.x - 25}" y="${p.y - 25}" width="50" height="50"
               preserveAspectRatio="xMidYMid slice" clip-path="url(#pin-round)"/>
        <circle class="ring" cx="${p.x}" cy="${p.y}" r="25"/>
        <text x="${p.x}" y="${p.y + 38}">${p.name}</text>
      </g>`);
    clickable(map.lastElementChild, () => openPopup(p.name, p.text, p.pics.map(n => PHOTOS[n])));
  }
})();

/* ---------- highlight the nav link for the section on screen ---------- */
(function trackSection() {
  const links = [...document.querySelectorAll('.nav a:not(.name)')];
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
    }
  }, { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('main section').forEach(s => observer.observe(s));
})();
