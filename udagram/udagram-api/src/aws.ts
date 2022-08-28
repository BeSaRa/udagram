import AWS = require("aws-sdk");

//Credentials are auto set according to the documentation https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html and the default profile is "Default anyway"

export const s3 = new AWS.S3({
  signatureVersion: "v4"
});

// Generates an AWS signed URL for retrieving objects
export function getGetSignedUrl(key: string): string {
  const signedUrlExpireSeconds = 60 * 5;
  return s3.getSignedUrl("getObject", {
    Bucket: '/uploads',
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
}

// Generates an AWS signed URL for uploading objects
export function getPutSignedUrl(key: string): string {
  const signedUrlExpireSeconds = 60 * 5;

  return s3.getSignedUrl("putObject", {
    Bucket: '/uploads',
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
}
