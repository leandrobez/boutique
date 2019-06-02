<template>
<!--MODAL-->
<section class="il-section il-section--modal il-section--modal__active" v-if="checkShow">
    <!--modal-->
    <div id="il-modal" class="il-modal">
        <div class="il-forms">
            <a href="!#" class="il-modal--close" @click.prevent="closeModal()">
              <i class="mdi mdi-12px mdi-close"></i>
            </a>
            <div class="il-modal--body">
                <ilForm />
            </div>
        </div>
    </div>
</section>
</template>

<script>
import ilForm from './FormContato.vue';
export default {
  name: 'Modal',
  components: {
    ilForm
  },
  props: ['check'],

  computed: {
    checkShow() {
      if (this.check) {
        return true;
      }
      return false;
    }
  },
  methods: {
    closeModal() {
      this.$parent.closeModal();
    }
  }
};
</script>
