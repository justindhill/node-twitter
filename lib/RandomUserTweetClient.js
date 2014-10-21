var Util = require('util');
var Client = require('./Client');
var Constants = require('./Constants');

/**
 * Creates an instance of RandomUserTweetClient.
 *
 * @constructor
 * @this {SearchClient}
 * @param {String} consumerKey OAuth consumer key.
 * @param {String} consumerSecret OAuth consumer secret.
 * @param {String} token OAuth token.
 * @param {String} tokenSecret OAuth token secret.
 */
var RandomUserTweetClient = function(consumerKey, consumerSecret, token, tokenSecret)
{
    Client.call(this, consumerKey, consumerSecret, token, tokenSecret);

    this._apiBaseUrlString = Constants.RestApiBaseURLString;
    this._apiVersion = Constants.RestApiVersion;
};

Util.inherits(RandomUserTweetClient, Client);

/**
 * Returns tweets that match the specified parameters.
 *
 * For information on acceptable parameters see the official <a href="https://dev.twitter.com/docs/api/1/get/search">Twitter documenation</a>.
 *
 * @this {RestClient}
 * @param {Dictionary} parameters
 * @param {Function} callback The callback function.
 */
RandomUserTweetClient.prototype.randomTweet = function(parameters, callback)
{
    var q = parameters['q'];

	if (parameters['screen_name'] === undefined)
	{
		throw new Error('Missing required parameter: screen_name.');
	}

    this._createGetRequest('statuses/user_timeline', 'json', parameters, callback);
};

module.exports = RandomUserTweetClient;
