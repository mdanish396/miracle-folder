<template>
  <q-page>
    <div class="news-details" v-if="newsItem">
      <q-card class="q-my-md">
        <!-- Main Content -->
        <div class="news-header">
          <!-- Date Section -->
          <div class="date-box">
            <div class="date-day">{{ newsItem.day }}</div>
            <div class="date-month">{{ newsItem.month }}</div>
            <div class="date-year">{{ newsItem.year }}</div>
          </div>

          <!-- News Title -->
          <div class="news-title">
            <h1 class="text-h4">{{ newsItem.title }}</h1>
          </div>
        </div>

        <!-- News Content -->
        <div class="news-content">
          <p
            v-for="(paragraph, index) in newsItem.content"
            :key="index"
            class="text-body2"
          >
            {{ paragraph }}
          </p>
        </div>

        <!-- Share Section -->
        <div class="share-section q-px-md q-py-md">
          <p class="text-subtitle2">Share Now</p>
          <div class="flex gap-sm">
            <q-btn flat round icon="mdi-facebook" aria-label="Facebook" @click="openFacebook" />
            <q-btn flat round icon="mdi-twitter" aria-label="Twitter" @click="openTwitter" />
            <q-btn flat round icon="mdi-linkedin" aria-label="Linkedin" @click="openLinkedin" />
            <q-btn flat round icon="mdi-whatsapp" aria-label="Whatsapp" @click="openWhatsapp" />
          </div>
        </div>

        <!-- Back Button -->
        <div class="back-btn-wrapper">
          <q-btn
            label="Back"
            flat
            class="back-btn"
            @click="goBack"
          />
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
import { newsItems } from 'src/components/NewsData.vue'

const router = useRouter()
const route = useRoute()

// Fetch the news item based on the route parameter
const newsSlug = route.params.slug
const newsItem = ref(newsItems.value.find(item => item.slug === newsSlug))

const newsUrl = window.location.href

const openFacebook = () => {
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(newsUrl)}&quote=${encodeURIComponent(newsItem.value.title)}`
  window.open(facebookUrl, 'blank')
}

const openTwitter = () => {
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(newsUrl)}&text=${encodeURIComponent(newsItem.value.title)}`
  window.open(twitterUrl, 'blank')
}

const openLinkedin = () => {
  const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(newsUrl)}&title=${encodeURIComponent(newsItem.value.title)}`
  window.open(linkedinUrl, 'blank')
}

const openWhatsapp = () => {
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(newsItem.value.title)}%20${encodeURIComponent(newsUrl)}`
  window.open(whatsappUrl, '_blank')
}

// Function to go back to the previous page
const goBack = () => {
  router.back()
}
</script>

<style scoped>
.news-details {
  font-family: 'Roboto', sans-serif;
  padding: 20px;
}

/* Flexbox for Title and Date */
.news-header {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
}

.date-box {
  background: #006039;
  color: white;
  padding: 10px;
  text-align: center;
}

.date-day,
.date-month,
.date-year {
  font-size: 14px;
  font-weight: bold;
}

.news-title {
  flex: 1;
  padding-left: 20px;
}

.text-h4 {
  font-size: 35px;
  font-weight: bold;
  line-height: 42px;
  margin: 0;
}

.news-content {
  padding: 20px;
  padding-left: 110px;
}

.text-body2 {
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 20px;
  padding-bottom: 10px;
}

.share-section {
  padding-left: 100px;
}

/* Centering Back Button */
.back-btn-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding-bottom: 40px;
}

.back-btn {
  background-color: transparent;
  border: 2px solid #02947e;
  color: #000000;
  font-weight: bold;
  padding: 10px 20px;
  width: 100px;
  border-radius: 0;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.back-btn:hover {
  background-color: #00b398;
  color: white;
  transform: translateY(-3px);
}
</style>
