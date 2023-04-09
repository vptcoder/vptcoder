export default defineEventHandler(async () => {
  const val: any = await $fetch('http://localhost:5000/weatherforecast')
  return val
})
