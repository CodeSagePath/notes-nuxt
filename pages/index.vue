<script setup>
import { useBoardStore } from '../stores/boardStore'

const store = useBoardStore()
const route = useRoute()
const router = useRouter()

const newColumnNameInput = ref('')

const isModalVisible = computed(() => {
  return route.name === 'index-tasks-id'
})

function createNewColumn() {
  store.addColumn(newColumnNameInput.value)
  newColumnNameInput.value = ''
}

function closeColumnModal() {
  router.push('/')
}
</script>

<template>
<div class="board-wrapper bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600">
    <main class="board  ">
      <BoardColumn
        v-for="(column, columnIndex) in store.board.columns"
        :key="column.id"
        :column="column"
        :columnIndex="columnIndex"
      />
      <UContainer class="columm" >
        <UInput
          v-model="newColumnNameInput"
          type="text"
          placeholder="Create new column"
          icon="i-heroicons-plus-circle-solid"
          @keyup.enter="createNewColumn"
        />
      </UContainer>
    </main>
    <div v-show="isModalVisible" class="task-bg" @click.self="closeColumnModal">
      <NuxtPage :key="route.fullPath" />
    </div>
  </div>
</template>
