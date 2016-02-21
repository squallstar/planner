Template.tripOverview.helpers({
  startsAt: function () {
    return 'Starts ' + moment(this.dateFrom).fromNow();
  }
});

Template.tripOverview.events({
  'click [data-delete]': function (event, instance) {
    event.preventDefault();

    Trip.remove(instance.data._id);
    Router.go('/');
  }
});