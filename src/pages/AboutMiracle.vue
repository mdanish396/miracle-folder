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
          <img src="src/assets/currentproject/house1.jpg" class="about-image" />
        </div>
      </div>
    </div>

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
            <img src="src/assets/about2.jpg" class="mission-image" />
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
                <div class="register-line-1">
                </div>
              </div>
            </div>
            <h5 class="address-title fade-up delay-2">Address</h5>
            <address class="fade-up delay-3">
              No. 1, Tingkat Basement, Jalan Dagang 2,<br>
              Kampung Bukit Angin, 28000 Temerloh, Pahang<br>
            </address>

            <div class="map-button fade-up delay-2">
              <button @click="gotofullmap" class="btn view-full-map-btn">
                    <img src="src/assets/brochure.svg" alt="Download" />
                    View Full Map
                  </button>
            </div>
            <h5 class="contact-title fade-up delay-2">Contact Number</h5>
            <div class="fade-up delay-3">
              <i class="fa fa-phone phone-icon"></i>
                <span class="contact-no">
                  +60 19 296 6666
                </span>
            </div>
            <h5 class="email-title fade-up delay-2">General Enquiries</h5>
            <p class="email-subtitle fade-up delay-2">For general questions, please write to</p>
            <div class="fade-up delay-3">
              <i class="fa fa-envelope email-icon"></i>
                <span class="email-address">
                  kevin@interplandesigns.com
                </span>
            </div>
            <h5 class="email-title fade-up delay-2">Job Application & Internship</h5>
            <p class="email-subtitle fade-up delay-2">We're always on the lookout for talented people - please send us <br> your CV and portfolio (no larger than 5MB) to</p>
            <div class="fade-up delay-3">
              <i class="fa fa-envelope email-icon"></i>
                <span class="email-address">
                  hmnrs.md3@gmail.com
                </span>
              <div>
                <i class="fa fa-phone phone-icon"></i>
                <span class="contact-no">
                  +60 11 6999 9888
                </span>
              </div>
            </div>
            <h5 class="email-title fade-up delay-2">Business Enquiries</h5>
            <p class="email-subtitle fade-up delay-2">For any new business enquiries, please write to</p>
            <div class="fade-up delay-3">
              <i class="fa fa-envelope email-icon"></i>
                <span class="email-address">
                  kevin@interplandesigns.com
                </span>
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
                <div class="register-line-1">
                </div>
              </div>
            </div>
            <p class="fade-up delay-3">Just send us your details, and our Miracle Land Relationship Associates will get back to you!</p>
            <form
              action="https://formspree.io/f/myzkjkew"
              method="POST"
              class="register-form fade-up delay-4"
            >
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
  font-family: 'GeographWebMedium';
  src: url('src/assets/fonts/geograph/geographwebmedium.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: 'TitilliumWebRegular';
  src: url('src/assets/fonts/TitilliumWeb-Regular.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: 'RecklessNeueMedium';
  src: url('src/assets/fonts/RecklessNeue-Medium.ttf') format('truetype');
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
  margin-top: -20px;
  padding-bottom: 30px;
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
  width: 850px;
  height: 71vh;
  object-fit: cover;
}

@media (max-width: 1260px) {

.text-above,
.text-below {
  font-size: 36px;
}

.line {
padding-inline: 20px;
}

.line-1 {
  padding-inline-end: 140px;
  margin-inline-start: 20px;
}

.about-image {
  width: 700px;
}
}

@media (max-width: 1024px) {
  .about-image {
  width: 600px;
}
}

@media (max-width: 910px) {
  .about-image {
  width: 500px;
}
}

@media (max-width: 820px) {

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
    margin-top: -455px;
  }

  .text-content {
    padding-left: 0px;
    padding-top: 185px;
  }

.line-holder {
  display: none;
}

.about-image {
  width: 500px;
  height: 49vh;
  }
}
@media (max-width: 520px) {

  .about-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -460px;
  }

  .text-content {
    padding-left: 0px;
    padding-top: 190px;
  }

  .about-image {
  width: 100%;
  height: 49vh;
  }
}
/* Company Background Section */
.company-background {
  background: #fff;
  padding: 40px 20px;
  padding-bottom: 80px;
  text-align: center;
}

.company-background h2 {
  font-family: 'RecklessNeueMedium';
  font-size: 48px;
  margin-bottom: 50px;
  color: rgb(0, 26, 43);
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
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), /* Gradient overlay */
    url('src/assets/career3.jpg'); /* Background image */
  background-size: cover; /* Ensure the image covers the section */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent image repetition */  color: #333;
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
  padding: 20px;
  padding-left: 100px;
  padding-right: 100px;
}
}

@media (max-width: 520px) {

  .vision-text h2 {
    font-size: 30px;
    margin-bottom: 10px;
}

.vision-text p {
  font-size: 18px;
}

}

/* Mission Section */
.mission-section {
  background: #ebe4d8;
  padding: 40px 20px;
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
  width: 500px;
  height: 500px;
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
    width: 400px;
    height: 400px;
  }

  .mission-image-container {
  margin: 20px auto; /* Adds spacing and centers the container */
  padding-right: 0px;
}
}

@media (max-width: 768px) {
  .container {
    padding: 10px;
  }

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
    width: 300px;
    height: 300px;
  }
}

@media (max-width: 576px) {
  .mission-section h2 {
    font-size: 30px;
  }

  .mission-image {
    width: 250px;
    height: 250px;
  }
}

/* Contact Us Section */
.register {
  color: #000;
  background-color: white;
  padding: 40px 100px;
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
  padding-left: 30px;
  padding-right: 30px;
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
  padding-left: 30px;
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
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 21px;
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
  font-size: 0.9rem;
  cursor: pointer;
}

.submit-btn {
  padding: 10px 20px;
  background-color: #555;
  color: #fff;
  border: none;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
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
  padding: 40px 20px;
}

}

@media (max-width: 520px){
  .register-left address br:first-child {
    display: none;
  }

  .register-left .register-title {
    font-size: 34px;
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
