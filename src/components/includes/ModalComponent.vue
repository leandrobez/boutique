<template>
<!--MODAL-->
<section id="il-modal" class="il-section il-section--modal il-color--background__modal">
    <div class="il-modal--content">
        <div class="il-modal--caption">
            <h2 class="il-section-sub--title il-color--text__dark">aqui vai o t´titulo</h2>
            <i class="mdi mdi-close mdi-24px il-color--text__dark" id="il-closeModal"></i>
        </div>
        <div class="il-modal--body">
            <slot name="m-body" />
        </div>
        <!--newsletter-->
        <div class="il-modal--footer">
            <slot name="m-footer" />
        </div>

    </div>
</section>
</template>

<script>
export default {
    name: "Modal"
}
</script>
