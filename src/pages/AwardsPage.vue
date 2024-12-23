<template>
  <q-page class="flex flex-center">
    <!-- Hero Section -->
    <div class="award-hero">
      <div class="awards-container">
        <h1>Awards and Recognition</h1>
        <p>
          We are proud to have received various awards over the years for our outstanding work and dedication to excellence.
        </p>
      </div>
    </div>

    <!-- Awards Section -->
    <section class="award-section">
      <div v-for="year in years" :key="year.year" class="year-section">
        <h2 class="year-title">{{ year.year }}</h2>
        <div class="award-list">
          <div class="award-item" v-for="award in awardsItems[year.year]" :key="award.id">
            <img :src="award.image" :alt="award.title" />
            <h2>{{ award.title }}</h2>
            <p>{{ award.description }}</p>
            <small>{{ award.date }}</small>
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
.awards-container {
  padding: 60px;
  text-align: center;
  font-family: 'GeographWebMedium', sans-serif;
}

.awards-container h1 {
  font-size: 50px;
}

.awards-container p {
  margin-top: -30px;
}

@font-face {
  font-family: 'GeographWebMedium';
  src: url('src/assets/fonts/geograph/geographwebmedium.ttf') format('truetype');
  font-weight: bold;
}

.award-hero {
  position: relative;
  height: 43vh; /* Full-screen height */
  overflow: hidden;
  margin-top: -70px;
  background-color: #006039;
  width: 100%;
  color: #f4f4f4;
}

/* Responsive Design */
@media (min-width: 1110px) {
  .award.hero {
    margin-top: -70px;
}
}
@media (max-width: 1106px) {
  .award-hero {
    height: 44vh;
    margin-top: -85px;
}
}
.award-section {
  margin-top: 20px;
  padding: 0 20px;
}

.year-section {
  margin-bottom: 40px;
}

.year-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.award-list {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
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
  font-weight: bold;
}

.award-item p {
  font-size: 1rem;
  color: #666;
}

.award-item small {
  display: block;
  margin-top: 10px;
  font-size: 0.9rem;
  color: #999;
}

/* Responsive Design */
@media (max-width: 768px) {
  .awards-container {
    margin-top: 10px;
  }
  .awards-container h1 {
    font-size: 32px;
  }

  .awards-container p {
    font-size: 14px;
    margin-top: -30px;
  }

  .award-list {
    padding-top: 20px;
  }
  .year-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .awards-container h1 {
    font-size: 28px;
  }

  .awards-container p {
    font-size: 13px;
  }
}
</style>
