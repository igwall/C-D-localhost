var Minio = require('minio')

// Instantiate the minio client with the endpoint
// and access keys as shown below.
var minioClient = new Minio.Client({
  endPoint: '127.0.0.10',
  port: 9000,
  accessKey: 'U1PAU6OFONN2L7VYNDFR',
  secretKey: 'THfEQgYRq8YOFBZtkPfIVBeogqOYNuoEw+t407RT'
})

/* // Make a bucket called files.
minioClient.makeBucket('files', 'eu-west-1', function (err) {
  if (err) return console.log(err)
  console.log('Bucket created successfully in "eu-west-1".')
}) */

export function uploadFile (file) {
  // Using fPutObject API upload your file to the bucket europetrip.
  minioClient.fPutObject('files', file.name, file, file.type, function (err, etag) {
    if (err) return console.log(err)
    console.log('File uploaded successfully.', etag)
  })
}
