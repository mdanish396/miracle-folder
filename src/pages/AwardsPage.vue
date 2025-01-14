<template>
  <q-page >
    <!-- Hero Section -->
    <div class="award-hero">
      <div class="award-container">
        <!-- Text Content Section -->
        <div class="text-content">
          <div class="line-hero-holder">
            <div class="line-hero">
              <div class="line-hero-1"></div>
            </div>
          </div>
          <h2 class="text-above">Awards</h2>
          <p class="text-below">
          We are proud to have received various awards over the years.
          </p>
        </div>

        <!-- Image Section -->
        <div class="award-image-container">
          <img src="src/assets/currentproject/house1.jpg" class="top-image" />
        </div>
      </div>
    </div>
    <!-- Awards Section -->
    <section class="award-section">
      <div v-for="year in years" :key="year.year" class="year-section">
        <h2 class="year-title">{{ year.year }}</h2>
        <div class="award-contain">
          <div class="award-list">
            <div class="award-item" v-for="award in awardsItems[year.year]" :key="award.id">
              <img :src="award.image" :alt="award.title" />
              <h2>{{ award.title }}</h2>
              <p>{{ award.description }}</p>
              <small>{{ award.date }}</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { years, awardsItems } from 'src/components/AwardsData.vue'
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

.award-hero {
  background-color: #0d182b;
  display: flex;
  height: 71vh;
  justify-content: center;
  align-items: center;
}

.award-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.text-content {
  flex: 1;
  padding-left: 6%;
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
.award-image-container {
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

  .award-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .award-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -485px;
  }

  .text-content {
    padding-left: 0px;
    padding-top: 195px;
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
  height: auto;
  }
}
@media (max-width: 520px) {

  .award-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -450px;
  }

  .text-content {
    padding-left: 0%;
    padding-top: 168px;
  }

  .text-above {
    margin-bottom: -20px;
  }
}

.award-section {
  padding: 20px 6%;
  padding-bottom: 80px;
}

.year-section {
  padding-left: 7%;
  padding-right: 7%;
  margin-bottom: 40px;
}

.year-title {
  font-size: 40px;
  font-family: 'RecklessNeueMedium';
  margin-bottom: 20px;
  color: #333;
}

.award-contain {
  display: flex;
  justify-content: center;
}

.award-list {
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, 1fr)); /* Responsive grid */
  gap: 10px;
  padding-bottom: 80px;
  justify-content: center; /* Center the grid within the container */
}
@media (max-width: 1224px) {
  .award-list {
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }
}

@media (max-width: 1000px) {
  .award-list {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }
}

@media (max-width: 650px) {
  .award-list {
    grid-template-columns: repeat(1, minmax(250px, 1fr));
  }

  .year-section {
    padding-left: 20%;
    padding-right: 20%;
  }
}

.award-item {
  background: #f4f4f4;
  border-radius: 8px;
  padding: 15px;
  max-width: 250px;
  text-align: center;
}

.award-item img {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.award-item h2 {
  font-size: 1.2rem;
  font-family: 'TitilliumWebBold';
}

.award-item p {
  font-size: 1rem;
  font-family: 'TitilliumWebRegular';
  color: #666;
}

.award-item small {
  display: block;
  margin-top: 10px;
  font-size: 0.9rem;
  font-family: 'TitilliumWebSemiBold';
  color: #999;
}

/* Responsive Design */
@media (max-width: 768px) {

  .award-list {
    padding-top: 20px;
  }
}

</style>
