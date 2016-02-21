Template.bindAutocomplete(Template.newTrip);

Template.newTrip.events({
  'submit form': function (event, instance) {
    event.preventDefault();

    var name = instance.$('[name="name"]').val(),
        location = instance.$('[name="location"]').val()

    var id = Trip.insert({
      name: name,
      location: location
    });

    Router.go('/trips/' + id);
  }
})