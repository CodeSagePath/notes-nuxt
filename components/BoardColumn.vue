<script setup>
import { useBoardStore } from '~/stores/boardStore'
import { computed, ref } from 'vue'

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
    <div class="column-header mb-4 bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 p-2 rounded">
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
          class="mb-4 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300"
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
      placeholder="New"
      icon="i-heroicons-plus-circle-solid"
      @keyup.enter="addNewTask"
    />
  </UContainer>
</template>



<!-- 
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
  <v-container
    class="column"
    draggable="true"
    @dragstart.self="startColumnDrag($event, columnIndex)"
    @dragenter.prevent
    @dragover.prevent
    @drop.stop="handleDrop($event, { toColumnIndex: columnIndex })"
  >
    <div class="column-header mb-4 p-2 rounded" :style="{ background: 'linear-gradient(45deg, ' + $vuetify.theme.themes.light.primary + ', ' + $vuetify.theme.themes.light.secondary + ')' }">
      <div>
        <v-text-field
          v-if="isEditingName"
          v-model="column.name"
          dense
          hide-details
          class="pa-0"
        />
        <h2 v-else>{{ column.name }} ({{ taskCount }})</h2>
      </div>
      <div>
        <v-btn
          v-if="!isEditingName"
          icon="mdi-pencil"
          color="yellow"
          class="mr-2"
          @click="isEditingName = true"
        />
        <v-btn
          v-if="isEditingName"
          icon="mdi-check"
          color="green"
          class="mr-2"
          @click="isEditingName = false"
        />
        <v-btn
          icon="mdi-delete"
          color="red"
          @click="removeColumn(columnIndex)"
        />
      </div>
    </div>
    <v-list dense>
      <v-list-item
        v-for="(task, taskIndex) in column.tasks"
        :key="task.id"
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
        <v-card
          class="mb-4"
          :style="{ background: 'linear-gradient(45deg, ' + $vuetify.theme.themes.light.primary + ', ' + $vuetify.theme.themes.light.secondary + ')' }"
          @click="navigateToTask(task.id)"
        >
          <v-card-title class="headline">{{ task.name }}</v-card-title>
          <v-card-text>{{ task.description }}</v-card-text>
        </v-card>
      </v-list-item>
    </v-list>
    <v-text-field
      v-model="newTaskNameInput"
      dense
      placeholder="New task"
      append-icon="mdi-plus-circle"
      hide-details
      class="mt-4"
      @keyup.enter="addNewTask"
    />
  </v-container>
</template>

<style scoped>
.column {
  border: 1px solid var(--v-primary);
  padding: 16px;
  max-width: 300px;
  min-width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.column-header h2 {
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0;
}

v-card {
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

v-card:hover {
  transform: scale(1.05);
}

v-list-item {
  margin-bottom: 12px;
}
</style> -->
