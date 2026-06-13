     // dark mode
document.addEventListener('DOMContentLoaded', ()=>{
        const toggleBtn = document.getElementById('darkModeToggle');
    // au changement on verifie si dark mode etait actif
    if (toggleBtn){
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            toggleBtn.textContent ='☀️';
        }
        // au clic sur le bouton
        toggleBtn.addEventListener('click', () =>{
            document.body.classList.toggle('dark-mode');
            if(document.body.classList.contains('dark-mode')){
                localStorage.setItem('theme', 'dark');
                toggleBtn.textContent = '☀️';
            } else{
                localStorage.setItem('theme', 'light');
                toggleBtn.textContent ='🌙';
            }
        });
    }
    // navbar au scroll
    const navbar = document.getElementById('phto');
    // quand on scrolle de plus de 50px la navbar retrecit et devient fonce et quand tu remontes en haut elle reprend son style d'origine
    if (navbar){
        window.addEventListener('scroll', ()=>{ 
            if (window.scrollY > 50){
                navbar.classList.add('scrolled');
            } else{
                navbar.classList.remove('scrolled');
            }
        });
    }
    // bouton backToTop
    const backToTop = document.getElementById('backToTop');
    if(backToTop){
        window.addEventListener('scroll', () =>{
            if(window.scrollY > 300){
                backToTop.style.display = 'block';
            } else{
                backToTop.style.display = 'none';
            }
        });

        backToTop.addEventListener('click', () =>{
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});