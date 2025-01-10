<template>
  <q-page class="reports-page">
    <!-- Hero Section -->
    <div class="report-hero">
      <div class="report-container">
        <!-- Text Content Section -->
        <div class="text-content">
          <div class="line-hero-holder">
            <div class="line-hero">
              <div class="line-hero-1"></div>
            </div>
          </div>
          <h2 class="text-above">Reports</h2>
          <p class="text-below">
            Access our latest financial reports and company statements here.
          </p>
        </div>

        <!-- Image Section -->
        <div class="reports-image-container">
          <img src="src/assets/currentproject/house1.jpg" class="top-image" />
        </div>
      </div>
    </div>

    <!-- Year Selector -->
    <div class="year-selector">
      <q-select
        v-model="selectedYear"
        :options="yearOptions"
        outlined
        dense
        @update:model-value="filterReports"
      />
    </div>

    <!-- Reports Section -->
    <section class="reports">
      <div class="report-list">
        <div class="report-item" v-for="report in filteredReports" :key="report.id">
          <q-card @click="downloadReport(report.file)" class="report-btn" flat>
            <q-icon name="picture_as_pdf" />
            {{ report.title }}
          </q-card>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { years, reportsItems } from 'src/components/ReportData.vue'

const selectedYear = ref(years[0].year) // Default to the first year
const yearOptions = years.map((y) => y.year) // Extract year options
const filteredReports = ref(reportsItems[selectedYear.value])

const filterReports = (year) => {
  filteredReports.value = reportsItems[year] || []
}

const downloadReport = (file) => {
  window.open(file, '_blank')
}

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
  font-weight: bold;
}

.report-hero {
  background-color: #0d182b;
  display: flex;
  height: 71vh;
  justify-content: center;
  align-items: center;
}

.report-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.text-content {
  flex: 1;
  padding-left: 120px;
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
.reports-image-container {
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

  .report-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .reports-image-container {
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

  .reports-image-container {
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

.year-selector {
  padding-top: 100px;
  display: flex;
  padding-left: 180px;
  margin: 0 auto;
  font-family: 'AvenirMedium';
}

.reports {
  padding: 20px;
  padding-right: 70px;
  padding-left: 150px;
  padding-top: 40px;
  padding-bottom: 100px;
}

.report-list {
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(2, 1fr);
}

.report-item {
  display: flex;
  align-items: center;
}

/* Responsive Design */

@media (max-width: 1024px) {
  .reports {
    padding-left: 70px;
    padding-right: 70px;
}

.year-selector {
padding-left: 100px;
}
}

@media (max-width: 768px) {
  .report-list {
    display: flex;
    gap: 5px;
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .reports {
    padding-left: 80px;
  }

}

.report-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  padding: 12px 20px;
  width: fit-content;
  font-family: 'TitilliumWebRegular';
  transition: color 0.3s;
  background-color: transparent;
  cursor: pointer;
  color: rgb(48, 48, 48);
}

.report-btn:hover {
  color: #807c12;
  background-color: transparent;
}

.q-icon {
  font-size: 24px;
  color: #807c12;
}
</style>
