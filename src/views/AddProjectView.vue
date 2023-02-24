<template>
  <div
    class="body container mx-auto mt-14 flex flex-col items-center px-4"
    v-if="isLoggedIn">
    <h1
      class="text-3xl font-semibold text-black dark:text-blackDarkMode max-md:text-2xl">
      Adicionar Projeto
    </h1>
    <!-- Form -->
    <form class="form-control mt-8 w-full max-w-md">
      <!-- Project Number -->
      <label for="projectNumber" class="label">
        <span class="label-text dark:text-grayDarkMode">Project Number</span>
      </label>
      <input
        v-model="projectNumber"
        name="projectNumber"
        type="text"
        placeholder="Project Number"
        class="input-bordered input mb-4 w-full" />

      <!-- Project Name -->
      <label for="projectName">
        <span class="label-text dark:text-grayDarkMode">Project Name</span>
      </label>
      <input
        v-model="projectName"
        name="projectName"
        type="text"
        placeholder="Project Name"
        class="input-bordered input mb-4 w-full" />

      <!-- Project Description -->
      <label for="projectDescription">
        <span class="label-text dark:text-grayDarkMode"
          >Project Description</span
        >
      </label>
      <input
        v-model="projectDescription"
        name="projectDescription"
        type="text"
        placeholder="Project Description"
        class="input-bordered input mb-4 w-full" />

      <!-- Project Tech -->
      <label for="projectTech">
        <span class="label-text dark:text-grayDarkMode">Project Tech</span>
      </label>
      <input
        v-model="projectTech"
        name="projectTech"
        type="text"
        placeholder="Project Tech"
        class="input-bordered input mb-4 w-full" />

      <!-- Project Image -->
      <label for="projectImage">
        <span class="label-text dark:text-grayDarkMode">Project Image</span>
      </label>
      <input
        v-model="projectImage"
        name="projectImage"
        type="text"
        placeholder="Project Image"
        class="input-bordered input mb-4 w-full" />

      <!-- Project Link Demo -->
      <label for="projectLinkDemo">
        <span class="label-text dark:text-grayDarkMode">Project Link Demo</span>
      </label>
      <input
        v-model="projectLinkDemo"
        name="projectLinkDemo"
        type="text"
        placeholder="Project Link Demo"
        class="input-bordered input mb-4 w-full" />

      <!-- Project Link Github -->
      <label for="projectLinkGithub">
        <span class="label-text dark:text-grayDarkMode"
          >Project Link Github</span
        >
      </label>
      <input
        v-model="projectLinkGithub"
        name="projectLinkGithub"
        type="text"
        placeholder="Project Link Github"
        class="input-bordered input mb-4 w-full" />

      <!-- Project Link Behance -->
      <label for="projectLinkBehance">
        <span class="label-text dark:text-grayDarkMode"
          >Project Link Behance</span
        >
      </label>
      <input
        v-model="projectLinkBehance"
        name="projectLinkBehance"
        type="text"
        placeholder="Project Link Behance"
        class="input-bordered input mb-4 w-full" />

      <!-- Project Intro -->
      <label for="projectIntro">
        <span class="label-text dark:text-grayDarkMode">Project Intro</span>
      </label>
      <input
        v-model="projectIntro"
        name="projectIntro"
        type="text"
        placeholder="Project Intro"
        class="input-bordered input mb-4 w-full" />

      <!-- Project Challenge -->
      <label for="projectChallenge">
        <span class="label-text dark:text-grayDarkMode">Project Challenge</span>
      </label>
      <input
        v-model="projectChallenge"
        name="projectChallenge"
        type="text"
        placeholder="Project Challenge"
        class="input-bordered input mb-4 w-full" />

      <!-- Project Process 1 -->
      <label for="projectProcess1">
        <span class="label-text dark:text-grayDarkMode">Project Process 1</span>
      </label>
      <input
        v-model="projectProcess1"
        name="projectProcess1"
        type="text"
        placeholder="Project Process 1"
        class="input-bordered input mb-4 w-full" />

      <!-- Project Process Image -->
      <label for="projectProcessImage">
        <span class="label-text dark:text-grayDarkMode"
          >Project Process Image</span
        >
      </label>
      <input
        v-model="projectProcessImage"
        name="projectProcessImage"
        type="text"
        placeholder="Project Process Image"
        class="input-bordered input mb-4 w-full" />

      <!-- Project Process 2 -->
      <label for="projectProcess2">
        <span class="label-text dark:text-grayDarkMode">Project Process 2</span>
      </label>
      <input
        v-model="projectProcess2"
        name="projectProcess2"
        type="text"
        placeholder="Project Process 2"
        class="input-bordered input mb-4 w-full" />

      <!-- Project Process Legenda -->
      <label for="projectProcessLegenda">
        <span class="label-text dark:text-grayDarkMode"
          >Project Process Legenda</span
        >
      </label>
      <input
        v-model="projectProcessLegenda"
        name="projectProcessLegenda"
        type="text"
        placeholder="Project Process Legenda"
        class="input-bordered input mb-4 w-full" />

      <!-- Project Result -->
      <label for="projectResult">
        <span class="label-text dark:text-grayDarkMode">Project Result</span>
      </label>
      <input
        v-model="projectResult"
        name="projectResult"
        type="text"
        placeholder="Project Result"
        class="input-bordered input mb-4 w-full" />

      <!-- Project Takeaway -->
      <label for="projectTakeaway">
        <span class="label-text dark:text-grayDarkMode">Project Takeaway</span>
      </label>
      <input
        v-model="projectTakeaway"
        name="projectTakeaway"
        type="text"
        placeholder="Project Takeaway"
        class="input-bordered input mb-4 w-full" />

      <!-- Gallery Photo 1 -->
      <label for="gallery1">
        <span class="label-text dark:text-grayDarkMode">Gallery Photo 1</span>
      </label>
      <input
        v-model="gallery1"
        name="gallery1"
        type="text"
        placeholder="Gallery Photo 1"
        class="input-bordered input mb-4 w-full" />

      <!-- Gallery Photo 2 -->
      <label for="gallery2">
        <span class="label-text dark:text-grayDarkMode">Gallery Photo 2</span>
      </label>
      <input
        v-model="gallery2"
        name="gallery2"
        type="text"
        placeholder="Gallery Photo 2"
        class="input-bordered input mb-4 w-full" />

      <!-- Gallery Photo 3 -->
      <label for="gallery3">
        <span class="label-text dark:text-grayDarkMode">Gallery Photo 3</span>
      </label>
      <input
        v-model="gallery3"
        name="gallery3"
        type="text"
        placeholder="Gallery Photo 3"
        class="input-bordered input mb-4 w-full" />

      <button
        @click.prevent="addProject()"
        class="btn mt-4 w-full text-white dark:bg-white dark:text-black">
        Adicionar Projeto
      </button>
    </form>
    <!-- Mensagens de erro -->
    <div v-if="errorMessage" class="w-1/3">
      <div class="alert alert-error mt-4 shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 flex-shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Erro! {{ errorMessage }}</span>
        </div>
      </div>
    </div>
    <div v-if="sucessMessage" class="w-1/3">
      <div class="alert alert-success mt-4 shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 flex-shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Sucesso! {{ sucessMessage }}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Se o usuário não estiver logado -->
  <div v-else class="flex h-screen flex-col items-center justify-center">
    <h1
      class="mb-8 w-2/3 text-center text-3xl font-bold text-black dark:text-blackDarkMode max-md:text-2xl">
      Você precisa estar logado e ser um administrador para acessar essa página
    </h1>
    <Button
      class=""
      to="/signin"
      :isRouter="true"
      text="Entrar"
      type="btn-primary" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { getAuth, onAuthStateChanged } from '@firebase/auth'
import { addDoc, collection, getFirestore } from '@firebase/firestore'

let db
let projectsCollection

export default {
  name: 'AddProjectView',
  components: {},
  mounted() {
    // Scroll to top
    window.scrollTo(0, 0)

    // Check if user is logged in
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('user is logged in')
        this.isLoggedIn = true
      } else {
        alert('Você precisa estar logado para acessar essa página')
        this.isLoggedIn = false
        this.$router.push('/signin')
      }
    })

    // Firebase db
    db = getFirestore()
    projectsCollection = collection(db, 'projects')
  },
  data() {
    return {
      isLoggedIn: false,
      sucessMessage: '',
      errorMessage: '',
      projectNumber: '',
      projectName: '',
      projectDescription: '',
      projectTech: '',
      projectImage: '',
      projectLinkDemo: '',
      projectLinkGithub: '',
      projectLinkBehance: '',
      projectIntro: '',
      projectChallenge: '',
      projectProcess1: '',
      projectProcessImage: '',
      projectProcess2: '',
      projectProcessLegenda: '',
      projectResult: '',
      projectTakeaway: '',
      gallery1: '',
      gallery2: '',
      gallery3: '',
    }
  },
  methods: {
    addProject() {
      console.log('Adicionando projeto')
      addDoc(projectsCollection, {
        projectNumber: Number(this.projectNumber),
        name: this.projectName,
        description: this.projectDescription,
        tech: this.projectTech,
        image: this.projectImage,
        linkDemo: this.projectLinkDemo,
        linkGithub: this.projectLinkGithub,
        linkBehance: this.projectLinkBehance,
        introd: this.projectIntro,
        challenge: this.projectChallenge,
        process1: this.projectProcess1,
        processImage: this.projectProcessImage,
        process2: this.projectProcess2,
        processLegenda: this.projectProcessLegenda,
        result: this.projectResult,
        takeaway: this.projectTakeaway,
        gallery1: this.gallery1,
        gallery2: this.gallery2,
        gallery3: this.gallery3,
      })
        .then(() => {
          console.log('Projeto adicionado com sucesso!')
          this.sucessMessage = 'Projeto adicionado com sucesso!'
          this.errorMessage = ''
          this.projectNumber = ''
          this.projectName = ''
          this.projectDescription = ''
          this.projectTech = ''
          this.projectImage = ''
          this.projectLinkDemo = ''
          this.projectLinkGithub = ''
          this.projectLinkBehance = ''
          this.projectIntro = ''
          this.projectChallenge = ''
          this.projectProcess1 = ''
          this.projectProcessImage = ''
          this.projectProcess2 = ''
          this.projectProcessLegenda = ''
          this.projectResult = ''
          this.projectTakeaway = ''
          this.gallery1 = ''
          this.gallery2 = ''
          this.gallery3 = ''
          // esperar para redirecionar
          setTimeout(() => {
            this.$router.push('/dashboard')
          }, 1000)
        })
        .catch((error) => {
          this.errorMessage = error.message
          this.sucessMessage = ''
        })
    },
  },
}
</script>

<style scoped>
.body {
  min-height: 60vh;
}
</style>
