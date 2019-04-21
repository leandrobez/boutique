<template>
<div class="il-home--address">
    <p class="il-weight il-color--text__dark"><i class="mdi mdi-phone mdi-12px"></i>{{phone.ddd}} {{phone.number}}</p>
    <p class="il-weight il-color--text__dark"><i class="mdi mdi-map mdi-12px"></i>{{address}}</p>
    <p class="il-weight il-color--text__dark"><i class="mdi mdi-earth mdi-12px"></i>Porto Alegre - RS</p>
    <p class="il-weight il-color--text__dark"><i class="mdi mdi-email-variant mdi-12px"></i>contato@kaizenpilates.com</p>
    <p class="il-weight il-color--text__dark"><i class="mdi mdi-map-marker-radius mdi-12px" @click.prevent="openMap()"></i>mapa</p>
</div>
</template>

<script>
export default {
  name: "address",
  data() {
    return {
      address: "Av Lavras 334, Bairro Petrópolis, Porto Alegre - RS",
      phone: {
        ddd: "51",
        number: "99999-9999"
      }
    };
  }
};
</script>
