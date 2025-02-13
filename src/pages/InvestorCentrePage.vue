<template>
  <q-page class="investor-centre-page">
    <!-- Hero Section -->
    <div class="investor-hero">
      <div class="investor-container">
        <!-- Text Content Section -->
        <div class="text-content">
          <div class="line-hero-holder fade-up">
            <div class="line-hero">
              <div class="line-hero-1"></div>
            </div>
          </div>
          <h2 class="text-above fade-up delay-1">Investor</h2>
          <h2 class="text-below fade-up delay-1">Centre</h2>
        </div>

        <!-- Image Section -->
        <div class="investor-image-container">
          <img src="/assets/currentproject/house1.jpg" class="top-image" />
        </div>
      </div>
    </div>

    <!-- Investor Centre Section -->
    <section class="investor-centre">
      <div class="investor-list">
        <div class="investor-item fade-up delay-1" v-for="investor in investorsItems" :key="investor.id">
          <q-card @click="openInvestor(investor.link)" class="investor-btn" flat>
            <q-icon name="account_balance_wallet" color="primary"/>
            {{ investor.title }}
          </q-card>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { investorsItems } from 'src/components/InvestorData.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const sections = ref([])
const fadeItems = ref([])
let observer = null

onMounted(() => {
  // Initialize Intersection Observer
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      } else {
        entry.target.classList.remove('visible')
      }
    })
  })

  // Observe all sections
  sections.value = Array.from(document.querySelectorAll('.section'))
  fadeItems.value = Array.from(document.querySelectorAll('.fade-up'))

  sections.value.forEach((section) => observer.observe(section))
  fadeItems.value.forEach((item) => observer.observe(item))
})

onBeforeUnmount(() => {
  // Clean up observer
  if (observer) observer.disconnect()
})

const openInvestor = (link) => {
  window.open(link, '_blank')
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
  font-family: 'AvenirMedium';
  src: url('/assets/fonts/Avenir LT Std 65 Medium.otf') format('opentype');
  font-weight: bold;
}

.section {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.section.visible {
  opacity: 1;
  transform: translateY(0);
}

.fade-up {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}

.fade-up.delay-1 {
  transition-delay: 0.2s;
}

.fade-up.delay-2 {
  transition-delay: 0.4s;
}

.fade-up.delay-3 {
  transition-delay: 0.6s;
}
.fade-up.delay-4 {
  transition-delay: 0.8s;
}
.investor-hero {
  background-color: #0d182b;
  display: flex;
  height: 71vh;
  justify-content: center;
  align-items: center;
}

.investor-container {
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

.text-above,
.text-below {
  font-family: 'RecklessNeueMedium';
  font-size: 48px;
  margin: 0;
}

.text-above {
  color: #fff;
}

.text-below {
  color: #d9d323;
}

/* Image Section */
.investor-image-container {
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

  .text-above,
.text-below {
  font-size: 30px;
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

  .investor-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .investor-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -455px;
  }

  .text-content {
    padding-left: 0px;
    padding-top: 185px;
  }

.line-hero-holder {
  display: none;
}

.top-image {
  width: 500px;
  height: 49vh;
  }
}
@media (max-width: 520px) {

  .investor-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -460px;
  }

  .text-content {
    padding-left: 0px;
    padding-top: 190px;
  }

  .top-image {
  width: 100%;
  height: 49vh;
  }
}

.investor-centre {
padding: 20px;
padding-right: 10%;
padding-left: 10%;
margin-top: 10px;
padding-bottom: 80px;
}

.investor-list {
  display: grid;
  gap: 5px;
  font-family: 'TitilliumWebRegular';
  grid-template-columns: repeat(2, 1fr);
}

.investor-item {
  display: flex;
  align-items: center;
}

@media (max-width: 768px){

.investor-list {
  display: flex;
  flex-direction: column;
}
}

.investor-btn {
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

.investor-btn:hover {
  color: #02947e;
  background-color: transparent;
}

.q-icon {
  font-size: 1.5rem;
}
</style>
