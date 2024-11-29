<template>
  <q-page class="flex flex-center">
    <div class="award-hero">
    <div class="awards-container">
      <h1>Awards and Recognition</h1>
      <p>We are proud to have received various awards over the years for our outstanding work and dedication to excellence.</p>
    </div>
    </div>

      <!-- Awards List -->
       <section class="award-section">
      <div class="award-list">
        <div class="award-item">
          <img src="src/assets/award1.png" alt="Award 1" />
          <h2>Best Property Developer</h2>
          <p>Received in 2024 for excellence in property development.</p>
        </div>
        <div class="award-item">
          <img src="src/assets/award2.png" alt="Award 2" />
          <h2>Top Innovator in Real Estate</h2>
          <p>Honored in 2023 for innovation in sustainable building practices.</p>
        </div>
        <!-- Add more awards as needed -->
      </div>
    </section>
  </q-page>
</template>

<script setup>
// This is a setup script for AwardsPage.vue
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
  height: 47vh; /* Full-screen height */
  overflow: hidden;
  margin-top: -70px;
  background-color: #006039;
  width: 100%;
  color: #f4f4f4;
}

.award-section {
  position: relative;
  margin-top: 20px;
  padding: auto;
}

.award-list {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 20px;
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

/* Responsive Design */
@media (max-width: 768px) {

  .awards-container {
    margin-top: 10px;
  }
  .awards-container h1{
    font-size: 32px;
}

  .awards-container p {
    font-size: 14px;
    margin-top: -30px;
  }

  .award-list {
    padding-top: 20px;
  }
}
</style>
