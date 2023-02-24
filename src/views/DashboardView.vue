<template>
  <div
    class="body container mx-auto mt-14 flex flex-col items-center px-4"
    v-if="isLoggedIn">
    <!-- table -->
    <div class="mb-8 w-full overflow-x-auto">
      <table class="table w-full">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th class="text-black">Nome</th>
            <th>Tech Stack</th>
            <th>Link</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <!-- <DashboardRow
            name="Project Athena"
            techStack="Vuejs, daisyUI, tailwind" /> -->
          <DashboardRow
            v-for="(project, index) in projectsStore.projects"
            :key="project.id"
            :name="project.name"
            :techStack="project.tech"
            :linkGithub="project.linkGithub"
            :id="project.id"
            :projectNumber="project.projectNumber" />
        </tbody>
        <!-- foot -->
        <tfoot>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Tech Stack</th>
            <th>Link</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
    <Button
      to="/dashboard/add"
      :isRouter="true"
      text="Adicionar projeto"
      type="btn-primary" />
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
import { getAuth, onAuthStateChanged } from '@firebase/auth'
import { useRouter } from 'vue-router'
import { RouterLink } from 'vue-router'
import Button from '@/components/Button.vue'
import DashboardRow from '@/components/DashboardRow.vue'

import { mapStores } from 'pinia'
import useProjectsStore from '@/stores/projects'

export default {
  name: 'DashboardView',
  components: {
    RouterLink,
    Button,
    DashboardRow,
  },
  mounted() {
    window.scrollTo(0, 0)
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('user is logged in')
        this.isLoggedIn = true
      } else {
        alert('Você precisa estar logado para acessar essa página')
        this.isLoggedIn = false
        // Envia o usuário para tela de login
        setTimeout(() => {
          this.$router.push('/signin')
        }, 1000)
      }
    })
  },
  data() {
    return {
      isLoggedIn: false,
    }
  },
  computed: {
    ...mapStores(useProjectsStore),
  },
}
</script>

<style scoped>
.body {
  min-height: 60vh;
}
</style>
