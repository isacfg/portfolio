const checkbox = document.querySelector('#toggleTheme');
const body = document.querySelector('body');

function toggleTheme(e) {
    if (e.target.checked) {
        body.classList.replace('dark', 'light');
        localStorage.setItem('theme', 'light');
    }
    else {
        body.classList.replace('light', 'dark');
        localStorage.setItem('theme', 'dark');
    }

}

// On load
let currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    if (currentTheme === 'light') {
        checkbox.checked = true;
        body.classList.replace('dark', 'light');
    }
    else {
        checkbox.checked = false;
        body.classList.replace('light', 'dark');
    }
} else {
    checkbox.defaultChecked = true;
}



// Event Listeners
checkbox.addEventListener('change', toggleTheme);