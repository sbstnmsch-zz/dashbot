module.exports = [
  '$logProvider', 'dashbot.config.log',
  function($logProvider, log) {
    'use strict';
    // note that this method only enables/disables
    // console.log.debug, not info, etc.!
    $logProvider.debugEnabled(log.enabled);
  }
];
