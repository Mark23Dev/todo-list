import { create } from "zustand";

export const useShowForm = create((set) => ({
  activeForm: null,
  openForm: (formName) => set({})
}));