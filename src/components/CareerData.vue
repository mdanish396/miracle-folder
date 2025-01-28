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

export const locations = [
  { location: 'Temerloh' },
  { location: 'Jengka' },
  { location: 'Kuantan' }
]

export const jobposition = {
  'Sales and Marketing': [
    { id: 1, position: 'Sales Manager', location: 'Temerloh' },
    { id: 2, position: 'Sales & Marketing Manager', location: 'Temerloh' },
    { id: 3, position: 'Sales & Marketing Executive', location: 'Jengka' },
    { id: 4, position: 'Sales Executive', location: 'Jengka' },
    { id: 5, position: 'Content Creator', location: 'Temerloh' },
    { id: 6, position: 'Graphic Designer', location: 'Temerloh' }
  ],
  Accounts: [
    { id: 1, position: 'Accountant', location: 'Temerloh' }
  ],
  Development: [
    { id: 1, position: '3D Architectural Visualiser', location: 'Temerloh' },
    { id: 2, position: 'Architectural Drafter', location: 'Jengka' },
    { id: 3, position: 'Town Planner', location: 'Kuantan' }
  ],
  Construction: [
    { id: 1, position: 'Site Safety Supervisor', location: 'Jengka' },
    { id: 2, position: 'Site Supervisor', location: 'Kuantan' },
    { id: 3, position: 'Project Manager', location: 'Temerloh' },
    { id: 4, position: 'Project Engineer', location: 'Jengka' },
    { id: 5, position: 'Civil Engineer', location: 'Jengka' }
  ],
  Internship: [
    { id: 1, position: 'Architecture', location: 'Temerloh' },
    { id: 2, position: 'Marketing | Sales', location: 'Kuantan' },
    { id: 3, position: 'Accounting | Finance', location: 'Temerloh' },
    { id: 4, position: 'Graphic Design', location: 'Jengka' },
    { id: 5, position: 'Multimedia Creative', location: 'Temerloh' },
    { id: 6, position: 'IT | Website Development', location: 'Temerloh' },
    { id: 7, position: 'Administration', location: 'Temerloh' },
    { id: 8, position: 'Human Resources', location: 'Temerloh' },
    { id: 9, position: 'Customer Service', location: 'Temerloh' },
    { id: 10, position: 'Urban Planning', location: 'Kuantan' }
  ],
  'Internship Construction Related': [
    { id: 1, position: 'Civil Engineering', location: 'Kuantan' },
    { id: 2, position: 'Construction Management', location: 'Temerloh' },
    { id: 2, position: 'Construction Management', location: 'Jengka' },
    { id: 3, position: 'Quantity Surveyor', location: 'Jengka' },
    { id: 4, position: 'Safety & Health', location: 'Kuantan' },
    { id: 5, position: 'Building Management', location: 'Temerloh' }
  ]
}
</script>
