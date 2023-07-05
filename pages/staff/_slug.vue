<template>
  <section class="section container">
    <div class="columns is-vcentered is-multiline">
      <div class="column is-full-mobile is-full-tablet is-half-desktop is-two-thirds-widescreen is-two-third-fullhd">
        <div class="columns is-mobile">
          <div class="column is-narrow">
            <p class="title is-4 is-capitalized">
              {{one.firstName}}
            </p>
            <p class="subtitle is-6">
              {{one.slug}}
            </p>
          </div>
          <div class="column is-narrow">
            <bookmark-icon :one="one" size="is-large" />
          </div>
        </div>
        <div class="field is-grouped is-grouped-multiline">
          <div v-if="one.nationality" class="control">
            <div class="tags has-addons">
              <span class="tag is-medium">{{$t('nationality')}}</span>
              <span class="tag is-medium is-info">{{one.nationality}}</span>
            </div>
          </div>
          <div v-if="one.birthDate" class="control">
            <div class="tags has-addons">
              <span class="tag is-medium">{{$t('age')}}</span>
              <span class="tag is-medium is-info">{{age}} {{$t('years')}}</span>
            </div>
          </div>
        </div>
        <div class="field is-grouped is-grouped-multiline">
          <div v-if="one.height" class="control">
            <div class="tags has-addons">
              <span class="tag is-medium">{{$t('tall')}}</span>
              <span class="tag is-medium is-info">{{one.height}}</span>
            </div>
          </div>
          <div v-if="one.measureOne" class="control">
            <div class="tags has-addons">
              <span v-if="one.gender==='male'" class="tag is-medium">{{$t('shoulders')}}</span>
              <span v-if="one.gender==='female'" class="tag is-medium">{{$t('breast')}}</span>
              <span class="tag is-medium is-info">{{one.measureOne}}</span>
            </div>
          </div>
          <div v-if="one.measureTwo" class="control">
            <div class="tags has-addons">
              <span v-if="one.gender==='male'" class="tag is-medium">{{$t('arm')}}</span>
              <span v-if="one.gender==='female'" class="tag is-medium">{{$t('waist')}}</span>
              <span class="tag is-medium is-info">{{one.measureTwo}}</span>
            </div>
          </div>
          <div v-if="one.measureThree" class="control">
            <div class="tags has-addons">
              <span class="tag is-medium">{{$t('hips')}}</span>
              <span class="tag is-medium is-info">{{one.measureThree}}</span>
            </div>
          </div>
        </div>
        <div class="field is-grouped is-grouped-multiline">
          <div v-if="one.shirt" class="control">
            <div class="tags has-addons">
              <span class="tag is-medium">{{$t('dress')}}</span>
              <span class="tag is-medium is-info">{{one.shirt}}</span>
            </div>
          </div>
          <div v-if="one.pants" class="control">
            <div class="tags has-addons">
              <span class="tag is-medium">{{$t('pants')}}</span>
              <span class="tag is-medium is-info">{{one.pants}}</span>
            </div>
          </div>
          <div v-if="one.shoes" class="control">
            <div class="tags has-addons">
              <span class="tag is-medium">{{$t('shoes')}}</span>
              <span class="tag is-medium is-info">{{one.shoes}}</span>
            </div>
          </div>
        </div>
        <div class="field is-grouped is-grouped-multiline">
          <div v-if="one.es" class="control">
            <div class="tags has-addons">
              <span class="tag is-medium">{{$t('languages_es')}}</span>
              <span class="tag is-medium is-info">{{$t(one.es)}}</span>
            </div>
          </div>
          <div v-if="one.en" class="control">
            <div class="tags has-addons">
              <span class="tag is-medium">{{$t('languages_en')}}</span>
              <span class="tag is-medium is-info">{{$t(one.en)}}</span>
            </div>
          </div>
          <div v-if="one.pt" class="control">
            <div class="tags has-addons">
              <span class="tag is-medium">{{$t('languages_pt')}}</span>
              <span class="tag is-medium is-info">{{$t(one.pt)}}</span>
            </div>
          </div>
          <div v-if="one.fr" class="control">
            <div class="tags has-addons">
              <span class="tag is-medium">{{$t('languages_fr')}}</span>
              <span class="tag is-medium is-info">{{$t(one.fr)}}</span>
            </div>
          </div>
          <div v-if="one.it" class="control">
            <div class="tags has-addons">
              <span class="tag is-medium">{{$t('languages_it')}}</span>
              <span class="tag is-medium is-info">{{$t(one.it)}}</span>
            </div>
          </div>
          <div v-if="one.de" class="control">
            <div class="tags has-addons">
              <span class="tag is-medium">{{$t('languages_de')}}</span>
              <span class="tag is-medium is-info">{{$t(one.de)}}</span>
            </div>
          </div>
          <div v-if="one.cn" class="control">
            <div class="tags has-addons">
              <span class="tag is-medium">{{$t('languages_cn')}}</span>
              <span class="tag is-medium is-info">{{$t(one.cn)}}</span>
            </div>
          </div>
          <div v-if="one.ru" class="control">
            <div class="tags has-addons">
              <span class="tag is-medium">{{$t('languages_ru')}}</span>
              <span class="tag is-medium is-info">{{$t(one.ru)}}</span>
            </div>
          </div>
          <div v-if="one.jp" class="control">
            <div class="tags has-addons">
              <span class="tag is-medium">{{$t('languages_jp')}}</span>
              <span class="tag is-medium is-info">{{$t(one.jp)}}</span>
            </div>
          </div>
          <div v-if="one.officeWord" class="control"> 
            <div class="tags has-addons">
              <span class="tag is-medium">Office Word</span>
              <span class="tag is-medium is-info">{{$t(one.officeWord)}}</span>
            </div>
          </div>
          <div v-if="one.officeExcel" class="control"> 
            <div class="tags has-addons">
              <span class="tag is-medium">Office Excel</span>
              <span class="tag is-medium is-info">{{$t(one.officeExcel)}}</span>
            </div>
          </div>
          <div v-if="one.gsuiteDocs" class="control"> 
            <div class="tags has-addons">
              <span class="tag is-medium">Google Docs</span>
              <span class="tag is-medium is-info">{{$t(one.gsuiteDocs)}}</span>
            </div>
          </div>
          <div v-if="one.gsuiteSheets" class="control"> 
            <div class="tags has-addons">
              <span class="tag is-medium">Google Sheets</span>
              <span class="tag is-medium is-info">{{$t(one.gsuiteSheets)}}</span>
            </div>
          </div>
        </div>
        <div v-if="one.sectors && one.sectors.length" class="field is-grouped is-grouped-multiline">
          <div v-for="sector in one.sectors" :key="sector" class="control">
            <div class="tags">
              <span
                class="tag is-medium is-info">
                {{$t(sector)}}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        v-for="(pic,i) of one.media"
        :key="'pic'+i"
        class="column is-full-mobile is-half-tablet is-half-desktop is-one-third-widescreen is-one-third-fullhd">
        <div class="card">
          <div
            class="card-image"
          >
            <figure
              :style="'height: 350px; background-color:grey;'"
              class="image is-square"
            >
              <img
                @click="activateModal(pic)"
                :src="'/api/storage/img/c_fill,g_auto:subject,h_400,w_400/'+pic"
                :alt="one.slug+' '+i"
              >
            </figure>
          </div>
        </div>
      </div>
    </div>
    <b-modal :width="width" :active.sync="isImageModalActive">
      <p class="image">
        <img :src="'/api/storage/img/w_'+width+'/'+modalPic">
      </p>
    </b-modal>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Bookmark from '~/components/staff/bookmark'
export default {
  head () {
    return {
      title:  this.one.firstName,
    }
  },
  components: {
    bookmarkIcon: Bookmark
  },
  data () {
    return {
      isImageModalActive: false,
      modalPic: null,
      width: (process.client) ? parseInt(window.innerHeight/2) : 300
    }
  },
  async fetch ({ app, store, params: { slug }}) {
    try {
      const { data } = await app.$axios.get('/.netlify/functions/fauna-get-staff-by-slug', {
        params: { slug }
      })
      store.commit('staff/setOne', data[0])      
    } catch (error) {
      console.log(error)
    }
  },
  computed: {
    ...mapState({
      one: state => state.staff.one,
    }),
    age() {
      return this.$moment().diff(this.one.birthDate, 'years')
    }
  },
  methods: {
    activateModal (pic) {
      this.isImageModalActive = true,
      this.modalPic = pic
    }
  }
}
</script>

<style scoped>
.card {
    border-radius: 6px;
    overflow:hidden;
    box-shadow: 0 0.5em 1em -0.125em rgba(0, 0, 0, 0.5), 0 0px 0 1px rgba(0, 0, 0, 0.02);
}
figure {
    border-radius: 6px;
    overflow:hidden;
}
</style>

