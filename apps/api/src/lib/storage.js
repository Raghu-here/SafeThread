import AWS from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  endpoint: process.env.S3_ENDPOINT, // For R2
  s3ForcePathStyle: true,
  signatureVersion: "v4"
});

export const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET_NAME || "safethread-memories",
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      const userId = req.user?.userId || "anonymous";
      cb(null, `memories/${userId}/${Date.now()}-${file.originalname}`);
    }
  })
});