export const state = () => ({
  company: null,
  position: null,
  firstName: null,
  lastName: null,
  email: null,
  phone: null,
  description: null,
  dates: [],
  fromTime: null,
  toTime: null,
  place: null,
  hostessAmount: null,
  stewardAmount: null,
  uniform: null,
  skills: [],
  bookmarks: [],
  budget: {
    amount: null,
    currency: null
  }
})

export const mutations = {
  companySet(state, value) {
    state.company = value
  },
  positionSet(state, value) {
    state.position = value
  },
  firstNameSet(state, value) {
    state.firstName = value
  },
  lastNameSet(state, value) {
    state.lastName = value
  },
  emailSet(state, value) {
    state.email = value
  },
  phoneSet(state, value) {
    state.phone = value
  },
  descriptionSet(state, value) {
    state.description = value
  },
  setDates(state, value) {
    state.dates = value
  },
  setFromTime(state, value) {
    state.fromTime = value
  },
  setToTime(state, value) {
    state.toTime = value
  },
  setPlace(state, value) {
    state.place = value
  },
  setHostessAmount(state, value) {
    state.hostessAmount = value
  },
  setStewardAmount(state, value) {
    state.stewardAmount = value
  },
  setSkills(state, value) {
    if (value.action) {
      state.skills.push(value.skill)
    } else {
      state.skills.splice(state.skills.indexOf(value.skill),1)
    }
  },
  setUniform(state, value) {
    state.uniform = value
  },
  setBookmarks(state, value) {
    state.bookmarks = value
  },
  setBudgetAmount(state, value) {
    state.budget.amount = value
  },
  setBudgetCurrency(state, value) {
    state.budget.currency = value
  },
  formReset(state) {
    state.position = null
    state.firstName = null
    state.lastName = null
    state.company = null
    state.email = null
    state.phone = null
    state.description = null
    state.dates = []
    state.fromTime = null
    state.toTime = null
    state.place = null
    state.hostessAmount = null
    state.stewardAmount = null
    state.uniform = null
    state.skills = []
    state.bookmarks = []
    state.budget = {
      amount: null,
      currency: null
    }
  }
}
