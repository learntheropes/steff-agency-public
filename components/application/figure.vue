<template>
  <section class="section">
    <h4 class="title is-4">Info</h4>
    <div class="box">
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <label class="label">{{$t('tall')}}</label>
            <p class="control">
              <input v-model="height" v-validate.immediate="{'required':true,'integer':true,'min_value':'140','max_value':'200'}" :name="$t('tall')" class="input" type="text">
            </p>
            <p class="help is-danger">{{ errors.first($t('tall')) }}</p>
          </div>
          <div class="field">
            <label v-if="gender==='male'" class="label">{{$t('shoulders')}}</label>
            <label v-if="gender==='female'" class="label">{{$t('breast')}}</label>
            <label v-if="!gender" class="label">{{$t('shoulders')}}/{{$t('breast')}}</label>
            <p class="control">
              <input v-model="measureOne" v-validate.immediate="{'required':true,'integer':true}" name="shoulders-breast" class="input" type="text">
            </p>
            <p class="help is-danger">{{ errors.first('shoulders-breast') }}</p>
          </div>
          <div class="field">
            <label v-if="gender==='male'" class="label">{{$t('arm')}}</label>
            <label v-if="gender==='female'" class="label">{{$t('waist')}}</label>
            <label v-if="!gender" class="label">{{$t('arm')}}/{{$t('waist')}}</label>
            <p class="control">
              <input v-model="measureTwo" v-validate.immediate="{'required':true,'integer':true}" name="arm-waist" class="input" type="number">
            </p>
            <p class="help is-danger">{{ errors.first('arm-waist') }}</p>
          </div>
          <div class="field">
          <label class="label">{{$t('hips')}}</label>
            <p class="control">
              <input v-model="measureThree" v-validate.immediate="{'required':true,'integer':true}" :name="$t('hips')" class="input" type="number">
            </p>
            <p class="help is-danger">{{ errors.first($t('hips')) }}</p>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <label class="label">{{$t('weight')}}</label>
            <p class="control">
              <input v-model="weight" v-validate.immediate="{'required':true,'integer':true}" :name="$t('weight')" class="input" type="number">
            </p>
            <p class="help is-danger">{{ errors.first($t('weight')) }}</p>
          </div>
          <div class="field">
            <label class="label">{{$t('dress')}}</label>
            <p class="control">
              <input v-model="shirt" v-validate.immediate="{'required':true}" :name="$t('dress')" class="input" type="text">
            </p>
            <p class="help is-danger">{{ errors.first($t('dress')) }}</p>
          </div>
          <div class="field">
            <label class="label">{{$t('pants')}}</label>
            <p class="control">
              <input v-model="pants" v-validate.immediate="{'required':true}" :name="$t('pants')" class="input" type="text">
            </p>
            <p class="help is-danger">{{ errors.first($t('pants')) }}</p>
          </div>
          <div class="field">
            <label class="label">{{$t('shoes')}}</label>
            <p class="control">
              <input v-model="shoes" v-validate.immediate="{'required':true,'integer':true}" :name="$t('shoes')" class="input" type="number">
            </p>
            <p class="help is-danger">{{ errors.first($t('shoes')) }}</p>
          </div>
        </div>
      </div>
    </div>
    <h4 class="title is-4">Media</h4>
    <div class="box">
      <nav class="level">
        <div class="level-left">
          <div class="level-item">
            <button @click="tempFilesReset" class="button is-text">{{$t('form_reset')}}</button>
          </div>
          <div class="level-item">
            <input style="display:none" type="file" @change="onFileSelected" ref="fileInput" multiple="multiple">
            <a @click="$refs.fileInput.click()" class="button is-primary">{{$t('upload_media')}}</a>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <div v-if="tempFilesLength>0" class="level-item">
              <p class="has-text-centered">
                {{tempFilesLength}} {{$t('new_files')}}
              </p>
            </div>
          </div>
        </div>
      </nav>
      <div class="columns is-multiline is-mobile">
        <div
          v-for="(file, index) in allFinalMedia" :key="'file'+index" class="column is-narrow">
          <figure class="image is-128x128">
            <img :src="file">
          </figure>    
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'Figure',
  computed: {
    gender() {
      return this.$store.state.application.final.gender
    },
    height: {
      get() {
        return this.$store.state.application.final.height
      },
      set(value) {
        this.$store.commit('application/heightSet', value)
      }
    },
    measureOne: {
      get() {
        return this.$store.state.application.final.measureOne
      },
      set(value) {
        this.$store.commit('application/measureOneSet', value)
      }
    },
    measureTwo: {
      get() {
        return this.$store.state.application.final.measureTwo
      },
      set(value) {
        this.$store.commit('application/measureTwoSet', value)
      }
    },
    measureThree: {
      get() {
        return this.$store.state.application.final.measureThree
      },
      set(value) {
        this.$store.commit('application/measureThreeSet', value)
      }
    },
    weight: {
      get() {
        return this.$store.state.application.final.weight
      },
      set(value) {
        this.$store.commit('application/weightSet', value)
      }
    },
    shirt: {
      get() {
        return this.$store.state.application.final.shirt
      },
      set(value) {
        this.$store.commit('application/shirtSet', value)
      }
    },
    pants: {
      get() {
        return this.$store.state.application.final.pants
      },
      set(value) {
        this.$store.commit('application/pantsSet', value)
      }
    },
    shoes: {
      get() {
        return this.$store.state.application.final.shoes
      },
      set(value) {
        this.$store.commit('application/shoesSet', value)
      }
    },
    allFinalMedia() {
      return this.$store.state.application.final_files.media
    },
    tempFilesLength() {
      return this.$store.state.application.temp_files.media.length
    }
  },
  methods: {
    tempFilesReset(e) {
      e.preventDefault()
      this.$store.commit('application/tempMediaSet', [])
    },
    onFileSelected(event) {
      this.$store.commit('application/tempMediaSet', Array.from(event.target.files))
    }
  }
}
</script>
