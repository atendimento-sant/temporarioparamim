const WPP = 'https://wa.me/551198781707?text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20no%20google%20e%20quero%20agendar%20um%20hor%C3%A1rio';

// NAV scroll (none — no nav)

// Testimonials carousel
(function(){
  const track = document.getElementById('tcvTrack');
  const dotsWrap = document.getElementById('tcvDots');
  if(!track) return;
  const slides = [...track.children];
  let idx = 0;
  const vis = () => window.innerWidth >= 900 ? 3 : (window.innerWidth >= 600 ? 2 : 1);
  const maxIdx = () => Math.max(0, slides.length - vis());
  const update = () => {
    const w = slides[0].getBoundingClientRect().width + 24;
    track.style.transform = `translateX(${-idx * w}px)`;
    [...dotsWrap.children].forEach((d,i) => d.classList.toggle('active', i===idx));
  };
  const buildDots = () => {
    dotsWrap.innerHTML = '';
    for(let i=0;i<=maxIdx();i++){
      const b = document.createElement('button');
      b.className = 'tcv-dot' + (i===0?' active':'');
      b.onclick = () => { idx=i; update(); };
      dotsWrap.appendChild(b);
    }
  };
  document.getElementById('tcvPrev').onclick = () => { idx=Math.max(0,idx-1); update(); };
  document.getElementById('tcvNext').onclick = () => { idx=Math.min(maxIdx(),idx+1); update(); };
  buildDots(); update();
  window.addEventListener('resize', () => { idx=Math.min(idx,maxIdx()); buildDots(); update(); });
})();

// Results carousel
(function(){
  const track = document.getElementById('rcvTrack');
  const dotsWrap = document.getElementById('rcvDots');
  if(!track) return;
  const slides = [...track.children];
  let idx = 0;
  const vis = () => window.innerWidth >= 900 ? 3 : (window.innerWidth >= 600 ? 2 : 1);
  const maxIdx = () => Math.max(0, slides.length - vis());
  const update = () => {
    const w = slides[0].getBoundingClientRect().width + 24;
    track.style.transform = `translateX(${-idx * w}px)`;
    [...dotsWrap.children].forEach((d,i) => d.classList.toggle('active', i===idx));
  };
  const buildDots = () => {
    dotsWrap.innerHTML = '';
    for(let i=0;i<=maxIdx();i++){
      const b = document.createElement('button');
      b.className = 'rcv-dot' + (i===0?' active':'');
      b.onclick = () => { idx=i; update(); };
      dotsWrap.appendChild(b);
    }
  };
  document.getElementById('rcvPrev').onclick = () => { idx=Math.max(0,idx-1); update(); };
  document.getElementById('rcvNext').onclick = () => { idx=Math.min(maxIdx(),idx+1); update(); };
  buildDots(); update();
  window.addEventListener('resize', () => { idx=Math.min(idx,maxIdx()); buildDots(); update(); });
})();