const API = import.meta.env.VITE_API_URL;

export const createPlan = async (content) => {
  const result = await fetch(`${API}/plans/generate`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(content),
  });
  const body = await result.json();
  if (result.status >= 400) throw new Error(body.error);
  return body;
};
