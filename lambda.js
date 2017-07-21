// Lambda function to send a static email preconfigured with a boilerplate status update
// Configure with ToAddresses: 
// 1: set your AWS regaion
// 2: configure the recipient list
// 3: sending address - must be verified for sending with SES
var aws = require('aws-sdk');
// 1: set AWS region
var ses = new aws.SES({
   region: 'us-east-1'
});

exports.handler = function(event, context) {
    console.log("Incoming: ", event);
    var d = new Date();

    var eParams = {
        Destination: {
            // 2 - configure the recipient list
            ToAddresses: ["your recipient list"]
        },
        Message: {
            Body: {
                Text: {
                    Data: "Running late. Be in soon.\n\nYesterday:\nMeetings\nMoving cards\nSorting email\nDealing with server issues\n\nToday:\nDoing what was supposed to be done yesterday\n\nIn My Way:\nRunning late\n"
                }
            },
            Subject: {
                Data: "Scrupdate for " + d.toLocaleDateString()
            }
        },
        // 3: sending address - must be verified for sending with SES
        Source: "your verified SES email address"
    };

    console.log('===SENDING EMAIL===');
    var email = ses.sendEmail(eParams, function(err, data){
        if(err) console.log(err);
        else {
            console.log("===EMAIL SENT===");
            console.log(data);
            console.log("EMAIL CODE END");
            console.log('EMAIL: ', email);
            context.succeed(event);
        }
    });

};