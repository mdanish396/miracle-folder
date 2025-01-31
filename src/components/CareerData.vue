<template>
  <div>
    <!-- this component only hold Careers data -->
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
    {
      Temerloh: [
        { position: 'Sales Manager' },
        { position: 'Sales & Marketing Manager' },
        { position: 'Content Creator' },
        { position: 'Graphic Designer' }
      ],
      Jengka: [
        { position: 'Sales Executive' },
        { position: 'Sales & Marketing Executive' }
      ],
      Kuantan: [
      ]
    }
  ],

  Accounts: [
    {
      Temerloh: [
        { position: 'Accountant' }
      ],
      Jengka: [
      ],
      Kuantan: [
      ]
    }
  ],

  Development: [
    {
      Temerloh: [
        { position: '3D Architectural Visualiser' }
      ],
      Kuantan: [
        { position: 'Town Planner' }
      ],
      Jengka: [
        { position: 'Architectural Drafter' }
      ]
    }
  ],

  Construction: [
    {
      Temerloh: [
        { position: 'Project Manager' }
      ],
      Jengka: [
        { position: 'Site Safety Supervisor' },
        { position: 'Project Engineer' },
        { position: 'Civil Engineer' }
      ],
      Kuantan: [
        { position: 'Site Supervisor' }
      ]
    }
  ],

  Internship: [
    {
      Temerloh: [
        { position: 'Architecture' },
        { position: 'Accounting | Finance' },
        { position: 'Multimedia Creative' },
        { position: 'IT | Website Development' },
        { position: 'Administration' },
        { position: 'Human Resources' },
        { position: 'Customer Service' }
      ],
      Jengka: [
        { position: 'Graphic Design' }
      ],
      Kuantan: [
        { position: 'Marketing | Sales' },
        { position: 'Urban Planning' }
      ]
    }
  ],

  'Internship Construction Related': [
    {
      Temerloh: [
        { position: 'Construction Management' },
        { position: 'Building Management' }
      ],
      Jengka: [
        { position: 'Quantity Surveyor' }
      ],
      Kuantan: [
        { position: 'Civil Engineering' },
        { position: 'Safety & Health' }
      ]
    }
  ]
}
</script>
