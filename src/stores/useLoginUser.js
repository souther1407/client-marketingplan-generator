import { create } from "zustand";

export const useLoginUser = create((set, get) => ({
  crendentials: null,
  setCredentials(credentials) {
    set({ credentials });
  },
}));
