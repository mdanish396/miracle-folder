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

export const leaseproperties = {

  'Monarc Cove': [{
    id: 1,
    name: 'Monarc Homes',
    slug: generateSlug('Monarc Homes'),
    location: 'Kalimantan, Mana',
    place: 'Monarc Cove',
    housetype: '3-Storey Terrace & 2 Storey Semi-D',
    status: 'Current',
    price: 'RM 5000',
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
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.204467936385!2d102.33761262954054!3d3.482833823535699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceba19442459ed%3A0x6741cc23f71eada3!2sDynaton%20Casa%20Hill%2C%2028400%20Mentakab%2C%20Pahang!5e0!3m2!1sen!2smy!4v1733993061093!5m2!1sen!2smy&map_action=map&streetview=on',
    area: '1,800 sqft',
    bedroom: 4,
    bathroom: 3,
    plan: '/assets/currentproject/house1.jpg',
    brochure: '/assets/reports/BILL GATES AND MICROSOFT.pdf'
  }
  ],
  'Connaught Cove': [{
    id: 1,
    name: 'The Connaught One',
    slug: generateSlug('The Connaught One'),
    location: 'Mert, Temerloh',
    place: 'Connaught Cove',
    housetype: 'Bungalow',
    status: 'Current',
    price: 'RM 5000',
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
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.380935267707!2d102.4265958!3d3.4481648500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceb98ede1fc697%3A0x525d3e85476ef763!2sRestoran%20Saiful!5e0!3m2!1sen!2smy!4v1735284346219!5m2!1sen!2smy',
    area: '2,800 sqft',
    bedroom: 5,
    bathroom: 4,
    plan: '/assets/currentproject/house3.jpg',
    brochure: '/assets/reports/brochure.pdf'
  }
  ],
  'ZIG House': [{
    id: 1,
    name: 'The ZIG One',
    location: 'Greater Kuala Lumpur',
    slug: generateSlug('The ZIG One'),
    place: 'ZIG House',
    housetype: 'Bungalow',
    status: 'Current',
    price: 'RM 6000',
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
    area: '3,800 sqft',
    bedroom: 5,
    bathroom: 4,
    plan: '/assets/currentproject/house1.jpg',
    brochure: '/assets/reports/brochure.pdf'
  },
  {
    id: 2,
    name: 'Residensi ZIG',
    slug: generateSlug('Residensi ZIG'),
    location: 'Greater Kuala Lumpur',
    place: 'ZIG House',
    housetype: '2 Storey Terrace',
    status: 'Current',
    price: 'RM 6000',
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
    area: '2,800 sqft',
    bedroom: 4,
    bathroom: 3,
    plan: '/assets/currentproject/house2.jpg',
    brochure: '/assets/reports/brochure.pdf'
  },
  {
    id: 3,
    name: 'The ZIG',
    slug: generateSlug('The ZIG'),
    location: 'Greater Kuala Lumpur',
    place: 'ZIG House',
    housetype: 'Double Storey',
    status: 'Current',
    price: 'RM 6000',
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
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.204467936385!2d102.33761262954054!3d3.482833823535699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceba19442459ed%3A0x6741cc23f71eada3!2sDynaton%20Casa%20Hill%2C%2028400%20Mentakab%2C%20Pahang!5e0!3m2!1sen!2smy!4v1733993061093!5m2!1sen!2smy&map_action=map&streetview=on',
    area: '3,300 sqft',
    bedroom: 4,
    bathroom: 4,
    plan: '/assets/currentproject/house1.jpg',
    brochure: '/assets/reports/brochure.pdf'
  },
  {
    id: 4,
    name: 'The Resident',
    slug: generateSlug('The Resident'),
    location: 'Greater Kuala Lumpur',
    place: 'ZIG House',
    housetype: '2 Storey Terrace',
    status: 'Current',
    price: 'RM 5000',
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
    area: '3,300 sqft',
    bedroom: 4,
    bathroom: 4,
    plan: '/assets/currentproject/house1.jpg',
    brochure: '/assets/reports/brochure.pdf'
  }
  ]
}
</script>
