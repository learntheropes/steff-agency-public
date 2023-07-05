<template>
    <div>
      <b-field grouped>
        <b-field :label="$t('first_name_instr')" expanded>
          <b-field>
            <b-input v-model="firstName"></b-input>
          </b-field>
        </b-field>
        <b-field :label="$t('last_name_instr')" expanded>
          <b-field>
            <b-input v-model="lastName"></b-input>
          </b-field>
        </b-field>
      </b-field>

      <b-field grouped>
        <b-field :label="$t('company_role_instr')" expanded>
          <b-field>
            <b-input v-model="company"></b-input>
          </b-field>
        </b-field>
        <b-field :label="$t('quote_role_instr')" expanded>
          <b-field>
            <b-input v-model="position"></b-input>
          </b-field>
        </b-field>
      </b-field>

      <b-field grouped>
        <b-field :label="$t('quote_email_instr')" expanded>
          <b-field>
            <b-input v-model="email" type="email"></b-input>
          </b-field>
        </b-field>
        <b-field :label="$t('quote_phone_instr')" expanded>
          <b-field>
            <b-input v-model="phone"></b-input>
          </b-field>
        </b-field>
      </b-field>
    </div>
</template>

<script>
export default {
  name: 'Contact',
  computed: {
    company: {
      get() {
        return this.$store.state.quotation.company
      },
      set(value) {
        this.$store.commit('quotation/companySet', value)
      }
    },
    position: {
      get() {
        return this.$store.state.quotation.position
      },
      set(value) {
        this.$store.commit('quotation/positionSet', value)
      }
    },
    firstName: {
      get() {
        return this.$store.state.quotation.firstName
      },
      set(value) {
        this.$store.commit('quotation/firstNameSet', value)
      }
    },
    lastName: {
      get() {
        return this.$store.state.quotation.lastName
      },
      set(value) {
        this.$store.commit('quotation/lastNameSet', value)
      }
    },
    email: {
      get() {
        return this.$store.state.quotation.email
      },
      set(value) {
        this.$store.commit('quotation/emailSet', value)
      }
    },
    phone: {
      get() {
        return this.$store.state.quotation.phone
      },
      set(value) {
        this.$store.commit('quotation/phoneSet', value)
      }
    }
  },
}
</script>