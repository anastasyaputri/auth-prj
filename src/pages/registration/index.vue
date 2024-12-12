<script lang="ts" setup>
import { ref } from "vue";

interface Form {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Errors {
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const form = ref<Form>({
  fullname: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const errors = ref<Errors>({});
const successMessage = ref<string>("");

const handleSubmit = () => {
  errors.value = {};
  let isValid = true;

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.value.email)) {
    errors.value.email = "Email harus berformat valid.";
    isValid = false;
  }

  // Validate password length
  if (form.value.password.length < 8) {
    errors.value.password = "Password harus terdiri dari minimal 8 karakter.";
    isValid = false;
  }

  // Validate password match
  if (form.value.password !== form.value.confirmPassword) {
    errors.value.confirmPassword =
      "Password dan konfirmasi password harus cocok.";
    isValid = false;
  }

  if (isValid) {
    successMessage.value = "Pendaftaran Berhasil";
    clearForm();
  }
};

const clearForm = () => {
  form.value = {
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
};
</script>

<template>
  <div
    class="font-sans min-h-screen flex items-center justify-center bg-gray-100 p-4"
  >
    <div class="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
      <h1 class="text-2xl font-bold mb-6 text-center">Form Pendaftaran</h1>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- Nama Lengkap -->
        <div>
          <label
            for="fullname"
            class="block text-sm text-gray-700 font-semibold mb-2"
            >Nama Lengkap</label
          >
          <input
            v-model="form.fullname"
            type="text"
            id="fullname"
            class="w-full p-3 border text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <!-- Email -->
        <div>
          <label
            for="email"
            class="block text-sm text-gray-700 font-semibold mb-2"
            >Email</label
          >
          <input
            v-model="form.email"
            type="email"
            id="email"
            class="w-full p-3 border text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <p v-if="errors.email" class="mt-1 text-red-500 text-sm">
            {{ errors.email }}
          </p>
        </div>

        <!-- Password -->
        <div>
          <label
            for="password"
            class="block text-sm text-gray-700 font-semibold mb-2"
            >Password</label
          >
          <input
            v-model="form.password"
            type="password"
            id="password"
            class="w-full p-3 border text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <p v-if="errors.password" class="mt-1 text-red-500 text-sm">
            {{ errors.password }}
          </p>
        </div>

        <!-- Konfirmasi Password -->
        <div>
          <label
            for="confirmPassword"
            class="block text-sm text-gray-700 font-semibold mb-2"
            >Konfirmasi Password</label
          >
          <input
            v-model="form.confirmPassword"
            type="password"
            id="confirmPassword"
            class="w-full p-3 border text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <p v-if="errors.confirmPassword" class="mt-1 text-red-500 text-sm">
            {{ errors.confirmPassword }}
          </p>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Daftar
        </button>

        <!-- Success Message -->
        <p v-if="successMessage" class="text-green-500 text-sm mt-4">
          {{ successMessage }}
        </p>
      </form>
    </div>
  </div>
</template>
