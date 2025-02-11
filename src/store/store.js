import { create } from "zustand";
const login = create((set) => ({
  username: "",
  password: "",
  setUsername: (newUsername) => set({ username: newUsername }),
  setPassword: (newPassword) => set({ password: newPassword }),
  clear: () => set({ username: "", password: "" }),
}));
export default login;
