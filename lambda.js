// Lambda function to send a static email preconfigured with a boilerplate status update
// Configure with environment variables
// sesRegion: SES region ex: us-east-1
// sourceEmail: from email address - must be SES verified
// recipientList: to email adresseses
var aws = require('aws-sdk');
var ses = new aws.SES({
   region: process.env.sesRegion
});

exports.handler = function(event, context) {
    console.log("Incoming: ", event);
    var d = new Date();

    var eParams = {
        Destination: {
            ToAddresses: [process.env.recipientList]
        },
        Message: {
            Body: {
                Text: {
                    Data: "Running late. Be in soon.\n\nYesterday:\nMeetings\nMoving cards\nSorting email\nDealing with server issues\n\nToday:\nDoing what was supposed to be done yesterday\n\nIn my way:\nRunning late\n\nPowered by AWS IoT"
                }
            },
            Subject: {
                Data: "Scrupdate for " + d.toLocaleDateString()
            }
        },
        Source: process.env.sourceEmail
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