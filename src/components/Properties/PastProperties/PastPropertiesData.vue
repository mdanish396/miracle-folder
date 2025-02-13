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

export const pastproperties = {

  'Dynaton Bukit Angin': [{
    id: 1,
    name: 'Dynaton',
    slug: generateSlug('Dynaton'),
    location: 'Temerloh, Pahang',
    place: 'Dynaton Bukit Angin',
    housetype: '2-Storey Terrace & Semi-D',
    status: 'Completed',
    price: 'RM 500,000',
    image: '/assets/MLHB Company Profile/Photos for MLHB company profile/2013 - Dynaton Bukit Angin - Phase 1.jpg',
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
      '/assets/Photos for MLHB company profile/IMG_1660.jpg',
      '/assets/Photos for MLHB company profile/IMG_1661.jpg',
      '/assets/Photos for MLHB company profile/2013 - Dynaton Bukit Angin - Phase 1.jpg',
      '/assets/Photos for MLHB company profile/IMG_0229.jpg',
      '/assets/Photos for MLHB company profile/2015 - Dynaton Bukit Angin - Phase 2.jpg',
      '/assets/Photos for MLHB company profile/IMG_0231.jpg'
    ],
    builtup: '2,150 - 2,497 sqft',
    map: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1991.312976026303!2d102.41846813838592!3d3.440822676509943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdynaton%20bukit%20angin!5e0!3m2!1sen!2smy!4v1737095232110!5m2!1sen!2smy',
    link: '/property/'
  }
  ],
  'Kawasan Industri Seberang Temerloh': [{
    id: 1,
    name: 'Aria Hill',
    slug: generateSlug('Aria Hill'),
    location: 'Seberang Temerloh, Pahang',
    place: 'Kawasan Industri Seberang Temerloh',
    housetype: '2-Storey Terrace & Semi-D',
    status: 'Completed',
    price: 'RM 500,000',
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
    map: 'https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d15930.421035677959!2d102.4380123!3d3.4457704!3m2!1i1024!2i768!4f13.1!2m1!1skawasan%20industri%20seberang%20temerloh!5e0!3m2!1sen!2smy!4v1737101855704!5m2!1sen!2smy',
    link: '/property/'
  }
  ],
  'Pusat Perniagaan Chengal': [{
    id: 1,
    name: 'KIAA One',
    slug: generateSlug('KIAA One'),
    location: 'Jalan Temerloh-Mentakab, Pahang',
    place: 'Pusat Perniagaan Chengal',
    housetype: 'Bungalow',
    status: 'Completed',
    price: 'RM 500,000',
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
      '/assets/career1.png'
    ],
    builtup: '2,150 - 2,497 sqft',
    vr: 'https://momento360.com/e/u/9dc075c498c542bdbd38b11d8e5d7bca?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true',
    map: 'https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d63721.1505278578!2d102.4047688!3d3.4537297!3m2!1i1024!2i768!4f13.1!2m1!1spusat%20perniagaan%20chengal!5e0!3m2!1sen!2smy!4v1737102342026!5m2!1sen!2smy',
    link: '/property/'
  }
  ],
  'Pusat Perniagaan Chengal 1': [{
    id: 1,
    name: 'Cleverly Homes',
    location: 'Greater Kuala Lumpur',
    slug: generateSlug('Cleverly Homes'),
    place: 'Pusat Perniagaan Chengal 1',
    housetype: 'Bungalow',
    status: 'Completed',
    price: 'RM 600,900',
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
    gallery: [
      '/assets/currentproject/house1.jpg',
      '/assets/currentproject/house2.jpg',
      '/assets/career3.jpg',
      '/assets/award1.png',
      '/assets/award2.png',
      '/assets/career3.jpg'
    ],
    builtup: '2,150 - 2,497 sqft',
    vr: 'https://momento360.com/e/u/9dc075c498c542bdbd38b11d8e5d7bca?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.204467936385!2d102.33761262954054!3d3.482833823535699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceba19442459ed%3A0x6741cc23f71eada3!2sDynaton%20Casa%20Hill%2C%2028400%20Mentakab%2C%20Pahang!5e0!3m2!1sen!2smy!4v1733993061093!5m2!1sen!2smy&map_action=map&streetview=on',
    link: '/property/'
  },
  {
    id: 2,
    name: 'The Cleverly',
    slug: generateSlug('The Cleverly'),
    location: 'Greater Kuala Lumpur',
    place: 'Cleverly Hills',
    housetype: '2 Storey Terrace',
    status: 'Completed',
    price: 'RM 600,900',
    image: '/assets/currentproject/car.jpg',
    features: ['Japanese Minimalist-Inspired Terrace Homes', 'Versatile & Practical Spaces', 'Safe & Secure Family Home'],
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
      '/assets/career3.jpg',
      '/assets/award1.png',
      '/assets/award2.png',
      '/assets/career3.jpg'
    ],
    builtup: '2,150 - 2,497 sqft',
    vr: 'https://momento360.com/e/u/9dc075c498c542bdbd38b11d8e5d7bca?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.204467936385!2d102.33761262954054!3d3.482833823535699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceba19442459ed%3A0x6741cc23f71eada3!2sDynaton%20Casa%20Hill%2C%2028400%20Mentakab%2C%20Pahang!5e0!3m2!1sen!2smy!4v1733993061093!5m2!1sen!2smy&map_action=map&streetview=on',
    link: '/property/'
  },
  {
    id: 3,
    name: 'Cleverly One',
    slug: generateSlug('Cleverly One'),
    location: 'Greater Kuala Lumpur',
    place: 'Cleverly Hills',
    housetype: 'Double Storey',
    status: 'Completed',
    price: 'RM 600,900',
    image: 'https://picsum.photos/200/300',
    features: ['Japanese Minimalist-Inspired Terrace Homes', 'Versatile & Practical Spaces', 'Safe & Secure Family Home'],
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
      '/assets/career3.jpg',
      '/assets/award2.png',
      '/assets/award1.png',
      '/assets/career3.jpg'
    ],
    builtup: '2,150 - 2,497 sqft',
    vr: 'https://momento360.com/e/u/9dc075c498c542bdbd38b11d8e5d7bca?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true',
    map: 'https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d15930.168505840998!2d102.3942066!3d3.4608217!3m2!1i1024!2i768!4f13.1!2m1!1spusat%20perniagaan%20chengal%201!5e0!3m2!1sen!2smy!4v1737105273621!5m2!1sen!2smy',
    link: '/property/'
  },
  {
    id: 4,
    name: 'Cleverly Resident',
    slug: generateSlug('Cleverly Resident'),
    location: 'Greater Kuala Lumpur',
    place: 'Cleverly Hills',
    housetype: '2 Storey Terrace',
    status: 'Completed',
    price: 'RM 500,900',
    image: 'https://picsum.photos/200/300',
    features: ['Japanese Minimalist-Inspired Terrace Homes', 'Japanese Minimalist-Inspired Terrace Homes', 'Japanese Minimalist-Inspired Terrace Homes'],
    description: `Miracle Gardens is an 810-acre township
      fusing lifestyle and nature, featuring rolling hills and
      five cascading lakes leading to the 50-acre, pet-friendly Central Park.
      The township includes a Waterfront Village offering a walkable retail
      experience with various F&B options. Nearby the township, Gamuda Luge Gardens
      hosts a mix of commercial and leisure spaces, including retail shops, FunPark
      family-friendly park, Big Bucket Splash waterplay and Skyline Luge Kuala Lumpur.
      This development is designed to be a vibrant hub that brings the community together.`,
    gallery: [
      '/assets/currentproject/house3.jpg',
      '/assets/currentproject/house2.jpg',
      '/assets/career1.png',
      '/assets/award1.png',
      '/assets/award2.png',
      '/assets/career3.jpg'
    ],
    builtup: '2,150 - 2,497 sqft',
    vr: 'https://momento360.com/e/u/9dc075c498c542bdbd38b11d8e5d7bca?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.204467936385!2d102.33761262954054!3d3.482833823535699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceba19442459ed%3A0x6741cc23f71eada3!2sDynaton%20Casa%20Hill%2C%2028400%20Mentakab%2C%20Pahang!5e0!3m2!1sen!2smy!4v1733993061093!5m2!1sen!2smy&map_action=map&streetview=on',
    link: '/property/'
  }
  ]
}
</script>
