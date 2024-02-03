import { create } from "zustand";
import { createPlan as createPlanService } from "../services/api/plans";
// store de prueba, posiblemente se borre cuando se almancenen los planes en db
export const usePlansStore = create((set) => ({
  plan: null,
  creatingPlan: false,
  async createPlan(content) {
    let isError = false;
    try {
      set({ creatingPlan: true });
      const result = await createPlanService(content);
      set({ plan: result });
    } catch (error) {
      alert(error.message);
      isError = true;
    } finally {
      set({ creatingPlan: false });
    }
    return isError;
  },
}));
