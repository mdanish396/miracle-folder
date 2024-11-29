<template>
  <q-page class="investor-media-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <q-btn></q-btn>
      </div>
      <h1>Investor & Media</h1>
      <p>Access important reports, media resources, announcements, and news.</p>
    </section>

    <!-- Reports Section -->
    <section class="reports">
      <h2>Financial Reports</h2>
      <p>Access our latest financial reports and company statements here.</p>

      <div class="report-list">
        <div class="report-item" v-for="report in reports" :key="report.id">
          <q-btn @click="downloadReport(report.file)" class="report-btn" color="primary" flat>
            <q-icon name="picture_as_pdf" />
            {{ report.title }}
          </q-btn>
        </div>
      </div>
    </section>

    <!-- Announcements Section -->
    <section class="announcements">
      <h2>Announcements</h2>
      <p>Read the latest announcements from our company.</p>

      <div class="announcement-list">
        <div class="announcement-item" v-for="announcement in announcements" :key="announcement.id">
          <q-btn @click="openAnnouncement(announcement.link)" class="announcement-btn" color="secondary" flat>
            <q-icon name="notifications" />
            {{ announcement.title }}
          </q-btn>
        </div>
      </div>
    </section>

    <!-- Investor Centre Section -->
    <section class="investor-centre">
      <h2>Investor Centre</h2>
      <p>Discover investor-related resources and presentations.</p>

      <div class="investor-list">
        <div class="investor-item" v-for="investor in investors" :key="investor.id">
          <q-btn @click="openInvestor(investor.link)" class="investor-btn" color="primary" flat>
            <q-icon name="account_balance_wallet" />
            {{ investor.title }}
          </q-btn>
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section class="news">
      <h2>News</h2>
      <p>Stay updated with the latest company news.</p>

      <div class="news-list">
        <div class="news-item" v-for="news in newsItems" :key="news.id">
          <q-btn @click="openNews(news.link)" class="news-btn" color="secondary" flat>
            <q-icon name="article" />
            {{ news.title }}
          </q-btn>
        </div>
      </div>
    </section>

  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const reports = ref([
  { id: 1, title: '2023 Annual Report', file: '/path/to/annual_report_2023.pdf' },
  { id: 2, title: 'Q4 Earnings Report', file: '/path/to/q4_earnings_report.pdf' },
  { id: 3, title: 'Annual General Meeting Notice', file: '/path/to/agm_notice.pdf' }
])

const announcements = ref([
  { id: 1, title: 'Company Update - March 2024', link: '/path/to/company_update_march_2024.pdf' },
  { id: 2, title: 'Shareholder Meeting Announcement', link: '/path/to/shareholder_meeting_announcement.pdf' }
])

const investors = ref([
  { id: 1, title: 'Investor Presentation Q1', link: '/path/to/investor_presentation_q1.pdf' },
  { id: 2, title: 'Annual Shareholders Report', link: '/path/to/annual_shareholders_report.pdf' }
])

const newsItems = ref([
  { id: 1, title: 'New Project Launch', link: '/path/to/project_launch_news.pdf' },
  { id: 2, title: 'Company Partnership Announcement', link: '/path/to/partnership_announcement_news.pdf' }
])

const downloadReport = (file) => {
  const link = document.createElement('a')
  link.href = file
  link.download = file.split('/').pop()
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const openAnnouncement = (link) => {
  window.open(link, '_blank')
}

const openInvestor = (link) => {
  window.open(link, '_blank')
}

const openNews = (link) => {
  window.open(link, '_blank')
}
</script>

<style scoped>
.hero-section {
  padding: 20px;
  text-align: center;
}

.reports, .announcements, .investor-centre, .news {
  padding: 20px;
  margin-top: 30px;
}

.report-list, .announcement-list, .investor-list, .news-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.report-item, .announcement-item, .investor-item, .news-item {
  display: flex;
  align-items: center;
}

.report-btn, .announcement-btn, .investor-btn, .news-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  padding: 12px 20px;
  width: fit-content;
  transition: background-color 0.3s;
}

.report-btn:hover, .announcement-btn:hover, .investor-btn:hover, .news-btn:hover {
  background-color: #f1f1f1;
}

.q-icon {
  font-size: 1.5rem;
}
</style>
