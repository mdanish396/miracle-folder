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

export const leasedevelopments = [
  {
    id: 1,
    name: 'Monarc Cove',
    slug: generateSlug('Monarc Cove'),
    bannerimage: '/assets/building.png',
    logo: '/assets/currentproject/house1.jpg',
    location: 'Kalimantan, Mana',
    district: 'Jengka',
    state: 'Pahang',
    type: 'Township',
    price: '5,000',
    status: 'Available',
    statuslease: 'Available',
    image: '/assets/currentproject/house1.jpg',
    features: ['Exclusive Amenities', 'Spacious Homes', 'Green Spaces'],
    shortdescription: 'home to your nature',
    description: `The Camellia, your home at Wetlands Estates, the
    private enclave in Gamuda Cove. The Camellia, your home at Wetlands
    Estates, the private enclave in Gamuda Cove. The Camellia, your home at
    Wetlands Estates, the private enclave in Gamuda Cove.`,
    size: '810 acres',
    topic: 'In a Garden Where Happiness Lives',
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
    gallerydevelopment: [ // 3 image only no less no more
      {
        url: '/assets/currentproject/house1.jpg',
        description: 'Living in Harmony with Nature'
      },
      {
        url: '/assets/award1.png',
        description: 'Doorstep Lifestyle and Retail Convenience'
      },
      {
        url: '/assets/currentproject/house3.jpg',
        description: 'Exciting Placemaking Experience'
      }
    ],
    galleryImages: [
      '/assets/currentproject/house2.jpg',
      '/assets/currentproject/house3.jpg',
      '/assets/currentproject/house1.jpg',
      'https://picsum.photos/200/300'
    ],
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.204467936385!2d102.33761262954054!3d3.482833823535699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceba19442459ed%3A0x6741cc23f71eada3!2sDynaton%20Casa%20Hill%2C%2028400%20Mentakab%2C%20Pahang!5e0!3m2!1sen!2smy!4v1733993061093!5m2!1sen!2smy&map_action=map&streetview=on'
  },
  {
    id: 2,
    name: 'Connaught Cove',
    slug: generateSlug('Connaught Cove'),
    bannerimage: '/assets/building.png',
    logo: '/assets/currentproject/house1.jpg',
    location: 'Mert, Temerloh',
    district: 'Jengka',
    state: 'Pahang',
    type: 'Residential',
    price: '6000',
    status: 'Current',
    statuslease: 'Available',
    image: '/assets/currentproject/house2.jpg',
    features: ['Luxury Living', 'Green Spaces'],
    shortdescription: 'home to your nature',
    description: `The Camellia, your home at Wetlands Estates, the
    private enclave in Gamuda Cove.`,
    size: '815 acres',
    topic: 'In a Garden Where Happiness Lives',
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
        url: '/assets/currentproject/house3.jpg',
        description: 'Living in Harmony with Nature'
      },
      {
        url: '/assets/award2.png',
        description: 'Doorstep Lifestyle and Retail Convenience'
      },
      {
        url: '/assets/currentproject/house2.jpg',
        description: 'Exciting Placemaking Experience'
      }
    ],
    galleryImages: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300'
    ],
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.380935267707!2d102.4265958!3d3.4481648500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceb98ede1fc697%3A0x525d3e85476ef763!2sRestoran%20Saiful!5e0!3m2!1sen!2smy!4v1735284346219!5m2!1sen!2smy',
    link: ''
  },
  {
    id: 3,
    name: 'ZIG House',
    slug: generateSlug('ZIG House'),
    bannerimage: '/assets/building.png',
    logo: '/assets/currentproject/house3.jpg',
    location: 'Greater Kuala Lumpur',
    district: 'Temerloh',
    state: 'Pahang',
    type: 'Residential',
    price: '5000',
    status: 'Current',
    statuslease: 'Available',
    image: '/assets/currentproject/house3.jpg',
    features: ['Luxury Living', 'Lakeside'],
    shortdescription: 'home to your nature',
    description: `The Camellia, your home at Wetlands Estates, the
    private enclave in Gamuda Cove.`,
    size: '820 acres',
    topic: 'In a Garden Where Happiness Lives',
    fulldescription: `Miracle Gardens is an 810-acre township
      fusing lifestyle and nature, featuring rolling hills and
      five cascading lakes leading to the 50-acre, pet-friendly Central Park.
      The township includes a Waterfront Village offering a walkable retail
      experience with various F&B options. Nearby the township, Gamuda Luge Gardens
      hosts a mix of commercial and leisure spaces, including retail shops, FunPark
      family-friendly park, Big Bucket Splash waterplay and Skyline Luge Kuala Lumpur.
      This development is designed to be a vibrant hub that brings the community together.`,
    builtup: '2,150 - 2,497 sqft',
    lotsize: '36` x 76`',
    gallerydevelopment: [
      {
        url: '/assets/currentproject/house1.jpg',
        description: 'Living in Harmony with Nature'
      },
      {
        url: '/assets/award2.png',
        description: 'Doorstep Lifestyle and Retail Convenience'
      },
      {
        url: '/assets/currentproject/house2.jpg',
        description: 'Exciting Placemaking Experience'
      }
    ],
    galleryImages: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300'
    ],
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.204467936385!2d102.33761262954054!3d3.482833823535699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ceba19442459ed%3A0x6741cc23f71eada3!2sDynaton%20Casa%20Hill%2C%2028400%20Mentakab%2C%20Pahang!5e0!3m2!1sen!2smy!4v1733993061093!5m2!1sen!2smy&map_action=map&streetview=on',
    link: ''
  }
]

</script>
