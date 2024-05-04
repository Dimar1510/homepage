const projects = []

class Project {
    constructor(name, github, live, description, image) {
        this.name = name
        this.github = github
        this.live = live
        this.description = description
        this.image = image
    }
}

projects.push
(
    new Project
    (
        'Battleship',
        'https://github.com/Dimar1510/battleship',
        'https://dimar1510.github.io/battleship/',
        'Final project of vanilla JS course. I even added somewhat smart computer opponent.',
        'images/projects/battleship.JPG'
    ),
    new Project
    (
        'Weather App',
        'https://github.com/Dimar1510/weather-app/',
        'https://dimar1510.github.io/weather-app/',
        'Simple weather app to get familiar with API and async JS.',
        'images/projects/weather.JPG'
    ),
    new Project
    (
        'Todo List',
        'https://github.com/Dimar1510/todo/',
        'https://dimar1510.github.io/todo/',
        'Extensive project to learn DOM rendering. Took more time than any other project.',
        'images/projects/todo.JPG'
    ),
    new Project
    (
        'Tic Tac Toe',
        'https://github.com/Dimar1510/tic-tac-toe',
        'https://dimar1510.github.io/tic-tac-toe',
        'Minimalistic game with slick animations. No single player, for now...',
        'images/projects/tictac.JPG'
    ),
    new Project
    (
        'Calculator',
        'https://github.com/Dimar1510/calculator',
        'https://dimar1510.github.io/calculator/',
        'I do not know why but I struggled with this more than I should have',
        'images/projects/calculator.JPG',
    ),
    new Project
    (
        'Etch-a-Sketch',
        'https://github.com/Dimar1510/eas',
        'https://dimar1510.github.io/eas/',
        'Basically the first real project of this course, but for some reason I am still very proud of it.',
        'images/projects/eas.JPG'
    )
)


function renderProjects() {
    const grid = document.querySelector('.projects')
    grid.innerHTML = ""
    projects.forEach(project => {
        grid.append(createCard(project))
    });
}

function createCard(project) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = 
    `
    <div class="card-image">
        <img src="${project.image}">
    </div>
    <div class="card-description">
        <div class="card-title">
            <h3>${project.name}</h3>
            <div class="project-links">
                <a href="${project.github}" target='_blank'>
                <i class="devicon-github-original colored link"></i>
                </a>
                <a href="${project.live}" target='_blank'>
                <img src="images/open-in-new.svg" alt="" class='link'>
                </a>
            </div>
        </div>
        <p>${project.description}</p>
    </div>
    `
    return card
}

renderProjects()

