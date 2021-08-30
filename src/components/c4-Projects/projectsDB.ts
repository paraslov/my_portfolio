import socNetImg from '../../assets/img/projectsImg/SocNet.jpg'
import todoImg from '../../assets/img/projectsImg/todoImg.jpg'

export type TProjectDescription = {
    title: string
    description: {implemented: string[], techsUsed: string[]}
    style: {backgroundImage: string},
    refs: {project: string, sourceCode: string}
}

export const projects: TProjectDescription[] = [
    {
        title: 'Social network',
        description: {
            implemented: ['authorization;', 'edit profile;', 'follow/unfollow friends;', 'users list;', 'pagination;', 'adding posts and chat messages;', 'validation;', 'flux-architecture'],
            techsUsed: ['TS;', 'react;', 'redux, redux-thunk;', 'axios']
        },
        style: {backgroundImage: `url(${socNetImg})`},
        refs: {project: 'https://www.paraslovsb.ru', sourceCode: 'https://github.com/paraslov/it-inc_social-network'}
    },
    {
        title: 'Todo list',
        description: {
            implemented: ['authorization;', 'adding, removing, editing todo lists and tasks;', 'validation;', 'flux-architecture'],
            techsUsed: ['TS;', 'redux-toolkit;', 'material UI;', 'formik;', 'unit tests;', 'storybook;', 'snapshot;', 'hot reloading;', 'axios;', 'react;', 'redux, redux-thunk']
        },
        style: {backgroundImage: `url(${todoImg})`},
        refs: {project: 'https://www.paraslovsb.ru', sourceCode: 'https://github.com/paraslov/it-inc_todolist'}
    },
]
