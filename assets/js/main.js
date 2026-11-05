(()=>{const b=document.querySelector('.menu-btn'),l=document.querySelector('.links');
b&&b.addEventListener('click',()=>{const o=l.classList.toggle('open');b.setAttribute('aria-expanded',o)});
const c=document.getElementById('sparkles');if(c&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const x=c.getContext('2d');let W,H,P=[];
const rs=()=>{W=c.width=innerWidth;H=c.height=innerHeight};rs();addEventListener('resize',rs);
for(let i=0;i<46;i++)P.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,s:Math.random()*2.2+.6,t:Math.random()*6,v:Math.random()*.25+.05});
const star=(x0,y0,r,a)=>{const k=r*1.6;x.globalAlpha=a;x.beginPath();x.moveTo(x0,y0+k);x.bezierCurveTo(x0-k*2,y0-k*.2,x0-k*.9,y0-k*1.6,x0,y0-k*.5);x.bezierCurveTo(x0+k*.9,y0-k*1.6,x0+k*2,y0-k*.2,x0,y0+k);x.fill()};
(function f(){x.clearRect(0,0,W,H);x.fillStyle='#ffd1ec';P.forEach(p=>{p.t+=.03;p.y-=p.v;if(p.y<-10)p.y=H+10;star(p.x,p.y,p.s,(Math.sin(p.t)+1)/2*.8)});requestAnimationFrame(f)})()}
const pl=document.querySelector('.player');const pb=document.getElementById('play');
pb&&pb.addEventListener('click',()=>{const on=pl.classList.toggle('spin');pb.textContent=on?'❚❚':'▶';pb.setAttribute('aria-label',on?'Pause visualizer':'Play visualizer');pb.setAttribute('aria-pressed',on)});
const f=document.getElementById('contactForm');f&&f.addEventListener('submit',e=>{e.preventDefault();const st=document.getElementById('status');if(!f.checkValidity()){f.reportValidity();return}
const d=new FormData(f),t=`From: ${d.get('first_name')} ${d.get('last_name')} (${d.get('email')})\n\n${d.get('message')}`;try{navigator.clipboard.writeText(t)}catch(_){}
st.innerHTML='<span class="ok">Message copied ✧</span> Opening the secure EBABYxo inbox so you can paste and send it.';window.open('https://ebabyxo.com/contact','_blank','noopener')});
document.querySelectorAll('[data-year]').forEach(n=>n.textContent=new Date().getFullYear());})();
