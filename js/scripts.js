var html = document.getElementsByTagName('html');
var ratios = document.getElementsByName('themes');

for (i = 0; i < ratios.length; i++){
    ratios[i].addEventListener('change', function(){
        html[0].classList.remove(html[0].classList.item(0));
        html[0].classList.add(this.id);
    })
}

const barmenu = document.querySelector('.bar-menu')
const barmenuicon = document.querySelector('.bar-menu i')
const mininavbar = document.querySelector('.mini-navbar')

barmenu.onclick = function(){
    mininavbar.classList.toggle('menu-open')
    const isopen = mininavbar.classList.contains('menu-open')
	barmenuicon.classList = isopen ? 'fa-solid fa-times':'fa-solid fa-bars'
}

const links = document.querySelectorAll('.links a')

links.forEach(link =>{
    link.addEventListener('click', ()=>{
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});


window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "var(--c-bg-secondary)";
    } else {
        header.style.background = "var(--c-bg-primary)";
    }
});

const sections = document.querySelectorAll('section');

// Fonction pour observer la section visible
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            links.forEach(link => link.classList.remove('active'));
            
            // Trouve le lien correspondant et lui ajoute "active"
            const activeLink = document.querySelector(`.links a[href="#${entry.target.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, { threshold: 0.6 }); // Détecte quand 60% de la section est visible
sections.forEach(section => observer.observe(section));


