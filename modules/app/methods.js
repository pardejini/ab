import collections from './collections/collections'
import helpers from './client/helpers/axiosHelpers';

  var apiURL = 'http://api.steampowered.com/IEconItems_730/GetPlayerItems/v0001/?key=705778F03D8B8B68BEE5A4EB06109A00&SteamID=76561197986025120';
Meteor.methods({

    getPlayersItems: function () { return HTTP.call('GET', apiURL ); }
})
