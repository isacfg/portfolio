import { defineStore } from 'pinia'

export default defineStore('projects', {
  state: () => ({
    projects: [
      {
        id: 1,
        name: 'Project 1',
        description: 'This is project 1',
        tech: ['Vue', 'Pinia', 'Tailwind'],
        image: 'https://picsum.photos/200/300',
        link: 'https://google.com',
      },
      {
        id: 2,
        name: 'Project 2',
        description: 'This is project 2',
        tech: ['Vue', 'Pinia', 'Tailwind'],
        image: 'https://picsum.photos/200/300',
        link: 'https://google.com',
      },
      {
        id: 3,
        name: 'Project 3',
        description: 'This is project 3',
        tech: ['Vue', 'Pinia', 'Tailwind'],
        image: 'https://picsum.photos/200/300',
        link: 'https://google.com',
      },

    ]
  }),
})