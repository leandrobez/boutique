<template>
<section class="il-cv">
    <div class="il-container--wrapper">
        <div class="il-cv--content" v-for="(cv,index) in curriculum" :key="index" :class="showOrhidden(index)">
            <div class="il-cv--profile"></div>
            <div class="il-cv--name">
                <ul>
                    <li class="il-color--text__gold">{{cv.profile.name}}</li>
                    <li class="il-cv--sm-name">{{cv.profile.formation}}</li>
                    <li class="il-cv--sm-name">{{cv.profile.cref}}</li>
                </ul>
            </div>
            <div class="il-cv--info">
                <ul>
                    <li class="il-color--text__gold">Informações profissionais</li>
                    <li class="il-cv--sm-name">{{cv.info.email}}</li>
                    <li class="il-cv--sm-name">{{cv.info.address}}</li>
                    <li class="il-cv--sm-name">{{cv.info.fone}}</li>
                </ul>
            </div>
            <div class="il-cv--edu">
                <ul>
                    <li class="il-color--text__gold">Formação</li>
                    <li class="il-cv--sm-name">{{cv.graduation.colege}}</li>
                    <li class="il-color--text__gold">Outras</li>
                    <li class="il-cv--sm-name" v-for="(other,o) in cv.details.others" :key="`others${o}`">{{other}}</li>
                    <li class="il-color--text__gold">Cursos</li>
                    <li class="il-cv--sm-name" v-for="(curse,c) in cv.details.curses" :key="`curses${c}`">{{curse}}</li>
                </ul>
            </div>
            <div class="il-cv--social">
                <ul>
                    <li><a href="https://goo.gl/NqkodQ" target="_blank"><i class="mdi mdi-24px mdi-facebook"></i></a></li>
                    <li><a href="https://goo.gl/4P9h6M" target="_blank"><i class="mdi mdi-24px mdi-facebook"></i></a></li>
                    <li><a href="https://goo.gl/5cLXe7" target="_blank"><i class="mdi mdi-24px mdi-facebook"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'cv',
    data() {
        return {
            curriculum: [{
                    profile: {
                        name: 'Claudia Muraguti Bezerra',
                        formation: 'Educadora Física',
                        cref: 'CREF: 0838-G/RS'
                    },
                    info: {
                        email: 'email: muraguti@kaizenpilates.com.br',
                        address: 'endereço: Rua Lavras 334/702 - Porto Alegre/RS',
                        fone: 'tel: 3333-33333'
                    },
                    graduation: {
                        colege: 'Graduada em Educação Física - UEL 1986'
                    },
                    details: {
                        others: [
                            'Pós-graduação em Educação Física Escolar pela Universidade Estadual de Maringá/PR',
                            'Pós-graduação em Personal Training pela PUC/RS - 2000',
                            'Pós-graduação em Reestruturação Corporal Global pela Universidade Gama Filho/RJ - 2005'
                        ],
                        curses: [
                            'Curso Avançado de Osteoporose Physio Pilates - Polestar - 2008',
                            'Curso de Coluna Avançada Physio Pilates - Polestar - 2008',
                            'Curso de Formação de Professores da Escola de Postura da Universidade Federal do Rio Grande do Sul - 2001',
                            'Curso prático intensivo de massagem - SESI/RS - 2000',
                            'Curso de Flymoon Physio Pilates - Polestar - 2009'
                        ]
                    }
                },
                {
                    profile: {
                        name: 'Claudia Muraguti Bezerra1',
                        formation: 'Educadora Física',
                        cref: 'CREF: 0838-G/RS'
                    },
                    info: {
                        email: 'email: muraguti@kaizenpilates.com.br',
                        address: 'endereço: Rua Lavras 334/702 - Porto Alegre/RS',
                        fone: 'tel: 3333-33333'
                    },
                    graduation: {
                        colege: 'Graduada em Educação Física - UEL 1986'
                    },
                    details: {
                        others: [
                            'Pós-graduação em Educação Física Escolar pela Universidade Estadual de Maringá/PR',
                            'Pós-graduação em Personal Training pela PUC/RS - 2000',
                            'Pós-graduação em Reestruturação Corporal Global pela Universidade Gama Filho/RJ - 2005'
                        ],
                        curses: [
                            'Curso Avançado de Osteoporose Physio Pilates - Polestar - 2008',
                            'Curso de Coluna Avançada Physio Pilates - Polestar - 2008',
                            'Curso de Formação de Professores da Escola de Postura da Universidade Federal do Rio Grande do Sul - 2001',
                            'Curso prático intensivo de massagem - SESI/RS - 2000',
                            'Curso de Flymoon Physio Pilates - Polestar - 2009'
                        ]
                    }
                },
                {
                    profile: {
                        name: 'Claudia Muraguti Bezerra2',
                        formation: 'Educadora Física',
                        cref: 'CREF: 0838-G/RS'
                    },
                    info: {
                        email: 'email: muraguti@kaizenpilates.com.br',
                        address: 'endereço: Rua Lavras 334/702 - Porto Alegre/RS',
                        fone: 'tel: 3333-33333'
                    },
                    graduation: {
                        colege: 'Graduada em Educação Física - UEL 1986'
                    },
                    details: {
                        others: [
                            'Pós-graduação em Educação Física Escolar pela Universidade Estadual de Maringá/PR',
                            'Pós-graduação em Personal Training pela PUC/RS - 2000',
                            'Pós-graduação em Reestruturação Corporal Global pela Universidade Gama Filho/RJ - 2005'
                        ],
                        curses: [
                            'Curso Avançado de Osteoporose Physio Pilates - Polestar - 2008',
                            'Curso de Coluna Avançada Physio Pilates - Polestar - 2008',
                            'Curso de Formação de Professores da Escola de Postura da Universidade Federal do Rio Grande do Sul - 2001',
                            'Curso prático intensivo de massagem - SESI/RS - 2000',
                            'Curso de Flymoon Physio Pilates - Polestar - 2009'
                        ]
                    }
                }
            ]
        };
    },
    props: {
        active: Number
    },
    methods: {
        showOrhidden (k) {
            
            if (this.active === k) {
                let CV = document.querySelector('.il-cv')
                CV.style.left = '50%'
                CV.style.transition = 'left 500ms'
                CV.style.transform = 'translateX(-50%)'
                return 'cv-show'
            }
            return 'cv-hidden'
        }
    }
};
</script>
