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

    // compteurs animes
    const statNumbers = document.querySelectorAll('.stat-number');
        // determine quand l;element .stat-number devient visible
    const counterObserver = new IntersectionObserver((entries) =>{
        entries.forEach(entry =>{
            if (entry.isIntersecting){
                const element = entry.target;
                const target = parseInt(element.getAttribute('data-target'));
                let count = 0;
                // 100 etapes pour atteindre la cible
                // step calcule de combien augmente a chaque tour pour faire 100 etapes
                const step = Math.ceil(target / 100);  
                    // setIntrval repete l'incrementation toutes les 20ms jusqu'a atteindre target
                const interval = setInterval(() => {
                    count += step ;
                    if(count >= target){
                        count = target;
                        clearInterval(interval);
                    }
                    // tous les 20ms
                    element.textContent = '+' + count; 
                }, 20);
                        // unobserve arrete de surveiller cet element 
                    counterObserver.unobserve(element);
                }
        });
            
    });
    statNumbers.forEach(stat => counterObserver.observe(stat));

    // aminations fade-in
    const fadeElements = document.querySelectorAll('.fade-in');

    const fadeObserver = new IntersectionObserver((entries) =>{
        entries.forEach(entry => {
            if (entry.isIntersecting){
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    });
    fadeElements.forEach(el => fadeObserver.observe(el));
});

