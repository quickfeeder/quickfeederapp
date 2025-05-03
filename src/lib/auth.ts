// lib/auth.ts
export type LoginResult =
  | { success: true }
  | { error: string };

export async function login(formData: FormData): Promise<LoginResult> {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    // Network or unexpected server error
    return { error: "Network error. Please try again." };
  }

  const data = (await res.json()) as LoginResult;
  return data;
}
