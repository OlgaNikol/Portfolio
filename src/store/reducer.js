const initialState = {
    skillsEng: [
        {
            id: 1,
            name: "HTML5",
            description: "It is what creates the skeleton of your site or application, and the fifth version will allow me to create a more SEO-optimized structure for your product.",
            image: "./icons/skills/html5.svg"
        },
        {
            id: 2,
            name: "CSS3",
            description: "This styling language allows me to create absolutely any appearance for your site or application. Everything is limited only by your imagination.",
            image: "./icons/skills/css3.svg"
        },
        {
            id: 3,
            name: "Java Script",
            description: "This programming language allows you to bring anything to life: sliders, windows, tooltips, tabs, receiving data from the server and much more.",
            image: "./icons/skills/js.svg"
        },
        {
            id: 4,
            name: "React",
            description: "This library allows you to create web applications. I can develop the most interactive product specifically for your purposes.",
            image: "./icons/skills/react.svg"
        },
        {
            id: 5,
            name: "Node.js",
            description: "This platform allows you to create a backend for your product - “brains” that will perform actions that the user cannot see.",
            image: "./icons/skills/node.js.svg"
        },
        {
            id: 6,
            name: "GIT",
            description: "This file version control system ensures that you do not lose any line of code, provides tools for collaboration, and the ability to roll back any changes to your project.",
            image: "./icons/skills/git.svg"
        }
    ],
    skillsUkr: [
        {
            id: 1,
            name: "HTML5",
            description: "Саме він створює каркас вашого сайту або додатку, а п'ята версія дає можливість створювати більш SEO-оптимізовану структуру вашого продукту.",
            image: "./icons/skills/html5.svg"
        },
        {
            id: 2,
            name: "CSS3",
            description: "Ця мова стілив дає можливість створювати абсолютно будь-який зовнішній вигляд вашого сайту або додатку. Все обмежується лише вашою фантазією.",
            image: "./icons/skills/css3.svg"
        },
        {
            id: 3,
            name: "Java Script",
            description: "Ця мова програмування дає можливість оживити все що завгодно: слайдери, вікна, підказки, вкладки, отримання данних від сервера та багато іншого.",
            image: "./icons/skills/js.svg"
        },
        {
            id: 4,
            name: "React",
            description: "Ця бібліотека дозволяє створювати web-додатки. Я можу розробити максимально інтерактивний продукт спеціально для ваших цілей.",
            image: "./icons/skills/react.svg"
        },
        {
            id: 5,
            name: "Node.js",
            description: "Ця платформа дозволяє створити бекенд для вашого продукту - «мізки», які будуть виконувати дії, які користувач не бачить.",
            image: "./icons/skills/node.js.svg"
        },
        {
            id: 6,
            name: "GIT",
            description: "Ця система контролю версій гарантує, що ви не втратите жодного рядка коду, вона надає інструменти для спільної роботи та можливість відкочувати будь-які зміни у вашому проекті.",
            image: "./icons/skills/git.svg"
        }
    ],
    projectsEng: [
        {
            id: 1,
            name: "Contacts list",
            nameUrl: "Contacts list",
            description: "Contacts list with search field, which filters by name and phone number. Also here is implemented a filter by gender.",
            fullDescr: "Contacts list with search field, which filters by name and phone number. Also here is implemented a filter by gender.",
            image: "./images/projects/contacts.jpg",
            techs: "ReactJS"
        },
        {
            id: 2,
            name: "Timer",
            nameUrl: "Timer",
            description: "The countdown timer with a progress bar.",
            fullDescr: `It's the countdown timer with a progress bar, which has the following functions:<br/><br/>
                - possibility to set timer update interval;<br/>
                - it can be programmed to run automatically or with start button;<br/>
                - it has log messages like: time is up, the timer is started, the timer is paused, time left.`,
            image: "./images/projects/timer.jpg",
            techs: "ReactJS"
        },
        {
            id: 3,
            name: "SPA with navigation",
            nameUrl: "SPA with navigation",
            description: "It's the single page application with navigation, which has four pages with different content.",
            fullDescr: "It's the single page application with navigation, which has four pages with different content.",
            image: "./images/projects/navigation.jpg",
            techs: "ReactJS"
        },
        {
            id: 4,
            name: "Sign in and Sign up forms",
            nameUrl: "Sign in and Sign up forms",
            description: "It's Sign in / Sign up form with authentication and validation.",
            fullDescr: `It's Sign in / Sign up form with authentication and validation.<br/><br/>
                                - Sign in form has authentication.<br/>
                                - Switching between forms is implemented using react-router.<br/>
                                - After registration the entering data are saved to localStorage, and they are checked for data consistency upon entry.<br/>
                                - Remember me checkbox remembers the data and the next time you log in are automatically pulled into the field.`,
            image: "./images/projects/signInForm.jpg",
            techs: "ReactJS"
        },
        {
            id: 5,
            name: "Post generator app",
            nameUrl: "Post generator app",
            description: "This app has a form with which you can publish posts.",
            fullDescr: "This app has a form with which you can publish posts.",
            image: "./images/projects/postGen.jpg",
            techs: "ReactJS, Redux"
        }
    ],
    projectsUkr: [
        {
            id: 1,
            name: "Список контактів",
            nameUrl: "Contacts list",
            description: "Список контактів із полем пошуку: фільтр реалізовано за іменем і номером телефону. Також реалізований фільтр за статтю.",
            fullDescr: "Список контактів із полем пошуку: фільтр реалізовано за іменем і номером телефону. Також реалізований фільтр за статтю.",
            image: "./images/projects/contacts.jpg",
            techs: "ReactJS"
        },
        {
            id: 2,
            name: "Таймер",
            nameUrl: "Timer",
            description: "Таймер зворотного відліку з індикатором виконання.",
            fullDescr: `Це таймер зворотного відліку з індикатором виконання, який має такі функції:<br/><br/>
                - можливість встановити інтервал оновлення таймера;<br/>
                - його можна запрограмувати на автоматичний запуск або за допомогою кнопки «Пуск»;<br/>
                - він містить такі повідомлення журналу: час закінчився, таймер запущено, таймер призупинено, час залишився.`,
            image: "./images/projects/timer.jpg",
            techs: "ReactJS"
        },
        {
            id: 3,
            name: "Односторінковий додаток з навігацією",
            nameUrl: "SPA with navigation",
            description: "Це односторінковий додаток з навігацією, який має чотири сторінки з різним вмістом.",
            fullDescr: "Це односторінковий додаток з навігацією, який має чотири сторінки з різним вмістом.",
            image: "./images/projects/navigation.jpg",
            techs: "ReactJS"
        },
        {
            id: 4,
            name: "Форма входу та реєстрації",
            nameUrl: "Sign in and Sign up forms",
            description: "Це форма входу/реєстрації з автентифікацією та валідацією.",
            fullDescr: `Це форма входу/реєстрації з автентифікацією та валідацією.<br/><br/>
                                - Форма входу має автентифікацію.<br/>
                                - Перемикання між формами реалізовано за допомогою react-router.<br/>
                                - Після реєстрації введені дані зберігаються в localStorage, і після введення перевіряються на відповідність даних.<br/>
                                - Прапорець «Запам’ятати мене» запам’ятовує дані, і під час наступного входу вони автоматично підтягуються в форму.`,
            image: "./images/projects/signInForm.jpg",
            techs: "ReactJS"
        },
        {
            id: 5,
            name: "Додаток для створення постів",
            nameUrl: "Post generator app",
            description: "Додаток має форму, за допомогою якої можна робити публікації.",
            fullDescr: "Додаток має форму, за допомогою якої можна робити публікації.",
            image: "./images/projects/postGen.jpg",
            techs: "ReactJS, Redux"
        }
    ],
    experienceEng: [
        {
            id: 1,
            position: "Front-end developer",
            period: "2020 – 2021",
            company: "Globberry",
            projects: "Telecom technology, Radio tracking systems",
            technologies: "Html5, Sass/SCSS, Vue.js, Node.js, graphQL, GIT",
        },
        {
            id: 2,
            position: "Business Analyst",
            period: "2018 – 2019",
            company: "Globberry",
            projects: "Telecom technology, Radio tracking systems",
            technologies: "UML, JSON, XML, PL/SQL, REST API, Jira, Confluence",
        },
        {
            id: 3,
            position: `Project Manager<br/>(Oracle E-Business Suite Analyst)`,
            period: "2013 – 2017",
            company: "Miratech (Outstaffing in Kyivstar JSC)",
            projects: "Financial Systems Development",
            technologies: "Oracle DB, PL/SQL, XML, Jira, TortoiseSVN",
        },
        {
            id: 4,
            position: "Software Test Engineer",
            period: "2012 - 2013",
            company: "Miratech (Outstaffing in Kyivstar JSC)",
            projects: "Financial Systems Development",
            technologies: "Oracle DB, PL/SQL, Jira",
        }
    ],
    experienceUkr: [
        {
            id: 1,
            position: "Front-end розробник",
            period: "2020 – 2021",
            company: "Globberry",
            projects: "Телеком технології, Системи радіостеження",
            technologies: "Html5, Sass/SCSS, Vue.js, Node.js, graphQL, GIT",
        },
        {
            id: 2,
            position: "Бізнес аналітик",
            period: "2018 – 2019",
            company: "Globberry",
            projects: "Телеком технології, Системи радіостеження",
            technologies: "UML, JSON, XML, PL/SQL, REST API, Jira, Confluence",
        },
        {
            id: 3,
            position: `Проєктний менеджер<br/>(Oracle E-Business Suite Analyst)`,
            period: "2013 – 2017",
            company: "Miratech (Outstaffing in Kyivstar JSC)",
            projects: "Розвиток фінансових систем",
            technologies: "Oracle DB, PL/SQL, XML, Jira, TortoiseSVN",
        },
        {
            id: 4,
            position: "Інженер з тестування програмного забезпечення",
            period: "2012 - 2013",
            company: "Miratech (Outstaffing in Kyivstar JSC)",
            projects: "Розвиток фінансових систем",
            technologies: "Oracle DB, PL/SQL, Jira",
        }
    ],
    language: "english",  //"ukrainian"
    menuIsActive: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_MENU": {
            return {...state, menuIsActive: !state.menuIsActive};
        }
        case "TOGGLE_LANG": {
            return {...state, language: action.payload};
        }
        default:
            return state;
    }
}