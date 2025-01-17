import { useEffect } from "react";
import { useGallery } from "@/hooks/admin/useGallery";
import { useGalleryStore } from "@/store/admin/galleryStore";
import GallerySection from "./components/GallerySection";
import ReviewsSection from "./components/ReviewsSection";
import "./_gallery.scss";

const Gallery = () => {
  const { data: galleryItems, isLoading } = useGallery();
  const setGallery = useGalleryStore((state) => state.setGallery);

  useEffect(() => {
    if (galleryItems) {
      setGallery(galleryItems);
    }
  }, [galleryItems, setGallery]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="gallery-page">
      <h1>Sample Cuts</h1>
      <GallerySection />
      <ReviewsSection />
    </div>
  );
};

export default Gallery;
