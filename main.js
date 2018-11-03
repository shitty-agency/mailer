const aws = require('aws-sdk');

exports.handler = function(event, context) {
  const SES = new aws.SES();

  const { email = {}, url } = event;
  const { from, to } = email;

  if (!from || !to) {
    return context.fail('email not set up');
  }

  if (!url) {
    return context.fail('url not set up');
  }

  return SES.sendEmail(
    {
      Source: from,
      Destination: {
        ToAddresses: [to],
      },
      Message: {
        Subject: { Data: `[monitoring] ${url}` },
        Body: {
          Text: { Data: `Hey look, it's a website we didn't crawl lololol` },
        },
      },
    },
    context.done
  );
};
