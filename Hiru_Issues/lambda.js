let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();



ddb.get({
	TableName: 'samplehiru',
	Key: {
		'1': '1'
	}
}, function (err, data) {
	if (err) {
		//handle error
	} else {
		//your logic goes here
	}
});









exports.handler = function (event, context, callback) {


	callback(null, 'Successfully executed');
}