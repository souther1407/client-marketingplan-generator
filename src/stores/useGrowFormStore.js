import { create } from "zustand";

export const useGrowFormStore = create((set, get) => ({
  form: {
    location: "",
    bussinesType: "",
    annualRevenue: "",
    profitLast12: "",
    profitLast3: "",
    ownerEquility: "",
    firstName: "",
    lastName: "",
    companyName: "",
    companyWebURL: "",
    phoneNumber: "",
    email: "",
  },
  setForm(key, value) {
    set({
      form: {
        ...get().form,
        [key]: value,
      },
    });
  },
}));
