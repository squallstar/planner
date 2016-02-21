GoogleMaps.init({
  libraries: 'places'
});

Template.bindAutocomplete = function (template) {
  var fields;

  template.onRendered(function () {
    fields = this.$('[data-location]');

    // Wait for Google Maps API to load
    window.onload = function() {
      fields.each(function () {
        this.autocomplete = new google.maps.places.Autocomplete(this, { types: ['geocode'] });
      });
    };
  });
};