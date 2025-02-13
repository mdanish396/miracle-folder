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

  'Miracle Sentral': [{
    id: 1,
    name: 'Miracle Sentral A',
    slug: generateSlug('Miracle Sentral A'),
    location: 'Jengka, Pahang',
    place: 'Miracle Sentral',
    housetype: '2-Storey Terrace & Semi-D',
    status: 'New Launch',
    price: 'RM 5XX,XXX*',
    image: '/assets/currentproject/car.jpg',
    features: ['Exclusive Amenities', 'Spacious Homes'],
    description: `Miracle Gardens is an 810-acre township
      fusing lifestyle and nature, featuring rolling hills and
      five cascading lakes leading to the 50-acre, pet-friendly Central Park.
      The township includes a Waterfront Village offering a walkable retail
      experience with various F&B options. Nearby the township, Gamuda Luge Gardens
      hosts a mix of commercial and leisure spaces, including retail shops, FunPark
      family-friendly park, Big Bucket Splash waterplay and Skyline Luge Kuala Lumpur.
      This development is designed to be a vibrant hub that brings the community together.`,
    gallery: [
      '/assets/currentproject/house1.jpg',
      '/assets/currentproject/house2.jpg',
      '/assets/currentproject/house3.jpg',
      '/assets/award1.png',
      '/assets/award2.png',
      '/assets/career2.png'
    ],
    builtup: '2,150 - 2,497 sqft',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.204467936385!2d102.33761262954054!3d3.482833823535699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceba19442459ed%3A0x6741cc23f71eada3!2sDynaton%20Casa%20Hill%2C%2028400%20Mentakab%2C%20Pahang!5e0!3m2!1sen!2smy!4v1733993061093!5m2!1sen!2smy&map_action=map&streetview=on'
  },
  {
    id: 2,
    name: 'Miracle Sentral B',
    slug: generateSlug('Miracle Sentral B'),
    location: 'Jengka, Pahang',
    place: 'Miracle Sentral',
    housetype: '2-Storey Terrace',
    status: 'New Launch',
    price: 'RM 5XX,XXX*',
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
    gallery: [
      '/assets/currentproject/house1.jpg',
      '/assets/currentproject/house2.jpg',
      '/assets/currentproject/house3.jpg',
      '/assets/award1.png',
      '/assets/award2.png',
      '/assets/career2.png'
    ],
    builtup: '2,150 - 2,497 sqft',
    vr: 'https://momento360.com/e/u/9dc075c498c542bdbd38b11d8e5d7bca?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.204467936385!2d102.33761262954054!3d3.482833823535699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceba19442459ed%3A0x6741cc23f71eada3!2sDynaton%20Casa%20Hill%2C%2028400%20Mentakab%2C%20Pahang!5e0!3m2!1sen!2smy!4v1733993061093!5m2!1sen!2smy&map_action=map&streetview=on'
  }
  ],
  'Casa Hill': [{
    id: 1,
    name: 'Casa Hill Type A',
    slug: generateSlug('Casa Hill Type A'),
    location: 'Mentakab, Temerloh',
    place: 'Casa Hill',
    housetype: 'Bungalow',
    status: 'New Launch',
    price: 'RM 6XX,XXX*',
    image: '/assets/Development/Casa Hill/type_a_01.jpg',
    features: ['Exclusive Amenities', 'Spacious Homes'],
    description: `Miracle Gardens is an 810-acre township
      fusing lifestyle and nature, featuring rolling hills and
      five cascading lakes leading to the 50-acre, pet-friendly Central Park.
      The township includes a Waterfront Village offering a walkable retail
      experience with various F&B options. Nearby the township, Gamuda Luge Gardens
      hosts a mix of commercial and leisure spaces, including retail shops, FunPark
      family-friendly park, Big Bucket Splash waterplay and Skyline Luge Kuala Lumpur.
      This development is designed to be a vibrant hub that brings the community together.`,
    gallery: [
      '/assets/currentproject/house1.jpg',
      '/assets/currentproject/house2.jpg',
      '/assets/currentproject/house3.jpg',
      '/assets/award1.png',
      '/assets/award2.png',
      '/assets/career1.png'
    ],
    builtup: '2,150 - 2,497 sqft',
    vr: 'https://momento360.com/e/u/9dc075c498c542bdbd38b11d8e5d7bca?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.4411082928295!2d102.33912939999999!3d3.4847702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceba1bc23fa6b7%3A0xfe72a6be37126111!2sDynaton%20Casa%20Hill!5e0!3m2!1sen!2smy!4v1737941338360!5m2!1sen!2smy',
    area: '2,800 sqft',
    bedroom: 5,
    bathroom: 4,
    plan: '/assets/currentproject/house3.jpg',
    brochure: '/assets/reports/BILL GATES AND MICROSOFT.pdf'
  },
  {
    id: 2,
    name: 'Casa Hill Type B',
    slug: generateSlug('Casa Hill Type B'),
    location: 'Mentakab, Temerloh',
    place: 'Casa Hill',
    housetype: 'Bungalow',
    status: 'New Launch',
    price: 'RM 6XX,XXX*',
    image: '/assets/Development/Casa Hill/type_b_01.jpg',
    features: ['Exclusive Amenities', 'Spacious Homes'],
    description: `Miracle Gardens is an 810-acre township
      fusing lifestyle and nature, featuring rolling hills and
      five cascading lakes leading to the 50-acre, pet-friendly Central Park.
      The township includes a Waterfront Village offering a walkable retail
      experience with various F&B options. Nearby the township, Gamuda Luge Gardens
      hosts a mix of commercial and leisure spaces, including retail shops, FunPark
      family-friendly park, Big Bucket Splash waterplay and Skyline Luge Kuala Lumpur.
      This development is designed to be a vibrant hub that brings the community together.`,
    gallery: [
      '/assets/currentproject/house1.jpg',
      '/assets/currentproject/house2.jpg',
      '/assets/currentproject/house3.jpg',
      '/assets/award1.png',
      '/assets/award2.png',
      '/assets/career1.png'
    ],
    builtup: '2,150 - 2,497 sqft',
    vr: 'https://momento360.com/e/u/9dc075c498c542bdbd38b11d8e5d7bca?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.4411082928295!2d102.33912939999999!3d3.4847702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceba1bc23fa6b7%3A0xfe72a6be37126111!2sDynaton%20Casa%20Hill!5e0!3m2!1sen!2smy!4v1737941338360!5m2!1sen!2smy',
    area: '2,500 sqft',
    bedroom: 5,
    bathroom: 4,
    plan: '/assets/currentproject/house3.jpg',
    brochure: '/assets/reports/BILL GATES AND MICROSOFT.pdf'
  },
  {
    id: 3,
    name: 'Casa Hill Type C',
    slug: generateSlug('Casa Hill Type C'),
    location: 'Mentakab, Temerloh',
    place: 'Casa Hill',
    housetype: 'Bungalow',
    status: 'New Launch',
    price: 'RM 6XX,XXX*',
    image: '/assets/Development/Casa Hill/type_c_01.JPG',
    features: ['Exclusive Amenities', 'Spacious Homes'],
    description: `Miracle Gardens is an 810-acre township
      fusing lifestyle and nature, featuring rolling hills and
      five cascading lakes leading to the 50-acre, pet-friendly Central Park.
      The township includes a Waterfront Village offering a walkable retail
      experience with various F&B options. Nearby the township, Gamuda Luge Gardens
      hosts a mix of commercial and leisure spaces, including retail shops, FunPark
      family-friendly park, Big Bucket Splash waterplay and Skyline Luge Kuala Lumpur.
      This development is designed to be a vibrant hub that brings the community together.`,
    gallery: [
      '/assets/currentproject/house1.jpg',
      '/assets/currentproject/house2.jpg',
      '/assets/currentproject/house3.jpg',
      '/assets/award1.png',
      '/assets/award2.png',
      '/assets/career1.png'
    ],
    builtup: '2,150 - 2,497 sqft',
    vr: 'https://momento360.com/e/u/9dc075c498c542bdbd38b11d8e5d7bca?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.4411082928295!2d102.33912939999999!3d3.4847702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceba1bc23fa6b7%3A0xfe72a6be37126111!2sDynaton%20Casa%20Hill!5e0!3m2!1sen!2smy!4v1737941338360!5m2!1sen!2smy',
    area: '2,200 sqft',
    bedroom: 4,
    bathroom: 3,
    plan: '/assets/currentproject/house3.jpg',
    brochure: '/assets/reports/brochure.pdf'
  }
  ]
}
</script>
