Template.bindAutocomplete(Template.editTrip);

Template.editTrip.helpers({
  isNew: function () {
    return !this._id;
  },
  dateFromRange: function () {
    return moment().format('YYYY-MM-DD');
  }
});

Template.editTrip.events({
  'submit form': function (event, instance) {
    event.preventDefault();

    var data = {
      name: instance.$('[name="name"]').val(),
      location: instance.$('[name="location"]').val(),
      dateFrom: instance.$('[name="from"]').val(),
      dateTo: instance.$('[name="to"]').val()
    }, id;

    if (instance.data) {
      id = instance.data._id;
      Trip.update({ _id: id }, { $set: data });
    } else {
      id = Trip.insert(data);
      Bert.alert('Your trip "' + name + '" has been created');
    }

    Router.go('/trips/' + id);
  }
})