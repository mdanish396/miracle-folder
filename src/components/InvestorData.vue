<template>
  <slot :investorsItems="investorsItems" />
</template>

<script setup>
import { ref } from 'vue'

// Data for the news items
const investorsItems = ref([
  {
    id: 1,
    title: 'Investor Presentation Q1',
    link: '/path/to/investor_presentation_q1.pdf'
  },
  {
    id: 2,
    title: 'Annual Shareholders Report',
    link: '/path/to/annual_shareholders_report.pdf'
  }
])
</script>
