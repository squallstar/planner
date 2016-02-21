Template.tripsList.helpers({
  hasTrips: function () {
    return this.trips.count() > 0;
  }
});