(function(t){function e(e){for(var s,l,n=e[0],c=e[1],r=e[2],d=0,m=[];d<n.length;d++)l=n[d],a[l]&&m.push(a[l][0]),a[l]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,r||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],s=!0,n=1;n<i.length;n++){var c=i[n];0!==a[c]&&(s=!1)}s&&(o.splice(e--,1),t=l(l.s=i[0]))}return t}var s={},a={app:0},o=[];function l(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=t,l.c=s,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(i,s,function(e){return t[e]}.bind(null,s));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var r=0;r<n.length;r++)e(n[r]);var u=c;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var s=i("64a9"),a=i.n(s);a.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.getBigImg(),attrs:{id:"app"}},[i("ilHeader"),i("div",{staticClass:"il-container"},[i("div",{staticClass:"il-overlay--dark"}),i("main",[i("RouterView")],1),i("il-footer"),i("il-modal")],1)],1)},o=[],l=(i("7f7f"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("header",{staticClass:"il-header",attrs:{id:"il-header"}},[i("div",{staticClass:"il-header--menu",on:{click:function(e){return e.preventDefault(),t.activeMenu(e)}}},[i("div",{staticClass:"il-menu--line"}),i("div",{staticClass:"il-menu--line"}),i("div",{staticClass:"il-menu--line"})]),i("div",{staticClass:"il-header--content"},[t._m(0),i("nav",{staticClass:"il-header--nav"},[i("ul",{staticClass:"il-menu--list"},t._l(t.menu,function(e){return i("li",{key:e.id,staticClass:"il-menu--list__item"},[i("router-link",{staticClass:"il-menu--link",class:t.isActive(e.id),attrs:{to:{name:e.link},title:e.title}},[i("span",{on:{click:function(e){t.hiddenMenu()}}},[t._v(t._s(e.label))])])],1)}),0)])])])])}),n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"il-header--portrait"},[i("div",{staticClass:"il-avatar--portrait"},[i("div",{attrs:{id:"il-avatar"}})])])}],c=(i("ac6a"),i("b54a"),{name:"HeaderComponent",mounted:function(){},data:function(){return{showMenu:!1,menu:[{id:1,link:"home",title:"Comece por aqui",label:"Home",icon:"il-pilates-icon flaticon-precision-posture",show:!0},{id:2,link:"about",title:"Saiba mais",label:"Sobre",icon:"il-pilates-icon flaticon-side-bending-posture",show:!0},{id:3,link:"studio",title:"Esse é o nosso studio",label:"O Studio",icon:"il-pilates-icon flaticon-pilates-reformer",show:!0},{id:4,link:"teachers",title:"Sem eles não existiriamos",label:"Os Intrutores",icon:"il-pilates-icon flaticon-twisting-arms",show:!0},{id:5,link:"class",title:"E para isso existimos",label:"As Aulas",icon:"il-pilates-icon flaticon-pilates-chair",show:!0},{id:6,link:"student",title:"Tudo isso para vocês",label:"Os Alunos",icon:"il-pilates-icon flaticon-exercises-with-reformer",show:!0},{id:7,link:"advantage",title:"Como ganhamos sua confiança",label:"Vantagens",icon:"il-pilates-icon flaticon-pilates-equipment",show:!0},{id:8,link:"video",title:"Para conhecer mais",label:"Vídeos",icon:"il-pilates-icon flaticon-centering-position",show:!0}]}},methods:{isActive:function(t){var e=this.$route.name,i=t-1;if(e==this.menu[i].link)return["current"]},hiddenMenu:function(){var t=document.querySelectorAll(".il-menu--line"),e=document.getElementById("il-header"),i=document.querySelector(".il-header--content"),s=document.querySelector(".il-header--portrait"),a=document.querySelector(".il-header--nav"),o=document.querySelectorAll(".il-menu--list__item");t.forEach(function(t){t.classList.remove("deform")}),e.classList.remove("active"),i.classList.remove("il-show--header"),s.classList.remove("show"),a.classList.remove("show"),o.forEach(function(t,e){var i=t.children[0];i.classList.remove("show-me"+(e+1))}),this.showMenu=!1},activeMenu:function(){var t=document.querySelector(".il-header--content"),e=document.querySelector(".il-header--portrait"),i=document.getElementById("il-header"),s=document.querySelector(".il-header--nav"),a=document.querySelectorAll(".il-menu--list__item"),o=document.querySelectorAll(".il-menu--line");this.showMenu?(o.forEach(function(t){t.classList.remove("deform")}),i.classList.remove("active"),t.classList.remove("il-show--header"),e.classList.remove("show"),s.classList.remove("show"),a.forEach(function(t){t.classList.remove("show-me")}),this.showMenu=!1):(o.forEach(function(t){t.classList.add("deform")}),i.classList.add("active"),t.classList.add("il-show--header"),e.classList.add("show"),s.classList.add("show"),a.forEach(function(t,e){var i=t.children[0];i.classList.add("show-me"+(e+1))}),this.showMenu=!0)}}}),r=c,u=i("2877"),d=Object(u["a"])(r,l,n,!1,null,null,null);d.options.__file="HeaderComponent.vue";var m=d.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"il-footer",class:t.getClass(),attrs:{id:"il-footer"}},[i("div",{staticClass:"il-footer--content"},[i("div",{staticClass:"il-footer--top"},[i("div",{staticClass:"il-container--wrapper"},[i("div",{staticClass:"il-footer--breadcrumb"},[i("i",{class:t.whatIcon}),i("span",{staticClass:"il-path"},[t._v(t._s(t.whereIAm))])]),t._m(0)])]),t._m(1)])])},h=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"il-footer--cols"},[i("div",{staticClass:"il-footer--col"},[i("h4",{staticClass:"il-footer--title"},[i("i",{staticClass:"mdi mdi-24px mdi-camera-iris il-color--text__light"}),i("a",{staticClass:"il-footer--list",attrs:{href:"#",title:"Veja fotos do studio"}},[t._v("studio")])])]),i("div",{staticClass:"il-footer--col"},[i("h4",{staticClass:"il-footer--title"},[i("i",{staticClass:"mdi mdi-24px mdi-camera-rear il-color--text__light"}),i("a",{staticClass:"il-footer--list",attrs:{href:"#",title:"Veja fotos de eventos"}},[t._v("eventos")])])]),i("div",{staticClass:"il-footer--col"},[i("h4",{staticClass:"il-footer--title"},[i("i",{staticClass:"mdi mdi-24px mdi-camera-party-mode il-color--text__light"}),i("a",{staticClass:"il-footer--list",attrs:{href:"#",title:"Veja fotos de cursos"}},[t._v("cursos")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"il-footer--bottom"},[i("div",{staticClass:"il-container--wrapper"},[t._v("bottom")])])}],p={name:"Footer",data:function(){return{whereIAm:"",whatIcon:""}},methods:{getClass:function(){var t=this.$route.name,e="";switch(t){case"home":e="il-footer--home",this.whereIAm="home",this.whatIcon="il-pilates-icon flaticon-precision-posture";break;case"about":e="il-footer--about",this.whereIAm="about",this.whatIcon="il-pilates-icon flaticon-side-bending-posture";break;case"studio":e="il-footer--studio",this.whereIAm="studio",this.whatIcon="il-pilates-icon flaticon-pilates-reformer";break;case"teachers":e="il-footer--teacher",this.whereIAm="professores",this.whatIcon="il-pilates-icon flaticon-twisting-arms";break;case"class":e="il-footer--class",this.whereIAm="aulas",this.whatIcon="il-pilates-icon flaticon-exercises-with-chair";break;case"student":e="il-footer--student",this.whereIAm="alunos",this.whatIcon="il-pilates-icon flaticon-exercises-with-reformer";break;case"advantage":e="il-footer--advantage",this.whereIAm="vantagens",this.whatIcon="il-pilates-icon flaticon-pilates-equipment";break;case"video":e="il-footer--video",this.whereIAm="home",this.whatIcon="il-pilates-icon flaticon-exercise-bands";break;default:e="il-footer--home",this.whereIAm="home",this.whatIcon="il-pilates-icon flaticon-precision-posture"}return this.showFooter(),e},showFooter:function(){setTimeout(function(){var t=document.getElementById("il-footer");t.classList.add("il-footer--show")},1200)}}},f=p,_=Object(u["a"])(f,v,h,!1,null,null,null);_.options.__file="FooterComponent.vue";var b=_.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"il-section il-section--modal il-color--background__modal",attrs:{id:"il-modal"}},[i("div",{staticClass:"il-modal--content"},[t._m(0),i("div",{staticClass:"il-modal--body"},[t._t("m-body")],2),i("div",{staticClass:"il-modal--footer"},[t._t("m-footer")],2)])])},g=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"il-modal--caption"},[i("h2",{staticClass:"il-section-sub--title il-color--text__dark"},[t._v("aqui vai o t´titulo")]),i("i",{staticClass:"mdi mdi-close mdi-24px il-color--text__dark",attrs:{id:"il-closeModal"}})])}],w={name:"Modal"},y=w,x=Object(u["a"])(y,C,g,!1,null,null,null);x.options.__file="ModalComponent.vue";var k=x.exports,E={name:"App",components:{ilHeader:m,ilFooter:b,ilModal:k},data:function(){return{headerActive:!1}},methods:{getBigImg:function(){var t=this.$route.name,e=null;switch(t){case"home":e="big-img-home";break;case"about":e="big-img-about";break;case"studio":e="big-img-studio";break;case"teachers":e="big-img-instructor";break;case"class":e="big-img-class";break;case"student":e="big-img-student";break;case"advantage":e="big-img-advantage";break;case"video":e="big-img-video";break}return e}}},q=E,I=(i("034f"),Object(u["a"])(q,a,o,!1,null,null,null));I.options.__file="App.vue";var A=I.exports,j=i("8c4f"),$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("section",{staticClass:"il-section il-section--home",attrs:{id:"il-home"}},[i("div",{staticClass:"il-container--wrapper"},[i("h1",{staticClass:"il-section--title"},[t._v("Claudia "),i("span",{staticClass:"il-color--text__gold"},[t._v("Muraguti")])]),i("h2",{staticClass:"il-section--sub-title"},[t._v("Educadora Physio Pilates, Master Trainer CoreAlign, Educadora\r\n                Física")]),i("p",{staticClass:"il-section--description il-color--text__gold"},[t._v("Palestrante e Instrutora.")]),i("div",{staticClass:"il-icons"},[i("a",{staticClass:"il-icons--link",attrs:{href:"#"}},[i("i",{staticClass:"mdi mdi-facebook mdi-48px"})]),i("a",{staticClass:"il-icons--link",attrs:{href:"#"}},[i("i",{staticClass:"mdi mdi-instagram mdi-48px"})]),i("a",{staticClass:"il-icons--link",attrs:{href:"#"}},[i("i",{staticClass:"mdi mdi-git mdi-48px"})])])])])])}],S={name:"Home",data:function(){return{whatIcon:"il-pilates-icon flaticon-precision-posture"}}},L=S,M=Object(u["a"])(L,$,O,!1,null,null,null);M.options.__file="home.vue";var P=M.exports,V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"il-container--wrapper"},[i("section",{staticClass:"il-section il-section--about",attrs:{id:"il-about"}},[i("h1",{staticClass:"il-section--title il-title--full"},[t._v("Boutique\r\n            "),i("span",{staticClass:"il-color--text__gold"},[t._v("Pilates")])])]),i("section",{staticClass:"il-section il-section--about__content"},[i("div",{staticClass:"il-about--content"},[i("p",[t._v("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur aspernatur soluta rem. Ipsam.")]),i("blockquote",{staticClass:"il-color--text__light"},[t._v("\r\n                Equilíbrio perfeito entre corpo e mente é aquela qualidade do homem civilizado, que não somente\r\n                dá a ele\r\n                uma superioridade\r\n                sobre o reino selvagem e animal, mas também provê ao mesmo todos os poderes físicos e mentais\r\n                que são\r\n                indispensáveis\r\n                para atingir o objetivo da humanidade!\r\n            ")])])])])}],B={name:"About",data:function(){return{whatIcon:"il-pilates-icon flaticon-side-bending-posture"}}},F=B,H=Object(u["a"])(F,V,T,!1,null,null,null);H.options.__file="about.vue";var D=H.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"il-container--wrapper"},[i("section",{staticClass:"il-section il-section--space",attrs:{id:"il-space"}},[i("h1",{staticClass:"il-section--title"},[t._v("O "),i("span",{staticClass:"il-color--text__gold"},[t._v("Studio")])]),i("h2",{staticClass:"il-section--sub-title"},[t._v("Seja Bem vindo a Boutique Pilates")]),i("div",{staticClass:"il-space--content il-color--background__verylight"},[i("h3",{staticClass:"il-section--title__small il-color--text__dark"},[t._v("Olá!")]),i("p",{staticClass:"il-color--text__dark"},[t._v("Você está em busca de uma atividade física que lhe ajude a melhorar a sua postura, e com isso alcançar o equilíbrio necessário para as suas atividades diárias?"),i("br"),t._v(" A Boutique Pilates oferece um ambiente de extremo requinte e foi pensado para que você respire com tranquilidade e climatizado com cerca de 135 m², onde equipamentos de excelente qualidade estão a sua disposição. Primamos pela qualidade das aulas onde o foco está na individualidade do aluno. Aqui você contará com profissionais preparados, motivados e dispostos a lhe oferecer um serviço de excelente qualidade.")])])])])}],R={name:"Studio",data:function(){return{whatIcon:"il-pilates-icon flaticon-pilates-reformer"}}},Y=R,J=Object(u["a"])(Y,z,N,!1,null,null,null);J.options.__file="studio.vue";var K=J.exports,U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"il-container--wrapper"},[i("section",{staticClass:"il-section il-section--instructor",attrs:{id:"il-instructor"}},[t._m(0),i("div",{staticClass:"il-intructors--cards"},[i("div",{staticClass:"il-cards"},[i("div",{staticClass:"il-cards--avatar"},[i("img",{staticClass:"img-circle",attrs:{src:t.teachers.number1,alt:"client1.jpg"}})]),t._m(1)]),i("div",{staticClass:"il-cards"},[i("div",{staticClass:"il-cards--avatar"},[i("img",{staticClass:"img-circle",attrs:{src:t.teachers.number2,alt:"client1.jpg"}})]),t._m(2)]),i("div",{staticClass:"il-cards"},[i("div",{staticClass:"il-cards--avatar"},[i("img",{staticClass:"img-circle",attrs:{src:t.teachers.number3,alt:"client1.jpg"}})]),t._m(3)])])])])},X=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h1",{staticClass:"il-section--title il-title--full"},[t._v("Os "),i("span",{staticClass:"il-color--text__gold"},[t._v("Instrutores")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"il-cards--body"},[i("div",{staticClass:"il-cards--caption"},[i("h4",[t._v("Professor Alfa")])]),i("div",{staticClass:"il-cards--content"},[i("i",{staticClass:"mdi mdi-format-quote-close mdi-24px"}),i("p",{staticClass:"il-cards--text"},[t._v("Excelente professora de CoreAlign")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"il-cards--body"},[i("div",{staticClass:"il-cards--caption"},[i("h4",[t._v("Professor X")])]),i("div",{staticClass:"il-cards--content"},[i("i",{staticClass:"mdi mdi-format-quote-close mdi-24px"}),i("p",{staticClass:"il-cards--text"},[t._v("Essa també é excelente?")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"il-cards--body"},[i("div",{staticClass:"il-cards--caption"},[i("h4",[t._v("Professor Y")])]),i("div",{staticClass:"il-cards--content"},[i("i",{staticClass:"mdi mdi-format-quote-close"}),i("p",{staticClass:"il-cards--text"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit.\r\n                                        Minima cum sint\r\n                                        quae?")])])])}],G={name:"Teachers",data:function(){return{whatIcon:"il-pilates-icon flaticon-twisting-arms",teachers:{number1:"images/pictures/teacher1.jpg",number2:"images/pictures/teacher2.jpg",number3:"images/pictures/teacher3.jpg"}}}},Q=G,W=Object(u["a"])(Q,U,X,!1,null,null,null);W.options.__file="teachers.vue";var Z=W.exports,tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"il-container--wrapper"},[i("section",{staticClass:"il-section il-section--class",attrs:{id:"il-class"}},[i("h1",{staticClass:"il-section--title il-title--full"},[t._v("As\r\n            "),i("span",{staticClass:"il-color--text__gold"},[t._v("Aulas")])]),i("h2",{staticClass:"il-section--sub-title"},[t._v("Venha fazer uma aula com a gente.")])]),i("section",{staticClass:"il-section il-section--about__content"},[i("div",{staticClass:"il-space--content il-color--background__verylight"},[i("h3",{staticClass:"il-section--title__small il-color--text__dark"},[t._v("Olá!")]),i("p",{staticClass:"il-color--text__dark"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, repellat hic. In eligendi rerum fuga soluta ipsam facere quam, architecto vel repellendus ducimus modi accusantium nostrum saepe dolorum ratione. Accusamus?.")])])])])}],it={name:"Class",data:function(){return{whatIcon:"il-pilates-icon flaticon-exercises-with-chair"}}},st=it,at=Object(u["a"])(st,tt,et,!1,null,null,null);at.options.__file="class.vue";var ot=at.exports,lt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},nt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"il-container--wrapper"},[i("section",{staticClass:"il-section il-section--studen",attrs:{id:"il-student"}},[i("h1",{staticClass:"il-section--title"},[t._v("Os "),i("span",{staticClass:"il-color--text__gold"},[t._v("Alunos")])]),i("h2",{staticClass:"il-section--sub-title"},[t._v("Tudo isso é para eles")])]),i("section",{staticClass:"il-section il-section--about__content"},[i("div",{staticClass:"il-space--content il-color--background__verylight"},[i("h3",{staticClass:"il-section--title__small il-color--text__dark"},[t._v("Vocês são os protagonistas")]),i("p",{staticClass:"il-color--text__dark"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, repellat hic. In eligendi rerum fuga soluta ipsam facere quam, architecto vel repellendus ducimus modi accusantium nostrum saepe dolorum ratione. Accusamus?.")])])])])}],ct={name:"Student",data:function(){return{whatIcon:"il-pilates-icon flaticon-exercises-with-reformer"}}},rt=ct,ut=Object(u["a"])(rt,lt,nt,!1,null,null,null);ut.options.__file="students.vue";var dt=ut.exports,mt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},vt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"il-container--wrapper"},[i("section",{staticClass:"il-section il-section--advantages",attrs:{id:"il-advantage"}},[i("h1",{staticClass:"il-section--title"},[t._v("As "),i("span",{staticClass:"il-color--text__gold"},[t._v("Vantagens")])]),i("h2",{staticClass:"il-section--sub-title"},[t._v("Nossos diferencias falam por si só")])]),i("section",{staticClass:"il-section il-section--class__content"},[i("div",{staticClass:"il-class--items"},[i("ul",{staticClass:"il-advantage--list"},[i("li",[i("span",[t._v("1item")])]),i("li",[i("span",[t._v("2item")])]),i("li",[i("span",[t._v("3item")])]),i("li",[i("span",[t._v("4item")])])])])])])}],ht={name:"Advantage",data:function(){return{whatIcon:"il-pilates-icon flaticon-pilates-equipment"}}},pt=ht,ft=Object(u["a"])(pt,mt,vt,!1,null,null,null);ft.options.__file="advantages.vue";var _t=ft.exports,bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"il-section il-section--videos",attrs:{id:"il-videos"}},[i("div",{staticClass:"il-container--wrapper"},[t._m(0),i("div",{staticClass:"il-videos--content il-grid"},t._l(t.videos,function(e,s){return i("div",{key:e.id,staticClass:"il-videos--cards"},[i("img",{attrs:{src:e.youtube.thumbnail,alt:e.name}}),i("div",{staticClass:"il-cards--caption"},[t._v("\r\n                    "+t._s(e.description)+"\r\n                ")]),i("div",{staticClass:"il-cards--bottom"},[i("span",{staticClass:"il-btn--video",attrs:{title:"Assistir "+e.name},on:{click:function(e){e.preventDefault(),t.runVideo(s)}}})])])}),0),i("div",{staticClass:"il-player",class:t.getClass()},[i("i",{staticClass:"mdi mdi-close mdi-24px",on:{click:function(e){e.preventDefault(),t.closeVideo()}}}),i("div",{staticClass:"il-player--video",attrs:{id:"il-video"}})])])])},Ct=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h1",{staticClass:"il-section--title il-title--full"},[t._v("Veja esses "),i("span",{staticClass:"il-color--text__gold"},[t._v("Vídeos")])])}],gt=i("9c6b"),wt={name:"Videos",mounted:function(){this.videos=gt,console.log(this.videos)},data:function(){return{whatIcon:"il-pilates-icon flaticon-exercise-bands",show:!1,trailer:null,videos:[]}},methods:{getClass:function(){var t=this.show?"show":"";return t},closeVideo:function(){var t=this,e=document.querySelector("iframe"),i=document.getElementById("il-video");setTimeout(function(){t.show=!1,e.setAttribute("src",""),e.style.width=0,e.style.height=0,i.removeChild(i.childNodes[0])},1e3)},runVideo:function(t){this.trailer=t;var e=this.videos[t],i={size:e.youtube.width,height:.5625*e.youtube.width,controls:"controls",allowfullscreen:"allowfullscreen",autoplay:!1,preload:"auto",techOrder:["youtube"],sources:[{type:"video/youtube",src:"https://www.youtube.com/embed/"+e.youtube.cod}]},s=document.createElement("iframe");s.setAttribute("src",i.sources[0].src),s.style.width=e.youtube.width,s.style.height=.5625*e.youtube.width;var a=document.getElementById("il-video");this.show=!0,setTimeout(function(){a.appendChild(s)},1e3)}}},yt=wt,xt=Object(u["a"])(yt,bt,Ct,!1,null,null,null);xt.options.__file="videos.vue";var kt=xt.exports,Et=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},qt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"il-section il-section--albuns",attrs:{id:"il-albuns"}},[i("div",{staticClass:"il-container--wrapper"},[i("h1",{staticClass:"il-section--title il-title--full"},[t._v("Nossas "),i("span",{staticClass:"il-color--text__accent"},[t._v("Fotos")])]),i("div",{staticClass:"il-albuns--content il-albuns--studio il-grid"},[i("div",{staticClass:"il-albuns--cards"},[i("div",{staticClass:"il-cards--caption"})])]),i("div",{staticClass:"il-albuns--content il-albuns--events il-grid"},[i("div",{staticClass:"il-albuns--cards"},[i("div",{staticClass:"il-cards--caption"})])]),i("div",{staticClass:"il-albuns--content il-albuns--course il-grid"},[i("div",{staticClass:"il-albuns--cards"},[i("div",{staticClass:"il-cards--caption"})])])])])}],It={name:"Album",data:function(){return{pictures:[]}}},At=It,jt=Object(u["a"])(At,Et,qt,!1,null,null,null);jt.options.__file="albuns.vue";var $t=jt.exports;s["a"].use(j["a"]);var Ot=new j["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:P},{path:"/about",name:"about",component:D},{path:"/studio",name:"studio",component:K},{path:"/teachers",name:"teachers",component:Z},{path:"/class",name:"class",component:ot},{path:"/student",name:"student",component:dt},{path:"/advantage",name:"advantage",component:_t},{path:"/videos",name:"video",component:kt},{path:"/albuns",name:"albuns",component:$t},{path:"*",redirect:"/"}]}),St=i("2f62");s["a"].use(St["a"]);var Lt=new St["a"].Store({state:{},mutations:{},actions:{}});s["a"].config.productionTip=!1,new s["a"]({router:Ot,store:Lt,render:function(t){return t(A)}}).$mount("#app")},"64a9":function(t,e,i){},"9c6b":function(t){t.exports=[{repository:"videos/chalenger.mov",name:"chalenger.mov",id:"video1",description:"Enfase no desafio e no equilíbrio.",youtube:{width:"560",height:"325",cod:"pT7I4afnrTo",thumbnail:"images/thumbnails/chalenger.jpg"}},{repository:"videos/coordination.mov",name:"coordination.mov",id:"video2",description:"Aqui a enfase está na coordenação e concentração.",youtube:{width:"560",height:"325",cod:"BC5kitSA2aU",thumbnail:"images/thumbnails/coordination.jpg"}},{repository:"videos/corealign.mov",name:"corealign.mov",id:"video3",description:"Movimentos harmoniosos e vigorosos.",youtube:{width:"560",height:"325",cod:"pVTuIHAcwmg",thumbnail:"images/thumbnails/corealign.jpg"}},{repository:"videos/plank.mov",name:"plank.mov",id:"video4",description:"Flexibilidade e equilíbrio.",youtube:{width:"560",height:"325",cod:"9HnhYYR6oE0",thumbnail:"images/thumbnails/plank.jpg"}},{repository:"videos/snake.mov",name:"snake.mov",id:"video5",description:"Resistência, equilíbrio e concentração.",youtube:{width:"560",height:"325",cod:"3jPq1SmsKO8",thumbnail:"images/thumbnails/snake.jpg"}}]}});
//# sourceMappingURL=app.25815cbd.js.map