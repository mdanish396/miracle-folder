import VueMeta from 'vue-meta'

export default ({ app }) => {
  // Initialize vue-meta manager
  const metaManager = VueMeta.createMetaManager()

  // Use vue-meta globally in your app
  app.use(metaManager)
}
