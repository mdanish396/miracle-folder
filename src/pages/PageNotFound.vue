<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center bg-blue text-black text-center">
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
            label="Go Back"
            @click="goBack"
            no-caps
          />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useRouter } from 'vue-router'

defineOptions({
  name: 'PageNotFound'
})

console.log('⚡ 404 Page Loaded') // Check if this logs in the console

const router = useRouter()

const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}
</script>
