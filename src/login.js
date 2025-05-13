export const logIn = async (email, password) => {
  try {
    const response = await fetch("http://localhost:5050/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Log In failed");
    }

    const data = await response.json();
    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    throw error;
  }
};
