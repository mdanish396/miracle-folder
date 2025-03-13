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
    image: '/assets/Development/Miracle Sentral/Shop Office/miracle_sentral_01.png',
    features: ['Low Investment, High Return (ROI) Up to 8%', 'Walking Distance to UiTM University Jengka', 'Located in the Centre of Jengka, the Fastest-Growing Economy in Pahang '],
    description: 'This modern two-storey shop office features a sleek, contemporary shopfront with large glass windows for optimal visibility. The second storey houses a spacious, professional office, designed with modern finishes and ample natural light. The design seamlessly blends retail and office spaces, creating a functional and aesthetic environment.',
    gallery: [
      '/assets/Development/Miracle Sentral/miracle_sentral_15.png',
      '/assets/Development/Miracle Sentral/miracle_sentral_04.jpeg',
      '/assets/Development/Miracle Sentral/miracle_sentral_11.jpg',
      '/assets/Development/Miracle Sentral/miracle_sentral_14.png',
      '/assets/Development/Miracle Sentral/miracle_sentral_16.jpg',
      '/assets/Development/Miracle Sentral/miracle_sentral_17.png',
      '/assets/Development/Miracle Sentral/miracle_sentral_18.jpg',
      '/assets/Development/Miracle Sentral/miracle_sentral_20.jpg',
      '/assets/Development/Miracle Sentral/miracle_sentral_21.png'
    ],
    area: '20 X 75 sqft',
    plan: '/assets/Development/Miracle Sentral/Floor Plan_Miracle Sentral.png',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.204467936385!2d102.33761262954054!3d3.482833823535699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceba19442459ed%3A0x6741cc23f71eada3!2sDynaton%20Casa%20Hill%2C%2028400%20Mentakab%2C%20Pahang!5e0!3m2!1sen!2smy!4v1733993061093!5m2!1sen!2smy&map_action=map&streetview=on'
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
    image: '/assets/Development/Miracle Sentral/miracle_sentral_02.png',
    features: ['Low Investment, High Return (ROI) Up to 8%', 'Walking Distance to UiTM University Jengka', 'Located in the Centre of Jengka, the Fastest-Growing Economy in Pahang'],
    description: 'This two-storey shop lot features an open frontage on both levels, offering excellent visibility for retail and F&B purposes. The layout is designed for flexibility, creating an inviting atmosphere across both storeys. With a public-facing presence on each floor, it enhances the flow of foot traffic and customer engagement.',
    gallery: [
      '/assets/Development/Miracle Sentral/miracle_sentral_15.png',
      '/assets/Development/Miracle Sentral/miracle_sentral_04.jpeg',
      '/assets/Development/Miracle Sentral/miracle_sentral_11.jpg',
      '/assets/Development/Miracle Sentral/miracle_sentral_14.png',
      '/assets/Development/Miracle Sentral/miracle_sentral_16.jpg',
      '/assets/Development/Miracle Sentral/miracle_sentral_17.png',
      '/assets/Development/Miracle Sentral/miracle_sentral_18.jpg',
      '/assets/Development/Miracle Sentral/miracle_sentral_20.jpg',
      '/assets/Development/Miracle Sentral/miracle_sentral_21.png'
    ],
    area: '15 X 60 sqft',
    plan: '/assets/Development/Miracle Sentral/Floor Plan_Miracle Sentral.png',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.204467936385!2d102.33761262954054!3d3.482833823535699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceba19442459ed%3A0x6741cc23f71eada3!2sDynaton%20Casa%20Hill%2C%2028400%20Mentakab%2C%20Pahang!5e0!3m2!1sen!2smy!4v1733993061093!5m2!1sen!2smy&map_action=map&streetview=on'
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
    features: ['Security for peace of mind', '2km Jogging Track', '+-15ft height floor level'],
    description: 'The privilege of ownership.',
    gallery: [
      '/assets/currentproject/house1.jpg',
      '/assets/currentproject/house2.jpg',
      '/assets/currentproject/house3.jpg',
      '/assets/award1.png',
      '/assets/award2.png',
      '/assets/career1.png'
    ],
    builtup: '55’x80’ (4003sqft) ',
    vr: 'https://momento360.com/e/u/9dc075c498c542bdbd38b11d8e5d7bca?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.4411082928295!2d102.33912939999999!3d3.4847702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceba1bc23fa6b7%3A0xfe72a6be37126111!2sDynaton%20Casa%20Hill!5e0!3m2!1sen!2smy!4v1737941338360!5m2!1sen!2smy',
    area: '4004 - 5769 sqft',
    bedroom: 4 + 2,
    bathroom: 5,
    plan: '/assets/Development/Casa Hill/plan-a.jpg',
    brochure: '/assets/reports/BILL GATES AND MICROSOFT.pdf'
  },
  {
    id: 2,
    name: 'Casa Hill Type B',
    slug: generateSlug('Casa Hill Type B'),
    location: 'Mentakab, Pahang',
    place: 'Casa Hill',
    housetype: '2-Storey Bungalow with Basement',
    status: 'New Launch',
    price: 'RM 1,749k* ',
    image: '/assets/Development/Casa Hill/type_b_01.jpg',
    features: ['Security for peace of mind', '2km Jogging Track', '+-15ft height floor level'],
    description: 'The privilege of ownership.',
    gallery: [
      '/assets/currentproject/house1.jpg',
      '/assets/currentproject/house2.jpg',
      '/assets/currentproject/house3.jpg',
      '/assets/award1.png',
      '/assets/award2.png',
      '/assets/career1.png'
    ],
    builtup: '55’ x 87’ (5923sqft)',
    vr: 'https://momento360.com/e/u/9dc075c498c542bdbd38b11d8e5d7bca?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.4411082928295!2d102.33912939999999!3d3.4847702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceba1bc23fa6b7%3A0xfe72a6be37126111!2sDynaton%20Casa%20Hill!5e0!3m2!1sen!2smy!4v1737941338360!5m2!1sen!2smy',
    area: '4,349 – 9,838 sqft ',
    bedroom: 5 + 2,
    bathroom: 7,
    plan: '/assets/currentproject/house3.jpg',
    brochure: '/assets/reports/BILL GATES AND MICROSOFT.pdf'
  },
  {
    id: 3,
    name: 'Casa Hill Type C',
    slug: generateSlug('Casa Hill Type C'),
    location: 'Mentakab, Pahang',
    place: 'Casa Hill',
    housetype: '2-Storey Bungalow',
    status: 'New Launch',
    price: 'RM 1,100k*',
    image: '/assets/Development/Casa Hill/type_c_01.JPG',
    features: ['Security for peace of mind', '2km Jogging Track', '+-15ft height floor level'],
    description: 'The privilege of ownership.',
    gallery: [
      '/assets/currentproject/house1.jpg',
      '/assets/currentproject/house2.jpg',
      '/assets/currentproject/house3.jpg',
      '/assets/award1.png',
      '/assets/award2.png',
      '/assets/career1.png'
    ],
    builtup: '50’x80’',
    vr: 'https://momento360.com/e/u/9dc075c498c542bdbd38b11d8e5d7bca?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.4411082928295!2d102.33912939999999!3d3.4847702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceba1bc23fa6b7%3A0xfe72a6be37126111!2sDynaton%20Casa%20Hill!5e0!3m2!1sen!2smy!4v1737941338360!5m2!1sen!2smy',
    area: '4,004 - 9,375 sqft',
    bedroom: 4 + 2,
    bathroom: 5,
    plan: '/assets/currentproject/house3.jpg',
    brochure: '/assets/reports/brochure.pdf'
  },
  {
    id: 4,
    name: 'Casa Hill Type C+',
    slug: generateSlug('Casa Hill Type C+'),
    location: 'Mentakab, Pahang',
    place: 'Casa Hill',
    housetype: '2-Storey Bungalow',
    status: 'New Launch',
    price: 'RM 1,817k*',
    image: '/assets/Development/Casa Hill/type_c_01.JPG',
    features: ['Security for peace of mind', '2km Jogging Track', '+-15ft height floor level'],
    description: 'The privilege of ownership.',
    gallery: [
      '/assets/currentproject/house1.jpg',
      '/assets/currentproject/house2.jpg',
      '/assets/currentproject/house3.jpg',
      '/assets/award1.png',
      '/assets/award2.png',
      '/assets/career1.png'
    ],
    builtup: '55’ x 87’',
    vr: 'https://momento360.com/e/u/9dc075c498c542bdbd38b11d8e5d7bca?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.4411082928295!2d102.33912939999999!3d3.4847702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceba1bc23fa6b7%3A0xfe72a6be37126111!2sDynaton%20Casa%20Hill!5e0!3m2!1sen!2smy!4v1737941338360!5m2!1sen!2smy',
    area: '4,000 - 9,375 sqft',
    bedroom: 4 + 2,
    bathroom: 5,
    plan: '/assets/currentproject/house3.jpg',
    brochure: '/assets/reports/brochure.pdf'
  }
  ]
}
</script>
