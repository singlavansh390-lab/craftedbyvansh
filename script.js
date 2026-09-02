const menu=document.querySelector('.menu'),nav=document.querySelector('#navLinks');
menu?.addEventListener('click',()=>{nav.classList.toggle('open')});
document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const buttons=document.querySelectorAll('.filters button'), projects=document.querySelectorAll('.project');
buttons.forEach(btn=>btn.addEventListener('click',()=>{
  buttons.forEach(b=>b.classList.remove('active')); btn.classList.add('active');
  const f=btn.dataset.filter;
  projects.forEach(p=>{p.style.display=(f==='all'||p.dataset.type===f)?'block':'none'});
}));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform='translateY(0)';observer.unobserve(e.target)}})
},{threshold:.08});
document.querySelectorAll('.service,.project,.process-grid div,.ai-list div,.contact-links a').forEach(el=>{
  el.style.opacity=0;el.style.transform='translateY(18px)';el.style.transition='opacity .65s ease,transform .65s ease';observer.observe(el)
});

document.addEventListener('mousemove',e=>{
  document.querySelectorAll('.orb').forEach((o,i)=>{
    const x=(e.clientX/window.innerWidth-.5)*(i? -18:18);
    const y=(e.clientY/window.innerHeight-.5)*(i? -18:18);
    o.style.transform=`translate(${x}px,${y}px)`;
  });
});
