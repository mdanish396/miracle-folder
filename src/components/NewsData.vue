<template>
  <div>
    <!-- this component only hold news data -->
  </div>
</template>

<script>
import { ref } from 'vue'

function generateSlug (title) {
  return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
}

export const newsItems = ref([
  {
    id: 1,
    title: 'New Project Launch',
    slug: generateSlug('new-project-launch'),
    day: '26',
    month: 'Jan',
    year: '2024',
    imagetitle: 'src/assets/career3.jpg',
    descriptionimagetitle: 'Highlighting the latest innovations in real estate development.',
    images: ['', // first paragraph got no image
      { //  second has image
        url: 'src/assets/career3.jpg',
        description: 'Highlighting the latest innovations in real estate development.'
      },
      '', // third paragraph got no image
      { // fourth has image
        url: 'src/assets/career1.png'
      }
    ],
    content: [
      'MIDF Amanah Investment Bank Bhd (MIDF Research) has maintained a NEUTRAL call for IOI Properties Group Bhd...',
      'IOI Properties’ earnings for the quarter showed a sequential increase of 216% to RM74.7 million...',
      'Moving forward, IOI Properties’ new sales momentum is expected to be supported by upcoming project launches...',
      'Moving forward, IOI Properties’ new sales momentum is expected to be supported by upcoming project launches...',
      'Moving forward, IOI Properties’ new sales momentum is expected to be supported by upcoming project launches...',
      'Moving forward, IOI Properties’ new sales momentum is expected to be supported by upcoming project launches...'
    ],
    source: 'The Star',
    link: '/news-details/'
  },
  {
    id: 2,
    title: 'Company Partnership Announcement',
    slug: generateSlug('company-partnership-announcement'),
    day: '27',
    month: 'Jan',
    year: '2025',
    content: [
      'Our company is excited to announce a strategic partnership with XYZ Corporation to revolutionize the real estate market.',
      'This partnership will allow us to introduce cutting-edge solutions and expand our market reach...',
      'Stay tuned for more updates on this exciting collaboration!'
    ],
    images: ['', // there are no image in first paragraph. Need to add this '' before each paragraph that has no image
      { // this image is in second pragraph
        url: 'src/assets/career2.png',
        description: 'Highlighting the latest innovations in real estate development.'
      }],
    source: 'The Star',
    link: '/news-details/'
  },
  {
    id: 3,
    title: 'Exciting Innovation in Real Estate',
    slug: generateSlug('exciting-innovation-in-real-estate'),
    day: '01',
    month: 'Feb',
    year: '2024',
    imagetitle: 'src/assets/career1.png',
    content: [
      `Discover how our latest innovations are reshaping the real estate industry.
      Learn more about our journey to transform the future of property development.
      Our team has been working tirelessly to create sustainable and smart housing solutions...`,
      `Discover how our latest innovations are reshaping the real estate industry.
      Learn more about our journey to transform the future of property development.
      Our team has been working tirelessly to create sustainable and smart housing solutions...`,
      `Learn more about our journey to transform the future of property development.
      Discover how our latest innovations are reshaping the real estate industry.
      Our team has been working tirelessly to create sustainable and smart housing solutions...,
      Discover how our latest innovations are reshaping the real estate industry.
      Learn more about our journey to transform the future of property development.
      Our team has been working tirelessly to create sustainable and smart housing solutions...`
    ],
    source: 'The Star',
    link: '/news-details/'
  },
  {
    id: 4,
    title: 'Exciting Advancement in Craft',
    slug: generateSlug('exciting-advancement-in-craft'),
    day: '03',
    month: 'May',
    year: '2024',
    content: [
      `Discover how our latest innovations are reshaping the real estate industry.
      Learn more about our journey to transform the future of property development.
      Our team has been working tirelessly to create sustainable and smart housing solutions...`,
      `Discover how our latest innovations are reshaping the real estate industry.
      Learn more about our journey to transform the future of property development.
      Our team has been working tirelessly to create sustainable and smart housing solutions...`,
      `Learn more about our journey to transform the future of property development.
      Discover how our latest innovations are reshaping the real estate industry.
      Our team has been working tirelessly to create sustainable and smart housing solutions...,
      Discover how our latest innovations are reshaping the real estate industry.
      Learn more about our journey to transform the future of property development.
      Our team has been working tirelessly to create sustainable and smart housing solutions...`
    ],
    source: 'The Star',
    link: '/news-details/'
  }
])

</script>
