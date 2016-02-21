Template.newTrip.events({
  'submit form': function (event, instance) {
    event.preventDefault();

    var name = instance.$('[name="name"]').val();

    var id = Trip.insert({
      name: name
    });

    Router.go('/trips/' + id);
  }
})