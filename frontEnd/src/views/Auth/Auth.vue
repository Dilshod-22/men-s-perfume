<template>
  <div class="flex items-center justify-center h-full">
    <div class="container2" :class="{ active: isActive }" id="container">
      <!-- Sign Up Form -->
      <div class="form-container sign-up">
        <form @submit.prevent="signUp">
          <h1>Create Account</h1>
          <div class="social-button">
            <button
              :class="{ active: selectedRole === 'seller' }"
              @click="selectRole('seller')"
            >
              Seller
            </button>
            <button
              :class="{ active: selectedRole === 'customer' }"
              @click="selectRole('customer')"
            >
              Customer
            </button>
          </div>
          <span>or use your email for registration</span>
          <input
            type="text"
            placeholder="Name"
            v-model="signUpForm.name"
            required
          />
          <input
            type="email"
            placeholder="Email"
            v-model="signUpForm.email"
            required
          />
          <input
            type="password"
            placeholder="Password"
            v-model="signUpForm.password"
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>

      <!-- Sign In Form -->
      <div class="form-container sign-in">
        <form @submit.prevent="signIn">
          <h1 class="font-normal">Sign In</h1>
          <div class="social-button">
            <button
              :class="{ active: selectedRole === 'admin' }"
              @click="selectRole('admin')"
            >
              Admin
            </button>
            <button
              :class="{ active: selectedRole === 'seller' }"
              @click="selectRole('seller')"
            >
              Seller
            </button>
            <button
              :class="{ active: selectedRole === 'customer' }"
              @click="selectRole('customer')"
            >
              Customer
            </button>
          </div>
          <span>or use your email and password</span>
          <input
            type="email"
            placeholder="Email"
            v-model="signInForm.email"
            required
          />
          <input
            type="password"
            placeholder="Password"
            v-model="signInForm.password"
            required
          />
          <a href="#">Forgot Your Password?</a>
          <button type="submit">Sign In</button>
        </form>
        <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>
      </div>

      <!-- Toggle Panels -->
      <div class="toggle-container">
        <div class="toggle">
          <div class="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button @click="toggleLogin">Sign In</button>
          </div>
          <div class="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>
              Register with your personal details to use all of site features
            </p>
            <button @click="toggleRegister">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import "./Auth.css";
import {toast} from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'


export default {
  emits: ["update-auth-user"],
  data() {
    return {
      isActive: false,
      selectedRole: "customer",
      errorMessage: "",
      signUpForm: {
        name: "",
        email: "",
        password: "",
      },
      signInForm: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    selectRole(role) {
      this.selectedRole = role;
    },
    toggleRegister() {
      this.isActive = true;
      this.selectedRole = "customer";


    },
    toggleLogin() {
      this.isActive = false;
      this.selectedRole = "customer";
    },
    async signUp() {
      this.errorMessage = "";
      try {
        const response = await axios.post(
          "http://localhost:8000/api/user/createUser",
          {
            username: this.signUpForm.name,
            email: this.signUpForm.email,
            password: this.signUpForm.password,
          }
        );
        // console.log("Sign Up Success:", response.data);
        toast.success("Registration success");
        this.signUpForm = { name: "", email: "", password: "" };
        this.toggleLogin();
      } catch (error) {
        // console.error("Sign Up Error:", error);
        this.errorMessage = "Registration failed. Please try again.";
      }
    },
    async signIn() {
      this.errorMessage = "";
      try {
        const response = await axios.post(
          "http://localhost:8000/api/user/loginUser",
          {
            email: this.signInForm.email,
            password: this.signInForm.password,
          }
        );

        if (response.data?.rows?.length > 0) {
          // console.log("Login Success:", response.data.rows[0]);
          toast.success("Login success");
          this.$emit("update-auth-user", this.selectedRole);
          this.signInForm = { email: "", password: "" };
        } else {
          this.errorMessage = "Invalid login credentials.";
        }
      } catch (err) {
        console.error("Login Error:", err);
        this.errorMessage = "Login failed. Please try again.";
      }
    },
  },
};


</script>

<style scoped></style>
