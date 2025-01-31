<template>
  <q-page>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Hero Image -->
    <div class="new-hero">
      <div class="new-container">
        <!-- Text Content Section -->
        <div class="text-content">
          <div class="line-hero-holder fade-up">
            <div class="line-hero">
              <div class="line-hero-1"></div>
            </div>
          </div>
            <h2 class="text-above fade-up delay-1">Career</h2>
            <p class="text-below fade-up delay-2">
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
        <h2 class="fade-up">What We Offer</h2>
        <div class="fade-up delay-1">
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
      </div>

      <div class="contact-apply fade-up delay-2">
        <div class="contact-info">
          <p>Send your resume</p>
          <p class="info"><i class="fa fa-envelope icons"></i>hmnrs.md3@gmail.com</p>
        </div>
        <div class="contact-info">
          <p>Contact us
          </p>
          <p class="info"><i class="fas fa-phone-alt icons"></i> +60 11 6999 9888
          </p>
        </div>
      </div>
    </div>

    <div class="job-filter-container">
      <div class="filter-bar fade-up">
        <!-- Department Selector -->
        <q-select
          v-model="selectedDepartment"
          :options="['All Departments', ...departments.map(dept => dept.department)]"          outlined
          dense
          emit-value
          map-options
          class="select"
          @update:model-value="filterJobs"
        />
        <!-- Location Selector -->
        <q-select
          v-model="selectedLocation"
          :options="['All Locations', ...locations.map(loc => loc.location)]"          outlined
          dense
          class="select"
          emit-value
          map-options
          @update:model-value="filterJobs"
        />
      </div>

      <!-- Job Positions Cards -->
      <div class="job-cards fade-up delay-1">
        <q-card v-for="job in filteredJobs" :key="job.position" class="job-card">
          <q-card-section>
            <div class="job-location">
              {{ job.location }}
            </div>
            <div class="job-title">
              {{ job.position }}
            </div>
          </q-card-section>
        </q-card>
        <div v-if="filteredJobs.length === 0" class="no-jobs">
          No job positions available
        </div>
      </div>
    </div>

    <div class="careers-text">
      <div class="career-first">
        <h2 class="fade-up">Can't find any job vacancies?</h2>
        <p class="fade-up delay-1">The Miracle Land Company has a strong presence in Pahang,
          with offices in Temerloh, Kuantan, and Jengka. If you haven't
          found the job vacancy on our site today, you can submit your
          details prospectively with us and one of our team will get in touch with you</p>
      </div>
      <div class="career-link fade-up delay-2">
        <q-btn flat label="Submit your details prospectively" class="btn" @click="navigateToForm"/>
      </div>
      <div class="career-second fade-up delay-3">
      <strong>Be fraud aware:</strong> Fraudulent job advertisements can circulate online and falsely
          claim to be associated with The Miracle Land Company. Genuine
          correspondence from The Miracle Land Company will always come
          from the official website [www.miracleland.com].We will never
          request sensitive or personal financial information during the
          recruitment process. If you suspect that you have been contacted
          by someone misrepresenting The Miracle Land Company, please
          contact us at hmnrs.md3@gmail.com.
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
import { departments, locations, jobposition } from 'src/components/CareerData.vue'
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const sections = ref([])
const fadeItems = ref([])
let observer = null
const selectedDepartment = ref('All Departments')
const selectedLocation = ref('All Locations')

// Filtered jobs based on selected department and location
const filteredJobs = computed(() => {
  const jobs = []
  const deptFilter = selectedDepartment.value === 'All Departments' ? '' : selectedDepartment.value
  const locFilter = selectedLocation.value === 'All Locations' ? '' : selectedLocation.value

  if (!deptFilter && !locFilter) {
    for (const dept in jobposition) {
      for (const locData of jobposition[dept]) {
        for (const loc in locData) {
          jobs.push(...locData[loc].map((job) => ({ ...job, location: loc, department: dept })))
        }
      }
    }
  } else if (deptFilter && !locFilter) {
    const deptJobs = jobposition[deptFilter]
    for (const locData of deptJobs) {
      for (const loc in locData) {
        jobs.push(...locData[loc].map((job) => ({ ...job, location: loc, department: deptFilter })))
      }
    }
  } else if (locFilter && !deptFilter) {
    for (const dept in jobposition) {
      for (const locData of jobposition[dept]) {
        if (locData[locFilter]) {
          jobs.push(...locData[locFilter].map((job) => ({ ...job, location: locFilter, department: dept })))
        }
      }
    }
  } else {
    const deptJobs = jobposition[deptFilter]
    for (const locData of deptJobs) {
      if (locData[locFilter]) {
        jobs.push(...locData[locFilter].map((job) => ({ ...job, location: locFilter, department: deptFilter })))
      }
    }
  }

  return jobs.sort((a, b) => a.position.localeCompare(b.position, undefined, { numeric: true }))
})

const filterJobs = () => {

}

const navigateToForm = () => {
  window.open('https://forms.monday.com/forms/af05330b16c06a3f98c8e8e0efdf767f?r=use1&s=6', '_blank')
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

.contact {
  padding: 20px 15%;
  padding-bottom: 50px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  background-color: #f9f9f9;
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

.job-filter-container {
  padding: 80px 5%;
  background-color: #f9f9f9;
}

.filter-bar {
  display: flex;
  gap: 20px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.select {
  width: 300px;
  font-family: 'TitilliumWebRegular';
  font-size: 16px;
}

.job-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
}

.job-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
}

.job-location {
  font-family: 'TitilliumWebRegular';
  color: #666;
  font-size: 16px;
}

.job-title {
  font-size: 20px;
  font-family: 'TitilliumWebSemiBold';
}

.job-cards .no-jobs {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding-top: 80px;
  font-size: 18px;
  font-family: 'TitilliumWebRegular';
  color: #888;
}

.careers-text {
  padding: 10px 5%;
  padding-bottom: 80px;
  background-color:#f9f9f9;
}

.career-first h2 {
  font-size: 17px;
  font-family: 'TitilliumWebSemiBold';
  margin-bottom: -5px;
}

.career-first p {
  font-size: 17px;
  font-family: 'TitilliumWebRegular';
}

.career-link {
  padding-bottom: 30px;
}

.btn {
  background-color: transparent;
  border: 1px solid #a39f1a;
  color: black;
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 16px;
  text-transform: none;
  font-family: 'AvenirMedium';
}

.btn:hover {
  background-color: #a39f1a;
  color: white;
}

.career-second strong{
  font-size: 17px;
  font-family: 'TitilliumWebSemiBold';
}

.career-second {
  font-size: 17px;
  font-family: 'TitilliumWebRegular';
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
