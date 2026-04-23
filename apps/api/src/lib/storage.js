import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import multer from "multer";
import multerS3 from "multer-s3";

export const s3Client = new S3Client({
  region: "auto",
  endpoint: process.env.S3_ENDPOINT,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
  forcePathStyle: true,
});

export const upload = multer({
  storage: multerS3({
    s3: s3Client,
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

/**
 * Upload a buffer directly to S3. Returns the public URL.
 */
export const uploadBufferToS3 = async (buffer, key, contentType = "audio/webm") => {
  const bucket = process.env.S3_BUCKET_NAME || "safethread-memories";
  const upload = new Upload({
    client: s3Client,
    params: {
      Bucket: bucket,
      Key: key,
      Body: buffer,
      ContentType: contentType,
    },
  });
  const result = await upload.done();
  // result.Location may not be set for R2; construct manually
  return result.Location || `${process.env.S3_ENDPOINT}/${bucket}/${key}`;
};