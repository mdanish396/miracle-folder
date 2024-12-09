<template>
  <slot :announcementsItems="announcementsItems" />
</template>

<script setup>
import { ref } from 'vue'

// Data for the news items
const announcementsItems = ref([
  {
    id: 1,
    title: 'Company Update - March 2024',
    link: '/path/to/company_update_march_2024.pdf'
  },
  {
    id: 2,
    title: 'Shareholder Meeting Announcement',
    link: '/path/to/shareholder_meeting_announcement.pdf'
  }
])
</script>
