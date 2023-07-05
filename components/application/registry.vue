<template>
  <section class="section">
    <h4 class="title is-4">{{$t('contact')}}</h4>
    <div class="box">
      <div class="field is-horizontal">
        <div class="field-body">

          <div class="field">
            <label class="label">{{$t('gender')}}</label>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select v-model="gender" v-validate.immediate="'required'" :name="$t('gender')">
                  <option value="male">{{$t('male')}}</option>
                  <option value="female">{{$t('female')}}</option>
                </select>
              </div>
            </div>
            <p class="help is-danger">{{ errors.first($t('gender')) }}</p>
          </div>
          <div class="field">
            <label class="label">{{$t('first_name_instr')}}</label>
            <div class="control">
              <input v-model="firstName" v-validate.immediate="'required|alpha'" :name="$t('first_name_instr')" class="input" type="text">
            </div>
            <p class="help is-danger">{{ errors.first($t('first_name_instr')) }}</p>
          </div>
          <div class="field">
            <label class="label">{{$t('last_name_instr')}}</label>
            <div class="control">
              <input v-model="lastName" v-validate.immediate="'required|alpha'" :name="$t('last_name_instr')" class="input" type="text">
            </div>
            <p class="help is-danger">{{ errors.first($t('last_name_instr')) }}</p>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <label class="label">{{$t('quote_email_instr')}}</label>
            <div class="control">
              <input v-model="email" v-validate.immediate="'required'" :name="$t('quote_email_instr')" class="input" type="email">
            </div>
            <p class="help is-danger">{{ errors.first($t('quote_email_instr')) }}</p>
          </div>
          <div class="field">
            <label class="label">{{$t('quote_phone_instr')}}</label>
            <div class="control">
              <input v-model="phone" v-validate.immediate="'required|numeric'" :name="$t('quote_phone_instr')" class="input" type="text">
            </div>
            <p class="help is-danger">{{ errors.first($t('quote_phone_instr')) }}</p>
          </div>

        </div>
      </div>
    </div>
    <h4 class="title is-4">Otras</h4>
    <div class="box">
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
              <b-field :label="$t('birth_date')">
                <b-datepicker v-model="birthDate" v-validate.immediate="'required'" :max-date="maxDate" :month-names="dateTransaltions.months" :day-names="dateTransaltions.weekDays" :first-day-of-week="firstDay" :name="$t('birth_date')"></b-datepicker>
              </b-field>
            <p class="help is-danger">{{ errors.first($t('birth_date')) }}</p>
          </div>
          <div class="field">
            <label class="label">{{$t('nationality')}}</label>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select v-model="nationality">
                  <option>Afghanistan</option>
                  <option>Albania</option>
                  <option>Algeria</option>
                  <option>Andorra</option>
                  <option>Angola</option>
                  <option>Antigua and Barbuda</option>
                  <option>Argentina</option>
                  <option>Armenia</option>
                  <option>Australia</option>
                  <option>Austria</option>
                  <option>Azerbaijan</option>
                  <option>Bahamas</option>
                  <option>Bahrain</option>
                  <option>Bangladesh</option>
                  <option>Barbados</option>
                  <option>Belarus</option>
                  <option>Belgium</option>
                  <option>Belize</option>
                  <option>Benin</option>
                  <option>Bhutan</option>
                  <option>Bolivia</option>
                  <option>Bosnia and Herzegovina</option>
                  <option>Botswana</option>
                  <option>Brazil</option>
                  <option>Brunei</option>
                  <option>Bulgaria</option>
                  <option>Burkina Faso</option>
                  <option>Burundi</option>
                  <option>Côte d'Ivoire</option>
                  <option>Cabo Verde</option>
                  <option>Cambodia</option>
                  <option>Cameroon</option>
                  <option>Canada</option>
                  <option>Central African Republic</option>
                  <option>Chad</option>
                  <option>Chile</option>
                  <option>China</option>
                  <option>Colombia</option>
                  <option>Comoros</option>
                  <option>Congo (Congo-Brazzaville)</option>
                  <option>Costa Rica</option>
                  <option>Croatia</option>
                  <option>Cuba</option>
                  <option>Cyprus</option>
                  <option>Czechia (Czech Republic)</option>
                  <option>Democratic Republic of the Congo</option>
                  <option>Denmark</option>
                  <option>Djibouti</option>
                  <option>Dominica</option>
                  <option>Dominican Republic</option>
                  <option>Ecuador</option>
                  <option>Egypt</option>
                  <option>El Salvador</option>
                  <option>Equatorial Guinea</option>
                  <option>Eritrea</option>
                  <option>Estonia</option>
                  <option>Eswatini (fmr. "Swaziland")</option>
                  <option>Ethiopia</option>
                  <option>Fiji</option>
                  <option>Finland</option>
                  <option>France</option>
                  <option>Gabon</option>
                  <option>Gambia</option>
                  <option>Georgia</option>
                  <option>Germany</option>
                  <option>Ghana</option>
                  <option>Greece</option>
                  <option>Grenada</option>
                  <option>Guatemala</option>
                  <option>Guinea</option>
                  <option>Guinea-Bissau</option>
                  <option>Guyana</option>
                  <option>Haiti</option>
                  <option>Holy See</option>
                  <option>Honduras</option>
                  <option>Hungary</option>
                  <option>Iceland</option>
                  <option>India</option>
                  <option>Indonesia</option>
                  <option>Iran</option>
                  <option>Iraq</option>
                  <option>Ireland</option>
                  <option>Israel</option>
                  <option>Italy</option>
                  <option>Jamaica</option>
                  <option>Japan</option>
                  <option>Jordan</option>
                  <option>Kazakhstan</option>
                  <option>Kenya</option>
                  <option>Kiribati</option>
                  <option>Kuwait</option>
                  <option>Kyrgyzstan</option>
                  <option>Laos</option>
                  <option>Latvia</option>
                  <option>Lebanon</option>
                  <option>Lesotho</option>
                  <option>Liberia</option>
                  <option>Libya</option>
                  <option>Liechtenstein</option>
                  <option>Lithuania</option>
                  <option>Luxembourg</option>
                  <option>Madagascar</option>
                  <option>Malawi</option>
                  <option>Malaysia</option>
                  <option>Maldives</option>
                  <option>Mali</option>
                  <option>Malta</option>
                  <option>Marshall Islands</option>
                  <option>Mauritania</option>
                  <option>Mauritius</option>
                  <option>Mexico</option>
                  <option>Micronesia</option>
                  <option>Moldova</option>
                  <option>Monaco</option>
                  <option>Mongolia</option>
                  <option>Montenegro</option>
                  <option>Morocco</option>div
                  <option>Mozambique</option>
                  <option>Myanmar (formerly Burma)</option>
                  <option>Namibia</option>
                  <option>Nauru</option>
                  <option>Nepal</option>
                  <option>Netherlands</option>
                  <option>New Zealand</option>
                  <option>Nicaragua</option>
                  <option>Niger</option>
                  <option>Nigeria</option>
                  <option>North Korea</option>
                  <option>North Macedonia</option>
                  <option>Norway</option>
                  <option>Oman</option>
                  <option>Pakistan</option>
                  <option>Palau</option>
                  <option>Palestine State</option>
                  <option>Panama</option>
                  <option>Papua New Guinea</option>
                  <option>Paraguay</option>
                  <option>Peru</option>
                  <option>Philippines</option>
                  <option>Poland</option>
                  <option>Portugal</option>
                  <option>Qatar</option>
                  <option>Romania</option>
                  <option>Russia</option>
                  <option>Rwanda</option>
                  <option>Saint Kitts and Nevis</option>
                  <option>Saint Lucia</option>
                  <option>Saint Vincent and the Grenadines</option>
                  <option>Samoa</option>
                  <option>San Marino</option>
                  <option>Sao Tome and Principe</option>
                  <option>Saudi Arabia</option>
                  <option>Senegal</option>
                  <option>Serbia</option>
                  <option>Seychelles</option>
                  <option>Sierra Leone</option>
                  <option>Singapore</option>
                  <option>Slovakia</option>
                  <option>Slovenia</option>
                  <option>Solomon Islands</option>
                  <option>Somalia</option>
                  <option>South Africa</option>
                  <option>South Korea</option>
                  <option>South Sudan</option>
                  <option>Spain</option>
                  <option>Sri Lanka</option>
                  <option>Sudan</option>
                  <option>Suriname</option>
                  <option>Sweden</option>
                  <option>Switzerland</option>
                  <option>Syria</option>
                  <option>Tajikistan</option>
                  <option>Tanzania</option>
                  <option>Thailand</option>
                  <option>Timor-Leste</option>
                  <option>Togo</option>
                  <option>Tonga</option>
                  <option>Trinidad and Tobago</option>
                  <option>Tunisia</option>
                  <option>Turkey</option>
                  <option>Turkmenistan</option>
                  <option>Tuvalu</option>
                  <option>Uganda</option>
                  <option>Ukraine</option>
                  <option>United Arab Emirates</option>
                  <option>United Kingdom</option>
                  <option>United States of America</option>
                  <option>Uruguay</option>
                  <option>Uzbekistan</option>
                  <option>Vanuatu</option>
                  <option>Venezuela</option>
                  <option>Vietnam</option>
                  <option>Yemen</option>
                  <option>Zambia</option>
                  <option>Zimbabwe</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">{{$t('city')}}</label>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select v-model="city" :name="$t('city')">
                  <option>Buenos Aires</option>
                  <option>CABA</option>
                  <option>Catamarca</option>
                  <option>Chaco</option>
                  <option>Chubut</option>
                  <option>Córdoba</option>
                  <option>Corrientes</option>
                  <option>Entre Ríos</option>
                  <option>Formosa</option>
                  <option>Jujuy</option>
                  <option>La Pampa</option>
                  <option>La Rioja</option>
                  <option>Mendoza</option>
                  <option>Misiones</option>
                  <option>Neuquén</option>
                  <option>Río Negro</option>
                  <option>Salta</option>
                  <option>San Juan</option>
                  <option>San Luis</option>
                  <option>Santa Cruz</option>
                  <option>Santa Fe</option>
                  <option>Santiago del Estero</option>
                  <option>Tierra del Fuego</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <div class="control">
              <b-checkbox v-model="passport" type="is-light">{{$t('passport_doc')}}</b-checkbox>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <b-checkbox v-model="resident" type="is-light">{{$t('resident')}}</b-checkbox>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
function deltaDate(input, days, months, years) {
    return new Date(
      input.getFullYear() + years, 
      input.getMonth() + months, 
      Math.min(
        input.getDate() + days,
        new Date(input.getFullYear() + years, input.getMonth() + months + 1, 0).getDate()
      )
    );
}
export default {
  name: 'Registry',
  data () {
    return {
      firstDay: 1,
    }
  },
  computed: {
    maxDate() {
      return deltaDate(new Date(), 0, 0, -18)
    },
    dateTransaltions() {
      if (this.$store.state.i18n.locale === 'it') {
        return {
          months: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
          weekDays: ['D', 'L', 'Ma', 'Me', 'G', 'V', 'S']
        }
      }
      else if (this.$store.state.i18n.locale === 'es') {
        return {
          months: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
          weekDays: ['D', 'L', 'Ma', 'Mi', 'J', 'V', 'S']
        }
      }
      else {
        return {
          months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
          weekDays: ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'S']
        }
      }
    },
    timeTranslations() {
      if (this.$store.state.i18n.locale === 'it') {
        return {
          hours: 'Ore',
          minutes: 'Min'
        }
      }
      else if (this.$store.state.i18n.locale === 'es') {
        return {
          hours: 'Horas',
          minutes: 'Min'
        }
      }
      else {
        return {
          hours: 'Hours',
          minutes: 'Min'
        }
      }
    },
    gender: {
      get() {
        return (this.$store.state.application.final)
          ? this.$store.state.application.final.gender
          : null
      },
      set(value) {
        this.$store.commit('application/genderSet', value)
      }
    },
    firstName: {
      get() {
        return (this.$store.state.application.final)
          ? this.$store.state.application.final.firstName
          : null
      },
      set(value) {
        this.$store.commit('application/firstNameSet', value)
      }
    },
    lastName: {
      get() {
        return (this.$store.state.application.final)
          ? this.$store.state.application.final.lastName
          : null
      },
      set(value) {
        this.$store.commit('application/lastNameSet', value)
      }
    },
    phone: {
      get() {
        return (this.$store.state.application.final)
          ? this.$store.state.application.final.phone
          : null
      },
      set(value) {
        this.$store.commit('application/phoneSet', value)
      }
    },
    email: {
      get() {
        return (this.$store.state.application.final)
          ? this.$store.state.application.final.email
          : null
      },
      set(value) {
        this.$store.commit('application/emailSet', value)
      }
    },
    birthDate: {
      get() {
        return (this.$store.state.application.final)
          ? this.$store.state.application.final.birthDate
          : null
      },
      set(value) {
        this.$store.commit('application/birthDateSet', value)
      }
    },
    nationality: {
      get() {
        return (this.$store.state.application.final)
          ? this.$store.state.application.final.nationality
          : null
      },
      set(value) {
        this.$store.commit('application/nationalitySet', value)
      }
    },
    city: {
      get() {
        return (this.$store.state.application.final)
          ? this.$store.state.application.final.city
          : null
      },
      set(value) {
        this.$store.commit('application/citySet', value)
      }
    },
    passport: {
      get() {
        return (this.$store.state.application.final)
          ? this.$store.state.application.final.passport
          : null
      },
      set(value) {
        this.$store.commit('application/passportSet', value)
      }
    },
    drivingLicense: {
      get() {
        return (this.$store.state.application.final)
          ? this.$store.state.application.final.drivingLicense
          : null
      },
      set(value) {
        this.$store.commit('application/drivingLicenseSet', value)
      }
    },
    resident: {
      get() {
        return (this.$store.state.application.final)
          ? this.$store.state.application.final.resident
          : null
      },
      set(value) {
        this.$store.commit('application/residentSet', value)
      }
    }
  }
}
</script>
