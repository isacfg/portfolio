import { defineStore } from 'pinia'

export default defineStore('projects', {
  state: () => ({
    projects: [
      {
        id: 1,
        name: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra. Tellus sed mauris, quis aenean purus, facilisi at.',
        tech: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra.',
        image: 'https://picsum.photos/200/300',
        link: 'https://google.com',
      },
      {
        id: 2,
        name: 'Project 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra. Tellus sed mauris, quis aenean purus, facilisi at.',
        tech: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra.',
        image: 'https://picsum.photos/200/300',
        link: 'https://google.com',
      },
      {
        id: 3,
        name: 'Project 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra. Tellus sed mauris, quis aenean purus, facilisi at.',
        tech: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra.',
        image: 'https://picsum.photos/200/300',
        link: 'https://google.com',
      },
      {
        id: 4,
        name: 'Project 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra. Tellus sed mauris, quis aenean purus, facilisi at.',
        tech: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra.',
        image: 'https://picsum.photos/200/300',
        link: 'https://google.com',
      },
      {
        id: 5,
        name: 'Project 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra. Tellus sed mauris, quis aenean purus, facilisi at.',
        tech: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra.',
        image: 'https://picsum.photos/200/300',
        link: 'https://google.com',
      },
      {
        id: 6,
        name: 'Project 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra. Tellus sed mauris, quis aenean purus, facilisi at.',
        tech: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra.',
        image: 'https://picsum.photos/200/300',
        link: 'https://google.com',
      }

    ]
  }),
})