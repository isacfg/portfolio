const projectNumber = document.querySelector('#project-number');
const projectName = document.querySelector('#project-name');
const projectDescription = document.querySelector('#project-description');
const projectTech = document.querySelector('#project-tech');
const projectSpan = document.querySelector('#project-span');

const leftArrow = document.querySelector('#leftarrow');
const rightArrow = document.querySelector('#rightarrow');
const arrows = document.querySelector('.project-arrows');

const projects = [
    {
        number: '#01',
        name: 'Sweet Dreams - Confeitaria',
        span: 'Artesanal',
        description: 'Site de uma confeitaria de donuts fictícia, com informações sobre a empresa, cardápio, localização e contato. JavaScript utilizado para criação de um menu de navegação responsivo, carrinho de compras e formulário de contato. Idealizado desde o design até a programação.',
        tech: 'Figma, HTML, CSS, SASS, JavaScript, Vue.js, Git',
        image: 'placeholder'
    },
    {
        number: '#02',
        name: 'me.adota',
        span: '- Adoção de animais',
        description: 'Site de adoção de cachorros fictício, com informações sobre a empresa, animais disponíveis para adoção, localização e contato. JavaScript utilizado para criação de um menu de navegação responsivo, formulário de contato e galeria de fotos. Idealizado desde o design até a programação.',
        tech: 'Figma, HTML, CSS, SASS, JavaScript, Vue.js, Git',
        image: 'placeholder'
    },
    {
        number: '#03',
        name: 'Lofi Music ',
        span: 'Player',
        description: 'Player de música com interface simples e minimalista. Funcionalidades: reprodução de músicas, pausa, avanço e retrocesso de faixas, volume, loop e shuffle.',
        tech: 'Figma, HTML, CSS, SASS, JavaScript',
        image: 'placeholder'
    },
    {
        number: '#04',
        name: 'Validação de ',
        span: 'Formulário',
        description: 'Formulário de cadastro com validação de campos. JavaScript utilizado para validação de campos, exibição de mensagens de erro e de sucesso.',
        tech: 'HTML, CSS, SASS, JavaScript',
        image: 'placeholder'
    },
    {
        number: '#05',
        name: 'Contador de ',
        span: 'Piadas',
        description: 'Contador de piadas com tema livre. JavaScript utilizado para criação de um contador de piadas, com a possibilidade de adicionar novas piadas. Utiliza diversas APIs',
        tech: 'HTML, CSS, SASS, JavaScript, APIs',
        image: 'placeholder'
    },
    {
        number: '#06',
        name: 'Confraria do Temaki',
        span: '- Restaurante Japonês',
        description: 'Site de comidas japonesas real. Trabalho realizado como lead designer, parte do processo de criação de um novo site para a empresa. Foi realizado o design de toda a interface, desde o layout até a criação de ícones e ilustrações.',
        tech: 'Figma, Adobe Illustrator, Adobe Photoshop',
        image: 'placeholder'
    },
    {
        number: '#07',
        name: 'MHL Serviços',
        span: '- Empresa de Café',
        description: 'Site de serviços para máquinas de café profissionais real. Trabalhei como designer e desenvolvedor wordpress no desenvolvimento do site. Foi realizado o design de toda a interface, desde o layout até o desenvolvimento do site.',
        tech: 'Figma, Adobe Illustrator, Adobe Photoshop, WordPress',
        image: 'placeholder'
    }
]

let projectIndex = 0;

function setProject(index) {

    projectNumber.textContent = projects[index].number;
    projectName.innerHTML = projects[index].name + ' <span id="project-span">' + projects[index].span + '</span>';
    projectDescription.textContent = projects[index].description;
    projectTech.textContent = projects[index].tech;

    // projectSpan.textContent = projects[index].span;


}

function changeProject(direction) {
    console.log(direction);
    if (direction === 'next') {
        projectIndex++;
        if (projectIndex > projects.length - 1) {
            projectIndex = 0;
        }
        setProject(projectIndex);

    } else if (direction === 'prev') {
        projectIndex--;
        if (projectIndex < 0) {
            projectIndex = projects.length - 1;
        }
        setProject(projectIndex);
    }
}
setProject(projectIndex);

// Event Listeners
// leftArrow.addEventListener('click', changeProject('prev'));
// rightArrow.addEventListener('click', changeProject('next'));

leftArrow.addEventListener('click', () => {
    changeProject('prev');
    console.log('left');
});
rightArrow.addEventListener('click', () => {
    changeProject('next');
    console.log('right');
});
arrows.addEventListener('click', () => {
    console.log('arrow');
});