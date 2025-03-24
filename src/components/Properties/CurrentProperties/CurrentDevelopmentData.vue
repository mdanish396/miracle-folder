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

export const developments = [
  {
    id: 1,
    name: 'Miracle Sentral',
    slug: generateSlug('Miracle Sentral'),
    bannerimage: '/assets/Development/Miracle Sentral/miracle_sentral_01.png',
    logo: '/assets/Development/Miracle Sentral/logo.png',
    location: 'Jengka, Pahang',
    districts: 'Jengka',
    state: 'Pahang',
    type: 'Commercial',
    price: 'RM 699k*',
    status: 'New Launch',
    image: '/assets/Development/Miracle Sentral/miracle_sentral_02.png',
    features: ['Low Investment, High Return (ROI) Up to 8%', 'Walking Distance to UiTM University Jengka', 'Located in the Centre of Jengka, the Fastest-Growing Economy in Pahang'],
    description: 'The biggest commercial centre in Jengka Town.',
    size: '20 x 75 sqft',
    gallerydevelopment: [ // 3 image only no less no more
      {
        url: '/assets/Development/Miracle Sentral/miracle_sentral_03.jpg', // assets/Development/Miracle Sentral/miracle_sentral_10.png
        description: 'Commercial Hub in the Heart of Jengka'
      },
      {
        url: '/assets/Development/Miracle Sentral/miracle_sentral_11.png', // assets/Development/Miracle Sentral/miracle_sentral_13.jpg
        description: 'Lifestyle & Retail Conveniences'
      },
      {
        url: '/assets/Development/Miracle Sentral/miracle_sentral_12.jpg', // assets/Development/Miracle Sentral/miracle_sentral_09.png
        description: 'Exciting Placemaking Experiences'
      }
    ],
    galleryImages: [
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
    map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3981.1899270081403!2d102.5470679!3d3.7688108!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31c931adceacfb6d%3A0x9141d767665ffa22!2sMiracle%20Sentral%20Sales%20Gallery%20%40%20Jengka!5e0!3m2!1sen!2smy!4v1741226657416!5m2!1sen!2smy'
  },
  {
    id: 2,
    name: 'Casa Hill',
    slug: generateSlug('Casa Hill'),
    bannerimage: '/assets/Development/Casa Hill/casa_hill_11.png',
    logo: '/assets/Development/Casa Hill/logo.png',
    location: 'Mentakab, Pahang',
    districts: 'Temerloh',
    state: 'Pahang',
    type: 'Residential',
    price: 'RM 1,063k*',
    status: 'New Launch',
    image: '/assets/Development/Casa Hill/casa_hill_09.jpg',
    features: ['Guarded community for security', 'Extensive gardens with riverside views', 'Exclusive clubhouse with pool'],
    description: `Luxurious modern bungalows in a low-density, gated community, just 2 minutes
      from town. Enjoy impressive facilities, lush gardens, and top-tier security for
      ultimate comfort and privacy. Strategically located next to Mentakab Station,
      with ECRL access and future commercial developments at your doorstep. `,
    size: '4,004 - 5,769 sqft',
    gallerydevelopment: [
      {
        url: '/assets/Development/Casa Hill/casa_hill_10.png',
        description: 'Guarded Community for 24/7 Security'
      },
      {
        url: '/assets/Development/Casa Hill/casa_hill_12.png',
        description: '2km Jogging Track through Gardens with Riverside View'
      },
      {
        url: '/assets/Development/Casa Hill/casa_hill_13.png',
        description: 'Exclusive Clubhouse with Pool and Gym'
      }
    ],
    galleryImages: [
      '/assets/Development/Casa Hill/casa_hill_12.png',
      '/assets/Development/Casa Hill/casa_hill_08.jpg',
      '/assets/Development/Casa Hill/casa_hill_06.JPG',
      '/assets/Development/Casa Hill/casa_hill_04.jpg',
      '/assets/Development/Casa Hill/casa_hill_05.JPG',
      '/assets/Development/Casa Hill/casa_hill_07.jpg',
      '/assets/Development/Casa Hill/casa_hill_13.png',
      '/assets/Development/Casa Hill/casa_hill_02.png',
      '/assets/Development/Casa Hill/casa_hill_03.jpg',
      '/assets/Development/Casa Hill/casa_hill_14.jpg',
      '/assets/Development/Casa Hill/casa_hill_15.jpg',
      '/assets/Development/Casa Hill/casa_hill_10.jpg'
    ],
    map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7000.384720493678!2d102.3365545!3d3.4847756!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceba1bc23fa6b7%3A0xfe72a6be37126111!2sDynaton%20Casa%20Hill!5e1!3m2!1sen!2smy!4v1742787546694!5m2!1sen!2smy'
  }
  // {
  //   id: 3,
  //   name: 'Miracle Sentral',
  //   slug: generateSlug('Miracle Sentral'),
  //   bannerimage: '/assets/Development/Miracle Sentral/miracle_sentral_12.png',
  //   logo: '/assets/Development/Miracle Sentral/logo.png',
  //   location: 'Jengka, Pahang',
  //   districts: 'Jengka',
  //   state: 'Pahang',
  //   type: 'Commercial',
  //   price: 'RM 5XX,XXX*',
  //   status: 'New Launch',
  //   statusbuyer: 'New Launch',
  //   image: '/assets/Development/Miracle Sentral/miracle_sentral_09.png',
  //   features: ['Exclusive Amenities', 'Spacious Homes', 'Green Spaces'],
  //   shortdescription: 'home to your nature',
  //   description: `The Camellia, your home at Wetlands Estates, the
  //   private enclave in Gamuda Cove. The Camellia, your home at Wetlands
  //   Estates, the private enclave in Gamuda Cove. The Camellia, your home at
  //   Wetlands Estates, the private enclave in Gamuda Cove.`,
  //   size: '1,500 sqft',
  //   topic: 'In a Garden Where Happiness Lives',
  //   fulldescription: `Miracle Gardens is an 810-acre township
  //     fusing lifestyle and nature, featuring rolling hills and
  //     five cascading lakes leading to the 50-acre, pet-friendly Central Park.
  //     The township includes a Waterfront Village offering a walkable retail
  //     experience with various F&B options. Nearby the township, Gamuda Luge Gardens
  //     hosts a mix of commercial and leisure spaces, including retail shops, FunPark
  //     family-friendly park, Big Bucket Splash waterplay and Skyline Luge Kuala Lumpur.
  //     This development is designed to be a vibrant hub that brings the community together.`,
  //   builtup: '2,110 - 2,497 sqft',
  //   lotsize: '26` x 76`',
  //   gallerydevelopment: [ // 3 image only no less no more
  //     {
  //       url: '/assets/Development/Miracle Sentral/miracle_sentral_10.png',
  //       description: 'Living in Harmony with Nature'
  //     },
  //     {
  //       url: '/assets/Development/Miracle Sentral/miracle_sentral_13.jpg',
  //       description: 'Doorstep Lifestyle and Retail Convenience'
  //     },
  //     {
  //       url: '/assets/Development/Miracle Sentral/miracle_sentral_09.png',
  //       description: 'Exciting Placemaking Experience'
  //     }
  //   ],
  //   galleryImages: [
  //     '/assets/Development/Miracle Sentral/miracle_sentral_15.png',
  //     '/assets/Development/Miracle Sentral/miracle_sentral_04.jpeg',
  //     '/assets/Development/Miracle Sentral/miracle_sentral_03.jpg',
  //     '/assets/Development/Miracle Sentral/miracle_sentral_14.png',
  //     '/assets/Development/Miracle Sentral/miracle_sentral_10.png'
  //   ],
  //   map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.204467936385!2d102.33761262954054!3d3.482833823535699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceba19442459ed%3A0x6741cc23f71eada3!2sDynaton%20Casa%20Hill%2C%2028400%20Mentakab%2C%20Pahang!5e0!3m2!1sen!2smy!4v1733993061093!5m2!1sen!2smy&map_action=map&streetview=on'
  // }
]

</script>
