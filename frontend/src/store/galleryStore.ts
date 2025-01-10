import { create } from "zustand";
import { GalleryItem } from "../types/gallery.types";

interface GalleryStore {
  gallery: GalleryItem[];
  setGallery: (gallery: GalleryItem[]) => void;
}

export const useGalleryStore = create<GalleryStore>((set) => ({
  gallery: [],
  setGallery: (gallery) => set({ gallery }),
}));
