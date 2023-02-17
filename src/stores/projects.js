import { defineStore } from 'pinia'


export default defineStore('projects', {
  state: () => ({
    resume: 'https://drive.google.com/file/d/1-3r8xZ2bAcQ2lABl0Xv572TWA-PFFox-/view?usp=sharing',
    projects: [
      {
        id: 1,
        name: 'Project 1',
        description: 'descricao do projeto 1',
        tech: 'tech do projeto 1',
        image: 'https://picsum.photos/200/300',
        linkDemo: 'https://google.com',
        linkGithub: 'https://google.com',
        linkBehance: 'https://bing.com',
        introd: 'introd do projeto 1',
        challenge: 'desafio do proj 1',
        process1: 'processo texto 1 do projeto 1',
        processImage: 'https://picsum.photos/200/300',
        process2: 'processo texto 2 do projeto 1',
        processLegenda: 'legenda do processo do projeto 1',
        result: 'resultado do projeto 1',
        takeaway: 'takeaway do projeto 1',
        gallery1: 'https://picsum.photos/200/300',
        gallery2: 'https://picsum.photos/200/300',
        gallery3: 'https://picsum.photos/200/300',
      },
      {
        id: 2,
        name: 'Project 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra. Tellus sed mauris, quis aenean purus, facilisi at.',
        tech: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra.',
        image: 'https://picsum.photos/200/300',
        linkDemo: 'https://google.com',
        linkGithub: 'https://google.com',
        linkBehance: 'https://bing.com',
        introd: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra. In molestie sit nisi metus fames. Eget tellus venenatis proin sit urna scelerisque sed eu in. Volutpat in leo faucibus felis.',
        challenge: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra. In molestie sit nisi metus fames. Eget tellus venenatis proin sit urna scelerisque sed eu in. Volutpat in leo faucibus felis.',
        process1: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra. In molestie sit nisi metus fames.',
        processImage: 'https://picsum.photos/200/300',
        process2: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra. In molestie sit nisi metus fames. Eget tellus venenatis proin sit urna scelerisque sed eu in. Volutpat in leo faucibus felis.',
        processLegenda: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra.',
        result: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra. In molestie sit nisi metus fames. Eget tellus venenatis proin sit urna scelerisque sed eu in. Volutpat in leo faucibus felis.',
        takeaway: 'Lorem ipsum dolor sit amet consectetur. Et eu nisl tortor diam cras sit. Pulvinar quam lectus facilisis etiam. Vitae molestie vel suscipit enim dictumst velit tristique mi sed. Orci in amet elit egestas facilisis magna in. In est amet eget et quisque eu.',
        gallery1: 'https://picsum.photos/200/300',
        gallery2: 'https://picsum.photos/200/300',
        gallery3: 'https://picsum.photos/200/300',
      },
      {
        id: 3,
        name: 'Project 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra. Tellus sed mauris, quis aenean purus, facilisi at.',
        tech: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra.',
        image: 'https://picsum.photos/200/300',
        linkDemo: 'https://google.com',
        linkGithub: 'https://google.com',
        linkBehance: 'https://bing.com',
        introd: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra. In molestie sit nisi metus fames. Eget tellus venenatis proin sit urna scelerisque sed eu in. Volutpat in leo faucibus felis.',
        challenge: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra. In molestie sit nisi metus fames. Eget tellus venenatis proin sit urna scelerisque sed eu in. Volutpat in leo faucibus felis.',
        process1: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra. In molestie sit nisi metus fames.',
        processImage: 'https://picsum.photos/200/300',
        process2: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra. In molestie sit nisi metus fames. Eget tellus venenatis proin sit urna scelerisque sed eu in. Volutpat in leo faucibus felis.',
        processLegenda: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra.',
        result: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra. In molestie sit nisi metus fames. Eget tellus venenatis proin sit urna scelerisque sed eu in. Volutpat in leo faucibus felis.',
        takeaway: 'Lorem ipsum dolor sit amet consectetur. Et eu nisl tortor diam cras sit. Pulvinar quam lectus facilisis etiam. Vitae molestie vel suscipit enim dictumst velit tristique mi sed. Orci in amet elit egestas facilisis magna in. In est amet eget et quisque eu.',
        gallery1: 'https://picsum.photos/200/300',
        gallery2: 'https://picsum.photos/200/300',
        gallery3: 'https://picsum.photos/200/300',
      },
      {
        id: 4,
        name: 'Project 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra. Tellus sed mauris, quis aenean purus, facilisi at.',
        tech: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra.',
        image: 'https://picsum.photos/200/300',
        linkDemo: 'https://google.com',
        linkGithub: 'https://google.com',
        linkBehance: 'https://bing.com',
        introd: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra. In molestie sit nisi metus fames. Eget tellus venenatis proin sit urna scelerisque sed eu in. Volutpat in leo faucibus felis.',
        challenge: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra. In molestie sit nisi metus fames. Eget tellus venenatis proin sit urna scelerisque sed eu in. Volutpat in leo faucibus felis.',
        process1: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra. In molestie sit nisi metus fames.',
        processImage: 'https://picsum.photos/200/300',
        process2: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra. In molestie sit nisi metus fames. Eget tellus venenatis proin sit urna scelerisque sed eu in. Volutpat in leo faucibus felis.',
        processLegenda: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra.',
        result: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra. In molestie sit nisi metus fames. Eget tellus venenatis proin sit urna scelerisque sed eu in. Volutpat in leo faucibus felis.',
        takeaway: 'Lorem ipsum dolor sit amet consectetur. Et eu nisl tortor diam cras sit. Pulvinar quam lectus facilisis etiam. Vitae molestie vel suscipit enim dictumst velit tristique mi sed. Orci in amet elit egestas facilisis magna in. In est amet eget et quisque eu.',
        gallery1: 'https://picsum.photos/200/300',
        gallery2: 'https://picsum.photos/200/300',
        gallery3: 'https://picsum.photos/200/300',
      },
      {
        id: 5,
        name: 'Project 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra. Tellus sed mauris, quis aenean purus, facilisi at.',
        tech: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra.',
        image: 'https://picsum.photos/200/300',
        linkDemo: 'https://google.com',
        linkGithub: 'https://google.com',
        linkBehance: 'https://bing.com',
        introd: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra. In molestie sit nisi metus fames. Eget tellus venenatis proin sit urna scelerisque sed eu in. Volutpat in leo faucibus felis.',
        challenge: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra. In molestie sit nisi metus fames. Eget tellus venenatis proin sit urna scelerisque sed eu in. Volutpat in leo faucibus felis.',
        process1: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra. In molestie sit nisi metus fames.',
        processImage: 'https://picsum.photos/200/300',
        process2: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra. In molestie sit nisi metus fames. Eget tellus venenatis proin sit urna scelerisque sed eu in. Volutpat in leo faucibus felis.',
        processLegenda: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra.',
        result: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra. In molestie sit nisi metus fames. Eget tellus venenatis proin sit urna scelerisque sed eu in. Volutpat in leo faucibus felis.',
        takeaway: 'Lorem ipsum dolor sit amet consectetur. Et eu nisl tortor diam cras sit. Pulvinar quam lectus facilisis etiam. Vitae molestie vel suscipit enim dictumst velit tristique mi sed. Orci in amet elit egestas facilisis magna in. In est amet eget et quisque eu.',
        gallery1: 'https://picsum.photos/200/300',
        gallery2: 'https://picsum.photos/200/300',
        gallery3: 'https://picsum.photos/200/300',
      },
      {
        id: 6,
        name: 'Project 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra. Tellus sed mauris, quis aenean purus, facilisi at.',
        tech: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra.',
        image: 'https://picsum.photos/200/300',
        linkDemo: 'https://google.com',
        linkGithub: 'https://google.com',
        linkBehance: 'https://bing.com',
        introd: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra. In molestie sit nisi metus fames. Eget tellus venenatis proin sit urna scelerisque sed eu in. Volutpat in leo faucibus felis.',
        challenge: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra. In molestie sit nisi metus fames. Eget tellus venenatis proin sit urna scelerisque sed eu in. Volutpat in leo faucibus felis.',
        process1: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra. In molestie sit nisi metus fames.',
        processImage: 'https://picsum.photos/200/300',
        process2: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra. In molestie sit nisi metus fames. Eget tellus venenatis proin sit urna scelerisque sed eu in. Volutpat in leo faucibus felis.',
        processLegenda: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra.',
        result: 'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra. In molestie sit nisi metus fames. Eget tellus venenatis proin sit urna scelerisque sed eu in. Volutpat in leo faucibus felis.',
        takeaway: 'Lorem ipsum dolor sit amet consectetur. Et eu nisl tortor diam cras sit. Pulvinar quam lectus facilisis etiam. Vitae molestie vel suscipit enim dictumst velit tristique mi sed. Orci in amet elit egestas facilisis magna in. In est amet eget et quisque eu.',
        gallery1: 'https://picsum.photos/200/300',
        gallery2: 'https://picsum.photos/200/300',
        gallery3: 'https://picsum.photos/200/300',
      }

    ],
  }),
})