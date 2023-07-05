<template>
  <div>
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <label class="label">{{$t('quote_description')}}</label>
          <div class="control">
            <textarea
              v-model="description"
              class="textarea"
              rows="15"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bookmarks from '~/components/quotation/bookmarks'
export default {
  name: 'GenericInquiry',
  components: {
    bookmarksCards: Bookmarks
  },
  data() {
    return {
      deleteClasses: 'notification is-info'
    }
  },
  computed: {
    description: {
      get() {
        return this.$store.state.quotation.description
      },
      set(value) {
        this.$store.commit('quotation/descriptionSet', value)
      }
    },
  }
}
</script>
