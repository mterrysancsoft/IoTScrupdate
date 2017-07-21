# IoT Scrupdate Button

Send a scrum update (scrupdate) message with an AWS IoT button.

## Configuration

1. Configure the AWS IoT button with the SNS sample and confirm that it is operational
2. Update the role with support with SES permissions by adding actions for:
  - "ses:SendEmail"
  - "ses:SendRawEmail"
3. Define the Environment Variables for the Lambda function
  - sourceEmail: from address; must be SES approved; ex: info@email.com
  - sesRegion: AWS region for SES; ex: us-east-1
  - recipientList: to addresses; ex: notify@email.com
4. Click the button
