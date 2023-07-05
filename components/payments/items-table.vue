<template>
  <table class="table">
    <thead>
      <tr>
        <th>{{$t('description')}}</th>
        <th class="has-text-right">{{$t('units')}}</th>
        <th class="has-text-right">{{$t('unit_price')}}</th>
        <th class="has-text-right">{{$t('total')}}</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <th></th>
        <th></th>
        <th class="has-text-right">{{$t('total')}}:</th>
        <th class="has-text-right">{{total}} {{offer.currency}}</th>
      </tr>
    </tfoot>
    <tbody>
      <tr v-for="(item,index) in offer.items" :key="index">
        <td>{{item.description}}</td>
        <td class="has-text-right">{{item.amount}}</td>
        <td class="has-text-right">{{item.unitPrice}} {{offer.currency}}</td>
        <td class="has-text-right">{{item.amount * item.unitPrice}} {{offer.currency}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: [
    'offer'
  ],
  computed: {
    total () {
      return this.offer.items.reduce(function(tot, item) {
        tot = tot + (item.amount * item.unitPrice)
        return tot
      }, 0)
    }
  }
}
</script>