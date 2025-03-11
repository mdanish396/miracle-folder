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
    bannerimage: '/assets/Development/Miracle Sentral/miracle_sentral_12.png',
    logo: '/assets/Development/Miracle Sentral/logo.png',
    location: 'Jengka, Pahang',
    districts: 'Jengka',
    state: 'Pahang',
    type: 'Commercial',
    price: 'RM 865 k*',
    status: 'Under Development',
    image: '/assets/Development/Miracle Sentral/miracle_sentral_09.png',
    features: ['Low Investment, High Return (ROI) Up to 8%', 'Walking Distance to UiTM University Jengka', 'Located in the Centre of Jengka, the Fastest-Growing Economy in Pahang'],
    description: 'Commercial Centre in Jengka Town.',
    size: '20 x 75 sqft',
    gallerydevelopment: [ // 3 image only no less no more
      {
        url: '/assets/Development/Miracle Sentral/miracle_sentral_16.jpg', // assets/Development/Miracle Sentral/miracle_sentral_10.png
        description: 'Located in the Centre of Jengka.'
      },
      {
        url: '/assets/Development/Miracle Sentral/miracle_sentral_17.png', // assets/Development/Miracle Sentral/miracle_sentral_13.jpg
        description: 'Lifestyle & Retail Conveniences.'
      },
      {
        url: '/assets/Development/Miracle Sentral/miracle_sentral_18.jpg', // assets/Development/Miracle Sentral/miracle_sentral_09.png
        description: 'Exciting Placemaking Experiences.'
      }
    ],
    galleryImages: [
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
    map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3981.1899270081403!2d102.5470679!3d3.7688108!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31c931adceacfb6d%3A0x9141d767665ffa22!2sMiracle%20Sentral%20Sales%20Gallery%20%40%20Jengka!5e0!3m2!1sen!2smy!4v1741226657416!5m2!1sen!2smy'
  },
  {
    id: 2,
    name: 'Casa Hill',
    slug: generateSlug('Casa Hill'),
    bannerimage: '/assets/Development/Casa Hill/casa_hill_01.png',
    logo: '/assets/Development/Casa Hill/logo.png',
    location: 'Mentakab, Temerloh',
    districts: 'Temerloh',
    state: 'Pahang',
    type: 'Residential',
    price: 'RM 6XXK*',
    status: 'New Launch',
    image: '/assets/Development/Casa Hill/casa_hill_02.png',
    features: ['Luxury Living', 'Green Spaces'],
    description: `The Camellia, your home at Wetlands Estates, the
    private enclave in Gamuda Cove.`,
    size: '1400 x 1,700 sqft',
    gallerydevelopment: [
      {
        url: '/assets/Development/Casa Hill/casa_hill_05.JPG',
        description: 'Located in the Centre of Jengka'
      },
      {
        url: '/assets/Development/Casa Hill/casa_hill_03.jpg',
        description: 'Lifestyle and Retail Convenience'
      },
      {
        url: '/assets/Development/Casa Hill/casa_hill_04.jpg',
        description: 'Exciting Placemaking Experiences'
      }
    ],
    galleryImages: [
      '/assets/Development/Casa Hill/casa_hill_01.png',
      '/assets/Development/Casa Hill/casa_hill_08.jpg',
      '/assets/Development/Casa Hill/casa_hill_06.JPG',
      '/assets/Development/Casa Hill/casa_hill_04.jpg',
      '/assets/Development/Casa Hill/casa_hill_05.JPG',
      '/assets/Development/Casa Hill/casa_hill_07.jpg',
      '/assets/Development/Casa Hill/casa_hill_02.png',
      '/assets/Development/Casa Hill/casa_hill_03.jpg'
    ],
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.4411082928295!2d102.33912939999999!3d3.4847702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceba1bc23fa6b7%3A0xfe72a6be37126111!2sDynaton%20Casa%20Hill!5e0!3m2!1sen!2smy!4v1737941338360!5m2!1sen!2smy'
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
