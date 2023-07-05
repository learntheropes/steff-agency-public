<template>
  <section class="section container">
    <div class="box">
      <h1 class="title is-1">{{$t('h_001')}}</h1>
      <p>{{$t('p_001')}}</p>
      <br>
      <p>{{$t('p_002')}}</p>
      <br>
      <p>{{$t('p_003')}}</p>
      <br>
      <p>{{$t('p_004')}}</p>
      <br>
      <h3 class="title">{{$t('h_002')}}</h3>
      <p>{{$t('p_005')}}</p>
      <br>
      <h5 class="subtitle">{{$t('h_003')}}</h5>
      <h6 class="subtitle is-6">{{$t('h_004')}}</h6>
      <p>{{$t('p_006')}}</p>
      <p>{{$t('p_007')}}<p>
      <p>{{$t('p_008')}}</p>
      <br>
      <h6 class="subtitle is-6">{{$t('h_005')}}</h6>
      <p>{{$t('p_0081')}}</p>
      <br>
      <h6 class="subtitle is-6">{{$t('h_006')}}</h6>
      <p>{{$t('p_009')}}</p>
      <p>{{$t('p_010')}}</p>
      <p>{{$t('p_011')}}</p>
      <p>{{$t('p_012')}}</p>
      <p>{{$t('p_013')}}</p>
      <p>{{$t('p_014')}}</p>
      <p>{{$t('p_015')}}</p>
      <br>
      <h5 class="subtitle">{{$t('h_007')}}</h5>
      <p>{{$t('p_016')}}</p>
      <p>{{$t('p_017')}}</p>
      <p>{{$t('p_018')}}</p>
      <p>{{$t('p_019')}}</p>
      <p>{{$t('p_020')}}</p>
      <p>{{$t('p_021')}}</p>
      <p>{{$t('p_022')}}</p>
      <p>{{$t('p_023')}}</p>
      <br>
      <h5 class="subtitle">{{$t('h_008')}}</h5>
      <p>{{$t('p_024')}}</p>
      <p>{{$t('p_027')}}</p>
      <br>
      <h5 class="subtitle">{{$t('h_009')}}</h5>
      <br>
      <h6 class="subtitle is-6">{{$t('h_010')}}</h6>
      <p>{{$t('p_028')}}</p>
      <p>{{$t('p_029')}}</p>
      <p>{{$t('p_030')}}</p>
      <p>{{$t('p_031')}}</p>
      <p>{{$t('p_032')}}</p>
      <p>{{$t('p_033')}}</p>
      <br>    
      <h5 class="subtitle is-5">{{$t('h_011')}}</h5>
      <p>{{$t('p_034')}}</p>
      <br>
      <h5 class="subtitle is-5">{{$t('h_012')}}</h5>
      <p>{{$t('p_035')}}</p>
      <p>{{$t('p_036')}}</p>
      <br>
      <h5 class="subtitle is-5">{{$t('h_013')}}</h5>
      <p>{{$t('p_037')}}</p>
      <p>{{$t('p_038')}}</p>
      <br>
      <h5 class="subtitle is-6">{{$t('h_014')}}</h5>
      <p>{{$t('p_039')}}</p>
      <p>{{$t('p_040')}}</p>
      <br>
      <h5 class="subtitle is-5">{{$t('h_015')}}</h5>
      <p>{{$t('p_041')}}</p>
      <p>{{$t('p_042')}}</p>
      <p>{{$t('p_043')}}</p>
      <br>
      <h5 class="subtitle is-6">{{$t('h_016')}}</h5>
      <p>{{$t('p_044')}}</p>
      <p>{{$t('p_045')}}</p>
    </div>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title:  this.$t('privacy'),
    }
  },
  nuxtI18n: {
    paths: {
      en: '/privacy-policy',
      es: '/politica-de-privacidad',
      it: '/politica-sulla-privacy',
      br: '/politica-de-privacidade'
    }
  }
}
</script>
