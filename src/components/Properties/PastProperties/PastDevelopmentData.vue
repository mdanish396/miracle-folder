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

export const pastdevelopments = [
  {
    id: 1,
    name: 'Dynaton Bukit Angin',
    slug: generateSlug('Dynaton Bukit Angin'),
    bannerimage: 'src/assets/Development/Dynaton Bukit Angin/bukit_angin_05.jpg',
    logo: 'src/assets/Development/Dynaton Bukit Angin/logo.svg',
    location: 'Temerloh, Pahang',
    districts: 'Temerloh',
    state: 'Pahang',
    type: 'Commercial',
    housetype: '2-Storey Terrace & Semi-D',
    status: 'Completed',
    image: 'src/assets/Development/Dynaton Bukit Angin/bukit_angin_01.jpg',
    features: ['Exclusive Amenities', 'Spacious Homes', 'Green Spaces'],
    shortdescription: 'Wow',
    description: `The Camellia, your home at Wetlands Estates, the
      private enclave in Gamuda Cove.`,
    size: '800 acres',
    statusbuyer: 'Completed & 100% Sold',
    fulldescription: `Miracle Gardens is an 810-acre township
      fusing lifestyle and nature, featuring rolling hills and
      five cascading lakes leading to the 50-acre, pet-friendly Central Park.
      The township includes a Waterfront Village offering a walkable retail
      experience with various F&B options. Nearby the township, Gamuda Luge Gardens
      hosts a mix of commercial and leisure spaces, including retail shops, FunPark
      family-friendly park, Big Bucket Splash waterplay and Skyline Luge Kuala Lumpur.
      This development is designed to be a vibrant hub that brings the community together.`,
    builtup: '2,110 - 2,497 sqft',
    lotsize: '26` x 76`',
    gallerydevelopment: [
      {
        url: 'src/assets/Development/Dynaton Bukit Angin/bukit_angin_03.jpg',
        description: 'Living in Harmony with Nature'
      },
      {
        url: 'src/assets/Development/Dynaton Bukit Angin/bukit_angin_06.png',
        description: 'Doorstep Lifestyle and Retail Convenience'
      },
      {
        url: 'src/assets/Development/Dynaton Bukit Angin/bukit_angin_02.jpg',
        description: 'Exciting Placemaking Experience'
      }
    ],
    galleryImages: [
      'src/assets/Development/Dynaton Bukit Angin/bukit_angin_01.jpg',
      'src/assets/Development/Dynaton Bukit Angin/bukit_angin_06.png',
      'src/assets/Development/Dynaton Bukit Angin/bukit_angin_05.jpg',
      'src/assets/Development/Dynaton Bukit Angin/bukit_angin_07.jpg',
      'src/assets/Development/Dynaton Bukit Angin/bukit_angin_03.jpg',
      'src/assets/Development/Dynaton Bukit Angin/bukit_angin_02.jpg',
      'src/assets/Development/Dynaton Bukit Angin/bukit_angin_08.png'
    ],
    map: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3982.6261178882855!2d102.41706707438674!3d3.4407829965336987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMjYnMjYuOCJOIDEwMsKwMjUnMTAuNyJF!5e0!3m2!1sen!2smy!4v1737527338884!5m2!1sen!2smy',
    link: '/past-development/'
  },
  {
    id: 2,
    name: 'Kawasan Industri Seberang Temerloh',
    slug: generateSlug('Kawasan Industri Seberang Temerloh'),
    bannerimage: 'src/assets/Development/Kawasan Industri Seberang Temerloh/industri_seberang_temerloh_02.jpg',
    logo: 'src/assets/Development/Kawasan Industri Seberang Temerloh/logo.svg',
    location: 'Seberang Temerloh, Pahang',
    districts: 'Temerloh',
    state: 'Pahang',
    type: 'Light Industrial',
    housetype: '2-Storey Terrace & Semi-D',
    status: 'Completed',
    image: 'src/assets/Development/Kawasan Industri Seberang Temerloh/industri_seberang_temerloh_02.jpg',
    features: ['Exclusive Amenities', 'Spacious Homes', 'Green Spaces'],
    shortdescription: 'Wow',
    description: `The Camellia, your home at Wetlands Estates, the
      private enclave in Gamuda Cove.`,
    size: '800 acres',
    statusbuyer: 'Completed & 100% Sold',
    fulldescription: `Miracle Gardens is an 810-acre township
      fusing lifestyle and nature, featuring rolling hills and
      five cascading lakes leading to the 50-acre, pet-friendly Central Park.
      The township includes a Waterfront Village offering a walkable retail
      experience with various F&B options. Nearby the township, Gamuda Luge Gardens
      hosts a mix of commercial and leisure spaces, including retail shops, FunPark
      family-friendly park, Big Bucket Splash waterplay and Skyline Luge Kuala Lumpur.
      This development is designed to be a vibrant hub that brings the community together.`,
    builtup: '2,110 - 2,497 sqft',
    lotsize: '26` x 76`',
    gallerydevelopment: [
      {
        url: 'src/assets/Development/Kawasan Industri Seberang Temerloh/industri_seberang_temerloh_02.jpg',
        description: 'Living in Harmony with Nature'
      },
      {
        url: 'src/assets/Development/Kawasan Industri Seberang Temerloh/industri_seberang_temerloh_01.jpg',
        description: 'Doorstep Lifestyle and Retail Convenience'
      }
    ],
    galleryImages: [
      'src/assets/Development/Kawasan Industri Seberang Temerloh/industri_seberang_temerloh_02.jpg',
      'src/assets/Development/Kawasan Industri Seberang Temerloh/industri_seberang_temerloh_01.jpg',
      'src/assets/Development/Kawasan Industri Seberang Temerloh/industri_seberang_temerloh_04.png',
      'src/assets/Development/Kawasan Industri Seberang Temerloh/industri_seberang_temerloh_03.png'
    ],
    map: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3982.6055546065654!2d102.43473067434896!3d3.4456997512594376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMjYnNDQuNSJOIDEwMsKwMjYnMTQuMyJF!5e0!3m2!1sen!2smy!4v1737444592915!5m2!1sen!2smy',
    link: '/past-development/'
  },
  {
    id: 3,
    name: 'Pusat Perniagaan Chengal',
    slug: generateSlug('Pusat Perniagaan Chengal'),
    bannerimage: 'src/assets/Development/Pusat Perniagaan Chengal/pusat_perniagaan_chengal-01.jpg',
    logo: 'src/assets/Development/Pusat Perniagaan Chengal/logo.svg',
    location: 'Jalan Temerloh-Mentakab, Pahang',
    districts: 'Temerloh',
    state: 'Pahang',
    type: 'Commercial',
    housetype: 'Bungalow',
    status: 'Completed',
    image: 'src/assets/Development/Pusat Perniagaan Chengal/pusat_perniagaan_chengal-01.jpg',
    features: ['Luxury Living', 'Green Spaces'],
    shortdescription: 'Wow',
    description: `The Camellia, your home at Wetlands Estates, the
      private enclave in Gamuda Cove.`,
    size: '800 acres',
    statusbuyer: 'Completed & 100% Sold',
    fulldescription: `Miracle Gardens is an 810-acre township
      fusing lifestyle and nature, featuring rolling hills and
      five cascading lakes leading to the 50-acre, pet-friendly Central Park.
      The township includes a Waterfront Village offering a walkable retail
      experience with various F&B options. Nearby the township, Gamuda Luge Gardens
      hosts a mix of commercial and leisure spaces, including retail shops, FunPark
      family-friendly park, Big Bucket Splash waterplay and Skyline Luge Kuala Lumpur.
      This development is designed to be a vibrant hub that brings the community together.`,
    builtup: '2,450 - 3,497 sqft',
    lotsize: '36` x 86`',
    gallerydevelopment: [
      {
        url: 'src/assets/Development/Pusat Perniagaan Chengal/pusat_perniagaan_chengal-01.jpg',
        description: 'Living in Harmony with Nature'
      },
      {
        url: 'src/assets/Development/Pusat Perniagaan Chengal/pusat_perniagaan_chengal-02.jpg',
        description: 'Doorstep Lifestyle and Retail Convenience'
      },
      {
        url: 'src/assets/Development/Pusat Perniagaan Chengal/pusat_perniagaan_chengal-03.jpg',
        description: 'Exciting Placemaking Experience'
      }
    ],
    galleryImages: [
      'src/assets/Development/Pusat Perniagaan Chengal/pusat_perniagaan_chengal-01.jpg',
      'src/assets/Development/Pusat Perniagaan Chengal/pusat_perniagaan_chengal-02.jpg',
      'src/assets/Development/Pusat Perniagaan Chengal/pusat_perniagaan_chengal-03.jpg',
      'src/assets/Development/Pusat Perniagaan Chengal/pusat_perniagaan_chengal-04.jpg'
    ],
    map: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3982.5456970083414!2d102.3982028744327!3d3.459972196514456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMjcnMzUuOSJOIDEwMsKwMjQnMDIuOCJF!5e0!3m2!1sen!2smy!4v1737442338896!5m2!1sen!2smy',
    link: '/past-development/'
  },
  {
    id: 4,
    name: 'Pusat Perniagaan Chengal 1',
    slug: generateSlug('Pusat Perniagaan Chengal 1'),
    bannerimage: 'src/assets/Development/Pusat Perniagaan Chengal 1/perniagaan_chengal_02.jpg',
    logo: 'src/assets/Development/Pusat Perniagaan Chengal 1/logo.svg',
    location: 'Jalan Temerloh-Mentakab, Pahang',
    districts: 'Temerloh',
    state: 'Pahang',
    type: 'Commercial',
    housetype: '2 Storey Terrace',
    status: 'Completed',
    image: 'src/assets/Development/Pusat Perniagaan Chengal 1/perniagaan_chengal_02.jpg',
    features: ['Luxury Living', 'Lakeside'],
    shortdescription: 'Wow',
    description: `The Camellia, your home at Wetlands Estates, the
      private enclave in Gamuda Cove.`,
    size: '800 acres',
    statusbuyer: 'Completed & 100% Sold',
    fulldescription: `Miracle Gardens is an 810-acre township
      fusing lifestyle and nature, featuring rolling hills and
      five cascading lakes leading to the 50-acre, pet-friendly Central Park.
      The township includes a Waterfront Village offering a walkable retail
      experience with various F&B options. Nearby the township, Gamuda Luge Gardens
      hosts a mix of commercial and leisure spaces, including retail shops, FunPark
      family-friendly park, Big Bucket Splash waterplay and Skyline Luge Kuala Lumpur.
      This development is designed to be a vibrant hub that brings the community together.`,
    builtup: '2,150 - 2,497 sqft',
    lotsize: '37` x 77`',
    gallerydevelopment: [
      {
        url: 'src/assets/Development/Pusat Perniagaan Chengal 1/perniagaan_chengal_02.jpg',
        description: 'Living in Harmony with Nature'
      },
      {
        url: 'src/assets/Development/Pusat Perniagaan Chengal 1/perniagaan_chengal_01.jpg',
        description: 'Doorstep Lifestyle and Retail Convenience'
      }
    ],
    galleryImages: [
      'src/assets/Development/Pusat Perniagaan Chengal 1/perniagaan_chengal_02.jpg',
      'src/assets/Development/Pusat Perniagaan Chengal 1/perniagaan_chengal_01.jpg',
      'src/assets/Development/Pusat Perniagaan Chengal 1/perniagaan_chengal_02.jpg',
      'src/assets/Development/Pusat Perniagaan Chengal 1/perniagaan_chengal_01.jpg'
    ],
    map: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3982.5456970083414!2d102.3982028744327!3d3.459972196514456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMjcnMzUuOSJOIDEwMsKwMjQnMDIuOCJF!5e0!3m2!1sen!2smy!4v1737442338896!5m2!1sen!2smy',
    link: '/past-development/'
  },
  {
    id: 5,
    name: 'Bahagia Court Phase I',
    slug: generateSlug('Bahagia Court Phase I'),
    bannerimage: 'src/assets/Development/Bahagia Court Phase I/bahagia_court_01.jpg',
    logo: 'src/assets/Development/Bahagia Court Phase I/logo.svg',
    location: 'Temerloh, Pahang',
    districts: 'Temerloh',
    state: 'Pahang',
    type: 'Residential',
    housetype: '2 Storey Terrace',
    status: 'Completed',
    image: 'src/assets/Development/Bahagia Court Phase I/bahagia_court_01.jpg',
    features: ['Luxury Living', 'Lakeside'],
    shortdescription: 'Wow',
    description: `The Camellia, your home at Wetlands Estates, the
      private enclave in Gamuda Cove.`,
    size: '800 acres',
    statusbuyer: 'Completed & 100% Sold',
    fulldescription: `Miracle Gardens is an 810-acre township
      fusing lifestyle and nature, featuring rolling hills and
      five cascading lakes leading to the 50-acre, pet-friendly Central Park.
      The township includes a Waterfront Village offering a walkable retail
      experience with various F&B options. Nearby the township, Gamuda Luge Gardens
      hosts a mix of commercial and leisure spaces, including retail shops, FunPark
      family-friendly park, Big Bucket Splash waterplay and Skyline Luge Kuala Lumpur.
      This development is designed to be a vibrant hub that brings the community together.`,
    builtup: '2,150 - 2,497 sqft',
    lotsize: '37` x 77`',
    gallerydevelopment: [
      {
        url: 'src/assets/Development/Bahagia Court Phase I/bahagia_court_02.jpg',
        description: 'Living in Harmony with Nature'
      },
      {
        url: 'src/assets/Development/Bahagia Court Phase I/bahagia_court_03.jpg',
        description: 'Doorstep Lifestyle and Retail Convenience'
      },
      {
        url: 'src/assets/Development/Bahagia Court Phase I/bahagia_court_04.jpg',
        description: 'Doorstep Lifestyle and Retail Convenience'
      }
    ],
    galleryImages: [
      'src/assets/Development/Bahagia Court Phase I/bahagia_court_02.jpg',
      'src/assets/Development/Bahagia Court Phase I/bahagia_court_01.jpg',
      'src/assets/Development/Bahagia Court Phase I/bahagia_court_03.jpg',
      'src/assets/Development/Bahagia Court Phase I/bahagia_court_04.jpg',
      'src/assets/Development/Bahagia Court Phase I/bahagia_court_05.jpg',
      'src/assets/Development/Bahagia Court Phase I/bahagia_court_06.jpg',
      'src/assets/Development/Bahagia Court Phase I/bahagia_court_07.jpg'
    ],
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.578423085414!2d102.39521847181368!3d3.4521762935532694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceb8fbb8de9561%3A0x3d6080ee0611fff!2sTaman%20Bahagia%20Court%2C%2028000%20Temerloh%2C%20Pahang!5e0!3m2!1sen!2smy!4v1737105965030!5m2!1sen!2smy',
    link: '/past-development/'
  },
  {
    id: 6,
    name: 'Bahagia Court Phase II',
    slug: generateSlug('Bahagia Court Phase II'),
    bannerimage: 'src/assets/Development/Bahagia Court Phase II/bahagia_court_II_01.jpg',
    logo: 'src/assets/Development/Bahagia Court Phase II/logo.svg',
    location: 'Temerloh, Pahang',
    type: 'Residential',
    housetype: '2 Storey Terrace',
    status: 'Completed',
    image: 'src/assets/Development/Bahagia Court Phase II/bahagia_court_II_01.jpg',
    features: ['Luxury Living', 'Lakeside'],
    shortdescription: 'Wow',
    description: `The Camellia, your home at Wetlands Estates, the
      private enclave in Gamuda Cove.`,
    size: '800 acres',
    statusbuyer: 'Completed & 100% Sold',
    fulldescription: `Miracle Gardens is an 810-acre township
      fusing lifestyle and nature, featuring rolling hills and
      five cascading lakes leading to the 50-acre, pet-friendly Central Park.
      The township includes a Waterfront Village offering a walkable retail
      experience with various F&B options. Nearby the township, Gamuda Luge Gardens
      hosts a mix of commercial and leisure spaces, including retail shops, FunPark
      family-friendly park, Big Bucket Splash waterplay and Skyline Luge Kuala Lumpur.
      This development is designed to be a vibrant hub that brings the community together.`,
    builtup: '2,150 - 2,497 sqft',
    lotsize: '37` x 77`',
    gallerydevelopment: [
      {
        url: 'src/assets/Development/Bahagia Court Phase II/bahagia_court_II_02.jpg',
        description: 'Living in Harmony with Nature'
      },
      {
        url: 'src/assets/Development/Bahagia Court Phase II/bahagia_court_II_01.jpg',
        description: 'Doorstep Lifestyle and Retail Convenience'
      },
      {
        url: 'src/assets/Development/Bahagia Court Phase II/bahagia_court_II_03.jpg',
        description: 'Doorstep Lifestyle and Retail Convenience'
      }
    ],
    galleryImages: [
      'src/assets/Development/Bahagia Court Phase II/bahagia_court_II_01.jpg',
      'src/assets/Development/Bahagia Court Phase II/bahagia_court_II_02.jpg',
      'src/assets/Development/Bahagia Court Phase II/bahagia_court_II_03.jpg',
      'src/assets/Development/Bahagia Court Phase II/bahagia_court_II_01.jpg'
    ],
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.578423085414!2d102.39521847181368!3d3.4521762935532694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceb8fbb8de9561%3A0x3d6080ee0611fff!2sTaman%20Bahagia%20Court%2C%2028000%20Temerloh%2C%20Pahang!5e0!3m2!1sen!2smy!4v1737105965030!5m2!1sen!2smy',
    link: '/past-development/'
  },
  {
    id: 7,
    name: 'Bahagia Court Phase III',
    slug: generateSlug('Bahagia Court Phase III'),
    bannerimage: 'src/assets/Development/Bahagia Court Phase III/bahagia_court_III_01.jpg',
    logo: 'src/assets/Development/Bahagia Court Phase III/logo.svg',
    location: 'Temerloh, Pahang',
    type: 'Residential',
    housetype: '2 Storey Terrace',
    status: 'Completed',
    image: 'src/assets/Development/Bahagia Court Phase III/bahagia_court_III_01.jpg',
    features: ['Luxury Living', 'Lakeside'],
    shortdescription: 'Wow',
    description: `The Camellia, your home at Wetlands Estates, the
      private enclave in Gamuda Cove.`,
    size: '800 acres',
    statusbuyer: 'Completed & 100% Sold',
    fulldescription: `Miracle Gardens is an 810-acre township
      fusing lifestyle and nature, featuring rolling hills and
      five cascading lakes leading to the 50-acre, pet-friendly Central Park.
      The township includes a Waterfront Village offering a walkable retail
      experience with various F&B options. Nearby the township, Gamuda Luge Gardens
      hosts a mix of commercial and leisure spaces, including retail shops, FunPark
      family-friendly park, Big Bucket Splash waterplay and Skyline Luge Kuala Lumpur.
      This development is designed to be a vibrant hub that brings the community together.`,
    builtup: '2,150 - 2,497 sqft',
    lotsize: '37` x 77`',
    gallerydevelopment: [
      {
        url: 'src/assets/Development/Bahagia Court Phase III/bahagia_court_III_02.jpg',
        description: 'Living in Harmony with Nature'
      },
      {
        url: 'src/assets/Development/Bahagia Court Phase III/bahagia_court_III_01.jpg',
        description: 'Doorstep Lifestyle and Retail Convenience'
      },
      {
        url: 'src/assets/Development/Bahagia Court Phase III/bahagia_court_III_03.jpg',
        description: 'Doorstep Lifestyle and Retail Convenience'
      }
    ],
    galleryImages: [
      'src/assets/Development/Bahagia Court Phase III/bahagia_court_III_01.jpg',
      'src/assets/Development/Bahagia Court Phase III/bahagia_court_III_02.jpg',
      'src/assets/Development/Bahagia Court Phase III/bahagia_court_III_03.jpg',
      'src/assets/Development/Bahagia Court Phase III/bahagia_court_III_01.jpg'
    ],
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.578423085414!2d102.39521847181368!3d3.4521762935532694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceb8fbb8de9561%3A0x3d6080ee0611fff!2sTaman%20Bahagia%20Court%2C%2028000%20Temerloh%2C%20Pahang!5e0!3m2!1sen!2smy!4v1737105965030!5m2!1sen!2smy',
    link: '/past-development/'
  },
  {
    id: 8,
    name: 'Dynaton Saujana',
    slug: generateSlug('Dynaton Saujana'),
    bannerimage: 'src/assets/Development/Dynaton Saujana/saujana-01.jpg',
    logo: 'src/assets/Development/Dynaton Saujana/logo.svg',
    location: 'Temerloh, Pahang',
    type: 'Residential',
    housetype: '2 Storey Terrace',
    status: 'Completed',
    image: 'src/assets/Development/Dynaton Saujana/saujana-01.jpg',
    features: ['Luxury Living', 'Lakeside'],
    shortdescription: 'Wow',
    description: `The Camellia, your home at Wetlands Estates, the
      private enclave in Gamuda Cove.`,
    size: '800 acres',
    statusbuyer: 'Completed & 100% Sold',
    fulldescription: `Miracle Gardens is an 810-acre township
      fusing lifestyle and nature, featuring rolling hills and
      five cascading lakes leading to the 50-acre, pet-friendly Central Park.
      The township includes a Waterfront Village offering a walkable retail
      experience with various F&B options. Nearby the township, Gamuda Luge Gardens
      hosts a mix of commercial and leisure spaces, including retail shops, FunPark
      family-friendly park, Big Bucket Splash waterplay and Skyline Luge Kuala Lumpur.
      This development is designed to be a vibrant hub that brings the community together.`,
    builtup: '2,150 - 2,497 sqft',
    lotsize: '37` x 77`',
    gallerydevelopment: [
      {
        url: 'src/assets/Development/Dynaton Saujana/saujana-02.jpg',
        description: 'Living in Harmony with Nature'
      },
      {
        url: 'src/assets/Development/Dynaton Saujana/saujana-01.jpg',
        description: 'Doorstep Lifestyle and Retail Convenience'
      },
      {
        url: 'src/assets/Development/Dynaton Saujana/saujana-03.jpg',
        description: 'Doorstep Lifestyle and Retail Convenience'
      }
    ],
    galleryImages: [
      'src/assets/Development/Dynaton Saujana/saujana-01.jpg',
      'src/assets/Development/Dynaton Saujana/saujana-02.jpg',
      'src/assets/Development/Dynaton Saujana/saujana-03.jpg',
      'src/assets/Development/Dynaton Saujana/saujana-04.jpg'
    ],
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.601475485016!2d102.43581197434898!3d3.4466742512529733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cec7629fc9cc9d%3A0xc610816d3c5ccb7f!2sDynaton%20Saujana!5e0!3m2!1sen!2smy!4v1737107355061!5m2!1sen!2smy',
    link: '/past-development/'
  },
  {
    id: 9,
    name: 'Dynaton Izona (Phase 1, 2, 3, 3b)',
    slug: generateSlug('Dynaton Izona'),
    bannerimage: 'src/assets/Development/Dynaton Izona/izona_01.jpg',
    logo: 'src/assets/Development/Dynaton Izona/logo.svg',
    location: 'Mentakab, Pahang',
    type: 'Residential',
    housetype: '2 Storey Terrace',
    status: 'Completed',
    image: 'src/assets/Development/Dynaton Izona/izona_05.jpg',
    features: ['Luxury Living', 'Lakeside'],
    shortdescription: 'Wow',
    description: `The Camellia, your home at Wetlands Estates, the
      private enclave in Gamuda Cove.`,
    size: '800 acres',
    statusbuyer: 'Completed & 100% Sold',
    fulldescription: `Miracle Gardens is an 810-acre township
      fusing lifestyle and nature, featuring rolling hills and
      five cascading lakes leading to the 50-acre, pet-friendly Central Park.
      The township includes a Waterfront Village offering a walkable retail
      experience with various F&B options. Nearby the township, Gamuda Luge Gardens
      hosts a mix of commercial and leisure spaces, including retail shops, FunPark
      family-friendly park, Big Bucket Splash waterplay and Skyline Luge Kuala Lumpur.
      This development is designed to be a vibrant hub that brings the community together.`,
    builtup: '2,150 - 2,497 sqft',
    lotsize: '37` x 77`',
    gallerydevelopment: [
      {
        url: 'src/assets/Development/Dynaton Izona/izona_02.jpg',
        description: 'Living in Harmony with Nature'
      },
      {
        url: 'src/assets/Development/Dynaton Izona/izona_01.jpg',
        description: 'Doorstep Lifestyle and Retail Convenience'
      },
      {
        url: 'src/assets/Development/Dynaton Izona/izona_03.jpg',
        description: 'Doorstep Lifestyle and Retail Convenience'
      }
    ],
    galleryImages: [
      'src/assets/Development/Dynaton Izona/izona_03.jpg',
      'src/assets/Development/Dynaton Izona/izona_05.jpg',
      'src/assets/Development/Dynaton Izona/izona_01.jpg',
      'src/assets/Development/Dynaton Izona/izona_02.jpg',
      'src/assets/Development/Dynaton Izona/izona_04.jpg',
      'src/assets/Development/Dynaton Izona/izona_06.jpg',
      'src/assets/Development/Dynaton Izona/izona_07.png',
      'src/assets/Development/Dynaton Izona/izona_08.png',
      'src/assets/Development/Dynaton Izona/izona_09.png',
      'src/assets/Development/Dynaton Izona/izona_10.png',
      'src/assets/Development/Dynaton Izona/izona_11.png',
      'src/assets/Development/Dynaton Izona/izona_12.png'
    ],
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.499702082894!2d102.34209920000002!3d3.4708994000000093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceba2661292e8b%3A0x6ea02658ed412efe!2sDynaton%20Izona!5e0!3m2!1sen!2smy!4v1737339786730!5m2!1sen!2smy',
    link: '/past-development/'
  }
]

</script>
