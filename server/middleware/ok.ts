export default {
    path: '/ok',
    handler(req: any, res: any) {
        res.write('Everything is ok!')
        res.end()
    }
}