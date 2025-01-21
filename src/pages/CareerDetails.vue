<template>
  <q-page>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Hero Image -->
    <div class="new-hero">
      <div class="new-container">
        <!-- Text Content Section -->
        <div class="text-content">
          <div class="line-hero-holder">
            <div class="line-hero">
              <div class="line-hero-1"></div>
            </div>
          </div>
          <h2 class="text-above">Career</h2>
          <p class="text-below">
            Explore our current job opportunities. <i class="fa fa-bullhorn" style="font-size:larger; color: beige;"></i></p>
        </div>

        <!-- Image Section -->
        <div class="career-image-container">
          <img src="src/assets/currentproject/house1.jpg" class="top-image" />
        </div>
      </div>
    </div>

    <div class="contact">
      <div class="contact-offer">
        <h2>What We Offer</h2>
        <div class="text-list">
          <img src="src/assets/handshake.png" class="icon-image"/>
            <span class="offer-text">
              Competitive pay
            </span>
        </div>
        <div class="text-list">
          <img src="src/assets/handshake.png" class="icon-image"/>
            <span class="offer-text">
              Comprehensive training
            </span>
        </div>
        <div class="text-list">
          <img src="src/assets/handshake.png" class="icon-image"/>
            <span class="offer-text">
              Friendly and supportive work environment
            </span>
        </div>
      </div>

      <div class="contact-apply">
        <div class="contact-info">
          <p>Send your resume</p>
          <p class="info"><i class="fa fa-envelope icons"></i>hmnrs.md3@gmail.com</p>
        </div>
        <div class="contact-info">
          <p>Contact us
          </p>
          <p class="info"><i class="fas fa-phone-alt icons"></i> 0116 9999 888
          </p>
        </div>
      </div>
    </div>

    <div v-for="department in departments" :key="department.department" class="department-section">
      <h2 class="department-title">{{ department.department }}</h2>
        <div class="department-contain">
          <div class="department-list">
            <div class="department-item" v-for="job in jobposition[department.department]" :key="job.id">
              <i class="fa fa-check-square-o icon"></i>
                <span class="department-feature">
                  {{ job.position }}
                </span>
              </div>
          </div>
        </div>
      </div>

      <q-page-sticky position="bottom-right" :offset="[35, 50]">
        <q-fab direction="up" color="dark grey" icon="keyboard_arrow_up"         label-position="left"
        >
          <template v-slot:label="{ opened }">
            <div :class="{ 'example-fab-animate--hover': opened !== true }">
              {{ opened !== true ? 'Click for QR Code' : 'Scan to Apply Now' }}
            </div>
          </template>
          <q-fab-action @click="onClick" color="white" style="border-radius: 1%;" >
            <img src="src/assets/qr-career.png" alt="QR Code" class="qr-img"/>
          </q-fab-action>
        </q-fab>
      </q-page-sticky>
    </q-page>
</template>

<script setup>
import { departments, jobposition } from 'src/components/CareerData.vue'
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

.contact {
  padding: 20px 15%;
  padding-bottom: 50px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-offer {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact h2 {
  font-family: 'RecklessNeueMedium';
  font-size: 36px;
  border-bottom: 2px solid #08463c;
  display: inline-block;
  color: #333;
  margin-bottom: 20px;
}

.icon-image {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.text-list {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'TitilliumWebRegular';
  font-size: 18px;
  color: #333;
}

.offer-text {
  padding-left: 10px;
}

.contact-apply {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
  padding-left: 15%;
  padding-top: 13%;
  font-family: 'TitilliumWebRegular';
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 18px;
  color: #333;
}

.contact-info p {
  margin: 0;
}

.contact-info p:first-child {
  font-weight: bold;
}

.info {
  font-family: 'TitilliumWebBold';
}

.icons {
padding-right: 10px;
}

@media (max-width: 768px) {
  .contact {
    flex-direction: column;
  }
}

.department-section {
  padding: 10px 15%;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin-top: 20px;
  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.2), /* Top shadow */
              0 3px 6px rgba(0, 0, 0, 0.2); /* Bottom shadow */}

.department-title {
  font-size: 36px;
  color: #333;
  font-family: 'RecklessNeueMedium';
  margin-bottom: 15px;
  margin-top: 0px;
  border-bottom: 2px solid #08463c;
  display: inline-block;

}

.icon {
  font-size: 20px;
  color: #087f5b;
  margin-right: -5px;
}
.department-item {
  display: flex;
  align-items: center;
  padding: 8px 0;
  align-items: center;
  border-bottom: 1px solid #ddd;
}

.department-item:last-child {
  border-bottom: none;
}

.department-feature {
  font-size: 18px;
  line-height: 22px;
  font-family: 'TitilliumWebRegular';
  margin-left: 8px;
  color: #555;
}

.department-contain {
  margin-top: 10px;
  margin-bottom: 50px;
}

.department-list {
  padding-left: 15px; /* Indent the list slightly */
}

.qr-img {
  width: 100px;
  height: 100px;
}

.example-fab-animate,
.q-fab:hover .example-fab-animate--hover {
  animation: example-fab-animate 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes example-fab-animate{

  10%, 90%{
    transform: translate3d(-1px, 0, 0);
  }
  20%, 80%{
    transform: translate3d(2px, 0, 0);
  }
  30%, 50%, 70%{
    transform: translate3d(-4px, 0, 0);
  }
  40%, 60%{
    transform: translate3d(4px, 0, 0);
  }
}

</style>
