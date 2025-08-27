import { create } from "zustand";

export const useShowForm = create((set) => ({
  showForm: false,
  handleForm: () => set((state) => ({ showForm: !state.showForm })),
}));