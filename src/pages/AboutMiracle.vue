<template>
  <q-page>
    <div class="about-section" v-if="about">
      <div class="content-container">
        <!-- Text Content Section -->
        <div class="text-content">
          <div class="line-holder fade-up">
            <div class="line">
              <div class="line-1"></div>
            </div>
          </div>
          <div class="text fade-up delay-1">
            <h2 class="text-above">{{ about.title }}</h2>
            <h2 class="text-below">{{ about.subtitle }}</h2>
          </div>
        </div>

        <!-- Image Section -->
        <div class="about-image-container">
          <img :src="about.image" class="about-image" />
        </div>
      </div>
    </div>

    <!-- <q-breadcrumbs class="breadcrumbs">
      <q-breadcrumbs-el label="Home" to="/" />
      <q-breadcrumbs-el label="About Miracle Land" />
    </q-breadcrumbs> -->

    <!-- Company Background Section -->
    <section class="company-background" v-if="company">
      <div class="container">
        <h2 class="fade-up">{{ company.title }}</h2>
        <div class="para-text fade-up delay-1">
          <p v-for="(paragraph, index) in formattedContent" :key="index">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </section>

    <!-- Vision Section -->
    <section class="vision-section" v-if="vision"
    :style="{
    backgroundImage: `url(${vision.image})`}">
      <div class="container">
        <div class="content-wrapper">
          <div class="vision-text">
            <h2 class="fade-up">{{ vision.title }}</h2>
            <p class="fade-up delay-1" v-html="vision.content"></p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="mission-section" v-if="mission">
      <div class="container">
          <h2 class="fade-up">{{ mission.title }}</h2>
        <div class="mission-wrapper fade-up delay-1">
          <ul>
            <li v-for="(content, index) in mission.content" :key="index">
              <i class="fas fa-check-circle icon"></i>
              <span>{{ content }}</span>
            </li>
          </ul>

          <div class="mission-image-container">
            <img :src="mission.image" class="mission-image" />
          </div>
        </div>
      </div>
    </section>

    <div class="register" id="section-contact" v-if="contact">
      <div class="register-container">
        <div class="register-wrapper">
          <!-- Left Section -->
          <div class="register-left">
            <h2 class="register-title fade-up">{{ contact.contacttitle }}</h2>
            <div class="register-line-holder fade-up delay-1">
              <div class="register-line">
                <div class="register-line-1"></div>
              </div>
            </div>
            <h5 class="address-title fade-up delay-2">{{ contact.textaddress }}</h5>
            <address class="fade-up delay-3" v-html="contact.address">
            </address>

            <div class="map-button fade-up delay-2">
              <button @click="gotofullmap" class="btn view-full-map-btn">
                <img src="/assets/brochure.svg" alt="Download" />
                  {{ contact.mapbutton }}
              </button>
            </div>
            <h5 class="contact-title fade-up delay-2">{{ contact.textcontact }}</h5>
            <div class="fade-up delay-3">
              <i class="fa fa-phone phone-icon"></i>
              <a class="contact-no" :href="'tel:' + contact.contactno">
               {{ contact.contactno }}
              </a>
            </div>
            <h5 class="email-title fade-up delay-2">{{ contact.enquiry }}</h5>
            <p class="email-subtitle fade-up delay-2">{{ contact.enquirydesc }}</p>
            <div class="fade-up delay-3">
              <i class="fa fa-envelope email-icon"></i>
              <a class="email-address" :href="'mailto:' + contact.email">
                {{ contact.email }}
              </a>
            </div>
            <h5 class="email-title fade-up delay-2">{{ contact.job }}</h5>
            <p class="email-subtitle fade-up delay-2" v-html="contact.jobdesc"></p>
            <div class="fade-up delay-3">
              <i class="fa fa-envelope email-icon"></i>
              <a class="email-address" :href="'mailto:' + contact.jobemail">
                {{ contact.jobemail }}
              </a>
              <div>
                <i class="fa fa-phone phone-icon"></i>
                <a class="contact-no" :href="'tel:' + contact.jobcontact">
                  {{ contact.jobcontact }}
                </a>
              </div>
            </div>
            <h5 class="business-title fade-up delay-2">{{ contact.business }}</h5>
            <div class="fade-up delay-3">
              <i class="fas fa-business-time calendar-icon"></i>
              <span class="business-hours">
                {{ contact.hours }}
              </span>
            </div>
          </div>

          <!-- Right Section -->
          <div class="register-right">
            <h2 class="fade-up delay-1">{{ contact.questiontitle }}</h2>
            <div class="register-line-holder fade-up delay-2">
              <div class="register-line">
                <div class="register-line-1"></div>
              </div>
            </div>
            <p class="fade-up delay-3">{{ contact.questiondesc }}</p>
            <q-form @submit.prevent="submitForm" class="register-form fade-up delay-4">
              <!-- Name Field -->
              <q-input v-model="form.name" label="Name*" outlined required />

              <!-- Email Field -->
              <q-input v-model="form.email" label="Email*" type="email"     :rules="[(val) => validateEmail(val) || 'Must be a valid email']" outlined required />

              <!-- Telephone Field -->
              <q-input v-model="form.telephone" label="Telephone*" type="tel" outlined required />

              <!-- Enquiry Type Dropdown -->
              <q-select
                v-model="form.enquiryType"
                label="Select enquiry type*"
                outlined
                :options="['General', 'Interested Project', 'Consultation', 'Business', 'Contractor']"
                required
              />

              <!-- Message Field -->
              <q-input v-model="form.message" label="Questions/Comments*" type="textarea" outlined required />

              <!-- Submit Button -->
              <q-btn type="submit" label="SEND" class="submit-btn" :loading="isSubmitting" :disable="isSubmitting" />
            </q-form>
            <div class="career">
              <h2 class="fade-up delay-1">{{ contact.careertitle }}</h2>
              <div class="register-line-holder fade-up delay-2">
                <div class="register-line">
                  <div class="register-line-1"></div>
                </div>
              </div>
              <p class="fade-up delay-3">{{ contact.careerdesc }}</p>
              <div class="fade-up delay-2">
                <q-btn
                  flat
                  :label="contact.careerbutton"
                  class="career-btn"
                  :to="contact.careerlink"
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
import { ref, onMounted, onBeforeUnmount, nextTick, computed } from 'vue'
import { useHead } from '@vueuse/head'
import axios from 'axios'
import { useQuasar } from 'quasar'
import qs from 'qs'

const sections = ref([])
const fadeItems = ref([])
let observer = null
const about = ref({})
const vision = ref({
  title: '',
  content: '',
  image: ''
})
const mission = ref({
  title: '',
  content: [],
  image: ''
})
const company = ref({})
const contact = ref({})
const $q = useQuasar()

const form = ref({
  name: '',
  email: '',
  telephone: '',
  enquiryType: '',
  message: ''
})

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8080/contact')
    contact.value = response.data[0] // Example: [{ type: 'image', filename: 'hero.jpg' }, ...]
    console.log('Contact:', contact.value) // ✅ DEBUG

    // Wait for DOM to render new content before observing
    await nextTick()

    // Re-observe .fade-up elements AFTER DOM updates
    fadeItems.value = Array.from(document.querySelectorAll('.fade-up'))
    fadeItems.value.forEach((item) => observer.observe(item))
  } catch (e) {
    console.error('Failed to load homepage media:', e)
  }
})

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:8080/about')
    about.value = res.data[0]
    console.log('Fetched About:', about.value) // ✅ DEBUG
    // Wait for DOM to render new content before observing

    const response = await axios.get('http://localhost:8080/company-background')
    company.value = response.data[0]
    console.log('Fetched Company Background:', company.value) // ✅ DEBUG
    // Wait for DOM to render new content before observing

    const respo = await axios.get('http://localhost:8080/vision')
    vision.value = respo.data[0]
    console.log('Fetched Mission:', vision.value) // ✅ DEBUG
    // Wait for DOM to render new content before observing

    const resp = await axios.get('http://localhost:8080/mission')
    mission.value = resp.data[0]
    console.log('Fetched Mission:', mission.value) // ✅ DEBUG
    // Wait for DOM to render new content before observing

    await nextTick()

    // Re-observe .fade-up elements AFTER DOM updates
    fadeItems.value = Array.from(document.querySelectorAll('.fade-up'))
    fadeItems.value.forEach((item) => observer.observe(item))
  } catch (e) {
    console.error('Failed to load homepage media:', e)
  }
})

const formattedContent = computed(() => {
  return company.value.content
    ? company.value.content.split('\n').map(p => p.trim()).filter(p => p.length > 0)
    : []
})

const isSubmitting = ref(false) // Track submission state

const validateEmail = (email) => {
  if (!email) {
    return true
  }
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
  return emailRegex.test(email)
}

const submitForm = async () => {
  if (isSubmitting.value) return // Prevent multiple clicks
  isSubmitting.value = true

  try {
    const response = await axios.post('http://localhost:8080/api/sendemail', qs.stringify(form.value), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })

    console.log('Server Response:', response)

    if (response.status === 200 && response.data.status === 'success') {
      // Show success popup
      $q.dialog({
        title: 'Success ✅',
        message: 'Your email has been sent successfully!',
        ok: true
      })
      // Reset form fields after successful submission
      form.value = {
        name: '',
        email: '',
        telephone: '',
        enquiryType: '',
        message: ''
      }
    } else {
      // Show warning popup if email fails
      // $q.dialog({
      //   title: 'Warning ⚠️',
      //   message: response.data.message || 'Unable to send email. Please try again.',
      //   ok: true
      // })
    }
  } catch (error) {
    console.error('Error sending email:', error.response?.data || error.message)
    // Show error popup
    // $q.dialog({
    //   title: 'Error ❌',
    //   message: error.response?.data?.message || 'Failed to send email. Please try again.',
    //   ok: true
    // })
  } finally {
    isSubmitting.value = false // Reset submission state
  }
}

useHead({
  title: 'About Miracle Land - Trusted Property Developer in Malaysia',
  meta: [
    {
      name: 'description',
      content: 'Learn about Miracle Land Holdings Berhad (MLHB), a leading real estate developer in Malaysia. Explore our projects, mission, and vision for sustainable property development.'
    },
    { property: 'og:title', content: 'About Miracle Land - Trusted Property Developer' },
    {
      property: 'og:description',
      content: 'Miracle Land Holdings Berhad is a reputable property developer in Malaysia. Discover our vision, mission, and projects in Pahang and beyond.'
    },
    { property: 'og:url', content: 'https://miracleland.co/about-miracle-land' },
    {
      name: 'keywords',
      content: 'property developer Pahang, Malaysia, real estate Pahang, Temerloh, Jengka, housing development, commercial properties'
    },
    { name: 'robots', content: 'index, follow' },
    { name: 'language', content: 'ms-MY' },
    { name: 'geo.region', content: 'MY' },
    { name: 'geo.placename', content: 'Pahang, Malaysia' }
  ],
  link: [
    { rel: 'canonical', href: 'https://miracleland.co/about-miracle-land' }
  ]
})

const gotofullmap = () => {
  if (contact.value.maplink) {
    window.open(contact.value.maplink, '_blank')
  }
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
/* General Font Definitions */

@font-face {
  font-family: 'TitilliumWebRegular';
  src: url('/assets/fonts/Titillium_Web/TitilliumWeb-Regular.ttf') format('truetype');
  font-weight: bold;
}
@font-face {
  font-family: 'AvenirMedium';
  src: url('/assets/fonts/Avenir LT Std 65 Medium.otf') format('opentype');
}

@font-face {
  font-family: 'TitilliumWebSemiBold';
  src: url('/assets/fonts/Titillium_Web/TitilliumWeb-SemiBold.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: 'TitilliumWebBold';
  src: url('/assets/fonts/Titillium_Web/TitilliumWeb-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'RecklessNeueMedium';
  src: url('/assets/fonts/RecklessNeue-Medium.ttf') format('truetype');
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

.breadcrumbs {
  padding: 10px 20px;
  font-size: 16px;
  background: #f8f9fa;
  border-radius: 5px;
  font-family: 'TitilliumWebRegular';
}

.breadcrumbs a {
  text-decoration: underline;
  color: black;
}

.breadcrumbs a:hover {
  color:#a39f1a;
}

@media (max-width: 768px) {
  .breadcrumbs {
    font-size: 14px;
  }
}

.about-section {
  background-color: #0d182b;
  display: flex;
  height: 71vh;
  justify-content: center;
  align-items: center;
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.text-content {
  flex: 1;
  padding-left: 6%;
}

.line-holder {
  position: static;
  margin-bottom: 20px;
}

.line {
  display: flex;
  width: 12px; /* Thickness of the line */
  height: 4px; /* Height of the line */
  background-color: #d9d323; /* Gold accent */
  padding-inline: 40px;

}

.line-1 {
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
.about-image-container {
  flex: 1; /* Adjusts the width for the image section to make it more than half the screen width */
  display:flex;
  justify-content: flex-end;
  align-items:flex-end;
}

.about-image {
  width: 65vw;
  height: 71vh;
  object-fit: cover;
}

@media (max-width: 1260px) {

.text-above,
.text-below {
  font-size: 40px;
}

.line {
padding-inline: 20px;
}

.line-1 {
  padding-inline-end: 140px;
  margin-inline-start: 20px;
}

/* .about-image {
  width: 700px;
} */
}

/* @media (max-width: 1024px) {
  .about-image {
  width: 600px;
}
} */

/* @media (max-width: 910px) {
  .about-image {
  width: 500px;
}
} */

@media (max-width: 880px) {

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .about-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    order: -1;
  }

  .text-content {
    order: 1;
  padding-left: 0;
}

.line-holder {
  display: none;
}

.about-image {
  width: 70vw;
  height: 50vh;
  margin-top: -22px;
  }
}
@media (max-width: 520px) {
  .about-image {
    margin-top: -40px;
    margin-bottom: 20px;
    width: 100vw; /* Allows image to take more space */
  }
}
/* Company Background Section */
.company-background {
  background: #fff;
  padding: 40px 5%;
  padding-bottom: 80px;
  text-align: center;
}

.company-background h2 {
  font-family: 'RecklessNeueMedium';
  font-size: 48px;
  margin-bottom: 50px;
  color: #000;
}

.company-background p {
  font-family: 'TitilliumWebRegular';
  font-size: 19px;
  line-height: 35px;
  margin-bottom: 20px;
  text-align: justify;
  padding-left: 8%;
  padding-right: 8%;
}

@media (max-width: 768px) {
  .company-background h2 {
  font-size: 40px;
}

.company-background p {
  font-size: 18px;
  line-height: 30px;
}
}

@media (max-width: 520px) {
  .company-background h2 {
  font-size: 30px;
}

.company-background p {
  font-size: 18px;
  line-height: 30px;
}
}

.content-wrapper {
  padding: 20px;
  padding-left: 120px;
  padding-right: 120px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

/* Vision Section */
.vision-section {
  background-color: rgba(255, 255, 255, 0.4); /* Background color */
  background-blend-mode: overlay;  /* Background image */
  background-size: cover; /* Ensure the image covers the section */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent image repetition */
  color: #000;
  padding: 60px 20px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
}

.vision-text {
  margin-top: -30px;
}

.vision-text h2 {
  font-family: 'RecklessNeueMedium';
  font-size: 48px;
  margin-bottom: 20px;
}

.vision-text p {
  font-family: 'TitilliumWebRegular';
  font-size: 19px;
  line-height: 27px;
}

@media (max-width: 768px) {
  .vision-text h2 {
    font-size: 40px;
}

.vision-text p {
  font-size: 18px;
  white-space: nowrap;
}

.content-wrapper {
  padding-left: 80px;
  padding-right: 80px;
}
}

@media (max-width: 520px) {

  .vision-text h2 {
    font-size: 30px;
    margin-bottom: 10px;
}

.content-wrapper {
  padding-left: 40px;
  padding-right: 40px;
}

.vision-text p {
  font-size: 18px;
}

}

/* Mission Section */
.mission-section {
  background: #ebe4d8;
  padding: 40px 2%;
  padding-bottom: 80px;
  text-align: center;
}

.icon {
  font-size: 20px;
  color: #08463c;
  margin-right: 10px;
  margin-top: 10px;
}

.mission-section h2 {
  font-family: 'RecklessNeueMedium';
  font-size: 48px;
  color: #000;
}

.mission-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.mission-section ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
}

.mission-section li {
  font-family: 'TitilliumWebRegular';
  margin-bottom: 20px;
  font-size: 19px;
  line-height: 35px;
  text-align: justify;
  display: flex;
  align-items: flex-start;
  padding-right: 15%;
  padding-left: 15%;
}

.mission-section li span {
  display: inline-block;
  flex: 1; /* Ensures text occupies remaining space */
}

.mission-image-container {
  flex: 1; /* Adjusts the width for the image section to make it more than half the screen width */
  display:flex;
  justify-content: center;
  padding-right: 90px;
}

.mission-image {
  width: 45vw;
  height: 85vh;
  object-fit: cover;
}

/* Responsive Design */

@media (max-width: 1024px) {

  .mission-wrapper {
    flex-direction: column;
  }

  .mission-section li {
    padding-right: 7%;
    padding-left: 7%;
    font-size: 18px;
  }

  .mission-image {
    width: 50vw;
    height: 50vh;
  }

  .mission-image-container {
  margin: 20px auto; /* Adds spacing and centers the container */
  padding-right: 0px;
}
}

@media (max-width: 768px) {

  .mission-section h2 {
    font-size: 40px;
  }

  .mission-wrapper {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .mission-section li {
    padding-left: 8%;
    padding-right: 8%;
  }

  .mission-image {
    width: 60vw;
    height: 40vw;
  }
}

@media (max-width: 576px) {
  .mission-section h2 {
    font-size: 30px;
  }

  .mission-image {
    width: 90vw;
    height: 40vh;
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

.contact-no:hover {
  color: #08463c;
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
