<template>
  <q-page class="contact-page">
    <!-- Hero Section -->
    <div class="contact-hero">
      <div class="contact-container">
        <!-- Text Content Section -->
        <div class="text-content">
          <div class="line-hero-holder fade-up">
            <div class="line-hero">
              <div class="line-hero-1"></div>
            </div>
          </div>
          <h2 class="text-above fade-up delay-1">Contact</h2>
          <h2 class="text-below fade-up delay-1">Miracle Land</h2>
        </div>

        <!-- Image Section -->
        <div class="contact-image-container">
          <img src="/assets/currentproject/house1.jpg" class="top-image" />
        </div>
      </div>
    </div>

    <div class="register" id="section-contact">
      <div class="register-container">
        <div class="register-wrapper">
          <!-- Left Section -->
          <div class="register-left">
            <h2 class="register-title fade-up">Contact Details</h2>
            <div class="register-line-holder fade-up delay-1">
              <div class="register-line">
                <div class="register-line-1"></div>
              </div>
            </div>
            <h5 class="address-title fade-up delay-2">Address</h5>
            <address class="fade-up delay-3">
              No. 1, Tingkat Basement, Jalan Dagang 2,<br>
              Kampung Bukit Angin, 28000 Temerloh, Pahang<br>
            </address>

            <div class="map-button fade-up delay-2">
              <button @click="gotofullmap" class="btn view-full-map-btn">
                <img src="/assets/brochure.svg" alt="Download" />
                  View Full Map
              </button>
            </div>
            <h5 class="contact-title fade-up delay-2">Contact Number</h5>
            <div class="fade-up delay-3">
              <i class="fa fa-phone phone-icon"></i>
              <a class="contact-no" href="tel:+60192966666">
                +60 19 296 6666
              </a>
            </div>
            <h5 class="email-title fade-up delay-2">General Enquiries</h5>
            <p class="email-subtitle fade-up delay-2">For general questions, please write to</p>
            <div class="fade-up delay-3">
              <i class="fa fa-envelope email-icon"></i>
              <a class="email-address" href="mailto:kevin@interplandesigns.com">
                kevin@interplandesigns.com
              </a>
            </div>
            <h5 class="email-title fade-up delay-2">Job Application & Internship</h5>
            <p class="email-subtitle fade-up delay-2">We're always on the lookout for talented people - please send us <br> your CV and portfolio (no larger than 5MB) to</p>
            <div class="fade-up delay-3">
              <i class="fa fa-envelope email-icon"></i>
              <a class="email-address" href="mailto:hmnrs.md3@gmail.com">
                hmnrs.md3@gmail.com
              </a>
              <div>
                <i class="fa fa-phone phone-icon"></i>
                <a class="contact-no" href="tel:+601169999888">
                  +60 116 9999 888
                </a>
              </div>
            </div>
            <h5 class="email-title fade-up delay-2">Business Enquiries</h5>
            <p class="email-subtitle fade-up delay-2">For any new business enquiries, please write to</p>
            <div class="fade-up delay-3">
              <i class="fa fa-envelope email-icon"></i>
              <a class="email-address" href="mailto:kevin@interplandesigns.com">
                kevin@interplandesigns.com
              </a>
            </div>
            <h5 class="business-title fade-up delay-2">Business Hours</h5>
            <div class="fade-up delay-3">
              <i class="fas fa-business-time calendar-icon"></i>
              <span class="business-hours">
                Mon - Sat , 9am - 5pm
              </span>
            </div>
          </div>

          <!-- Right Section -->
          <div class="register-right">
            <h2 class="fade-up delay-1">Got A Question?</h2>
            <div class="register-line-holder fade-up delay-2">
              <div class="register-line">
                <div class="register-line-1"></div>
              </div>
            </div>
            <p class="fade-up delay-3">Just send us your details, and our Miracle Land Relationship Associates will get back to you!</p>
            <form
              action="https://formspree.io/f/myzkjkew"
              method="POST"
              class="register-form fade-up delay-4">
              <!-- Name Field -->
              <input type="text" name="name" placeholder="Name*" required>

              <!-- Email Field -->
              <input type="email" name="email" placeholder="Email*" required>

              <!-- Telephone Field -->
              <input type="tel" name="telephone" placeholder="Telephone*" required>

              <!-- Enquiry Type Dropdown -->
              <select name="enquiryType" required>
                <option disabled selected>Select enquiry type</option>
                <option value="General">General</option>
                <option value="Interested Project">Interested Project</option>
                <option value="Consultation">Consultation</option>
                <option value="Business">Business</option>
                <option value="Contractor">Contractor</option>
              </select>

              <!-- Message Field -->
              <textarea name="message" placeholder="Questions/Comments*" required></textarea>

              <!-- Submit Button -->
              <button type="submit" class="submit-btn">SEND</button>
            </form>
            <div class="career">
              <h2 class="fade-up delay-1">Career Opportunities</h2>
              <div class="register-line-holder fade-up delay-2">
                <div class="register-line">
                  <div class="register-line-1"></div>
                </div>
              </div>
              <p class="fade-up delay-3">We are hiring talented, responsible, and hardworking individuals to join our dynamic team. Explore our career opportunities and grow with us!</p>
              <div class="fade-up delay-2">
                <q-btn
                  flat
                  label="APPLY NOW"
                  class="career-btn"
                  to="career-opportunities"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const sections = ref([])
const fadeItems = ref([])
let observer = null

const gotofullmap = () => {
  window.open('https://maps.app.goo.gl/XcCFgR9Lg8vpdLfh7', '_blank')
}

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
.contact-hero {
  background-color: #0d182b;
  display: flex;
  height: 71vh;
  justify-content: center;
  align-items: center;
}

.contact-container {
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
  margin-bottom: 20px;
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
.contact-image-container {
  flex: 1; /* Adjusts the width for the image section to make it more than half the screen width */
  display:flex;
  justify-content: flex-end;
  align-items:flex-end;
}

.top-image {
  width: 65vw;
  height: 71vh;
  object-fit: cover;
}

@media (max-width: 1260px) {

  .text-above,
.text-below {
  font-size: 40px;
}

.line-hero {
padding-inline: 20px;
}

.line-hero-1 {
  padding-inline-end: 100px;
  margin-inline-start: 20px;
}
}

/* @media (max-width: 1024px) {
  .top-image {
  width: 600px;
}
}

@media (max-width: 910px) {
  .top-image {
  width: 500px;
}
} */

@media (max-width: 880px) {

  .contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .contact-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    order: -1;
  }

  .text-content {
    order: 1;
    padding-left: 0;
  }

.line-hero-holder {
  display: none;
}

.top-image {
  width: 70vw;
  height: 50vh;
  margin-top: -22px;
  }
}
@media (max-width: 520px) {
  .top-image {
    margin-top: -40px;
    margin-bottom: 20px;
    width: 100vw;
  }
}

/* Contact Us Section */
.register {
  color: #000;
  background-color: white;
  padding: 40px 6%;
  padding-top: 0px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-line-holder {
  position: static;
  margin-top: -20px;
}

.register-line {
  display: inline-block;
  width: 12px; /* Thickness of the line */
  height: 3px; /* Height of the line */
  background-color: #08463c; /* Gold accent */
  padding-inline: 45px;

}

.register-line-1 {
  display: inline-block;
  width: 170px; /* Thickness of the line */
  height: 1px; /* Height of the line */
  background-color: #a7a4a4; /* Gold accent */
  margin-bottom: 13px; /* Space between the line and text */
  margin-inline-start: 45px;
}

.register-wrapper {
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-bottom: 60px;
  padding-left: 2%;
  padding-right: 2%;
  position: relative;
  overflow: hidden;
}

.register-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
}

.register-left, .register-right {
  flex: 1;
  width: 100%;
}

.register-left {
  padding: 0px 10px;
}

.register-left .register-title {
  font-family: 'RecklessNeueMedium';
  margin-bottom: 35px;
  white-space: nowrap;
  font-size: 36px;
}

.address-title {
  font-family: 'TitilliumWebSemiBold';
  font-size: 18px;
  margin-bottom: 10px;
  margin-top: 0px;
}

.register-left p {
  font-family: 'TitilliumWebRegular';
  font-size: 16px;
  line-height: 21px;
}

.register-left address {
  font-family: 'TitilliumWebRegular';
  font-style: normal;
  margin-bottom: 0px;
  font-size: 16px;
  line-height: 21px;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border: 1px solid #ccc;
  background: #fff;
  width: 200px;
  cursor: pointer;
  font-family: 'TitilliumWebBold';
  font-size: 14px;
  white-space: nowrap;
}

.btn img {
  width: 16px;
  height: 16px;
  margin-right: 10px;
}

.btn:hover {
  background-color: #08463c;
  color: white;
}

.map-button {
  padding-top: 20px;
}

.view-full-map-btn {
  border: 2px solid #08463c;
  color: #08463c;
}

.view-full-map-btn:hover img {
  filter: invert(1);
}

.contact-title {
  font-family: 'TitilliumWebSemiBold';
  font-size: 18px;
  margin-bottom: 10px;
  margin-top: 20px;
}

.phone-icon {
  font-size: 16px;
  color: #08463c;
  margin-right: 10px;
}

.contact-no {
  font-family: 'TitilliumWebRegular';
  font-style: normal;
  text-decoration: none;
  color: inherit;
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 21px;
}

.email-title {
  font-family: 'TitilliumWebSemiBold';
  font-size: 18px;
  margin-bottom: 10px;
  margin-top: 20px;
}

.register-left .email-subtitle {
  font-family: 'TitilliumWebRegular';
  font-size: 15px;
  margin-bottom: 10px;
  margin-top: -15px;
  color: #555;
}

.email-icon {
  font-size: 16px;
  color: #08463c;
  margin-right: 10px;
}

.email-address {
  font-family: 'TitilliumWebRegular';
  font-style: normal;
  text-decoration: none;
  color: inherit;
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 21px;
}

.email-address:hover {
  color: #08463c;
}

.email-subtitle br {
  display: none;
}

.business-title {
  font-family: 'TitilliumWebSemiBold';
  font-size: 18px;
  margin-bottom: 10px;
  margin-top: 20px;
}

.calendar-icon {
  font-size: 16px;
  color: #08463c;
  margin-right: 10px;
}

.business-hours {
  font-family: 'TitilliumWebRegular';
  font-style: normal;
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 21px;
}

/* Right Section */
.register-right {
  padding: 0px 10px;
}

.register-right h2 {
  font-family: 'RecklessNeueMedium';
  font-size: 36px;
  margin-bottom: 35px;
  white-space: nowrap;}

.register-right p {
  font-family: 'TitilliumWebRegular';
  font-size: 16px;
  line-height: 21px;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.register-form input {
  font-size: 14px;
  font-family: 'TitilliumWebRegular';
}

.register-form input,
.register-form textarea,
.register-form select {
  width: 100%;
  padding: 10px;
  border: 1px solid #5555555e;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
}

.register-form textarea {
  resize: none;
  height: 100px;
}

.register-form select {
  font-size: 14px;
  cursor: pointer;
  font-family: 'TitilliumWebRegular';
}

.submit-btn {
  padding: 10px 20px;
  background-color: #555;
  color: #fff;
  border: none;
  cursor: pointer;
font-size: 14px;
  font-family: 'AvenirMedium';
  text-transform: uppercase;
}

.career {
  padding-top: 20px;
}

.career-btn{
  background-color: transparent;
  border: 2px solid black;
  color: #000000;
  font-family: 'AvenirMedium';
  font-size: 17px;
  padding: 10px 20px;
  margin-top: 10px;
  width: 100%;
  height: 60px;
  border-radius: 0;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.career-btn:hover {
  background-color: #a39f1a;
  border: none;
  color: #fff;
  transform: translateY(-3px);
}

@media (min-width: 900px){
  .register-wrapper {
    flex-direction: row;
    justify-content: space-between;
    gap: 50px;
  }

  .register-container {
    gap: 40px;
  }

  .register-right {
    width: 450px;
  }
}

@media (min-width: 1024px) {
  .email-subtitle br {
    display: initial;
  }
}

@media (max-width: 786px){

  .register {
  padding: 40px 2%;
}

}

@media (max-width: 520px){
  .register-left address br:first-child {
    display: none;
  }

  .register-left .register-title {
    font-size: 34px;
  }

  .register-right h2 {
    font-size: 32px;
  }

  .address-title {
  font-size: 17px;
}
}

@media (min-width: 1024px){
  .register-wrapper {
    gap: 150px;
  }
}
</style>
