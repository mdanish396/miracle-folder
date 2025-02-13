export default ({ app }) => {
  app.config.errorHandler = (err, instance, info) => {
    console.error('Global Error:', err, 'Info:', info)
    // You can send the error to an API, show a toast notification, or redirect
  }
}
