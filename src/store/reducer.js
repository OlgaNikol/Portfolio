const initialState = {
    skills: [
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
            description: "This library allows you to create web applications. We can develop the most interactive product specifically for your purposes.",
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
    projects: [
        {
            id: 1,
            name: "Contacts",
            description: "Contacts list with search field, which filters by name and phone number. Also here is implemented a filter by gender.",
            fullDescr: "Contacts list with search field, which filters by name and phone number. Also here is implemented a filter by gender.",
            image: "./images/projects/contacts.jpg",
            techs: "ReactJS"
        },
        {
            id: 2,
            name: "Timer",
            description: "It's the countdown timer with a progress bar.",
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
            description: "It's the single page application with navigation, which has four pages whith different content.",
            fullDescr: "It's the single page application with navigation, which has four pages whith different content.",
            image: "./images/projects/navigation.jpg",
            techs: "ReactJS"
        },
        {
            id: 4,
            name: "Registration form",
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
            description: "This app has a form with which you can publish posts.",
            fullDescr: "This app has a form with which you can publish posts.",
            image: "./images/projects/postGen.jpg",
            techs: "ReactJS, Redux"
        }
    ],
    experience: [
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
    menuIsActive: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_MENU": {
            return {...state, menuIsActive: !state.menuIsActive};
        }

        /*case "EDIT_LIKES": {
            if (action.payload) {
                return {
                    posts: state.posts.map(post => {
                        if (post.id === action.payload.id) {
                            post.likes = action.payload.count;
                        }
                        return post;
                    })
                }
            }
            return state;
        }*/
        default:
            return state;
    }
}