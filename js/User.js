class User {
  constructor() {
    this.users = this.getUsers() || [];
  }
  saveUser(userData) {
    const newUser = {
      id: Date.now(),
      ...userData,
    };
    this.users.push(newUser);
    localStorage.setItem("users", JSON.stringify(this.users));

    return {
      success: true,
      message: "User saved successfully",
      data: newUser,
    };
  }

  signInUser(usernameByInput) {
    const userExists = this.users.find((user) => user.username.toLowerCase() === usernameByInput.toLowerCase());
    if (!userExists) {
      return {
        success: false,
        message: "User Tidak Ditemukan",
      };
    }

    return {
      success: true,
      message: "User signed in successfully",
      data: userExists,
    };
  }

  getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }
}
