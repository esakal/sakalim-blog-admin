module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3-enhanced',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      region: env('AWS_REGION'),
      params: {
        Bucket: env('AWS_BUCKET_NAME'),
      },
      prefix: null,
      quality: 80,
      webp: false,
      thumbnails: [
        {
          name: 'custom',
          options: {
            width: 1200,
            withoutEnlargement: true,
          },
        }
      ],
    },
  },
});
