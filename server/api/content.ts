// import {defineEventHandler} from 'h3';
// export default defineEventHandler((event: any) => {
//     console.log(event)
//     return {
//         api: 'content'
//     }
// })

export default ($axios:any) => (resource : any) => ({
    index () {
        return $axios.$get(`/${resource}`);
    },
    // create(payload) {},
})