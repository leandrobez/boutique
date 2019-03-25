<template>
<div class="il-alert">
    <div :class="`il-alert--${message.type}`">
        <i class="mdi mdi-48px mdi-checkbox-marked-circle-outline"></i>
        <p>{{message.msg}}</p>
    </div>
</div>
</template>

<script>
export default {
  name: 'warnings',
  props: {
    message: Object
  }
};
</script>
