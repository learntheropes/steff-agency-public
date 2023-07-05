<template>
  <section class="section has-text-centered">
    <nav class="level is-hidden-touch">
      <div class="level-item">
        <label class="checkbox">
          <input v-model="publication" type="checkbox">
          {{$t('accept_privacy_policy_1')}}
          <a :href="localePath({ name: 'publication' })" target="_blank">
            <strong class="is-lowercase">{{$t('pub_policy_title')}}</strong>
          </a>
        </label>
      </div>
    </nav>
    <nav class="level is-hidden-touch">    
      <p class="level-item">
        <button @click="reset" :disabled="isDisabled" class="button is-text">{{$t('form_reset')}}</button>
        <button @click="upload" :disabled="isDisabled" :class="isLoading">{{$t('form_submit')}}</button>
      </p>
    </nav>
    <nav class="is-hidden-desktop has-text-centered">
      <label class="checkbox">
        <input v-model="publication" type="checkbox">
        {{$t('accept_privacy_policy_1')}}
        <a :href="localePath({ name: 'publication' })" target="_blank">
          <strong>{{$t('accept_privacy_policy_2')}}</strong>
        </a>
      </label>
      <p class="level-item">
        <button @click.prevent="reset" class="button is-text">{{$t('form_reset')}}</button>
      </p>
      <p class="level-item">
        <button @click.prevent="upload" :class="isLoading" :disabled="isDisabled">{{$t('form_submit')}}</button>
      </p>
    </nav>
  </section>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import clone from 'lodash.clone'
export default {
  name: 'Buttons',
  data() {
    return {
      isLoading: "button is-primary",
    }
  },
  computed: {
    isDisabled() {
      return (this.$store.state.application.final.publication) ?false : true
    },
    publication: {
      get() {
        this.$store.state.application.final.publication
      },
      set(value) {
        this.$store.commit('application/publicationSet', value)
      }
    }
  },
  methods: {
    async reset() {
      this.$store.commit('application/finalUserReset')
    },
    async upload() {
      try {
        this.isLoading = this.isLoading + " is-loading"
        this.$store.commit('application/slugSet')
        const final = clone(this.$store.state.application.final, true)
        const media = clone(this.$store.state.application.temp_files.media, true)
        let public_ids = []
        for (const file of media) {
          const fd = new FormData()
          fd.append('upload_preset', 'unsigned_preset_default')
          fd.append('file', file)
          fd.append('public_id', uuidv4())
          fd.append('tags', `${this.$store.state.application.final.slug}_media`)
          const { data } = await this.$axios.post('https://api.cloudinary.com/v1_1/abasto/image/upload/', fd)
          const { public_id } = data
          public_ids.push(public_id)
        }
        this.$store.commit('application/mediaSet', public_ids)
        final.created_at = new Date()
        final._id = final.slug
        final.type = 'staff'
        final.approved = false
        final.published = false
        final.media = public_ids
        await this.$axios.post('/.netlify/functions/fauna-create-staff', final)
        await this.$axios.post('/.netlify/functions/mailgun-notification-new-staff', final)
        this.reset()
        this.isLoading = this.isLoading.replace(" is-loading", "")        
      } catch (error) {
        console.log(error)
      }
    }
  },
}
</script>
