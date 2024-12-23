<template>
  <q-page class="reports-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="title-IM">
        <h1>Financial Reports</h1>
        <p>Access our latest financial reports and company statements here.</p>
      </div>
    </section>

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
            <q-icon name="picture_as_pdf" color="primary" />
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
.hero-section {
  padding: 20px;
  height: 43vh;
  text-align: center;
  background-color: #006039;
  margin-top: -70px;
  color: white;
}

.title-IM {
  font-family: 'GeographWebMedium', sans-serif;
}

.title-IM h1 {
  margin-top: 80px;
  font-size: 50px;
}

.title-IM p {
  margin-top: -50px;
  font-size: 17px;
}

.year-selector {
  padding-top: 50px;
  display: flex;
  padding-left: 180px;
  margin: 0 auto;
}

.reports {
  padding: 20px;
  padding-right: 70px;
  padding-left: 150px;
  margin-top: 10px;
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
@media (min-width: 1110px) {
  .hero-section {
    margin-top: -70px;
}
}
@media (max-width: 1106px) {
  .hero-section {
    height: 44vh;
    margin-top: -85px;
}
}

@media (max-width: 768px) {
  .report-list {
    display: flex;
    gap: 5px;
    flex-direction: column;
  }
  .title-IM h1 {
  font-size: 40px;
}

  .title-IM p {
  font-size: 14px;
}
}

@media (max-width: 480px) {
  .reports {
    padding-left: 80px;
  }

  .title-IM h1 {
    font-size: 28px;
  }

  .title-IM p {
    font-size: 13px;
  }
}

.report-btn {
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

.report-btn:hover {
  color: #02947e;
  background-color: transparent;
}

.q-icon {
  font-size: 1.5rem;
}
</style>
