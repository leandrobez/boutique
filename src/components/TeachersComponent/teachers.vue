<template>
<section id="il-instructor" class="il-section il-section--instructor">
    <div class="il-container--wrapper">
        <h1 class="il-section--title il-title--full">Os <span class="il-color--text__very-light">Instrutores</span></h1>
        <h2 class="il-section--sub-title il-color--text__very-light text-right">Conheça os professores da <b>{{$parent.title}}</b>:</h2>
        <div class="il-intructors--cards">
            <div class="il-cards il-color--background__clean">
                <div class="il-cards--avatar">
                    <img class="img-circle" :src="teachers.number1" alt="client1.jpg" />
                </div>
                <div class="il-cards--body">
                    <div class="il-cards--caption">
                        <h4>Professor Alfa</h4>
                    </div>
                    <div class="il-cards--content">
                        <i class="mdi mdi-format-quote-close mdi-24px"></i>
                        <p class="il-cards--text">Excelente professora de CoreAlign</p>
                    </div>
                </div>
            </div>
            <div class="il-cards il-color--background__clean">
               <div class="il-cards--avatar">
                   <img class="img-circle" :src="teachers.number2" alt="client1.jpg" />
                </div>
                <div class="il-cards--body">
                   <div class="il-cards--caption">
                       <h4>Professor X</h4>
                   </div>
                   <div class="il-cards--content">
                       <i class="mdi mdi-format-quote-close mdi-24px"></i>
                       <p class="il-cards--text">Essa també é excelente?</p>
                   </div>
                </div>
            </div>
            <div class="il-cards il-color--background__clean">
                <div class="il-cards--avatar">
                    <img class="img-circle" :src="teachers.number3" alt="client1.jpg" />
                </div>
                <div class="il-cards--body">
                    <div class="il-cards--caption">
                        <h4>Professor Y</h4>
                    </div>
                    <div class="il-cards--content">
                        <i class="mdi mdi-format-quote-close"></i>
                        <p class="il-cards--text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Minima cum sint
                            quae?</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="il-space--content il-color--background__clean il-box il-margin--top il-margin--bottom">
            <p class="il-color--text__alt">Na <b>{{$parent.title}}</b> você contará com profissionais preparados, motivados e dispostos a lhe oferecer um serviço de excelente qualidade.</p>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'Teachers',

    data() {
        return {
            whatIcon: "il-pilates-icon flaticon-twisting-arms",
            teachers: {
                number1: 'images/pictures/teacher1.jpg',
                number2: 'images/pictures/teacher2.jpg',
                number3: 'images/pictures/teacher3.jpg'
            }
        }
    }
}
</script>
