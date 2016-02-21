Template.bindAutocomplete(Template.newTrip);

Template.newTrip.events({
  'submit form': function (event, instance) {
    event.preventDefault();

    var name = instance.$('[name="name"]').val(),
        location = instance.$('[name="location"]').val(),
        dateFrom = instance.$('[name="from"]').val(),
        dateTo = instance.$('[name="to"]').val();

    var id = Trip.insert({
      name: name,
      location: location,
      dateFrom: dateFrom,
      dateTo: dateTo
    });

    Bert.alert('Your trip "' + name + '" has been created');

    Router.go('/trips/' + id);
  }
})