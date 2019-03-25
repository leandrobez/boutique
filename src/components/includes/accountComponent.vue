<template>
    <div v-if="checkProfile">
        {{profile.name}}
    </div>
</template>

<script>
export default {
  name: 'auth',
  data() {
    return {
      profile: {}
    };
  },
  computed: {
    checkProfile() {
      return false;
    }
  },
  mounted() {}
};
</script>