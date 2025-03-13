<template>
  <q-page>
    <div class="about-section">
      <div class="content-container">
        <!-- Text Content Section -->
        <div class="text-content">
          <div class="line-holder fade-up">
            <div class="line">
              <div class="line-1"></div>
            </div>
          </div>
          <div class="text fade-up delay-1">
            <h2 class="text-above">About</h2>
            <h2 class="text-below">Miracle Land</h2>
          </div>
        </div>

        <!-- Image Section -->
        <div class="about-image-container">
          <img src="/assets/currentproject/house1.jpg" class="about-image" />
        </div>
      </div>
    </div>

    <!-- <q-breadcrumbs class="breadcrumbs">
      <q-breadcrumbs-el label="Home" to="/" />
      <q-breadcrumbs-el label="About Miracle Land" />
    </q-breadcrumbs> -->

    <!-- Company Background Section -->
    <section class="company-background">
      <div class="container">
        <h2 class="fade-up">Company Background</h2>
        <div class="para-text fade-up delay-1">
          <p>
            MLHB was incorporated in October 2014 as the holding company of various
            subsidiaries for upcoming development projects of the group. The company
            aspire to provide quality homes and valuable commercials in the country’s
            second and third tiered cities by creating townships with well-planned and
            integrated developments.
          </p>
          <p>
            The group’s initial focus would be on the high potential areas across Pahang
            and eventually progressing to the other parts of the country. The group has
            secured several development projects and it is actively seeking out to acquire
            new land banks to ensure continuing growth.
          </p>
          <p>
            MLHB’s core team has substantial experience in the property development industry
            which had completed to date numerous development projects covering Residential and
            Commercial as well as Light Industrial, under Dynaton Group - a series of ISO
            accredited property development and construction companies.
          </p>
          <p>
            With a team of experienced and dedicated workforce, MLHB is confident to further
            grow its capabilities while generating sustainable value for its stakeholders.
          </p>
        </div>
      </div>
    </section>

    <!-- Vision Section -->
    <section class="vision-section">
      <div class="container">
        <div class="content-wrapper">
          <div class="vision-text">
            <h2 class="fade-up">Vision</h2>
            <p class="fade-up delay-1">
              To be one of the most trusted and<br/>
              leading developer in the country.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="mission-section">
      <div class="container">
          <h2 class="fade-up">Mission</h2>
        <div class="mission-wrapper fade-up delay-1">
          <ul>
            <li>
              <i class="fas fa-check-circle icon"></i>
              <span>
                To strive for best planning and design for all our development projects ensuring each and every one is a masterpiece.
              </span>
            </li>
            <li>
              <i class="fas fa-check-circle icon"></i>
              <span>
                To give customer peace of mind by ensuring quality material and workmanship and completion on time.
              </span>
            </li>
            <li>
              <i class="fas fa-check-circle icon"></i>
              <span>
                To enhance the social and economic aspect of local community through our development projects.
              </span>
            </li>
            <li>
              <i class="fas fa-check-circle icon"></i>
              <span>
                To maximize the value of each project land while maintaining the conducive living environment.
              </span>
            </li>
            <li>
              <i class="fas fa-check-circle icon"></i>
              <span>
                To deliver sustainable return to our shareholders.
              </span>
            </li>
            <li>
              <i class="fas fa-check-circle icon"></i>
              <span>
                To develop and reward our employees.
              </span>
            </li>
          </ul>

          <div class="mission-image-container">
            <img src="/assets/about2.png" class="mission-image" />
          </div>
        </div>
      </div>
    </section>

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
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'

const sections = ref([])
const fadeItems = ref([])
let observer = null
const route = useRoute()

useHead({
  title: 'About Miracle Land - Trusted Property Developer in Malaysia',
  meta: [
    { name: 'description', content: 'Learn about Miracle Land Holdings Berhad (MLHB), a leading real estate developer in Malaysia. Explore our projects, mission, and vision for sustainable property development.' },
    { property: 'og:title', content: 'About Miracle Land - Trusted Property Developer' },
    { property: 'og:description', content: 'Miracle Land Holdings Berhad is a reputable property developer in Malaysia. Discover our vision, mission, and projects in Pahang and beyond.' },
    { property: 'og:image', content: 'https://www.miracleland.com/assets/about-thumbnail.jpg' },
    { property: 'og:url', content: 'https://www.miracleland.com/about-miracle-land' },
    { name: 'keywords', content: 'property developer Malaysia, real estate Pahang, housing development, commercial properties' },
    { name: 'robots', content: 'index, follow' },

    // Geo & Language Targeting
    { name: 'language', content: 'ms-MY' }, // Malay (Malaysia)
    { name: 'geo.region', content: 'MY' }, // Malaysia
    { name: 'geo.placename', content: 'Pahang, Malaysia' },

    // Canonical URL (Prevents duplicate content issues)
    { rel: 'canonical', href: `https://miracleland.co${route.fullPath}` }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.miracleland.com/about-miracle-land' }
  ]
})

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
  background-image: url('/assets/career3.jpg'); /* Background image */
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
  width: 40vw;
  height: 75vh;
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
