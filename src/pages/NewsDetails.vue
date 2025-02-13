<template>
  <q-page>
    <div class="news-details" v-if="newsItem">
      <!-- Main Content -->
      <div class="news-page">

        <div class="image-title-container">
          <img v-if="newsItem.imagetitle" :src="newsItem.imagetitle" class="title-image" />
        </div>
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
          <div v-for="(paragraph, index) in newsItem.content" :key="index">
            <div v-if="newsItem.images && newsItem.images[index]" class="images-content">
              <img :src="newsItem.images[index].url" class="content-image" />
            </div>
            <p class="text-body2">{{ paragraph }}</p>
          </div>
          <div class="source">
            <p class="text-body3">Source: {{ newsItem.source }}</p>
          </div>
        </div>

        <!-- Share Section -->
        <div class="share-section q-px-md q-py-md">
          <p class="text-subtitle2">Share Now</p>
          <div class="share-button">
            <q-btn flat round class="share-btn facebook" icon="mdi-facebook" aria-label="Facebook" @click="openFacebook" />
            <q-btn flat round class="share-btn twitter" icon="mdi-twitter" aria-label="Twitter" @click="openTwitter" />
            <q-btn flat round class="share-btn linkedin" icon="mdi-linkedin" aria-label="Linkedin" @click="openLinkedin" />
            <q-btn flat round class="share-btn whatsapp" icon="mdi-whatsapp" aria-label="Whatsapp" @click="openWhatsapp" />
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
      </div>
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

@font-face {
  font-family: 'TitilliumWebRegular';
  src: url('/assets/fonts/TitilliumWeb-Regular.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: 'TitilliumWebSemiBold';
  src: url('/assets/fonts/TitilliumWeb-SemiBold.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: 'RecklessNeueMedium';
  src: url('/assets/fonts/RecklessNeue-Medium.ttf') format('truetype');
}

@font-face {
  font-family: 'TitilliumWebBold';
  src: url('/assets/fonts/TitilliumWeb-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'AvenirBlack';
  src: url('/assets/fonts/Avenir LT Std 95 Black.otf') format('opentype');
}

.news-page {
  padding-left: 13.5%;
  padding-right: 13.5%;
}

.image-title-container {
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 20px;
}

.title-image {
  width: 70vw;
  height: 70vh;
  max-width: min-content;
  max-height: min-content;
}

.news-content {
  font-family: 'TitilliumWebRegular';
  padding: 20px 0; /* Same as images-content */
}

/* Flexbox for Title and Date */
.news-header {
  display: flex;
  font-family: 'RecklessNeueMedium';
  align-items: center;
  gap: 20px;
  padding: 20px;
}

.date-box {
  background: #807c12;
  font-family: 'AvenirBlack';
  color: white;
  padding: 10px;
  text-align: center;
}

.date-day,
.date-month,
.date-year {
  font-size: 14px;
  line-height: 16px;
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
  font-family: 'TitilliumWebRegular';
  padding: 20px;
}

.content-section {
  margin-bottom: 20px;
}

.images-content {
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0;
}

.content-image {
  width: 70vw;
  height: 70vh;
  max-width: min-content;
  max-height: min-content;
  margin-bottom: 10px;
}

.text-body2 {
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 20px;
  padding-bottom: 10px;
}

.text-body3 {
  font-size: 16px;
  padding-top: 20px;
  padding-bottom: 0px;
  font-style: italic;
}

.share-section {
  text-align: center;
}

.text-subtitle2 {
  font-size: 16px;
  margin-bottom: 15px;
  text-align: left;
}

.share-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.share-btn {
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 10px 15px;
  font-size: 16px;
  width: 25%;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.share-btn.facebook {
  background-color: #4267B2;
}

.share-btn.twitter {
  background-color: #1DA1F2;
}

.share-btn.linkedin {
  background-color: #0077B5;
}

.share-btn.whatsapp {
  background-color: #25D366;
}

.share-btn.more {
  background-color: #007BFF;
}

.share-btn:hover {
  transform: translateY(-3px);
}

/* Centering Back Button */
.back-btn-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding-bottom: 40px;
}

@font-face {
  font-family: 'AvenirMedium';
  src: url('/assets/fonts/Avenir LT Std 65 Medium.otf') format('opentype');
}

.back-btn {
  background-color: transparent;
  border: 2px solid #000;
  color: #000000;
  font-family: 'AvenirMedium';
  font-size: 16px;
  padding: 10px 20px;
  width: 120px;
  height: 50px;
  border-radius: 0;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.back-btn:hover {
  background-color: #a39f1a;
  color: white;
  border: 2px solid #a39f1a;
  transform: translateY(-3px);
}
</style>
