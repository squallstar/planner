Template.tripOverview.events({
  'click [data-delete]': function (event, instance) {
    event.preventDefault();

    Trip.remove(instance.data._id);
    Router.go('/');
  }
});