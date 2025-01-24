<template>
  <q-page>
    <!-- Hero Image -->
    <div class="new-hero">
      <div class="new-container">
        <!-- Text Content Section -->
        <div class="text-content section">
          <div class="line-hero-holder fade-up">
            <div class="line-hero">
              <div class="line-hero-1"></div>
            </div>
          </div>
            <h2 class="text-above fade-up delay-1">Career</h2>
            <p class="text-below fade-up delay-2">
              Explore our current job opportunities.</p>
        </div>

        <!-- Image Section -->
        <div class="career-image-container">
          <img src="src/assets/currentproject/house1.jpg" class="top-image" />
        </div>
      </div>
    </div>

    <!-- Why Join Us Section -->
    <div class="career-section">
      <div class="content-container">
        <div class="text-content-1">
          <h2 class="fade-up">Why Join Us</h2>
          <ul class="fade-up delay-1">
            <li><div class="list"> <div class="strong-list"><strong>Realistic bosses</strong></div><div class="dot">:</div> <div>  Our leaders are supportive and result-oriented.</div></div></li>
            <li><div class="list"> <div class="strong-list"><strong>Flat structure</strong></div> <div class="dot">:</div><div> Hierarchy is not our focus; we value contributions from all levels.</div></div></li>
            <li><div class="list"> <div class="strong-list"><strong>Fast career progression</strong> </div><div class="dot">:</div><div>  We ensure you have the tools and opportunities to grow.</div></div></li>
            <li><div class="list"> <div class="strong-list"><strong>Vibrant Work Culture</strong></div><div class="dot">:</div> <div>  We celebrate collaboration and diversity.</div></div></li>
          </ul>
        </div>
        <div class="image-container">
          <!-- Image -->
          <img src="src/assets/career3.jpg" alt="Why Join Us" class="career-image" />
        </div>
      </div>
    </div>

    <!-- Why Teamwork Matters Section -->
    <div class="career-section section">
      <div class="content-container">
        <div class="image-container">
          <!-- Image -->
          <img src="src/assets/career3.jpg" alt="Why Join Us" class="career-image" />
        </div>
        <div class="text-content-2">
          <h2 class="fade-up">Why Teamwork Matters</h2>
          <p class="fade-up delay-1">
            Teamwork is essential for success in today’s professional world. Collaboration fosters productivity, strengthens
            relationships, and enhances problem-solving skills.
          </p>
          <p class="fade-up delay-1">
            The ability to effectively work as a team is key to achieving shared goals and individual growth.
          </p>
        </div>
      </div>
    </div>

    <!-- Our People Section -->
    <div class="career-section section">
      <div class="content-container">
        <div class="text-content-1">
          <h2 class="fade-up">Our People</h2>
          <p class="fade-up delay-1">
            Our people are the heart of our business. Whatever you need, we’re here to help.
          </p>
        </div>
        <div class="image-container">
          <!-- Image -->
          <img src="src/assets/career2.png" alt="Why Join Us" class="career-image" />
        </div>
      </div>
    </div>
    <div class="btn fade-up delay-1">
    <q-btn flat label="Career Opportunities" class="btn-story" to='/career-opportunities'/>
    </div>
  </q-page>
</template>

<script setup>
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
})</script>

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
.career-image-container {
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

  .career-image-container {
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

  .career-image-container {
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

.career-section {
  padding: 80px 10%;
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.text-content-1{
  flex: 1;
  padding-right: 40px;
}

.text-content-2{
  flex: 1;
  padding-left: 40px;
}

.text-content-1 h2 {
  font-family: 'RecklessNeueMedium';
  font-size: 42px;
  color: #000000;
  margin-bottom: 20px;
}

.text-content-2 h2 {
  font-family: 'RecklessNeueMedium';
  font-size: 42px;
  color: #000000;
  margin-bottom: 20px;
}

.list {
  display: flex;
  width: 450px;
  /* border: 2px solid black; */
}

.strong-list {
width: 140px;
font-family: 'TitilliumWebSemiBold';
/* border: 2px solid black; */
flex-shrink: 0;
}

.dot {
  padding-right: 10px;
  font-family: 'TitilliumWebSemiBold';
}

.text-content-1 li {
  font-size: 18px;
  font-family: 'TitilliumWebRegular';
  color: #000000;
  line-height: 1.2;
  margin-bottom: 20px;
}

.text-content-1 p {
  font-size: 18px;
  color: #000000;
  font-family: 'TitilliumWebRegular';
  line-height: 1.6;
  margin-bottom: 20px;
}

.text-content-2 p {
  font-size: 18px;
  color: #000000;
  font-family: 'TitilliumWebRegular';
  line-height: 1.6;
  margin-bottom: 20px;
}

/* Image Section*/
.image-container {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
}

/* Image */
.career-image {
  width: 70vw;
  height: auto;
  border-radius: 2px;
}

ul {
  padding-left: 20px;
  list-style: disc;
}

.btn {
  text-align: center;
}

.btn-story {
  background-color: transparent;
  border: 2px solid black;
  color: #000000;
  font-family: 'AvenirMedium';
  font-size: 17px;
  padding: 10px 20px;
  text-align: center;
  width: 300px;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 0;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.btn-story:hover {
  background-color: #a39f1a;
  border: 2px solid #a39f1a;
  color: #fff;
  transform: translateY(-3px);
}

/* Adjust layout for smaller screens */
@media (max-width: 1024px) {

  .career-section {
    padding-top: 10px;
  }
  .content-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .text-content-2 {
    padding-right: 0px;
    padding-bottom: 0px;
  }

  .text-content-2 {
    order: -1;
  }

  .text-content-1 {
    padding-right: 0px;
    padding-bottom: 20px;
  }

  .image-container {
    width: 90%; /* Scale image down */
  }

}

/* Image Below Text for Smaller Screens */
@media (max-width: 768px) {
  .content-container {
    flex-direction: column; /* Stack elements vertically */
    align-items: center;
    text-align: center;
  }

  .text-content-1, .text-content-2 {
    padding: 0 10px;
    margin-bottom: 20px;
  }

  .image-container {
    width: 100%;
  }

  .career-image {
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
}

@media (max-width: 768px) {
  /* Tablet Adjustments */

  .text-content-1 h2 {
    font-size: 1.9rem;
  }

  .text-content-2 h2 {
    font-size: 1.9rem;
  }

  ul {
    padding-left: 20px;
    text-align: left;
  }

  .text-content-1 li {
    font-size: 17px;
  }

  .text-content-1 p {
    font-size: 17px;
  }

  .text-content-2 p {
    font-size: 17px;
  }
}

@media (max-width: 480px) {
  /* Phone Adjustments */

  h2 {
    font-size: 1.25rem;
  }

  ul {
    font-size: 0.9rem;
    padding-left: 12px;
  }

  p {
    font-size: 0.9rem;
  }
}
</style>
