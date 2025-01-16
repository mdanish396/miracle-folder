<template>
  <div>
    <!-- this component only hold Awards data -->
  </div>
</template>

<script>

export const departments = [
  { department: 'Sales and Marketing' },
  { department: 'Accounts' },
  { department: 'Development' },
  { department: 'Construction' },
  { department: 'Internship' },
  { department: 'Internship Construction Related' }
]

export const jobposition = {
  'Sales and Marketing': [
    {
      id: 1,
      position: 'Sales Manager'
    },
    {
      id: 2,
      position: 'Sales & Marketing Manager'
    },
    {
      id: 3,
      position: 'Sales & Marketing Executive'
    },
    {
      id: 4,
      position: 'Sales Executive'
    },
    {
      id: 5,
      position: 'Content Creator'
    },
    {
      id: 6,
      position: 'Graphic Designer'
    }

  ],
  Accounts: [
    {
      id: 1,
      position: 'Accountant'
    }
  ],
  Development: [
    {
      id: 1,
      position: '3D Architectural Visualiser'
    },
    {
      id: 2,
      position: 'Architectural Drafter'
    },
    {
      id: 3,
      position: 'Town Planner'
    }
  ],
  Construction: [
    {
      id: 1,
      position: 'Site Safety Supervisor'
    },
    {
      id: 2,
      position: 'Site Supervisor'
    },
    {
      id: 3,
      position: 'Project Manager'
    },
    {
      id: 4,
      position: 'Project Engineer'
    },
    {
      id: 5,
      position: 'Civil Engineer'
    }
  ],
  Internship: [
    { id: 1, position: 'Architecture' },
    { id: 2, position: 'Marketing | Sales' },
    { id: 3, position: 'Accounting | Finance' },
    { id: 4, position: 'Graphic Design' },
    { id: 5, position: 'Multimedia Creative' },
    { id: 6, position: 'IT | Website Development' },
    { id: 7, position: 'Administration' },
    { id: 8, position: 'Human Resources' },
    { id: 9, position: 'Customer Service' },
    { id: 10, position: 'Urban Planning' }
  ],
  'Internship Construction Related': [
    { id: 1, position: 'Civil Engineering' },
    { id: 2, position: 'Construction Management' },
    { id: 3, position: 'Quantity Surveyor' },
    { id: 4, position: 'Safety & Health' },
    { id: 5, position: 'Building Management' }
  ]
}
</script>
