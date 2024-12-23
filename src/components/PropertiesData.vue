<template>
  <div>
  </div>
</template>

<script>
export const properties = [
  {
    id: 1,
    name: 'Monarc Homes',
    location: 'Kalimantan, Mana',
    type: '2-Storey Terrace & Semi-D',
    price: 'RM500,000',
    status: 'Current',
    image: 'src/assets/currentproject/house1.jpg',
    features: ['Exclusive Amenities', 'Spacious Homes', 'Green Spaces'],
    description: `The Camellia, your home at Wetlands Estates, the
    private enclave in Gamuda Cove.`,
    builtup: '2,110 - 2,497 sqft',
    lotsize: '26` x 76`',
    gallery: [
      'src/assets/currentproject/house1.jpg',
      'src/assets/award1.png',
      'src/assets/currentproject/house3.jpg'
    ]
  }
]

export const floorplan = {
  'Monarc Homes': [
    {
      '2 Storey Semi-D A': [
        {
          area: '1,800 sqft',
          bedroom: 4,
          bathroom: 3,
          plan: 'src/assets/currentproject/house1.jpg',
          brochure: 'src/assets/reports/brochure.pdf'
        }
      ],
      '2 Storey Semi-D B': [
        {
          area: '2,800 sqft',
          bedroom: 5,
          bathroom: 4,
          plan: 'src/assets/currentproject/house3.jpg',
          brochure: 'src/assets/reports/brochure.pdf'
        }
      ]
    }
  ]
}

export const galleryHouses = {
  'Monarc Homes': [
    {
      gallery: ['src/assets/currentproject/house1.jpg',
        'src/assets/currentproject/house2.jpg',
        'src/assets/currentproject/house3.jpg',
        'src/assets/award1.png',
        'src/assets/award2.png',
        'src/assets/career2.png']
    }
  ]
}

</script>
