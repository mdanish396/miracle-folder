<template>
  <div class="fullscreen bg-blue text-black text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        Oops. Nothing here...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        label="Go Back" @click="goBack"
        no-caps
      />
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'ErrorNotFound'
})
import { useRouter } from 'vue-router'

const router = useRouter()

// Function to go back to the previous page
const goBack = () => {
  router.back()
}
</script>
