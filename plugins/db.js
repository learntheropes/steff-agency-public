export default ({ $axios }, inject) => {
  const db = {
    works: {
      get: async (ref) => {
        const { data } = await $axios.get('/.netlify/functions/fauna-work-get-by-ref', { 
          params: { ref }
        })
        return data
      },
      // update: async ({ ref, props }) => {
      //   const { data } = await $axios.post('/.netlify/functions/fauna-generic-update', { 
      //     ref, props, collection: 'works'
      //   })
      //   return data  
      // },
      // filter: async ({ index, value }) => {
      //   const { data } = await $axios.get('/.netlify/functions/fauna-generic-filter', { 
      //     params: {index, value}
      //   })
      //   return data 
      // }
    },
    offers: {
      get: async (ref) => {
        const { data } = await $axios.get('/.netlify/functions/fauna-offer-get-by-ref', { 
          params: { ref }
        })
        return data
      },
      // create: async ({ ref, props }) => {
      //   const { data } = await $axios.post('/.netlify/functions/fauna-generic-create', { 
      //     ref, props, collection: 'offers'
      //   })
      //   return data
      // },
      // filter: async ({ index, value }) => {
      //   const { data } = await $axios.get('/.netlify/functions/fauna-generic-filter', { 
      //     params: {index, value}
      //   })
      //   return data 
      // }
    }, 
    // staff: {
    //   list: async () => {
    //     const { data } = await $axios.get('/.netlify/functions/fauna-generic-list', {
    //       params: { index: 'all_staff'}
    //     })
    //     return data
    //   },
    //   filter: async ({ index, value }) => {
    //     const { data } = await $axios.get('/.netlify/functions/fauna-generic-filter', { 
    //       params: {index, value}
    //     })
    //     return data 
    //   }
    // }
  }
  inject('db', db)
}