<template>
  <div>
  </div>
</template>

<script>
export const nearbyAmenities = {
  'Dynaton Bukit Angin': {
    amenities: {
      education: [
        { name: ' SK Bandar Temerloh', distance: '1.8km' },
        { name: 'SK Jalan Bahagia', distance: '3.4km ' },
        { name: 'SJK (C) Khee Chee', distance: '2.3km ' },
        { name: ' SMK Abu Bakar', distance: '4.7km' }
      ],
      healthcare: [
        { name: 'Hospital Sultan Haji Ahmad Shah', distance: '5.0km' },
        { name: 'KLINIK RAKYAT', distance: '2.9km' },
        { name: 'MY HEALTH CLINIC TEMERLOH', distance: '0.1km' }
      ],
      entertainment: [
        { name: 'Pusat Snooker SUMMIT', distance: '1.6km' },
        { name: 'My Box Karaoke Temerloh', distance: '3.1km' }
      ],
      recreation: [
        { name: 'Taman Awam Temerloh', distance: '2.4km' },
        { name: 'Taman Purba', distance: '3.1km' },
        { name: 'AD Sport Futsal Centre', distance: '2.1km' }
      ],
      transportation: [
        { name: 'MyCar', distance: '3.1km' },
        { name: 'Bus Station Temerloh', distance: '3.1km' }
      ],
      shopping: [
        { name: 'Dynaton Walk', distance: '0.2km' },
        { name: 'Temerloh Mall', distance: '1.6km' },
        { name: 'Semantan Walk', distance: '3.1km' }
      ]
    }
  },
  'Kawasan Industri Seberang Temerloh': {
    amenities: {
      education: [
        { name: 'SMK Seberang Temerloh', distance: '1.8km ' },
        { name: 'Sekolah Kebangsaan Tanjung Batu, Temerloh', distance: '2.6km' },
        { name: 'Sk Bandar Temerloh', distance: '3.4km' }

      ],
      healthcare: [
        { name: 'Klinik Al-Falah', distance: '1.9km' },
        { name: 'Hospital Sultan Haji Ahmad Shah', distance: '3.0km' }
      ],
      entertainment: [
        { name: 'Esplanade Baru', distance: '2.8km' }
      ],
      recreation: [
        { name: 'Gelanggang Futsal Taman Seberang Temerloh', distance: '1.9km' },
        { name: 'Kubang Gajah Waterpark', distance: '2.7km' },
        { name: 'Skatepark Temerloh', distance: '3.9km' }
      ],
      transportation: [
        { name: 'Terminal Bas Temerloh', distance: '3.4km' }
      ],
      shopping: [
        { name: 'Kompleks Niaga Pelbagai Temerloh', distance: '3.2km' },
        { name: 'Temerloh Mall, Pahang', distance: '4.0km' },
        { name: 'Dynaton Walk', distance: '4.1km' }
      ]
    }
  },
  'Pusat Perniagaan Chengal': {
    amenities: {
      education: [
        { name: 'SMA Al Khairiah', distance: '1.4km' },
        { name: 'SMK Abu Bakar', distance: '1.4km' },
        { name: 'Sekolah Menengah kebangsaan Temerloh', distance: '1.6km ' },
        { name: 'SK Jalan Bahagia', distance: '1.9km' },
        { name: 'SK Tanjong Lalang', distance: '2.1km' }
      ],
      healthcare: [
        { name: 'Klinik Primamedik', distance: '0.2km' },
        { name: 'Klinik Pergigian Temerloh Jaya', distance: '2.3km' },
        { name: 'Klinik Rakyat', distance: '2.6' }
      ],
      entertainment: [
        { name: 'Permaisuri Spa', distance: '2.0km' },
        { name: 'My Box Karaoke Temerloh', distance: '2.1km' }
      ],
      recreation: [
        { name: 'MYSA Futsal & Gym', distance: '1.7km' },
        { name: 'Taman Tasik Bandar Temerloh', distance: '2.7km' },
        { name: 'Taman Awam Temerloh', distance: '3.6km' }
      ],
      transportation: [
        { name: 'Terminal Bas Temerloh', distance: '3.3km' }
      ],
      shopping: [
        { name: 'Super Cowboy Mentakab', distance: '0.1km' },
        { name: 'TMG Mall Temerloh', distance: '0.7km' },
        { name: 'Semantan Walk', distance: '2.0km' }
      ]
    }
  },
  'Pusat Perniagaan Chengal 1': {
    amenities: {
      education: [
        { name: 'SMA Al Khairiah', distance: '1.4km' },
        { name: 'SMK Abu Bakar', distance: '1.4km' },
        { name: 'Sekolah Menengah kebangsaan Temerloh', distance: '1.6km ' },
        { name: 'SK Jalan Bahagia', distance: '1.9km' },
        { name: 'SK Tanjong Lalang', distance: '2.1km' }
      ],
      healthcare: [
        { name: 'Klinik Primamedik', distance: '0.2km' },
        { name: 'Klinik Pergigian Temerloh Jaya', distance: '2.3km' },
        { name: 'Klinik Rakyat', distance: '2.6' }
      ],
      entertainment: [
        { name: 'Permaisuri Spa', distance: '2.0km' },
        { name: 'My Box Karaoke Temerloh', distance: '2.1km' }
      ],
      recreation: [
        { name: 'MYSA Futsal & Gym', distance: '1.7km' },
        { name: 'Taman Tasik Bandar Temerloh', distance: '2.7km' },
        { name: 'Taman Awam Temerloh', distance: '3.6km' }
      ],
      transportation: [
        { name: 'Terminal Bas Temerloh', distance: '3.3km' }
      ],
      shopping: [
        { name: 'Super Cowboy Mentakab', distance: '0.1km' },
        { name: 'TMG Mall Temerloh', distance: '0.7km' },
        { name: 'Semantan Walk', distance: '2.0km' }
      ]
    }
  },
  'Bahagia Court Phase I': {
    amenities: {
      education: [
        { name: 'Taska Genius Hadid', distance: '0.5km' },
        { name: 'SK Temerloh Jaya', distance: '1.1km ' },
        { name: 'SMK Temerloh Jaya', distance: '1.4km' },
        { name: 'SMA Al Khairiah', distance: '1.5km' },
        { name: 'SK Seri Bahagia', distance: '1.5km' },
        { name: 'SMK Seri Bahagia', distance: '1.5km' }
      ],
      healthcare: [
        { name: 'Klinik Sulaiman Temerloh Jaya', distance: '0.6km' },
        { name: 'Klinik Pergigian Temerloh Jaya', distance: '0.6km' },
        { name: 'Klinik Primamedik', distance: '2.0km' },
        { name: 'Temerloh Physiotherapy Centre', distance: '0.9km' }
      ],
      entertainment: [
        { name: 'My Box Karaoke Temerloh', distance: '2.2km' }
      ],
      recreation: [
        { name: 'MYSA Futsal & Gym', distance: '0.8km' },
        { name: 'Gelanggang Futsal Taman Bahagia Permai', distance: '0.7km' },
        { name: 'Padang Temerloh Jaya', distance: '0.8km' }
      ],
      transportation: [
        { name: 'Terminal Bas Temerloh', distance: '2.5km' }
      ],
      shopping: [
        { name: 'TMG Mall Temerloh', distance: '2.4km' },
        { name: 'Super Cowboy Mentakab', distance: '1.9km' },
        { name: 'Semantan Walk', distance: '2.1km' }
      ]
    }
  },
  'Bahagia Court Phase II': {
    amenities: {
      education: [
        { name: 'Taska Genius Hadid', distance: '0.5km' },
        { name: 'SK Temerloh Jaya', distance: '1.1km ' },
        { name: 'SMK Temerloh Jaya', distance: '1.4km' },
        { name: 'SMA Al Khairiah', distance: '1.5km' },
        { name: 'SK Seri Bahagia', distance: '1.5km' },
        { name: 'SMK Seri Bahagia', distance: '1.5km' }
      ],
      healthcare: [
        { name: 'Klinik Sulaiman Temerloh Jaya', distance: '0.6km' },
        { name: 'Klinik Pergigian Temerloh Jaya', distance: '0.6km' },
        { name: 'Klinik Primamedik', distance: '2.0km' },
        { name: 'Temerloh Physiotherapy Centre', distance: '0.9km' }
      ],
      entertainment: [
        { name: 'My Box Karaoke Temerloh', distance: '2.2km' }
      ],
      recreation: [
        { name: 'MYSA Futsal & Gym', distance: '0.8km' },
        { name: 'Gelanggang Futsal Taman Bahagia Permai', distance: '0.7km' },
        { name: 'Padang Temerloh Jaya', distance: '0.8km' }
      ],
      transportation: [
        { name: 'Terminal Bas Temerloh', distance: '2.5km' }
      ],
      shopping: [
        { name: 'TMG Mall Temerloh', distance: '2.4km' },
        { name: 'Super Cowboy Mentakab', distance: '1.9km' },
        { name: 'Semantan Walk', distance: '2.1km' }
      ]
    }
  },
  'Bahagia Court Phase III': {
    amenities: {
      education: [
        { name: 'Taska Genius Hadid', distance: '0.5km' },
        { name: 'SK Temerloh Jaya', distance: '1.1km ' },
        { name: 'SMK Temerloh Jaya', distance: '1.4km' },
        { name: 'SMA Al Khairiah', distance: '1.5km' },
        { name: 'SK Seri Bahagia', distance: '1.5km' },
        { name: 'SMK Seri Bahagia', distance: '1.5km' }
      ],
      healthcare: [
        { name: 'Klinik Sulaiman Temerloh Jaya', distance: '0.6km' },
        { name: 'Klinik Pergigian Temerloh Jaya', distance: '0.6km' },
        { name: 'Klinik Primamedik', distance: '2.0km' },
        { name: 'Temerloh Physiotherapy Centre', distance: '0.9km' }
      ],
      entertainment: [
        { name: 'My Box Karaoke Temerloh', distance: '2.2km' }
      ],
      recreation: [
        { name: 'MYSA Futsal & Gym', distance: '0.8km' },
        { name: 'Gelanggang Futsal Taman Bahagia Permai', distance: '0.7km' },
        { name: 'Padang Temerloh Jaya', distance: '0.8km' }
      ],
      transportation: [
        { name: 'Terminal Bas Temerloh', distance: '2.5km' }
      ],
      shopping: [
        { name: 'TMG Mall Temerloh', distance: '2.4km' },
        { name: 'Super Cowboy Mentakab', distance: '1.9km' },
        { name: 'Semantan Walk', distance: '2.1km' }
      ]
    }
  },
  'Dynaton Saujana': {
    amenities: {
      education: [
        { name: 'SK Bandar Temerloh', distance: '3.5km' },
        { name: 'Sekolah Jenis Kebangsaan (Cina) Khee Chee', distance: '4.0km ' },
        { name: 'SMK Seberang Temerloh', distance: '1.9km' }
      ],
      healthcare: [
        { name: 'Hospital Sultan Haji Ahmad Shah', distance: '3.2km' },
        { name: 'Klinik Al-Falah', distance: '2.0km' },
        { name: 'Klinik Kesihatan Temerloh', distance: '2.9km' },
        { name: 'Klinik Pergigian Temerloh', distance: '2.9km' }
      ],
      entertainment: [
        { name: 'Pusat Snooker SUMMIT', distance: '4.1km' },
        { name: 'kilat fantasi cafe', distance: '4.4km' }
      ],
      recreation: [
        { name: 'Temerloh Stadium', distance: '3.0km' },
        { name: 'AD Sport Futsal Centre', distance: '3.8km' },
        { name: 'Dewan Gudang Beras', distance: '3.4km' }
      ],
      transportation: [
        { name: 'Terminal Bas Temerloh', distance: '3.5km' }
      ],
      shopping: [
        { name: 'LYC Temerloh', distance: '1.6km' },
        { name: 'Temerloh Mall, Pahang', distance: '4.1km' },
        { name: 'Kompleks Niaga Pelbagai Temerloh', distance: '3.4km' }
      ]
    }
  },
  'Dynaton Izona (Phase 1, 2, 3, 3b)': {
    amenities: {
      education: [
        { name: '3Q MRC Mentakab', distance: '2.4km' },
        { name: 'S.M.L Hwa Lian', distance: '1.0km ' },
        { name: 'SK Abu Bakar', distance: '2.4km' },
        { name: 'SJK (C) Mentakab (1)', distance: '3.3km' },
        { name: 'SMK Mentakab', distance: '2.6km' }
      ],
      healthcare: [
        { name: 'Hospital Mentakab', distance: '1.0km' },
        { name: 'Mentakab Health Clinic', distance: '1.6km' },
        { name: 'Kidz Care Child Specialist Clinic', distance: '1.9km' },
        { name: 'Klinik Ng Dan Singh', distance: '1.4km' },
        { name: 'Primamedik Klinik Jaya Mentakab', distance: '2.2km' },
        { name: 'Mentakab Dental Clinic', distance: '1.5km' },
        { name: 'Klinik Pergigian Dentacares Mentakab', distance: '1.4km' }
      ],
      entertainment: [
        { name: 'Bukit Bendera Resort', distance: '0.5km' },
        { name: 'Ball 8 Snooker Center', distance: '3.3km' },
        { name: 'GSC Mentakab', distance: '1.7km' },
        { name: 'Bowling Starmall Mentakab', distance: '1.7km' },
        { name: 'Claybox', distance: '2.3km' }
      ],
      recreation: [
        { name: 'Taman Rekreasi Tasik Chatin Mentakab', distance: '4.3km' },
        { name: 'Padang Mentakab', distance: '2.5km' },
        { name: 'LCS Sport Arena', distance: '2.6km' }
      ],
      transportation: [
        { name: 'Bus Terminal Mentakab', distance: '2.6km' }
      ],
      shopping: [
        { name: 'Starmall', distance: '1.7km' },
        { name: 'The Store Mentakab', distance: '2.0km' },
        { name: 'CBS Mentakab', distance: '2.4km' }
      ]
    }
  }
}

</script>
