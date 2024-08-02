<script setup>
import { useBoardStore } from '../stores/boardStore'
import { useToast } from 'vue-toastification'
import { useRouter, useRoute } from 'vue-router'

const store = useBoardStore()
const route = useRoute()
const router = useRouter()
const toast = useToast()

const currentTask = computed(() => {
  return store.getTask(route.params.id)
})

function deleteCurrentTask() {
  toast({
    // Add toast message or functionality here
  })
  store.deleteTask(route.params.id)
  router.push('/')
}

function finishTask() {
   // Perform task completion action
  router.push('/')
}
</script>

<template>
  <div class="task-wrapper bg-gradient-to-br from-sky-300 to-violet-300">
    <div v-if="currentTask" class="task-view">
      <UFormGroup label="Name" class="w-full mb-4">
        <UInput type="text" v-model="currentTask.name" />
      </UFormGroup>
      <UFormGroup label="Description" class="w-full mb-4">
        <UTextarea v-model="currentTask.description" />
      </UFormGroup>
      <div class="flex justify-end">
        <UButton color="red" @click="deleteCurrentTask" class="mr-2">
          Delete
        </UButton>
        <UButton @click="finishTask">Done</UButton>
      </div>
    </div>
    <div v-else>
      <p>Task not found.</p>
    </div>
  </div>
</template>
