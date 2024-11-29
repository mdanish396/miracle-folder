<template>
  <div>
  <!-- This component only holds news data -->
  </div>
</template>

<script>
export default {
  name: 'NewsData',
  data () {
    return {
      projects: [
        {
          id: 1,
          title: 'New Project Launch',
          link: '/path/to/project_launch_news.pdf'
        },
        {
          id: 2,
          title: 'Company Partnership Announcement',
          link: '/path/to/partnership_announcement_news.pdf'
        }
      ]
    }
  }
}
</script>
