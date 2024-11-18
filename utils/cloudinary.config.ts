import * as cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true,
});

export function handleUpload(
  imageUploaded: string,
  publicid: string,
  subfolder: string
): Promise<cloudinary.UploadApiResponse> {
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(
      imageUploaded,
      {
        width: 400,
        height: 400,
        crop: "fill",
        public_id: publicid,
        folder: "RecyclApp/" + subfolder,
      },
      (err, res) => {
        if (err) reject(err);
        resolve(res);
      }
    );
  });
}

export function handleDelete(
  public_id: string
): Promise<cloudinary.UploadApiResponse> {
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader.destroy(
      public_id,
      {
        invalidate: true,
      },
      (err, res) => {
        if (err) reject(err);
        resolve(res);
      }
    );
  });
}
