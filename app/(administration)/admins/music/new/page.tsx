"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

export default function NewMusicPage() {
  const { handleSubmit, register, reset } = useForm<MusicFormPayload>();

  const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY as string;
  const cloudname = process.env.NEXT_PUBLIC_CLOUDINARY_NAME;
  const [formError, setFormError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter()
  const [btnStatus,setBtnStatus] = useState(false);
  const [info,setInfo] = useState("");

  async function uploadMusic(data: MusicFormPayload) {
    if (document) {
      setBtnStatus(true)
      setInfo("Processing upload please wait")
    }

    const imageFile = data.image[0];
    const audioFile = data.audio[0];
    const res1 = await fetch("/api/sign", { method: "POST" });
    const signatureData = await res1.json();

    const url = "https://api.cloudinary.com/v1_1/" + cloudname + "/auto/upload";

    const imageFormData = new FormData();
    imageFormData.append("file", imageFile);
    imageFormData.append("api_key", apiKey);
    imageFormData.append("timestamp", signatureData.timestamp);
    imageFormData.append("signature", signatureData.signature);
    imageFormData.append("folder", "mahbub_foundation");

    const audioFormData = new FormData();
    audioFormData.append("file", audioFile);
    audioFormData.append("api_key", apiKey);
    audioFormData.append("timestamp", signatureData.timestamp);
    audioFormData.append("signature", signatureData.signature);
    audioFormData.append("folder", "mahbub_foundation");

    try {
      const imageResponse = await fetch(url, {
        method: "POST",
        body: imageFormData,
      });
      const imageRresult = await imageResponse.json();
      const imageUrl = imageRresult.secure_url;

      const audioResponse = await fetch(url, {
        method: "POST",
        body: audioFormData,
      });
      const audioResult = await audioResponse.json();
      const audioUrl = audioResult.secure_url;

      data.image = imageUrl;
      data.audio = audioUrl;
      const response = await fetch("/api/music/create", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        if (response.url) {
          console.log(response.body);
          console.log(response.json());
          
          reset();
          toast("Music Created Succesfully", {
            type: "success",
            theme: "colored",
            autoClose: 5000,
          });
          setTimeout(()=>{router.push("/admins/music")},5000)
        }
      } else {
        
        toast("There was an error uploading the music try again", {
          type: "error",
          theme: "colored",
          autoClose: 5000,
        });
        setBtnStatus(false)
        setInfo("")
      }
    } catch (error) {
      toast("There was an error uploading the music try again", {
        type: "error",
        theme: "colored",
        autoClose: 5000,
      });
      setBtnStatus(false)
        setInfo("")
    }
  }

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <div className="col-6" style={{ minHeight: "150px" }}>
        <h4>Music Upload Form</h4>
        <span id="info"></span>
        <form method="POST" onSubmit={handleSubmit(uploadMusic)}>
          <div>
            <span style={{ color: "red" }}>{formError}</span>
            <span style={{ color: "green" }}>{success}</span>
          </div>
          <div className="mb-3">
            <label htmlFor="titleInput" className="form-label">
              Music Title
            </label>
            <input
              type="text"
              className="form-control"
              id="titleInput"
              // name="title"
              {...register("title")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="singerInput" className="form-label">
              Music Singer
            </label>
            <input
              type="text"
              className="form-control"
              id="singerInput"
              // name="singer"
              {...register("singer")}
            />
          </div>
          <div className="form-row">
            <div className="col-md-5 mb-3">
              <label htmlFor="dateInput" className="form-label">
                Release Date
              </label>
              <input
                type="date"
                className="form-control"
                id="dateInput"
                // name="release_date"
                {...register("date_released")}
              />
            </div>
            <div className="form-group col mb-3">
              <label htmlFor="imageFile" className="form-label">
                Image
              </label>
              <input
                type="file"
                className="form-control"
                // name="image"
                {...register("image")}
                id="imageFile"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="audioFile" className="form-label">
              Audio File
            </label>
            <input
              type="file"
              accept="audio/*"
              className="form-control"
              // name="image"
              {...register("audio")}
              id="audioFile"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="id_address">Description</label>
            <textarea
              className="form-control py-4"
              id="musicDescription"
              rows={2}
              // name="description"
              {...register("description")}
            ></textarea>
          </div>

          <button id="submit-btn" type="submit" className="btn btn-primary" disabled={btnStatus}>
            Upload Music
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
