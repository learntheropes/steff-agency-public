<template>
  <div>
    <div class="columns">
      <div class="column">
        <div class="columns">
          <div class="column">
            <b-field :label="$t('hostess_amount')">
              <b-numberinput
                v-model="hostessAmount"
                min="0"
                type="is-light">
              </b-numberinput>
            </b-field>
          </div>
          <div class="column">
            <b-field :label="$t('steward_amount')">
              <b-numberinput
                v-model="stewardAmount"
                min="0"
                type="is-light">
              </b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <b-field :label="$t('languages')"></b-field>
            <div
              v-for="skill in languageSkills"
              :key="skill"
              class="field">
              <b-checkbox
                v-model="requiredSkills"
                type="is-black"
                :true-value="{skill:skill,action:true}"
                :false-value="{skill:skill,action:false}"
                :native-value="skill">
                {{$t('languages_'+skill)}}
              </b-checkbox>
            </div>
          </div>
          <div class="column">
            <b-field :label="$t('softare')"></b-field>
            <div
              v-for="skill in softwareSkills"
              :key="skill"
              class="field">
              <b-checkbox
                v-model="requiredSkills"
                type="is-black"
                :true-value="{skill:skill,action:true}"
                :false-value="{skill:skill,action:false}"
                :native-value="skill">
                {{$t(skill)}}
              </b-checkbox>
            </div>
            <b-field :label="$t('uniforms')"></b-field>
            <div class="field">
              <b-radio v-model="uniform"
                  native-value="no">
                  {{$t('no_uniform')}}
              </b-radio>
            </div>
            <div class="field">
              <b-radio v-model="uniform"
                native-value="comun">
                {{$t('common_uniform')}}
              </b-radio>
            </div>
            <div class="field">
              <b-radio v-model="uniform"
                native-value="personalizada">
                {{$t('custom_uniform')}}
              </b-radio>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <b-field grouped>
              <b-field label="Budget" expanded>
                <b-field>
                  <b-input v-model="budgetAmount" expanded></b-input>
                  <b-select v-model="budgetCurrency" :placeholder="$t('currency')">
                    <option>ARS</option>
                    <option>USD</option>
                  </b-select>
                </b-field>
              </b-field>
            </b-field>            
          </div>
          <div class="column">
            <div class="field">
              <label class="label" >{{$t('include_bookmarks')}}</label>
              <div class="control">
                <b-switch
                  v-model="includeBookmarks"
                  type="is-light"
                  :true-value="$t('yes')"
                  :false-value="$t('no')">
                  {{includeBookmarks}}
                </b-switch>
              </div>
            </div>  
          </div>
        </div>
      </div>
      <div class="column">
        <b-field :label="$t('dates')">
          <b-datepicker
            v-model="dates"
            :month-names="dateTransaltions.months"
            :day-names="dateTransaltions.weekDays"
            :first-day-of-week="firstDay"
            inline
            range>
          </b-datepicker>
        </b-field>
        <div class="columns">
          <div class="column is-narrow">
            <b-field :label="$t('start_time')">
              <b-select v-model="fromTime">
                <option>00:00</option>
                <option>00:30</option>
                <option>01:00</option>
                <option>01:30</option>
                <option>02:00</option>
                <option>02:30</option>
                <option>03:00</option>
                <option>03:30</option>
                <option>04:00</option>
                <option>04:30</option>
                <option>05:00</option>
                <option>05:30</option>
                <option>06:00</option>
                <option>06:30</option>
                <option>07:00</option>
                <option>07:30</option>
                <option>08:00</option>
                <option>08:30</option>
                <option>09:00</option>
                <option>09:30</option>
                <option>10:00</option>
                <option>10:30</option>
                <option>11:00</option>
                <option>11:30</option>
                <option>12:00</option>
                <option>12:30</option>
                <option>13:00</option>
                <option>13:30</option>
                <option>14:00</option>
                <option>14:30</option>
                <option>15:00</option>
                <option>15:30</option>
                <option>16:00</option>
                <option>16:30</option>
                <option>17:00</option>
                <option>17:30</option>
                <option>18:00</option>
                <option>18:30</option>
                <option>19:00</option>
                <option>19:30</option>
                <option>20:00</option>
                <option>20:30</option>
                <option>21:00</option>
                <option>21:30</option>
                <option>22:00</option>
                <option>22:30</option>
                <option>23:00</option>
                <option>23:30</option>
              </b-select>
            </b-field>
          </div>
          <div class="column is-narrow">
            <b-field :label="$t('end_time')">
              <b-select v-model="toTime">
                <option>00:00</option>
                <option>00:30</option>
                <option>01:00</option>
                <option>01:30</option>
                <option>02:00</option>
                <option>02:30</option>
                <option>03:00</option>
                <option>03:30</option>
                <option>04:00</option>
                <option>04:30</option>
                <option>05:00</option>
                <option>05:30</option>
                <option>06:00</option>
                <option>06:30</option>
                <option>07:00</option>
                <option>07:30</option>
                <option>08:00</option>
                <option>08:30</option>
                <option>09:00</option>
                <option>09:30</option>
                <option>10:00</option>
                <option>10:30</option>
                <option>11:00</option>
                <option>11:30</option>
                <option>12:00</option>
                <option>12:30</option>
                <option>13:00</option>
                <option>13:30</option>
                <option>14:00</option>
                <option>14:30</option>
                <option>15:00</option>
                <option>15:30</option>
                <option>16:00</option>
                <option>16:30</option>
                <option>17:00</option>
                <option>17:30</option>
                <option>18:00</option>
                <option>18:30</option>
                <option>19:00</option>
                <option>19:30</option>
                <option>20:00</option>
                <option>20:30</option>
                <option>21:00</option>
                <option>21:30</option>
                <option>22:00</option>
                <option>22:30</option>
                <option>23:00</option>
                <option>23:30</option>
              </b-select>
            </b-field>
          </div>
        </div>
      </div>
    </div>
    <bookmarks-cards v-if="includeBookmarks===$t('yes')" />
  </div>
</template>

<script>
import Bookmarks from './bookmarks'
export default {
  name: 'StaffQuotation',
  components: {
    bookmarksCards: Bookmarks
  },
  data() {
    return {
      includeBookmarks: this.$t('yes'),
      incrementMinutes: 30,
      firstDay: 1,
      minDate: new Date(),
      languageSkills: ['es','en','pt','fr','it','de','ru','cn','jp'],
      softwareSkills: ['Office Word','Office Excel','Google Docs','Google Sheets']
    }
  },
  computed: {
    maxDate() {
      const d = new Date()
      d.setFullYear(d.getFullYear() + 1)
      return d
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
    dates: {
      get () {
        this.$store.state.quotation.dates
      },
      set (value) {
        this.$store.commit('quotation/setDates', value)
      }
    },
    fromTime: {
      get () {
        this.$store.state.quotation.fromTime
      },
      set (value) {
        this.$store.commit('quotation/setFromTime', value)
      }
    },
    toTime: {
      get () {
        this.$store.state.quotation.toTime
      },
      set (value) {
        this.$store.commit('quotation/setToTime', value)
      }
    },
    hostessAmount: {
      get () {
        this.$store.state.quotation.hostessAmount
      },
      set (value) {
        this.$store.commit('quotation/setHostessAmount', value)
      }
    },
    stewardAmount: {
      get () {
        this.$store.state.quotation.stewardAmount
      },
      set (value) {
        this.$store.commit('quotation/setStewardAmount', value)
      }
    },
    requiredSkills: {
      get () {
        this.$store.state.quotation.skills
      },
      set (value) {
        this.$store.commit('quotation/setSkills', value)
      }
    },
    uniform: {
      get () {
        this.$store.state.quotation.uniform
      },
      set (value) {
        this.$store.commit('quotation/setUniform', value)
      }
    },
    budgetAmount: {
      get () {
        this.$store.state.quotation.budget.amount
      },
      set (value) {
        this.$store.commit('quotation/setBudgetAmount', value)
      }
    },
    budgetCurrency: {
      get () {
        this.$store.state.quotation.budget.currency
      },
      set (value) {
        this.$store.commit('quotation/setBudgetCurrency', value)
      }
    }
  }
}
</script>
