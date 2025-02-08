import { signIn, signOut } from "next-auth/react";

export const login = async () => {
  await signIn("github", { redirectTo: "/applications" });
};

export const logout = async () => {
  await signOut({ redirectTo: "/" });
};
