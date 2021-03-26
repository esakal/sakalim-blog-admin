module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3-resizing-and-optimisation',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      region: env('AWS_REGION'),
      optimizeOptions: {
        jpeg: {
          quality: 90,
          progressive: true,
        },
        png: {
          quality: 90,
          progressive: true,
        },
        webp: {
          alphaQuality: 90,
        },
        tiff: {}
      },
      imageSizes: [],
      params: {
        Bucket: env('AWS_BUCKET_NAME'),
      },
    },
  }
});
