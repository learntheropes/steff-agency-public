export const state = () => ({
  init: false,
  final: {
    approved: false,
    published: false,
    email: null,
    gender: null,
    firstName: null,
    lastName: null,
    slug: null,
    phone: null,
    birthDate: null,
    nationality: null,
    city: null,
    passport: false,
    drivingLicense: false,
    resident: false,
    en: null,
    es: null,
    pt: null,
    it: null,
    fr: null,
    ru: null,
    cn: null,
    fr: null,
    de: null,
    jp: null,
    officeWord: null,
    officeExcel: null,
    gsuiteDocs: null,
    gsuiteSheets: null,
    height: null,
    weight: null,
    shirt: null,
    measureOne: null,
    measureTwo: null,
    measureThree: null,
    pants: null,
    shoes: null,
    works: [],
    certificates: [],
    refs: [],
    media: [],
    sectors: [],
    timetables: [],
    fee: {
      amount: null,
      currency: 'ARS'
    },
    publication: false
  },
  final_files: {
    media: [],
  },
  temp: {
    work: {
      type: null,
      brand: null,
      year: null,
      days: null,
      description: null,
    },
    ref: {
      company: null,
      name: null,
      contact: null
    },
    certificate: {
      year: null,
      title: null
    }
  },
  temp_files: {
    media: [],
  }
})

export const mutations = {

  init(state, value) {
    state.init = value
  },

  // USER
  finalUserSet(state, obj) {
    state.final = obj
  },

  finalUserReset(state) {
    state.init = false
    state.final = {
      approved: false,
      published: false,
      email: null,
      gender: null,
      firstName: null,
      lastName: null,
      slug: null,
      phone: null,
      birthDate: null,
      nationality: null,
      city: null,
      passport: false,
      drivingLicense: false,
      resident: false,
      en: null,
      es: null,
      pt: null,
      it: null,
      fr: null,
      ru: null,
      cn: null,
      fr: null,
      de: null,
      jp: null,
      officeWord: null,
      officeExcel: null,
      gsuiteDocs: null,
      gsuiteSheets: null,
      height: null,
      weight: null,
      shirt: null,
      measureOne: null,
      measureTwo: null,
      measureThree: null,
      pants: null,
      shoes: null,
      works: [],
      certificates: [],
      refs: [],
      media: [],
      sectors: [],
      timetables: [],
      fee: {
        amount: null,
        currency: 'ARS'
      },
      publication: false
    }
    state.final_files= {
      media: [],
    },
    state.temp = {
      work: {
        type: null,
        brand: null,
        year: null,
        days: null,
        description: null,
      },
      ref: {
        company: null,
        name: null,
        contact: null
      },
      certificate: {
        year: null,
        title: null
      }
    },
    state.temp_files = {
      media: [],
    }
  },

  tempUserReset(state) {
    state.temp = {
      work: {
        type: null,
        brand: null,
        year: null,
        days: null,
        description: null,
      }
    }
  },

  tempFilesReset(state) {
    state.temp_files = {
      media: [],
    }
  },

  slugSet(state) {
    const firstName = state.final.firstName.trim().toLowerCase().replace(' ', '-')
    const lastName = state.final.lastName.trim().toLowerCase().match(/\b(\w)/g).join('')
    state.final.slug = firstName + '-' + lastName
  },

  // REGISTRY
  genderSet(state, value) {
    state.final.gender = value
  },
  firstNameSet(state, value) {
    state.final.firstName = value
  },
  lastNameSet(state, value) {
    state.final.lastName = value
  },
  phoneSet(state, value) {
    state.final.phone = value
  },
  emailSet(state, value) {
    state.final.email = value
  },
  birthDateSet(state, value) {
    state.final.birthDate = value
  },
  nationalitySet(state, value) {
    state.final.nationality = value
  },
  citySet(state, value) {
    state.final.city = value
  },
  passportSet(state, value) {
    state.final.passport = value
  },
  drivingLicenseSet(state, value) {
    state.final.drivingLicense = value
  },
  residentSet(state, value) {
    state.final.resident = value
  },
  publicationSet(state,value) {
    state.final.publication = value
  },

  // SKILLS
  esSet(state, value) {
    state.final.es = value
  },
  enSet(state, value) {
    state.final.en = value
  },
  ptSet(state, value) {
    state.final.pt = value
  },
  frSet(state, value) {
    state.final.fr = value
  },
  itSet(state, value) {
    state.final.it = value
  },
  deSet(state, value) {
    state.final.de = value
  },
  cnSet(state, value) {
    state.final.cn = value
  },
  ruSet(state, value) {
    state.final.ru = value
  },
  jpSet(state, value) {
    state.final.jp = value
  },
  officeWordSet(state, value) {
    state.final.officeWord = value
  },
  officeExcelSet(state, value) {
    state.final.officeExcel = value
  },
  gsuiteDocsSet(state, value) {
    state.final.gsuiteDocs = value
  },
  gsuiteSheetsSet(state, value) {
    state.final.gsuiteSheets = value
  },

  // BODY
  mediaSet(state, values) {
    state.final.media = state.final.media.concat(values)
  },
  heightSet(state, value) {
    state.final.height = value
  },
  weightSet(state, value) {
    state.final.weight = value
  },
  shirtSet(state, value) {
    state.final.shirt = value
  },
  measureOneSet(state, value) {
    state.final.measureOne = value
  },
  measureTwoSet(state, value) {
    state.final.measureTwo = value
  },
  measureThreeSet(state, value) {
    state.final.measureThree = value
  },
  shirtSet(state, value) {
    state.final.shirt = value
  },
  pantsSet(state, value) {
    state.final.pants = value
  },
  shoesSet(state, value) {
    state.final.shoes = value
  },
  mediaSet(state, values) {
    state.final_files.media = values
  },
  tempMediaSet(state, values) {
    state.temp_files.media = values
  },

  // CERTIFICATES
  certificateSet(state) {
    if (!state.final.certificates) state.final.certificates = []
    state.final.certificates.push({
      year: state.temp.certificate.year,
      title: state.temp.certificate.title
    })
    state.temp.certificate = {
      year: null,
      title: null,
    }
  },
  certificateRemove(state, index) {
    state.final.certificates.splice(index,1)
  },
  tempCertificateReset(state) {
    state.temp.work = {
      year: null,
      title: null
    }
  },

  tempCertificateYearSet(state, value) {
    state.temp.certificate.year = value
  },
  tempCertificateTitleSet(state, value) {
    state.temp.certificate.title = value
  },


  // WORKS
  worksSet(state) {
    if (!state.final.works) state.final.works = []
    state.final.works.push({
      type: state.temp.work.type,
      brand: state.temp.work.brand,
      year: state.temp.work.year,
      days: state.temp.work.days,
      description: state.temp.work.description
    })
    state.temp.work = {
      type: null,
      brand: null,
      year: null,
      days: null,
      description: null
    }
  },
  workRemove(state, index) {
    state.final.works.splice(index,1)
  },
  tempWorkReset(state) {
    state.temp.work = {
      type: null,
      brand: null,
      year: null,
      days: null,
      description: null
    }
  },

  tempWorkTypeSet(state, value) {
    state.temp.work.type = value
  },
  tempWorkBrandSet(state, value) {
    state.temp.work.brand = value
  },
  tempWorkYearSet(state, value) {
    state.temp.work.year = value
  },
  tempWorkDaysSet(state, value) {
    state.temp.work.days = value
  },
  tempWorkDescriptionSet(state, value) {
    state.temp.work.description = value
  },

  // REFERENCES
  refCompanySet(state,value) {
    state.temp.ref.company = value
  },
  refNameSet(state,value) {
    state.temp.ref.name = value
  },
  refContactSet(state,value) {
    state.temp.ref.contact = value
  },
  refSet(state) {
    if (!state.final.refs) state.final.refs = []
    state.final.refs.push({
      company: state.temp.ref.company,
      name: state.temp.ref.name,
      contact: state.temp.ref.contact
    })
    state.temp.ref = {
      company: null,
      name: null,
      contact: null
    }
  },
  refRemove(state, index) {
    state.final.refs.splice(index,1)
  },
  temprefReset(state) {
    state.temp.ref = {
      company: null,
      name: null,
      contact: null
    }
  },

// AVAILABILITY
  sectorsSet(state,value) {
    state.final.sectors = value
  },
  timetablesSet(state,value) {
    state.final.timetables = value
  },
  feeAmountSet(state,value) {
    state.final.fee.amount = value
  },
  feeCurrencySet(state,value) {
    state.final.fee.currency = value
  }
}
