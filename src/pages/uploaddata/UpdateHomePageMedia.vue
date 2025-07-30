<template>
  <q-page class="q-pa-md">
    <q-card class="q-pa-lg" flat bordered>
      <q-card-section>
        <div class="text-h6">Update Homepage Media</div>
      </q-card-section>

      <q-form @submit.prevent="submitForm">
        <q-card-section class="q-gutter-md">
          <q-input v-model="form.title" label="Title" outlined required />
          <q-input v-model="form.description" label="Description" type="textarea" outlined required />
          <q-input v-model="form.button" label="Button Text" outlined />
          <q-input v-model="form.link" label="Link URL" outlined />

          <q-file
            v-model="form.image"
            label="Upload Image"
            accept="image/jpeg, image/jpg, image/png"
            outlined
            clearable
          />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Update" color="primary" type="submit" />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import axios from 'axios'

const $q = useQuasar()

const form = ref({
  title: '',
  description: '',
  button: '',
  link: '',
  image: null
})

const submitForm = async () => {
  try {
    const formData = new FormData()
    formData.append('title', form.value.title)
    formData.append('description', form.value.description)
    formData.append('button', form.value.button)
    formData.append('link', form.value.link)
    if (form.value.image) {
      formData.append('image', form.value.image)
    }

    await axios.post('http://your-backend-url/homepage-media/update/1', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    $q.notify({ type: 'positive', message: 'Homepage media updated!' })
  } catch (err) {
    $q.notify({ type: 'negative', message: 'Update failed: ' + err.message })
  }
}
</script>
