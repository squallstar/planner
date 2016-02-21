Template.tripCreateBlock.helpers({
  types : function () {
    return [
      { type: 'transport', label: 'Transport' },
      { type: 'event', label: 'Event' },
      { type: 'todo', label: 'Todo list' },
      { type: 'stay', label: 'Stay' }
    ];
  }
});