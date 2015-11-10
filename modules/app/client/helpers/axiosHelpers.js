import axios from 'axios'

function getFloat (id) {
	return axios.get('http://api.steampowered.com/IEconItems_730/GetPlayerItems/v0001/?key=705778F03D8B8B68BEE5A4EB06109A00&SteamID=' + id);
}

function getItemInfo (id) {
  return axios.get('http://steamcommunity.com/profiles/'+ id +'/inventory/json/730/2' );
}

var helpers = {
	getItems: function (id) {
		return axios.all([getFloat(id), getItemInfo(id)]) // Waiting for both "promises" to be resolved before it returns an array of data to .then
			.then(function (arr) {
				return {
					float: arr[0].data,
					info: arr[1].data
				}
			});
	}
};

module.exports = helpers;
