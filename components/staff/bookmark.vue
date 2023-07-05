<template>
  <div>
    <b-icon
      v-if="bookmarkExists(one)"
      @click.native="setBookmarks(one)"
      :size="size"
      icon="bookmark">
    </b-icon>
    <b-icon
      v-else
      @click.native="setBookmarks(one)"
      :size="size"
      icon="bookmark-outline">
    </b-icon>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import findIndex from 'lodash.findindex'
export default {
  name: 'Bookmark',
  props: [
    'one',
    'size'
  ],
  computed: {
    ...mapState({
      bookmarks: state => state.staff.bookmarks,
    })
  },
  methods: {
    ...mapMutations('staff', ['setBookmarks']),
    bookmarkExists(value) {
      const index = findIndex(this.bookmarks, { slug: value.slug })
      return (index === -1) ? false : true
    }
  }
}
</script>
