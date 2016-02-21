Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/', function () {
  Router.go('/trips');
});

Router.route('/trips', {
  template: 'tripsList',
  data: function () {
    return {
      trips: Trip.find()
    }
  }
});

Router.route('/trips/new', {
  template: 'newTrip'
});

Router.route('/trips/:id', {
  template: 'tripOverview',
  data: function () {
    return Trip.findOne(this.params.id);
  }
});