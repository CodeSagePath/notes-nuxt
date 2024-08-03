<script setup>
import { useBoardStore } from '~/stores/boardStore'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  column: {
    type: Object,
    required: true
  },
  columnIndex: {
    type: Number,
    required: true
  }
})

const store = useBoardStore()
const router = useRouter()

const isEditingName = ref(false)
const newTaskNameInput = ref('')

function addNewTask() {
  store.addTask({
    taskName: newTaskNameInput.value,
    columnIndex: props.columnIndex
  })
  newTaskNameInput.value = ''
}

function removeColumn(columnIndex) {
  store.deleteColumn(columnIndex)
}

function handleDrop(event, { toColumnIndex, toTaskIndex }) {
  const type = event.dataTransfer.getData('type')
  const fromColumnIndex = event.dataTransfer.getData('from-column-index')

  if (type === 'task') {
    const fromTaskIndex = event.dataTransfer.getData('from-task-index')

    store.moveTask({
      fromTaskIndex,
      toTaskIndex,
      fromColumnIndex,
      toColumnIndex
    })
  } else if (type === 'column') {
    store.moveColumn({
      fromColumnIndex,
      toColumnIndex
    })
  }
}

function navigateToTask(taskId) {
  router.push(`/tasks/${taskId}`)
}

function startColumnDrag(event, fromColumnIndex) {
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.dropEffect = 'move'
  event.dataTransfer.setData('type', 'column')
  event.dataTransfer.setData('from-column-index', fromColumnIndex)
}

function startTaskDrag(event, { fromColumnIndex, fromTaskIndex }) {
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.dropEffect = 'move'
  event.dataTransfer.setData('type', 'task')
  event.dataTransfer.setData('from-column-index', fromColumnIndex)
  event.dataTransfer.setData('from-task-index', fromTaskIndex)
}

const taskCount = computed(() => props.column.tasks.length)
</script>

<template>
  <UContainer
    class="column"
    draggable="true"
    @dragstart.self="startColumnDrag($event, columnIndex)"
    @dragenter.prevent
    @dragover.prevent
    @drop.stop="handleDrop($event, { toColumnIndex: columnIndex })"
  >
    <div class="column-header mb-4 bg-gradient-to-br from-blue-600 via-blue-400 to-blue-500 p-2 rounded">
      <div>
        <UInput v-if="isEditingName" type="text" v-model="column.name" />
        <h2 v-else>{{ column.name }} {{ taskCount }}</h2>
      </div>
      <div>
        <UButton
          v-if="!isEditingName"
          icon="i-heroicons-pencil-square"
          color="yellow"
          class="mr-2"
          @click="isEditingName = true"
        />
        <UButton
          v-if="isEditingName"
          icon="i-heroicons-check"
          color="green"
          class="mr-2"
          @click="isEditingName = false"
        />
        <UButton
          icon="i-heroicons-trash"
          color="red"
          @click="removeColumn(columnIndex)"
        />
      </div>
    </div>
    <ul>
      <li v-for="(task, taskIndex) in column.tasks" :key="task.id">
        <UCard
          class="mb-4 bg-gradient-to-br from-blue-700 via-blue-500 to-blue-300"
          @click="navigateToTask(task.id)"
          draggable="true"
          @dragstart="
            startTaskDrag($event, {
              fromColumnIndex: columnIndex,
              fromTaskIndex: taskIndex
            })
          "
          @drop.stop="
            handleDrop($event, {
              toColumnIndex: columnIndex,
              toTaskIndex: taskIndex
            })
          "
        >
          <strong>{{ task.name }}</strong>
          <p>{{ task.description }}</p>
        </UCard>
      </li>
    </ul>
    <UInput
      v-model="newTaskNameInput"
      type="text"
      placeholder="New Task"
      icon="i-heroicons-plus-circle-solid"
      @keyup.enter="addNewTask"
    />
  </UContainer>
</template>
