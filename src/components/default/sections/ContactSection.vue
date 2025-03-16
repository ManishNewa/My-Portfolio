<template>
  <section id="contact" class="py-20 px-4 bg-gray-50/90">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
        Get In Touch
      </h2>
      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <h3 class="text-2xl font-bold mb-6">Contact Information</h3>
          <p class="text-gray-600 mb-8 leading-relaxed">
            Feel free to reach out to me for any questions or opportunities. I'm
            always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>
          <div class="space-y-6">
            <div
              v-for="contact in contactInfo"
              :key="contact.label"
              class="flex items-start space-x-4"
            >
              <div class="bg-white p-3 rounded-full shadow-md pulse-on-hover">
                <component :is="contact.icon" class="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h4 class="font-medium text-gray-900">{{ contact.label }}</h4>
                <p class="text-gray-600">{{ contact.value }}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form
            @submit.prevent="submitForm"
            class="bg-white rounded-lg shadow-md p-8 hover-lift"
          >
            <div class="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700 mb-1"
                  >Name</label
                >
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700 mb-1"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </div>
            <div class="mb-6">
              <label
                for="subject"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Subject</label
              >
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="message"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Message</label
              >
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="interactive-button cursor-pointer w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-md transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <send-icon class="h-5 w-5" />
              <span>Send Message</span>
            </button>
            <p v-if="formSubmitted" class="mt-4 text-green-600 text-center">
              Thank you for your message! I'll get back to you soon.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Send as SendIcon } from 'lucide-vue-next';
import emailApi from '@/utils/email-axios';

import {
  contactEmailContent,
  contactConfirmationEmail,
} from '@/utils/email-templates';

defineProps({
  contactInfo: {
    type: Array,
    required: true,
  },
});

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});
const formSubmitted = ref(false);

const submitForm = async () => {
  try {
    const { name, email, subject, message } = form.value;
    const emailBody = contactEmailContent(name, email, message);
    const formBody = {
      email: import.meta.env.VITE_RECEIVING_EMAIL,
      subject,
      appName: import.meta.env.VITE_APP_NAME,
      emailBody,
    };
    formSubmitted.value = true;
    const response = await emailApi.post('/sendEmail', formBody);
    if (response.status === 200) {
      setTimeout(async () => {
        resetForm();
        await sendConfirmationEmail();
      }, 5000);
    }
  } catch (error) {
    console.log('Error while sending email::', error);
  }
};

const sendConfirmationEmail = async () => {
  const { name, email } = form.value;
  const emailBody = contactConfirmationEmail(name);
  const formBody = {
    email,
    subject: "Thanks for Reaching Out - We'll Respond Shortly!",
    appName: import.meta.env.VITE_APP_NAME,
    emailBody,
  };
  return await emailApi.post('/sendEmail', formBody);
};

const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  formSubmitted.value = false;
};
</script>

<style scoped></style>
