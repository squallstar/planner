Template.tripRow.helpers({
  dateFromAt: function () {
    return moment(this.dateFrom).format('DD MMM, YYYY');
  }
});