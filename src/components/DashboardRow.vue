<template>
  <tr>
    <th></th>
    <td>
      <div class="flex items-center space-x-3">
        <div>
          <div class="font-bold">{{ name }}</div>
        </div>
      </div>
    </td>
    <td>{{ techStack }}</td>
    <td>
      <a target="_blank" :href="linkGithub">🔗 Github</a>
    </td>

    <th class="flex flex-col">
      <button class="btn-ghost btn-sm btn" @click="editUser">✏️ Editar</button>
      <button class="btn-ghost btn-sm btn" @click="toggleModalDelete()">
        🗑️ Excluir
      </button>
    </th>
  </tr>

  <!-- MODAL DELETE -->
  <!-- <input type="checkbox" id="my-modal-3" class="modal-toggle" /> -->
  <div class="modal" :class="classModal">
    <div class="modal-box relative">
      <label
        @click="toggleModalDelete()"
        for="my-modal-3"
        class="dark?bg-white btn-sm btn-circle btn absolute right-2 top-2 bg-black text-white"
        >✕</label
      >
      <h3 class="px-8 text-center text-lg font-bold text-black">
        Tem certeza que deseja excluir o projeto
        <span class="font-bold text-red-500">{{ name }}</span> ?
      </h3>
      <div class="my-8 flex items-end justify-center">
        <button class="btn-gray-500 btn-ghost btn" @click="toggleModalDelete()">
          ❌ Cancelar
        </button>
        <button
          class="btn-red-500 btn-ghost btn hover:bg-red-500 hover:text-white"
          @click="deleteUser()">
          🗑️ Sim, excluir
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  collection,
  getFirestore,
  doc,
  deleteDoc,
  getDocs,
} from '@firebase/firestore'

// Getting Pinia Store
import useProjectsStore from '@/stores/projects'

let db
let projectsCollection

export default {
  name: 'DashboardRow',
  props: {
    id: {
      type: String,
      default: '',
    },
    projectNumber: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: 'Project Buttercup',
    },
    techStack: {
      type: String,
      default: 'Vuejs, daisyUI, tailwind',
    },
    linkGithub: {
      type: String,
      default: 'www.isaacf.me/404',
    },
  },
  mounted() {
    db = getFirestore()
    projectsCollection = collection(db, 'projects')
  },
  methods: {
    editUser() {
      console.log('editUser')
    },
    async deleteUser() {
      console.log('deleteUser')
      try {
        if (this.isModalOpen) {
          await deleteDoc(doc(projectsCollection, this.id))
          this.isModalOpen = !this.isModalOpen

          // Updating the store
          getDocs(projectsCollection)
            .then((snapshot) => {
              let projects = []
              snapshot.forEach((doc) => {
                projects.push({ ...doc.data(), id: doc.id })
              })
              // Push data to store
              useProjectsStore().setProjects(projects)
              // console.log(projects)
            })
            .catch((err) => {
              console.log('Erro ao ler docs firebase in main.js', err)
            })
        }
      } catch (e) {
        console.error('Error removing document: ', e)
      }
    },
    toggleModalDelete() {
      this.isModalOpen = !this.isModalOpen
    },
  },
  data() {
    return {
      isModalOpen: false,
    }
  },
  computed: {
    classModal() {
      // if (this.isModalOpen) {
      //   return 'modal-open'
      // } else {
      //   return ''
      // }
      return {
        'modal-open': this.isModalOpen,
        '': !this.isModalOpen,
      }
    },
  },
}
</script>

<style scoped></style>
