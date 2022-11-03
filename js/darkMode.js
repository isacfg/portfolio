const checkbox = document.querySelector('#toggleTheme');
const checkboxMobile = document.querySelector('#toggleThemeMobile');
const body = document.querySelector('body');

const logoImg = document.querySelector('#logoImg');
const allImgs = document.querySelectorAll('img');


function changeImgs() {


    allImgs.forEach(img => {
        if (body.classList.contains('dark')) {

            img.src = img.src.replace('light', 'dark');

        }
        else {
            img.src = img.src.replace('dark', 'light');
        }
    })


    // if (body.classList.contains('dark')) {
    //     logoImg.src = 'assets/logo/logo-dark.svg';


    // }
    // else {
    //     logoImg.src = 'assets/logo/logo-light.svg';
    // }
}

function toggleTheme(e) {
    // console.log(e)
    if (e.target.checked) {
        body.classList.replace('dark', 'light');
        // muda as imagens
        changeImgs();
        // salva o tema no localStorage
        localStorage.setItem('theme', 'light');


        // Garante sincronia entre os toggles mobile e desktop
        if (e.target.id === 'toggleThemeMobile' && e.target.checked) {
            checkbox.checked = true;
        }
        if (e.target.id === 'toggleTheme' && e.target.checked) {
            checkboxMobile.checked = true;
        }

    }
    else {
        body.classList.replace('light', 'dark');
        changeImgs();
        localStorage.setItem('theme', 'dark');


        // Garante sincronia entre os toggles mobile e desktop
        if (e.target.id === 'toggleThemeMobile' && !e.target.checked) {
            checkbox.checked = false;
        }
        if (e.target.id === 'toggleTheme' && !e.target.checked) {
            checkboxMobile.checked = false;
        }

    }
}


// On load
// Verifica se o tema está salvo no localStorage
let currentTheme = localStorage.getItem('theme');
if (currentTheme) {

    // Se o tema salvo for light, adiciona a classe light ao body
    if (currentTheme === 'light') {
        checkbox.checked = true;
        checkboxMobile.checked = true;
        body.classList.replace('dark', 'light');
    }

    // Se o tema salvo for dark, adiciona a classe dark ao body
    else {
        checkbox.checked = false;
        checkboxMobile.checked = false;
        body.classList.replace('light', 'dark');
    }
}
// Se não houver tema salvo, adiciona a classe light ao body
else {
    checkbox.defaultChecked = true;
    checkboxMobile.defaultChecked = true;
}

changeImgs();

// Event Listeners
checkbox.addEventListener('change', toggleTheme);
checkboxMobile.addEventListener('change', toggleTheme);
