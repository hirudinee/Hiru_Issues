let AWS = require('aws-sdk');
let SL = require('@slappforge/slappforge-sdk');
const sqs = new SL.AWS.SQS(AWS);
exports.handler = function (event, context, callback) {
	sqs.sendMessage({
		MessageBody: 'your message body should be assigned herezxx',
		QueueUrl: 'https://sqs.us-east-1.amazonaws.com/263248768798/Test',
		DelaySeconds: '0',
		MessageAttributes: {
			"test": {
				"DataType": "String",
				"StringValue": "hiru"
			}
		}
	}, function (data) {
		console.log(data);
	}, function (error) {
		console.log(error);
	});


	callback(null, 'Successfully executed');
}