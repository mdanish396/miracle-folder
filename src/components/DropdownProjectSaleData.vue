<template>
  <div>
  <!-- This component only holds dropdown project sale name and image data -->
  </div>
</template>

<script>

export const states = [
  { name: 'Pahang', id: 'pahang' }
]

export const districts = {
  pahang: [
    { name: 'Jengka', id: 'jengka' },
    { name: 'Maran', id: 'maran' },
    { name: 'Mentakab', id: 'mentakab' },
    { name: 'Kuantan', id: 'kuantan' },
    { name: 'Temerloh', id: 'temerloh' }
  ]
}

export const projects = {
  jengka: [
    {
      name: '16 Sierra, Puchong',
      image: 'src/assets/currentproject/house1.jpg'
    },
    {
      name: 'Bandar Puteri Puchong & Puchong Jaya',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Bandar Puteri Bangi',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Senna Puteri, Salak Tinggi',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Banting',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'PJ Midtown',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Warisan Puteri, Sepang',
      image: 'https://via.placeholder.com/150'
    }
  ],
  maran: [
    {
      name: 'Maran Housing',
      image: 'https://via.placeholder.com/150'
    }
  ],
  mentakab: [
    {
      name: 'Mentakab Project A',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Mentakab Project B',
      image: 'https://via.placeholder.com/150'
    }
  ],
  kuantan: [
    {
      name: 'Kuantan Housing',
      image: 'https://via.placeholder.com/150'
    }
  ],
  temerloh: [
    {
      name: 'Temerloh Housing',
      image: 'https://via.placeholder.com/150'
    }
  ]
}
</script>
