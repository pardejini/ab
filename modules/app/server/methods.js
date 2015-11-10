import collections from '../collections/collections'

  var apiURL = 'http://steamcommunity.com/profiles/76561198138299951/inventory/json/730/2';

  Meteor.methods({
      getItem: function (cb) { return HTTP.call('GET', apiURL , cb); }
  })
