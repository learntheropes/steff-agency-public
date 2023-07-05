<template>
  <section class="section">
    <h4 class="title is-4">Info</h4>
    <div class="box">
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <label class="label">{{$t('cv_type')}}</label>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select v-model="type">
                  <option value="experiences_business">{{$t('experiences_business')}}</option>
                  <option value="experiences_sport">{{$t('experiences_sport')}}</option>
                  <option value="experiences_bar">{{$t('experiences_bar')}}</option>
                  <option value="experiences_food">{{$t('experiences_food')}}</option>
                  <option value="experiences_street">{{$t('experiences_street')}}</option>
                  <option value="experiences_model">{{$t('experiences_model')}}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">{{$t('cv_brand')}}</label>
            <div class="control">
              <input
                v-model="brand"
                class="input"
                type="text">
            </div>
          </div>
          <div class="field">
            <label class="label">{{$t('cv_year')}}</label>
            <div class="control">
              <input v-model="year" v-validate="{'numeric':true,'min_value':'1970','max_value':'2022'}" :name="$t('cv_year')" class="input" type="text">
            </div>
            <p class="help is-danger">
              {{ errors.first($t('cv_year')) }}
            </p>
          </div>
          <div class="field">
            <label class="label">{{$t('cv_days')}}</label>
            <div class="control">
              <input v-model="days" class="input" type="text">
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
          <div class="field-body">
          <div class="field">
            <label class="label">{{$t('cv_description')}}</label>
            <div class="control">
              <textarea v-model="description" class="textarea" rows="5"></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-grouped">
        <p class="control">
          <a @click="resetForm" class="button is-text">{{$t('form_reset')}}</a>
        </p>
        <p class="control">
          <a @click="submitForm" class="button is-primary">{{$t('form_add')}}</a>
        </p>
      </div>
      <div v-for="(w,i) in works" :key="'w'+i" class="box">
        <div class="columns">
          <div class="column">
            <h4 class="title is-4 is-capitalized">{{w.brand}}</h4>
            <h6 class="subtitle is-6">
              <span v-if="w.year" class="has-text-weight-bold">{{w.year}}</span>
              <span v-if="w.type">{{$t(w.type)}}</span>
            </h6>
            <div class="content">
              <p class="is-italic">{{w.description}}</p>
            </div>
          </div>
          <div class="column is-narrow">
            <a @click="removeItem(i)" class="delete"></a>
          </div>  
        </div>
      </div>
    </div>
    <h4 class="title is-4">{{$t('references')}}</h4>
    <div class="box">
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <label class="label">{{$t('ref_company')}}</label>
            <div class="control">
              <input v-model="company" class="input" type="text">
            </div>
          </div>
          <div class="field">
            <label class="label">{{$t('ref_name')}}</label>
            <div class="control">
              <input v-model="name" class="input" type="text">
            </div>
          </div>
          <div class="field">
            <label class="label">{{$t('ref_contact')}}</label>
            <div class="control">
              <input v-model="contact" class="input" type="text">
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
      <div v-for="(w,i) in refs" :key="'w'+i" class="box">
        <div class="columns">
          <div class="column">
            <h4 class="title is-4 is-capitalized">{{w.company}}</h4>
            <h6 class="subtitle is-6">
              <span class="has-text-weight-bold">{{w.name}} {{w.contact}}</span>
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
  name: 'Works',
  computed: {
    works: {
      get() {
        return this.$store.state.application.final.works
      }
    },
    type: {
      get() {
        return this.$store.state.application.temp.work.type
      },
      set(value) {
        this.$store.commit('application/tempWorkTypeSet', value)
      }
    },
    brand: {
      get() {
        return this.$store.state.application.temp.work.brand
      },
      set(value) {
        this.$store.commit('application/tempWorkBrandSet', value)
      }
    },
    year: {
      get() {
        return this.$store.state.application.temp.work.year
      },
      set(value) {
        this.$store.commit('application/tempWorkYearSet', value)
      }
    },
    days: {
      get() {
        return this.$store.state.application.temp.work.days
      },
      set(value) {
        this.$store.commit('application/tempWorkDaysSet', value)
      }
    },
    description: {
      get() {
        return this.$store.state.application.temp.work.description
      },
      set(value) {
        this.$store.commit('application/tempWorkDescriptionSet', value)
      }
    },
    refs: {
      get() {
        return this.$store.state.application.final.refs
      }
    },
    company: {
      get() {
        return this.$store.state.application.temp.ref.company
      },
      set(value) {
        this.$store.commit('application/refCompanySet', value)
      }
    },
    name: {
      get() {
        return this.$store.state.application.temp.ref.name
      },
      set(value) {
        this.$store.commit('application/refNameSet', value)        
      }
    },
    contact: {
      get() {
        return this.$store.state.application.temp.ref.contact
      },
      set(value) {
        this.$store.commit('application/refContactSet', value)        
      }
    }
  },
  methods: {
    resetForm(e) {
      e.preventDefault()
      this.$store.commit('application/tempWorkReset')
    },
    submitForm(e) {
      e.preventDefault()
      this.$store.commit('application/worksSet')
    },
    removeItem(index) {
      this.$store.commit('application/workRemove', index)
    },
    tempFilesReset(e) {
      e.preventDefault()
      this.$store.commit('application/tempReferenceSet', [])
    },
    resetRefForm(e) {
      e.preventDefault()
      this.$store.commit('application/tempRefReset')
    },
    submitRefForm(e) {
      e.preventDefault()
      this.$store.commit('application/refSet')
    },
    removeRefItem (index) {
      this.$store.commit('application/refRemove', index)
    }
  },
}
</script>
