<template>
  <div>
  </div>
</template>

<script>

function generateSlug (text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const properties = {

  'Kalimantan, Mana': [{
    id: 1,
    name: 'Monarc Homes',
    slug: generateSlug('Monarc Homes'),
    location: 'Kalimantan, Mana',
    housetype: '2-Storey Terrace & Semi-D',
    price: 'RM500,000',
    image: 'https://picsum.photos/200/300',
    features: ['Exclusive Amenities', 'Spacious Homes'],
    description: `Miracle Gardens is an 810-acre township
      fusing lifestyle and nature, featuring rolling hills and
      five cascading lakes leading to the 50-acre, pet-friendly Central Park.
      The township includes a Waterfront Village offering a walkable retail
      experience with various F&B options. Nearby the township, Gamuda Luge Gardens
      hosts a mix of commercial and leisure spaces, including retail shops, FunPark
      family-friendly park, Big Bucket Splash waterplay and Skyline Luge Kuala Lumpur.
      This development is designed to be a vibrant hub that brings the community together.`,
    builtup: '2,150 - 2,497 sqft',
    link: '/property/'
  }
  ],
  'Greater Kuala Lumpur': [{
    id: 1,
    name: 'The Connaught One',
    location: 'Greater Kuala Lumpur',
    slug: generateSlug('The Connaught One'),
    housetype: 'Bungalow',
    price: '600,900',
    image: 'https://picsum.photos/200/300',
    features: ['Luxury Living', 'Green Spaces'],
    description: `Miracle Gardens is an 810-acre township
      fusing lifestyle and nature, featuring rolling hills and
      five cascading lakes leading to the 50-acre, pet-friendly Central Park.
      The township includes a Waterfront Village offering a walkable retail
      experience with various F&B options. Nearby the township, Gamuda Luge Gardens
      hosts a mix of commercial and leisure spaces, including retail shops, FunPark
      family-friendly park, Big Bucket Splash waterplay and Skyline Luge Kuala Lumpur.
      This development is designed to be a vibrant hub that brings the community together.`,
    link: '/property/'
  },
  {
    id: 2,
    name: 'Residensi ZIG',
    slug: generateSlug('Residensi ZIG'),
    location: 'Greater Kuala Lumpur',
    housetype: 'Bungalow',
    price: '600,900',
    image: 'https://picsum.photos/200/300',
    features: ['Luxury Living', 'Green Spaces'],
    description: `Miracle Gardens is an 810-acre township
      fusing lifestyle and nature, featuring rolling hills and
      five cascading lakes leading to the 50-acre, pet-friendly Central Park.
      The township includes a Waterfront Village offering a walkable retail
      experience with various F&B options. Nearby the township, Gamuda Luge Gardens
      hosts a mix of commercial and leisure spaces, including retail shops, FunPark
      family-friendly park, Big Bucket Splash waterplay and Skyline Luge Kuala Lumpur.
      This development is designed to be a vibrant hub that brings the community together.`,
    link: '/property/'
  },
  {
    id: 3,
    name: 'Residensi ZIG',
    slug: generateSlug('Residensi ZIG'),
    location: 'Greater Kuala Lumpur',
    housetype: 'Double Storey',
    price: '600,900',
    image: 'https://picsum.photos/200/300',
    features: ['Luxury Living', 'Green Spaces'],
    description: `Miracle Gardens is an 810-acre township
      fusing lifestyle and nature, featuring rolling hills and
      five cascading lakes leading to the 50-acre, pet-friendly Central Park.
      The township includes a Waterfront Village offering a walkable retail
      experience with various F&B options. Nearby the township, Gamuda Luge Gardens
      hosts a mix of commercial and leisure spaces, including retail shops, FunPark
      family-friendly park, Big Bucket Splash waterplay and Skyline Luge Kuala Lumpur.
      This development is designed to be a vibrant hub that brings the community together.`,
    link: '/property/'
  },
  {
    id: 4,
    name: 'Residensi ZIG',
    slug: generateSlug('Residensi ZIG'),
    location: 'Greater Kuala Lumpur',
    housetype: '2 Storey Terrace',
    price: '500,900',
    image: 'https://picsum.photos/200/300',
    features: ['Luxury Living', 'Green Spaces'],
    description: `Miracle Gardens is an 810-acre township
      fusing lifestyle and nature, featuring rolling hills and
      five cascading lakes leading to the 50-acre, pet-friendly Central Park.
      The township includes a Waterfront Village offering a walkable retail
      experience with various F&B options. Nearby the township, Gamuda Luge Gardens
      hosts a mix of commercial and leisure spaces, including retail shops, FunPark
      family-friendly park, Big Bucket Splash waterplay and Skyline Luge Kuala Lumpur.
      This development is designed to be a vibrant hub that brings the community together.`,
    link: '/property/'
  }
  ]
}
</script>
