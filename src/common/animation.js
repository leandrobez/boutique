import anime from 'animejs';

export const animeAbout = {
  methods: {
    startAnime() {
      let showAnime = anime.timeline({
        targets: '.il-item.il-item--0',
        easing: 'easeInOutQuad'
      });
      showAnime.add({
        opacity: ['0', '1'],
        duration: 500
      });
      let showAnime1 = anime.timeline({
        targets: '.il-item.il-item--1',
        easing: 'easeInOutQuad'
      });
      showAnime1.add({
        opacity: ['0', '1'],
        delay: 500,
        duration: 800
      });
    }
  }
};
export const animeStudio = {
  methods: {
    startAnime() {
      let showAnime = anime.timeline({
        targets: '.il-item',
        easing: 'easeInOutQuad'
      });
      showAnime.add({
        opacity: ['0', '1'],
        duration: 2000
      });
    }
  }
};
export const animeBox = {
  methods: {
    startAnime() {
      let showAnime = anime.timeline({
        targets: '.il-item.il-box',
        easing: 'easeInOutQuad'
      });
      showAnime.add({
        opacity: ['0', '1'],
        duration: 2000
      });
    }
  }
};
export const animeCards = {
  methods: {
    startAnime() {
      let init = 400;
      let include = 100;
      let showAnime = anime.timeline({
        targets: '.il-card--0',
        easing: 'easeInOutQuad'
      });
      showAnime.add({
        opacity: ['0', '1'],
        duration: init
      });
      showAnime.add({
        targets: '.il-card--1',
        opacity: ['0', '1'],
        duration: init + include
      });
      showAnime.add({
        targets: '.il-card--2',
        opacity: ['0', '1'],
        duration: init + 2 * include
      });
    }
  }
};
export const animeCardVideos = {
  methods: {
    startAnime() {
      let init = 400;
      let include = 100;
      let showAnime = anime.timeline({
        targets: '.il-card--0',
        easing: 'easeInOutQuad'
      });
      showAnime.add({
        opacity: ['0', '1'],
        duration: init
      });
      showAnime.add({
        targets: '.il-card--1',
        opacity: ['0', '1'],
        duration: init + include
      });
      showAnime.add({
        targets: '.il-card--2',
        opacity: ['0', '1'],
        duration: init + 2 * include
      });
      showAnime.add({
        targets: '.il-card--3',
        opacity: ['0', '1'],
        duration: init + 2 * include
      });
      showAnime.add({
        targets: '.il-card--4',
        opacity: ['0', '1'],
        duration: init + 2 * include
      });
    }
  }
};
