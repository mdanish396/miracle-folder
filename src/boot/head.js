import { createHead } from '@vueuse/head'

export default async ({ app }) => {
  const head = createHead()
  app.use(head)
}
