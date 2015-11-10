import collections from './collections/collections'
import helpers from './client/helpers/axiosHelpers';

  var apiURL = 'http://steamcommunity.com/profiles/76561198138299951/inventory/json/730/2';

if (Meteor.isServer) {
  Meteor.methods({
      getItem: function () { return HTTP.call('GET', apiURL ); }
  })

}
