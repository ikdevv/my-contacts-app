import { useEffect, useState } from "react";
import { getAllImages } from "../api/image.api";
import type { Image } from "../types";

const AllImages = () => {
  const url = import.meta.env.VITE_API_URL;

  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    async function fetchImages() {
      const response = await getAllImages();
      if (response && response.data) {
        setImages(response.data);
      }
    }
    fetchImages();
  }, []);

  return (
    <div>
      <h1 className="text-xl">{images.length} images</h1>
      {images.map((image) => {
        return (
          <div key={image.id}>
            <img
              className="w-lg rounded-2xl border-8 border-green-700"
              src={`${url}${image.url}`}
              alt={image.id}
            />

            <h1>{image.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default AllImages;
