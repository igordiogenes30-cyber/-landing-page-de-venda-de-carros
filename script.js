(function(){
  var root=document.documentElement,btn=document.getElementById('themeBtn'),
      icon=document.getElementById('themeIcon'),label=document.getElementById('themeLabel');
  function isDark(){
    var t=root.getAttribute('data-theme');
    if(t)return t==='dark';
    return window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function render(){
    var d=isDark();
    icon.textContent=d?'☀️':'🌙';
    label.textContent=d?'Modo claro':'Modo escuro';
  }
  try{var s=localStorage.getItem('theme');if(s)root.setAttribute('data-theme',s);}catch(e){}
  render();
  btn.addEventListener('click',function(){
    var next=isDark()?'light':'dark';
    root.setAttribute('data-theme',next);
    try{localStorage.setItem('theme',next);}catch(e){}
    render();
  });
  document.getElementById('ctaBtn').addEventListener('click',function(){
    document.getElementById('ctaMsg').textContent='Obrigado! Um consultor entrará em contato em breve. 🚗';
  });
})();