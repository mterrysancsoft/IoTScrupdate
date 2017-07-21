# Iot Scrupdate Button

Send a scrum update (scrupdate) message with an AWS IoT button.

## Configuration

1. Configure the AWS IoT button with the SNS sample and confirm that it is operation.
2. Update the role with support with SES permissions
 * Add actions for
  * "ses:SendEmail"
  * "ses:SendRawEmail"
3. Update the code with the contents of lambda.js
 * Configure the region
 * Configure the recipient list
 * Configure the source address
4. Click the button
