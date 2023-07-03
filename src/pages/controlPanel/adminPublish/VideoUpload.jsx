import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

const VideoUpload = () => {
  const [video, setVideo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!video) {
      return toast.error("please select a video!");
    }

    const formData = new FormData();
    formData.append("file", video);

    const options = {
      method: "POST",
      url: "https://api.cloudflare.com/client/v4/accounts/f6a03c99a126c3e0f308c6d725ec5721/stream/direct_upload",
      headers: {
        "Content-Type": "application/json",
        "Upload-Creator": "user1234",
        Authorization: "Bearer cKeuDcwq_oM9FMHnW8DkyPpjTUCVhuRpcwh5m9Nv",
      },
      data: {
        allowedOrigins: [],
        creator: "creator-id_abcde12345",
        meta: { name: "video12345.mp4" },
        maxDurationSeconds: 1,
        requireSignedURLs: true,
        thumbnailTimestampPct: 0.529241,
      },
    };

    try {
      const { data } = await axios.request(options);
      const uploadUrl = data?.result.uploadURL;

      await axios.post(uploadUrl, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log(uploadUrl);

      toast.success("uploaded successfully");
    } catch (error) {
      toast.error("Upload failed");
    }
  };

  return (
    <div>
      <h2>VideoUpload</h2>
      <div className="mt-5">
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            name="video"
            onChange={(e) => setVideo(e.target.files[0])}
          />
          <button className="bg-pink p-3 rounded-lg">UPLOAD</button>
        </form>
      </div>
    </div>
  );
};

export default VideoUpload;
