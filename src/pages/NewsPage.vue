<template>
  <q-page class="news-page">
    <!-- Hero Section -->
    <div class="new-hero">
      <div class="new-container">
        <!-- Text Content Section -->
        <div class="text-content">
          <div class="line-hero-holder">
            <div class="line-hero">
              <div class="line-hero-1"></div>
            </div>
          </div>
          <h2 class="text-above">News</h2>
          <p class="text-below">
            Stay updated with the latest company news.          </p>
        </div>

        <!-- Image Section -->
        <div class="news-image-container">
          <img src="src/assets/currentproject/house1.jpg" class="top-image" />
        </div>
      </div>
    </div>

    <!-- News Section -->
    <section class="news-list">
      <div v-for="news in newsItems" :key="news.slug" class="news-item">
        <q-card @click="navigateToNewsDetails(news.slug)" class="news-btn" flat>
          <q-icon name="article"/>
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
@font-face {
  font-family: 'TitilliumWebRegular';
  src: url('src/assets/fonts/TitilliumWeb-Regular.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: 'TitilliumWebSemiBold';
  src: url('src/assets/fonts/TitilliumWeb-SemiBold.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: 'RecklessNeueMedium';
  src: url('src/assets/fonts/RecklessNeue-Medium.ttf') format('truetype');
}

@font-face {
  font-family: 'TitilliumWebBold';
  src: url('src/assets/fonts/TitilliumWeb-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'AvenirMedium';
  src: url('src/assets/fonts/Avenir LT Std 65 Medium.otf') format('opentype');
  font-weight: bold;
}

.new-hero {
  background-color: #0d182b;
  display: flex;
  height: 71vh;
  justify-content: center;
  align-items: center;
}

.new-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.text-content {
  flex: 1;
  padding-left: 120px;
}

.line-hero-holder {
  position: static;
  margin-top: -20px;
  padding-bottom: 30px;
}

.line-hero {
  display: flex;
  width: 12px; /* Thickness of the line */
  height: 4px; /* Height of the line */
  background-color: #d9d323; /* Gold accent */
  padding-inline: 40px;

}

.line-hero-1 {
  display: inline-block;
  height: 2px; /* Height of the line */
  background-color: #a7a4a4; /* Gold accent */
  margin-top: 1px; /* Space between the line and text */
  padding-inline-end: 140px;
  margin-inline-start: 40px;
}

.text-above {
  font-family: 'RecklessNeueMedium';
  font-size: 48px;
  margin: 0;
}

.text-below {
  font-family: 'TitilliumWebRegular';
  font-size: 16px;
  padding-top: 20px;
  padding-right: 40px;
  color: #fff;
}

.text-above {
  color: #fff;
}

/* Image Section */
.news-image-container {
  flex: 1; /* Adjusts the width for the image section to make it more than half the screen width */
  display:flex;
  justify-content: flex-end;
  align-items:flex-end;
}

.top-image {
  width: 850px;
  height: 71vh;
  object-fit: cover;
}

@media (max-width: 1260px) {

.text-above {
  font-size: 30px;
}

.text-below {
  font-size: 15px;
}

.line-hero {
padding-inline: 20px;
}

.line-hero-1 {
  padding-inline-end: 100px;
  margin-inline-start: 20px;
}

.top-image {
  width: 700px;
}
}

@media (max-width: 1024px) {
  .top-image {
  width: 600px;
}
}

@media (max-width: 910px) {
  .top-image {
  width: 500px;
}
}

@media (max-width: 820px) {

  .new-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .news-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -460px;
  }

  .text-content {
    padding-left: 0px;
    padding-top: 175px;
  }

  .text-above {
  font-size: 30px;
}

.text-below {
  padding-right: 0px;

}

.line-hero-holder {
  display: none;
}

.top-image {
  width: 100%;
  max-width: 500px;
  height: 47vh;
  }
}
@media (max-width: 520px) {

  .news-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -450px;
  }

  .text-content {
    padding-left: 0px;
    padding-top: 168px;
  }

  .text-above {
    margin-bottom: -20px;
  }

  .top-image {
  width: 100%;
  height: 49vh;
  }
}
.news-list {
display: grid;
gap: 5px;
grid-template-columns: repeat(2, 1fr);
padding: 20px;
padding-right: 70px;
padding-left: 150px;
padding-top: 100px;
padding-bottom: 100px;
}

.news-item {
  display: flex;
  align-items: center;
}

.news-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-family: 'TitilliumWebRegular';
  padding: 12px 20px;
  width: fit-content;
  transition: color 0.3s;
  background-color: transparent;
  cursor: pointer;
  color: rgb(48, 48, 48);
}

.news-btn:hover {
  color: #807c12;
  background-color: transparent;
}

@media (max-width: 1024px){
  .news-list {
    padding-left: 70px;
    padding-right: 70px;
}
}

@media (max-width: 768px) {
  .news-list {
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .news-list {
    padding-left: 80px;
  }

}

.q-icon {
  font-size: 24px;
  color: #807c12;
}
</style>
