<template>
<div class="il-cv">
    <div class="il-cv--items il-color--text__light" v-for="(cv,index) in curriculum" :key="index" :class="showOrhidden(index)">
        <div class="il-cv--profile">
             <img :src="getPicture(index)" :alt="`professor ${cv.profile.name}`" :title="`Professor ${cv.profile.name}`">
        </div>
        <div class="il-cv--name">
            <ul>
                <li class="il-color--text__accent">{{cv.profile.name}}</li>
                <li class="il-cv--sm-name">{{cv.profile.formation}}</li>
                <li class="il-cv--sm-name">{{cv.profile.cref}}</li>
            </ul>
        </div>
        <div class="il-cv--info">
            <ul>
                <li class="il-color--text__accent">Informações profissionais</li>
                <li class="il-cv--sm-name">{{cv.info.email}}</li>
                <li class="il-cv--sm-name">{{cv.info.address}}</li>
                <li class="il-cv--sm-name">{{cv.info.fone}}</li>
            </ul>
        </div>
        <div class="il-cv--edu">
            <ul>
                <li class="il-color--text__accent">Formação</li>
                <li class="il-cv--sm-name">{{cv.graduation.colege}}</li>
                <li class="il-color--text__accent">Outras</li>
                <li class="il-cv--sm-name" v-for="(other,o) in cv.details.others" :key="`others${o}`">{{other}}</li>
                <li class="il-color--text__accent">Cursos</li>
                <li class="il-cv--sm-name" v-for="(curse,c) in cv.details.curses" :key="`curses${c}`">{{curse}}</li>
            </ul>
        </div>
        <div class="il-cv--social">
            <ul>
                <li><a href="#" class="il-icons--link il-color--text__alt" title="Contate pelo whatsapp" @click="socialNetOpen('wap')"><i class="mdi mdi-whatsapp mdi-36px"></i></a></li>
                <li><a href="#" class="il-icons--link il-color--text__alt" title="Visite a rede social" @click="socialNetOpen('fb')"><i class="mdi mdi-facebook mdi-36px"></i></a></li>
                <li><a href="#" class="il-icons--link il-color--text__alt" title="Visite a rede social" @click="socialNetOpen('in')"><i class="mdi mdi-instagram mdi-36px"></i></a></li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "cv",
  data() {
    return {
      curriculum: [
        {
          profile: {
            name: "Claudia Muraguti Bezerra",
            formation: "Educadora Física",
            cref: "CREF: 0838-G/RS"
          },
          info: {
            email: "email: muraguti@kaizenpilates.com.br",
            address: "endereço: Rua Lavras 334/702 - Porto Alegre/RS",
            fone: "tel: 3333-33333"
          },
          graduation: {
            colege: "Graduada em Educação Física - UEL 1986"
          },
          details: {
            others: [
              "Pós-graduação em Educação Física Escolar pela Universidade Estadual de Maringá/PR",
              "Pós-graduação em Personal Training pela PUC/RS - 2000",
              "Pós-graduação em Reestruturação Corporal Global pela Universidade Gama Filho/RJ - 2005"
            ],
            curses: [
              "Curso Avançado de Osteoporose Physio Pilates - Polestar - 2008",
              "Curso de Coluna Avançada Physio Pilates - Polestar - 2008",
              "Curso de Formação de Professores da Escola de Postura da Universidade Federal do Rio Grande do Sul - 2001",
              "Curso prático intensivo de massagem - SESI/RS - 2000",
              "Curso de Flymoon Physio Pilates - Polestar - 2009"
            ]
          }
        },
        {
          profile: {
            name: "Claudia Muraguti Bezerra1",
            formation: "Educadora Física",
            cref: "CREF: 0838-G/RS"
          },
          info: {
            email: "email: muraguti@kaizenpilates.com.br",
            address: "endereço: Rua Lavras 334/702 - Porto Alegre/RS",
            fone: "tel: 3333-33333"
          },
          graduation: {
            colege: "Graduada em Educação Física - UEL 1986"
          },
          details: {
            others: [
              "Pós-graduação em Educação Física Escolar pela Universidade Estadual de Maringá/PR",
              "Pós-graduação em Personal Training pela PUC/RS - 2000",
              "Pós-graduação em Reestruturação Corporal Global pela Universidade Gama Filho/RJ - 2005"
            ],
            curses: [
              "Curso Avançado de Osteoporose Physio Pilates - Polestar - 2008",
              "Curso de Coluna Avançada Physio Pilates - Polestar - 2008",
              "Curso de Formação de Professores da Escola de Postura da Universidade Federal do Rio Grande do Sul - 2001",
              "Curso prático intensivo de massagem - SESI/RS - 2000",
              "Curso de Flymoon Physio Pilates - Polestar - 2009"
            ]
          }
        },
        {
          profile: {
            name: "Claudia Muraguti Bezerra2",
            formation: "Educadora Física",
            cref: "CREF: 0838-G/RS"
          },
          info: {
            email: "email: muraguti@kaizenpilates.com.br",
            address: "endereço: Rua Lavras 334/702 - Porto Alegre/RS",
            fone: "tel: 3333-33333"
          },
          graduation: {
            colege: "Graduada em Educação Física - UEL 1986"
          },
          details: {
            others: [
              "Pós-graduação em Educação Física Escolar pela Universidade Estadual de Maringá/PR",
              "Pós-graduação em Personal Training pela PUC/RS - 2000",
              "Pós-graduação em Reestruturação Corporal Global pela Universidade Gama Filho/RJ - 2005"
            ],
            curses: [
              "Curso Avançado de Osteoporose Physio Pilates - Polestar - 2008",
              "Curso de Coluna Avançada Physio Pilates - Polestar - 2008",
              "Curso de Formação de Professores da Escola de Postura da Universidade Federal do Rio Grande do Sul - 2001",
              "Curso prático intensivo de massagem - SESI/RS - 2000",
              "Curso de Flymoon Physio Pilates - Polestar - 2009"
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
    showOrhidden(k) {
      if (this.$parent.instructors[k].show) {
        let CV = document.getElementById("cv_" + (k + 1));
        CV.style.top = "-100%";
        CV.style.left = "0";
        CV.style.transition = "all 450ms";
        //CV.style.transform = "translateX(-50%)";
        return "cv-show";
      } else {
        return "cv-hidden";
      }
      /*if (this.active === k) {
        let CV = document.querySelector(".il-cv");
        CV.style.left = "50%";
        CV.style.transition = "left 500ms";
        CV.style.transform = "translateX(-50%)";
        return "cv-show";
      }
      return "cv-hidden";*/
    },
    getPicture(i) {
      return `${this.$parent.instructors[i].picture}`;
    },

    socialNetOpen(path) {
      let w = 626,
        h = 436;
      let urlFb = "https://www.facebook.com/BusqueFilme/?ref=bookmarks";
      let urlFbShare = "https://www.facebook.com/sharer/sharer.php?u=";
      let urlIn = "http://instagram.com/claumuraguti?ref=badge";
      let urlGo = "https://plus.google.com/u/0/114144280855980132006";
      let urlWap = "https://api.whatsapp.com/send?phone=5551999767179";
      switch (path) {
        case "wap":
          window.open(
            urlWap,
            "whatsapp-share-dialog",
            `"width=${w},height=${h}"`
          );
          break;
        case "fb":
          window.open(
            urlFbShare + encodeURIComponent(urlFb),
            "fb-follow",
            `"width=${w},height=${h}"`
          );
          break;
        case "in":
          window.open(
            urlIn,
            "instagram-share-dialog",
            `"width=${w},height=${h}"`
          );
          break;
        case "go":
          window.open(urlGo, "google-share-dialog", `"width=${w},height=${h}"`);
          break;
      }
    }
  }
};
</script>
