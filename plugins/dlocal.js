export default ({ $axios }, inject) => {
  const dlocal = {
    exchange: async ({ from, to }) => {
      const { data } = await $axios.get('/.netlify/functions/dlocal-currency-exchange', {
        params: { from, to }
      })
      return data
    },
    methods: async (country) => {
      const { data } = await $axios.get('/.netlify/functions/dlocal-get-methods-by-country', {
        params: { country }
      })
      return data
    },
    payments: {
      create: async (obj) => {
        const { data } = await $axios.post('/.netlify/functions/dlocal-create-payments', obj)
        return data
      }
    }
  }
  inject('dlocal', dlocal)
}