<template>
  <div>
  <!-- This component only holds investor data -->
  </div>
</template>

<script>
export default {
  name: 'InvestorData',
  data () {
    return {
      projects: [
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
      ]
    }
  }
}
</script>
