// Generated by CoffeeScript 1.7.1
(function() {
  var ALL_STATUS;

  ALL_STATUS = ['pending', 'processing', 'completed', 'abandoned'];

  module.exports = {
    PENDING: 'pending',
    PROCESSING: 'processing',
    COMPLETE: 'completed',
    ABANDON: 'abandoned',
    isValid: function(status) {
      return ~ALL_STATUS.indexOf(status);
    }
  };

}).call(this);
