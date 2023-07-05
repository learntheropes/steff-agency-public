<template>
  <section class="section container">
    <div class="columns is-multiline">
      <div
        v-for="(one, index) of staff"
        :key="index"
        class="column is-full-mobile is-one-third-tablet is-one-third-desktop is-one-quarter-widescreen is-one-quarter-fullhd"
      >
        <div class="card">
          <div class="card-image">
            <figure
              :style="'height: 128px; background-color:grey;'"
              class="image is-square"
            >
              <nuxt-link :to="localePath({ name: 'staff' })+'/'+one.slug+'/'">
                <img :src="'/api/storage/img/g_face,c_thumb,h_128,w_128/'+one.cover" :alt="one.slug">
              </nuxt-link>
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <div class="columns is-mobile">
                <div class="column expanded">
                  <p class="title is-4 is-capitalized">
                    {{one.firstName}}
                  </p>
                  <p class="subtitle is-6">
                    {{one.slug}}
                  </p>
                </div>
                <div class="column is-narrow">
                  <bookmark-icon :one="one" size="is-medium" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Bookmark from '~/components/staff/bookmark'
export default {
  head () {
    return {
      title:  'Staff',
    }
  },  components: {
    bookmarkIcon: Bookmark
  },
  async fetch ({ app, store }) {
    try {
      if (!store.state.staff.init) {
        const { data } = await app.$axios.get('/.netlify/functions/fauna-get-staff-approved')
        store.commit('staff/setStaff', data)
        store.commit('staff/setInit', true)
      }
    } catch (error) {
      console.log(error)
    }
  },
  computed: {
    ...mapState({
      init: state => state.staff.init,
      staff: state => state.staff.list,
    })
  }
}
</script>
