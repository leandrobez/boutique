<template>
<div class="il-container--wrapper">
    <section id="google-map">
    <div id="map-canvas" class="wow animated fadeInUp"></div>
</section>
</div>
</template>

<script>
export default {
  name: 'googleMap',
  props: {
    show: Boolean
  },
  data() {
    return {
      lat: -30.038657,
      log: -51.1908585
    };
  },
  mounted() {
    if (this.show) {
      this.mapInit();
    }
  },
  methods: {
    mapInit() {
      let isDraggable = document.width > 500 ? true : false;
      let myLatlng = new window.google.maps.LatLng(this.lat, this.log);
      let color = '#234c24',
        styleArray = [
          {
            featureType: 'landscape',
            stylers: [
              { saturation: -100 },
              { lightness: 65 },
              { visibility: 'on' }
            ]
          },
          {
            featureType: 'poi',
            stylers: [
              { saturation: -100 },
              { lightness: 51 },
              { visibility: 'simplified' }
            ]
          },
          {
            featureType: 'road.highway',
            stylers: [{ saturation: -100 }, { visibility: 'simplified' }]
          },
          {
            featureType: 'road.arterial',
            stylers: [
              { saturation: -100 },
              { lightness: 30 },
              { visibility: 'on' }
            ]
          },
          {
            featureType: 'road.local',
            stylers: [
              { saturation: -100 },
              { lightness: 40 },
              { visibility: 'on' }
            ]
          },
          {
            featureType: 'transit',
            stylers: [{ saturation: -100 }, { visibility: 'simplified' }]
          },
          {
            featureType: 'administrative.province',
            stylers: [{ visibility: 'off' }]
          },
          {
            featureType: 'water',
            elementType: 'labels',
            stylers: [
              { visibility: 'on' },
              { lightness: -25 },
              { saturation: -100 }
            ]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ hue: color }, { lightness: -25 }, { saturation: -87 }]
          }
        ];

      var mapOptions = {
        zoom: 16,
        center: myLatlng,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        styles: styleArray,
        draggable: isDraggable,
        scrollwheel: false
      };

      let map = new window.google.maps.Map(
        document.getElementById('map-canvas'),
        mapOptions
      );
      new window.google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: 'https://img.imgur.com/a6TdGI3.png'
      });
    }
  }
};
</script>