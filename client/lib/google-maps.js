var isLoaded;

GoogleMaps.init({
  libraries: 'places'
}, function () {
  isLoaded = true;
});

Template.bindAutocomplete = function (template) {
  var fields;

  template.onRendered(function () {
    fields = this.$('[data-location]');

    function attachAutocomplete () {
      fields.each(function () {
        this.autocomplete = new google.maps.places.Autocomplete(this, { types: ['geocode'] });
      });
    }

    isLoaded ? attachAutocomplete() : (window.onload = attachAutocomplete);
  });
};