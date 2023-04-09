export default defineEventHandler(async () => {
  console.log('START')
  const val: any = await $fetch('http://localhost:5000/weatherforecast')
  console.log(val)
  return val
})
