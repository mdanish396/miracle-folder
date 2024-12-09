<template>
  <q-page class="news-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="title-IM">
        <h1>News</h1>
        <p>Stay updated with the latest company news.</p>
      </div>
    </section>

    <!-- News Section -->
      <section class="news-list">
        <div v-for="news in newsItems" :key="news.slug" class="news-item">
            <q-card @click="navigateToNewsDetails(news.slug)" class="news-btn" flat>
              <q-icon name="article" color="secondary" />
              {{ news.title }}
            </q-card>
          </div>
      </section>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { newsItems } from 'src/components/NewsData.vue'

const router = useRouter()

// Function to open the link
const navigateToNewsDetails = (slug) => {
  router.push({ path: `/news-details/${slug}` })
}
</script>

<style scoped>
.hero-section {
  padding: 20px;
  height: 43vh;
  text-align: center;
  background-color: #006039;
  margin-top: -70px;
  color: white;
}

/* Responsive Design */
@media (min-width: 1110px) {
  .hero-section {
    margin-top: -70px;
}
}
@media (max-width: 1106px) {
  .hero-section {
    height: 44vh;
    margin-top: -85px;
}
}

@font-face {
  font-family: 'GeographWebMedium';
  src: url('src/assets/fonts/geograph/geographwebmedium.ttf') format('truetype');
  font-weight: bold;
}

.title-IM {
  font-family: 'GeographWebMedium', sans-serif;
}

.title-IM h1 {
  margin-top: 80px;
  font-size: 50px;
}

.title-IM p {
  margin-top: -50px;
  font-size: 17px;
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
  padding-right: 70px;
  padding-left: 150px;
  margin-top: 10px;
}

.news-item {
  display: flex;
  align-items: center;
}

.news-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  padding: 12px 20px;
  width: fit-content;
  transition: color 0.3s;
  background-color: transparent;
  cursor: pointer;
  color: rgb(48, 48, 48);
}

.news-btn:hover {
  color: #02947e;
  background-color: transparent;
}

@media (max-width: 768px) {
.title-IM h1 {
  font-size: 40px;
}

  .title-IM p {
  font-size: 14px;
}
}

.q-icon {
  font-size: 1.5rem;
}
</style>
