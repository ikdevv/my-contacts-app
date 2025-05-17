import { useEffect, useState } from "react";
import { deleteImage, getAllImages, uploadImage } from "../api/image.api";
import type { Image } from "../types";

const AllImages = () => {
  const url = import.meta.env.VITE_API_URL;
  const [images, setImages] = useState<Image[]>([]);
  const [image, setImage] = useState<File>();

  async function fetchImages() {
    const response = await getAllImages();
    if (response && response.data) {
      setImages(response.data);
    }
  }

  const handleDelete = (id: string) => {
    deleteImage(id).then(() => {
      fetchImages();
    });
  };

  const handleUpload = async (event: React.FormEvent) => {
    event.preventDefault();
    if (image) {
      try {
        await uploadImage(image);
        fetchImages();
      } catch (error) {
        console.error("Upload failed", error);
      }
    } else {
      console.warn("No image selected");
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <h1 className="text-lg font-bold">upload image</h1>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          name="image"
          required
          onChange={(e) => e.target.files && setImage(e.target.files[0])}
        />
        <button className="bg-amber-300 p-2 rounded-lg" type="submit">
          Submit
        </button>
      </form>

      <hr />

      <h1 className="text-xl">{images.length} images</h1>
      {images.map((image) => {
        return (
          <div key={image._id}>
            <img
              className="w-lg rounded-2xl border-8 border-green-700"
              src={`${url}${image.url}`}
              alt={image._id}
            />
            <h1>{image.name}</h1>

            <button
              onClick={() => handleDelete(image._id)}
              className="bg-red-600 text-white p-2 rounded-lg"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AllImages;
