export default {
  path: '/ok',
  handler(req: any, res: any) {
    res.write('Everything is ok! this feature is being tested, not in use.')
    res.end()
  },
}
