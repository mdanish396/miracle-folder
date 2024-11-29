<template>
  <div>
  <!-- This component only holds report data -->
  </div>
</template>

<script>
export default {
  name: 'ReportData',
  data () {
    return {
      projects: [
        {
          id: 1,
          title: '2023 Annual Report',
          file: '/path/to/annual_report_2023.pdf'
        },
        {
          id: 2,
          title: 'Q4 Earnings Report',
          file: '/path/to/q4_earnings_report.pdf'
        },
        {
          id: 3,
          title: 'Annual General Meeting Notice',
          file: '/path/to/agm_notice.pdf'
        }
      ]
    }
  }
}
</script>
