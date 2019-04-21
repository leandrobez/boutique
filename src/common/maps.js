//<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>

import googleMaps from '@google/maps';
const key = 'AIzaSyBJ9usSMvev68rfDKlnHPsJbsRoSL2tZqQ';
const map = {
  loaded: false,
  readyPromises: [],
  create: googleMaps.createClient({ key: key }),
  load: key => {
    let googleMapScript = null;
    if (typeof window === 'undefined') {
      // Do nothing if run from server-side
      return Promise.resolve();
    }
    if (!window.google || !window.google.map) {
      googleMapScript = document.createElement('SCRIPT');
      var options = {};
      if (typeof key === 'string') {
        options.key = key;
      } else {
        if (typeof key === 'object') {
          for (let k in key) {
            // transfer values in apiKey to options
            options[k] = key[k];
          }
        }
      }
    } else {
      throw new Error('`key` should either be a string or an object');
    }
    options['callback'] = 'VueGoogleMapsLoaded';
    const baseUrl = 'https://maps.googleapis.com';
    const urlParams = Object.keys(options)
      .map(
        key => `${encodeURIComponent(key)}=${encodeURIComponent(options[key])}`
      )
      .join('&');
    let version = '3.31';
    let url = `${baseUrl}/maps/api/js?${urlParams}&v=${version}`;
    googleMapScript.setAttribute('src', url);
    googleMapScript.setAttribute('async', '');
    googleMapScript.setAttribute('defer', '');
    document.body.appendChild(googleMapScript);
    window.VueGoogleMapsLoaded = this._setLoaded.bind(this);
  },
  _setLoaded: () => {
    this.loaded = true;
    for (const resolve of this.readyPromises) {
      resolve();
    }
    this.readyPromises = [];
  }
};

export default map;
