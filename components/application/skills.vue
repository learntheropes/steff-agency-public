<template>
  <section class="section">
    <h4 class="title is-4">{{$t('languages')}}</h4>
    <div class="box">
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <label class="label">{{$t('languages_es')}}</label>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select v-model="es" v-validate.immediate="{'required':true}" :name="$t('languages_es')">
                  <option value="language_basic">{{$t('language_basic')}}</option>
                  <option value="language_intermediate">{{$t('language_intermediate')}}</option>
                  <option value="language_advanced">{{$t('language_advanced')}}</option>
                  <option value="language_native">{{$t('language_native')}}</option>
                </select>
              </div>
            </div>
            <p class="help is-danger">{{ errors.first($t('languages_es')) }}</p>
          </div>
          <div class="field">
          <label class="label">{{$t('languages_en')}}</label>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select v-model="en">
                  <option value="language_basic">{{$t('language_basic')}}</option>
                  <option value="language_intermediate">{{$t('language_intermediate')}}</option>
                  <option value="language_advanced">{{$t('language_advanced')}}</option>
                  <option value="language_native">{{$t('language_native')}}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">{{$t('languages_pt')}}</label>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select v-model="pt">
                  <option value="language_basic">{{$t('language_basic')}}</option>
                  <option value="language_intermediate">{{$t('language_intermediate')}}</option>
                  <option value="language_advanced">{{$t('language_advanced')}}</option>
                  <option value="language_native">{{$t('language_native')}}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
          <label class="label">{{$t('languages_fr')}}</label>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select v-model="fr">
                  <option value="language_basic">{{$t('language_basic')}}</option>
                  <option value="language_intermediate">{{$t('language_intermediate')}}</option>
                  <option value="language_advanced">{{$t('language_advanced')}}</option>
                  <option value="language_native">{{$t('language_native')}}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">{{$t('languages_it')}}</label>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select v-model="it">
                  <option value="language_basic">{{$t('language_basic')}}</option>
                  <option value="language_intermediate">{{$t('language_intermediate')}}</option>
                  <option value="language_advanced">{{$t('language_advanced')}}</option>
                  <option value="language_native">{{$t('language_native')}}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
          <label class="label">{{$t('languages_de')}}</label>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select v-model="de">
                  <option value="language_basic">{{$t('language_basic')}}</option>
                  <option value="language_intermediate">{{$t('language_intermediate')}}</option>
                  <option value="language_advanced">{{$t('language_advanced')}}</option>
                  <option value="language_native">{{$t('language_native')}}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <label class="label">{{$t('languages_ru')}}</label>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select v-model="ru">
                  <option value="language_basic">{{$t('language_basic')}}</option>
                  <option value="language_intermediate">{{$t('language_intermediate')}}</option>
                  <option value="language_advanced">{{$t('language_advanced')}}</option>
                  <option value="language_native">{{$t('language_native')}}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
          <label class="label">{{$t('languages_cn')}}</label>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select v-model="cn">
                  <option value="language_basic">{{$t('language_basic')}}</option>
                  <option value="language_intermediate">{{$t('language_intermediate')}}</option>
                  <option value="language_advanced">{{$t('language_advanced')}}</option>
                  <option value="language_native">{{$t('language_native')}}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
          <label class="label">{{$t('languages_jp')}}</label>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select v-model="jp">
                  <option value="language_basic">{{$t('language_basic')}}</option>
                  <option value="language_intermediate">{{$t('language_intermediate')}}</option>
                  <option value="language_advanced">{{$t('language_advanced')}}</option>
                  <option value="language_native">{{$t('language_native')}}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h4 class="title is-4">{{$t('softare')}}</h4>
    <div class="box">
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <label class="label">Office Word</label>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select v-model="officeWord">
                  <option value="language_basic">{{$t('language_basic')}}</option>
                  <option value="language_intermediate">{{$t('language_intermediate')}}</option>
                  <option value="language_advanced">{{$t('language_advanced')}}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Office Excel</label>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select v-model="officeExcel">
                  <option value="language_basic">{{$t('language_basic')}}</option>
                  <option value="language_intermediate">{{$t('language_intermediate')}}</option>
                  <option value="language_advanced">{{$t('language_advanced')}}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <label class="label">Google Docs</label>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select v-model="gsuiteDocs">
                  <option value="language_basic">{{$t('language_basic')}}</option>
                  <option value="language_intermediate">{{$t('language_intermediate')}}</option>
                  <option value="language_advanced">{{$t('language_advanced')}}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Google Sheets</label>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select v-model="gsuiteSheets">
                  <option value="language_basic">{{$t('language_basic')}}</option>
                  <option value="language_intermediate">{{$t('language_intermediate')}}</option>
                  <option value="language_advanced">{{$t('language_advanced')}}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h4 class="title is-4">{{$t('certificates')}}</h4>
    <div class="box">
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <label class="label">{{$t('cv_year')}}</label>
            <div class="control">
              <input v-model="year" v-validate="{'numeric':true,'min_value':'1970','max_value': thisYear}" :name="$t('cv_year')" class="input" type="text">
            </div>
            <p class="help is-danger">{{ errors.first($t('cv_year')) }}</p>
          </div>
          <div class="field">
            <label class="label">{{$t('cv_title')}}</label>
            <div class="control">
              <input v-model="title" class="input" type="text">
            </div>
          </div>
        </div>
      </div>
      <div class="field is-grouped">
        <p class="control">
          <a @click="resetRefForm" class="button is-text">{{$t('form_reset')}}</a>
        </p>
        <p class="control">
          <a @click="submitRefForm" class="button is-primary">{{$t('form_add')}}</a>
        </p>
      </div>
      <div v-for="(w,i) in certificates" :key="'w'+i" class="box">
        <div class="columns">
          <div class="column">
            <h4 class="title is-4 is-capitalized">{{w.title}}</h4>
            <h6 class="subtitle is-6">
              <span class="has-text-weight-bold	">{{w.year}}</span>
            </h6>
          </div>
          <div class="column is-narrow">
            <a @click="removeRefItem(i)" class="delete"></a>
          </div>  
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  computed: {
    thisYear() {
      return new Date().getFullYear().toString()
    },
    es: {
      get() {
        return (this.$store.state.application.final)
          ? this.$store.state.application.final.es
          : null
      },
      set(value) {
        this.$store.commit('application/esSet', value)
      }
    },
    en: {
      get() {
        return (this.$store.state.application.final)
          ? this.$store.state.application.final.en
          : null
      },
      set(value) {
        this.$store.commit('application/enSet', value)
      }
    },
    pt: {
      get() {
        return (this.$store.state.application.final)
          ? this.$store.state.application.final.pt
          : null
      },
      set(value) {
        this.$store.commit('application/ptSet', value)
      }
    },
    fr: {
      get() {
        return (this.$store.state.application.final)
          ? this.$store.state.application.final.fr
          : null
      },
      set(value) {
        this.$store.commit('application/frSet', value)
      }
    },
    it: {
      get() {
        return (this.$store.state.application.final)
          ? this.$store.state.application.final.it
          : null
      },
      set(value) {
        this.$store.commit('application/itSet', value)
      }
    },
    de: {
      get() {
        return (this.$store.state.application.final)
          ? this.$store.state.application.final.de
          : null
      },
      set(value) {
        this.$store.commit('application/deSet', value)
      }
    },
    cn: {
      get() {
        return (this.$store.state.application.final)
          ? this.$store.state.application.final.cn
          : null
      },
      set(value) {
        this.$store.commit('application/cnSet', value)
      }
    },
    ru: {
      get() {
        return (this.$store.state.application.final)
          ? this.$store.state.application.final.ru
          : null
      },
      set(value) {
        this.$store.commit('application/ruSet', value)
      }
    },
    jp: {
      get() {
        return (this.$store.state.application.final)
          ? this.$store.state.application.final.jp
          : null
      },
      set(value) {
        this.$store.commit('application/jpSet', value)
      }
    },
    officeWord: {
      get() {
        return (this.$store.state.application.final)
          ? this.$store.state.application.final.officeWord
          : null
      },
      set(value) {
        this.$store.commit('application/officeWordSet', value)
      }
    },
    officeExcel: {
      get() {
        return (this.$store.state.application.final)
          ? this.$store.state.application.final.officeExcel
          : null
      },
      set(value) {
        this.$store.commit('application/officeExcelSet', value)
      }
    },
    gsuiteDocs: {
      get() {
        return (this.$store.state.application.final)
          ? this.$store.state.application.final.gsuiteDocs
          : null
      },
      set(value) {
        this.$store.commit('application/gsuiteDocsSet', value)
      }
    },
    gsuiteSheets: {
      get() {
        return (this.$store.state.application.final)
          ? this.$store.state.application.final.gsuiteSheets
          : null
      },
      set(value) {
        this.$store.commit('application/gsuiteSheetsSet', value)
      }
    },
    certificates: {
      get() {
        return this.$store.state.application.final.certificates
      }
    },
    year: {
      get() {
        return this.$store.state.application.temp.certificate.year
      },
      set(value) {
        this.$store.commit('application/tempCertificateYearSet', value)
      }
    },
    title: {
      get() {
        return this.$store.state.application.temp.certificate.title
      },
      set(value) {
        this.$store.commit('application/tempCertificateTitleSet', value)        
      }
    }
  },
  methods: {
    resetForm(e) {
      e.preventDefault()
      this.$store.commit('application/tempCertificateReset')
    },
    submitForm(e) {
      e.preventDefault()
      this.$store.commit('application/certificateSet')
    },
    removeItem(index) {
      this.$store.commit('application/certificateRemove', index)
    },
    tempFilesReset(e) {
      e.preventDefault()
      this.$store.commit('application/tempCertificateSet', [])
    },
    resetRefForm(e) {
      e.preventDefault()
      this.$store.commit('application/tempCertificateReset')
    },
    submitRefForm(e) {
      e.preventDefault()
      this.$store.commit('application/certificateSet')
    },
    removeRefItem (index) {
      this.$store.commit('application/certificateRemove', index)
    }
  }
}
</script>
