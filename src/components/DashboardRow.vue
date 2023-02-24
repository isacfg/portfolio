<template>
  <tr>
    <th></th>
    <td>
      <div class="flex items-center space-x-3">
        <div>
          <div  class="font-bold">{{ name }}</div>
        </div>
      </div>
    </td>
    <td>{{ techStack }}</td>
    <td>
      <a  target="_blank" :href="linkGithub">🔗 Github</a>
    </td>

    <th class="flex flex-col">
      <button class="btn-ghost btn-sm btn" @click="editUser">✏️ Editar</button>
      <button class="btn-ghost btn-sm btn" @click="deleteUser">
        🗑️ Excluir
      </button>
    </th>
  </tr>
</template>

<script>
export default {
  name: 'DashboardRow',
  props: {
    id: {
      type: String,
      default: '0',
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
}
</script>

<style scoped>

</style>
