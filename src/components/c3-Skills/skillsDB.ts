import reactImg from '../../assets/img/logos/skills/react.png'
import tsImg from '../../assets/img/logos/skills/typescript.svg'
import htmlImg from '../../assets/img/logos/skills/html5.svg'
import axiosImg from '../../assets/img/logos/skills/axios.png'
import reduxImg from '../../assets/img/logos/skills/redux.svg'
import materialImg from '../../assets/img/logos/skills/materialUI.svg'
import gitImg from '../../assets/img/logos/skills/git.png'
import jestImg from '../../assets/img/logos/skills/jest.png'
import softSkillsImg from '../../assets/img/logos/skills/softSkills.png'
import englishImg from '../../assets/img/logos/skills/english.png'

type TSkillDescription = {
    title: string
    icon: string
    description: string
}

export const skillsDB: TSkillDescription[] = [
    {title: 'TypeScript', icon: tsImg, description: 'I love TypeScript and use it in most of my projects'},
    {title: 'React JS', icon: reactImg, description: 'I\'m engaged in programming with React JS'},
    {title: 'html&css', icon: htmlImg, description: 'I use html3, css5, sass, module css, adoptive layout'},
    {title: 'Axios', icon: axiosImg, description: 'I use axios in most of my projects as DAL. (crud, rest api)'},
    {title: 'Redux', icon: reduxImg, description: 'I use redux in most of my projects as BLL. Also I use redux-toolkit, redux-thunk, react-redux'},
    {title: 'Material UI', icon: materialImg, description: 'I work with Material UI in my todo list project'},
    {title: 'Git', icon: gitImg, description: 'I worked in the team project using Git version control. Also I use Git in most of my projects'},
    {title: 'Jest', icon: jestImg, description: 'I enjoy using TDD and keep tests updated with the code. Also I used Storybook for testing components'},
    {title: 'Soft skills', icon: softSkillsImg, description: 'Good communication skills, flexibility, resilience to stress, fast learning, dedicated, open-minded, constantly developing'},
    {title: 'English', icon: englishImg, description: 'Intermediate. Searching solutions, reading tech literature, watching tech videos confidently.'},
]