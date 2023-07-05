<template>
  <div class="columns is-mobile is-multiline">
    <div v-for="one of bookmarks" :key="one.slug" class="column is-narrow">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  :src="'/api/storage/img//g_face,c_thumb,h_48,w_48/'+one.cover"
                  :alt="'Image of '+ one.slug">
              </figure>
            </div>
            <div class="media-content">
              <div class="columns">
                <div class="column is-narrow">
                  <p class="title is-4 is-capitalized">
                    {{one.firstName}}
                  </p>
                  <p class="subtitle is-6">
                    {{one.slug}}
                  </p>
                </div>
                <div class="column is-narrow">
                  <button @click="setBookmarks(one)" class="delete"></button>
                </div>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Staff',
  computed: {
    ...mapState({
      bookmarks: state => state.staff.bookmarks
    })
  },
  methods: {
  ...mapMutations('staff', ['setBookmarks'])
  }
}
</script>