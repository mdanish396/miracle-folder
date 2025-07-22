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
    name: 'Shop Office',
    slug: generateSlug('Shop Office'),
    location: 'Jengka, Pahang',
    place: 'Miracle Sentral',
    housetype: '2-Storey Shop Office',
    status: 'New Launch',
    price: 'RM 865k*',
    image: '/assets/Development/Miracle Sentral/miracle_sentral_06.png',
    features: ['Low Investment, High Return (ROI) Up to 8%*', 'Walking Distance to UiTM University Jengka', 'Located in the Centre of Jengka, the Fastest-Growing Economy in Pahang '],
    description: 'This modern two-storey shop office features a sleek, contemporary shopfront with large glass windows for optimal visibility. The second storey houses a spacious, professional office, designed with modern finishes and ample natural light. The design seamlessly blends retail and office spaces, creating a functional and aesthetic environment.',
    gallery: [
      '/assets/Development/Miracle Sentral/miracle_sentral_07.png',
      '/assets/Development/Miracle Sentral/miracle_sentral_04.jpeg',
      '/assets/Development/Miracle Sentral/miracle_sentral_05.jpg',
      '/assets/Development/Miracle Sentral/miracle_sentral_06.png',
      '/assets/Development/Miracle Sentral/miracle_sentral_03.jpg',
      '/assets/Development/Miracle Sentral/miracle_sentral_11.png',
      '/assets/Development/Miracle Sentral/miracle_sentral_12.jpg',
      '/assets/Development/Miracle Sentral/miracle_sentral_09.jpg',
      '/assets/Development/Miracle Sentral/miracle_sentral_10.png'
    ],
    area: '20 X 75 sqft',
    plan: '/assets/Development/Miracle Sentral/Floor Plan_Miracle Sentral.png',
    map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3981.1899270081403!2d102.5470679!3d3.7688108!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31c931adceacfb6d%3A0x9141d767665ffa22!2sMiracle%20Sentral%20Sales%20Gallery%20%40%20Jengka!5e0!3m2!1sen!2smy!4v1741226657416!5m2!1sen!2smy'
  },
  {
    id: 2,
    name: 'Shop Lot',
    slug: generateSlug('Shop Lot'),
    location: 'Jengka, Pahang',
    place: 'Miracle Sentral',
    housetype: '2-Storey Shop Lot',
    status: 'New Launch',
    price: 'RM 699k*',
    image: '/assets/Development/Miracle Sentral/miracle_sentral_08.png',
    features: ['Low Investment, High Return (ROI) Up to 8%*', 'Walking Distance to UiTM University Jengka', 'Located in the Centre of Jengka, the Fastest-Growing Economy in Pahang'],
    description: 'This two-storey shop lot features an open frontage on both levels, offering excellent visibility for retail and F&B purposes. The layout is designed for flexibility, creating an inviting atmosphere across both storeys. With a public-facing presence on each floor, it enhances the flow of foot traffic and customer engagement.',
    gallery: [
      '/assets/Development/Miracle Sentral/miracle_sentral_07.png',
      '/assets/Development/Miracle Sentral/miracle_sentral_04.jpeg',
      '/assets/Development/Miracle Sentral/miracle_sentral_05.jpg',
      '/assets/Development/Miracle Sentral/miracle_sentral_06.png',
      '/assets/Development/Miracle Sentral/miracle_sentral_03.jpg',
      '/assets/Development/Miracle Sentral/miracle_sentral_11.png',
      '/assets/Development/Miracle Sentral/miracle_sentral_12.jpg',
      '/assets/Development/Miracle Sentral/miracle_sentral_09.jpg',
      '/assets/Development/Miracle Sentral/miracle_sentral_10.png'
    ],
    area: '15 X 60 sqft',
    plan: '/assets/Development/Miracle Sentral/Floor Plan_Miracle Sentral.png',
    map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3981.1899270081403!2d102.5470679!3d3.7688108!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31c931adceacfb6d%3A0x9141d767665ffa22!2sMiracle%20Sentral%20Sales%20Gallery%20%40%20Jengka!5e0!3m2!1sen!2smy!4v1741226657416!5m2!1sen!2smy'
  }
  ],
  'Casa Hill': [{
    id: 1,
    name: 'Casa Hill Type A',
    slug: generateSlug('Casa Hill Type A'),
    location: 'Mentakab, Pahang',
    place: 'Casa Hill',
    housetype: '2-Storey Bungalow',
    status: 'New Launch',
    price: 'RM 1,063k*',
    image: '/assets/Development/Casa Hill/type_a_01.jpg',
    features: ['Luxury Contemporary Villa Design', 'Large and Spacious Interiors', 'Exclusive Access to Clubhouse'],
    description: `Luxurious modern bungalows in a low-density, gated community, just 2 minutes
      from town. Enjoy impressive facilities, lush gardens, and top-tier security for
      ultimate comfort and privacy. Strategically located next to Mentakab Station, with
      ECRL access and future commercial developments at your doorstep. `,
    gallery: [
      '/assets/Development/Casa Hill/casa_hill_13.png',
      '/assets/Development/Casa Hill/casa_hill_14.jpg',
      '/assets/Development/Casa Hill/casa_hill_15.jpg',
      '/assets/Development/Casa Hill/casa_hill_16.jpg',
      '/assets/Development/Casa Hill/casa_hill_17.jpg',
      '/assets/Development/Casa Hill/type_a_01.jpg',
      '/assets/Development/Casa Hill/casa_hill_12.png',
      '/assets/Development/Casa Hill/casa_hill_08.jpg',
      '/assets/Development/Casa Hill/casa_hill_06.JPG',
      '/assets/Development/Casa Hill/casa_hill_04.jpg',
      '/assets/Development/Casa Hill/casa_hill_05.JPG',
      '/assets/Development/Casa Hill/casa_hill_07.jpg'
    ],
    builtup: '55’x80’ (4003sqft) ',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.4411082928295!2d102.33912939999999!3d3.4847702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceba1bc23fa6b7%3A0xfe72a6be37126111!2sDynaton%20Casa%20Hill!5e0!3m2!1sen!2smy!4v1737941338360!5m2!1sen!2smy',
    area: '55’x80’',
    bedroom: 4 + 2, // 4004 - 5769 sqft
    bathroom: 5,
    plan: '/assets/Development/Casa Hill/plan-a.jpg',
    brochure: ''
  },
  {
    id: 2,
    name: 'Casa Hill Type B',
    slug: generateSlug('Casa Hill Type B'),
    location: 'Mentakab, Pahang',
    place: 'Casa Hill',
    housetype: '2-Storey Bungalow with Basement',
    status: 'New Launch',
    price: 'RM 1,945k* ',
    image: '/assets/Development/Casa Hill/type_b_01.jpg',
    features: ['Luxury Contemporary Villa Design', 'Backlane Garden at Your Doorstep', 'Exclusive Access to Clubhouse'],
    description: `Luxurious modern bungalows in a low-density, gated community, just 2 minutes
      from town. Enjoy impressive facilities, lush gardens, and top-tier security for
      ultimate comfort and privacy. Strategically located next to Mentakab Station, with
      ECRL access and future commercial developments at your doorstep. `,
    gallery: [
      '/assets/Development/Casa Hill/casa_hill_13.png',
      '/assets/Development/Casa Hill/casa_hill_14.jpg',
      '/assets/Development/Casa Hill/casa_hill_15.jpg',
      '/assets/Development/Casa Hill/casa_hill_16.jpg',
      '/assets/Development/Casa Hill/casa_hill_17.jpg',
      '/assets/Development/Casa Hill/type_b_01.jpg',
      '/assets/Development/Casa Hill/casa_hill_12.png',
      '/assets/Development/Casa Hill/casa_hill_08.jpg',
      '/assets/Development/Casa Hill/casa_hill_06.JPG',
      '/assets/Development/Casa Hill/casa_hill_04.jpg',
      '/assets/Development/Casa Hill/casa_hill_05.JPG',
      '/assets/Development/Casa Hill/casa_hill_07.jpg'
    ],
    builtup: '55’ x 87’',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.4411082928295!2d102.33912939999999!3d3.4847702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceba1bc23fa6b7%3A0xfe72a6be37126111!2sDynaton%20Casa%20Hill!5e0!3m2!1sen!2smy!4v1737941338360!5m2!1sen!2smy',
    area: '55’ x 87’', // 4349 – 9838 sqft
    bedroom: 5 + 2,
    bathroom: 7,
    plan: '/assets/Development/Casa Hill/plan-b.png'
  },
  {
    id: 3,
    name: 'Casa Hill Type C/C+',
    slug: generateSlug('Casa Hill Type C/C+'),
    location: 'Mentakab, Pahang',
    place: 'Casa Hill',
    housetype: '2-Storey Bungalow',
    status: 'New Launch',
    price: 'RM 1,100k*',
    image: '/assets/Development/Casa Hill/type_c_01.jpg',
    features: ['Luxury Contemporary Villa Design', 'Large and Spacious Interiors', 'Exclusive Access to Clubhouse'],
    description: `Luxurious modern bungalows in a low-density, gated community, just 2 minutes
    from town. Enjoy impressive facilities, lush gardens, and top-tier security for
    ultimate comfort and privacy. Strategically located next to Mentakab Station, with
    ECRL access and future commercial developments at your doorstep. `,
    gallery: [
      '/assets/Development/Casa Hill/casa_hill_13.png',
      '/assets/Development/Casa Hill/casa_hill_14.jpg',
      '/assets/Development/Casa Hill/casa_hill_15.jpg',
      '/assets/Development/Casa Hill/casa_hill_16.jpg',
      '/assets/Development/Casa Hill/casa_hill_17.jpg',
      '/assets/Development/Casa Hill/type_c_01.jpg',
      '/assets/Development/Casa Hill/casa_hill_12.png',
      '/assets/Development/Casa Hill/casa_hill_08.jpg',
      '/assets/Development/Casa Hill/casa_hill_06.JPG',
      '/assets/Development/Casa Hill/casa_hill_04.jpg',
      '/assets/Development/Casa Hill/casa_hill_05.JPG',
      '/assets/Development/Casa Hill/casa_hill_07.jpg'
    ],
    builtup: '50’/55’ x 80’/87’',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.4411082928295!2d102.33912939999999!3d3.4847702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceba1bc23fa6b7%3A0xfe72a6be37126111!2sDynaton%20Casa%20Hill!5e0!3m2!1sen!2smy!4v1737941338360!5m2!1sen!2smy',
    area: '50’/55’ x 80’/87’', // 4,004 - 9,375 sqft
    bedroom: 4 + 2,
    bathroom: 5,
    plan: '/assets/Development/Casa Hill/plan-c.png'
  }
  ]
}
</script>
