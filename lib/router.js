Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

/* -------------------------------------- */

Router.route('/', function () {
  Router.go('/trips');
});

/* -------------------------------------- */

Router.route('/trips', {
  template: 'tripsList',
  data: function () {
    return {
      trips: Trip.find()
    }
  }
});

/* -------------------------------------- */

Router.route('/trips/new', {
  template: 'editTrip'
});

/* -------------------------------------- */

TripController = RouteController.extend({
  data: function () {
    return Trip.findOne(this.params.trip);
  }
});

/* -------------------------------------- */

Router.route('/trips/:trip', {
  template: 'tripOverview',
  controller: TripController
});

/* -------------------------------------- */

Router.route('/trips/:trip/settings', {
  template: 'editTrip',
  controller: TripController
});

/* -------------------------------------- */

Router.route('/trips/:trip/add/:type', {
  template: 'tripAddBlock',
  controller: TripController,
  data: function () {
    return {
      trip: Trip.findOne(this.params.trip),
      block: _.find(BLOCK_TYPES, (block) => {
        return block.type === this.params.type;
      })
    }
  }
});