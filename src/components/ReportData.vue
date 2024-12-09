<template>
  <div>
  <!-- This component only holds report data -->
  </div>
</template>

<script>

export const years = [
  { year: 2023 },
  { year: 2024 },
  { year: 2025 } // add more year if needed
]
// save the reports in the reports folder in assets
export const reportsItems = {
  2023: [
    {
      id: 1,
      title: '2023 Annual Report',
      file: 'src/assets/reports/BILL GATES AND MICROSOFT.pdf'
    },
    {
      id: 2,
      title: 'Corporate Governance Report 2023',
      file: '/path/to/corporate_governance_report_2023.pdf'
    },
    {
      id: 3,
      title: 'Group Sustainability Statement 2023',
      file: '/path/to/sustainability_statement_2023.pdf'
    },
    {
      id: 4,
      title: 'AGM Guide 2023',
      file: '/path/to/agm_guide_2023.pdf'
    }
  ],
  2024: [
    {
      id: 1,
      title: 'Q4 Earnings Report',
      file: '/path/to/q4_earnings_report.pdf'
    },
    {
      id: 2,
      title: 'Annual Report',
      file: '/path/to/q4_earnings_report.pdf'
    }
  ],
  2025: [
    {
      id: 1,
      title: 'Annual General Meeting Notice',
      file: '/path/to/agm_notice.pdf'
    }
  ]
}
</script>
