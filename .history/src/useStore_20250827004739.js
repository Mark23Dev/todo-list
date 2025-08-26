import { create } from "zustand";

export const ShowForm = create((set) => ({
  showForm: false,
  handleForm: () => set((state) => ({ showForm: !state.showForm })),
}));