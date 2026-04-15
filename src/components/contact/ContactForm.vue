<script setup lang="ts">
import { reactive, ref } from 'vue'
import Button from '@/components/ui/Button.vue'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const form = reactive<FormData>({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const errors = reactive<Partial<Record<keyof FormData, string>>>({})
const submitted = ref(false)
const loading = ref(false)
const submitError = ref('')

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validate(): boolean {
  // Clear previous errors
  Object.keys(errors).forEach((key) => delete errors[key as keyof FormData])

  if (!form.name.trim()) errors.name = 'Name is required.'
  if (!form.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!validateEmail(form.email)) {
    errors.email = 'Please enter a valid email.'
  }
  if (!form.subject.trim()) errors.subject = 'Subject is required.'
  if (!form.message.trim()) errors.message = 'Message is required.'

  return Object.keys(errors).length === 0
}

async function handleSubmit() {
  if (!validate()) return

  loading.value = true
  submitError.value = ''

  try {
    const response = await fetch('https://formspree.io/f/mwvndnde', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      }),
    })

    if (!response.ok) throw new Error('Failed to send message.')

    submitted.value = true
  } catch {
    submitError.value = 'Something went wrong. Please try again or email me directly.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <!-- Success state -->
  <div
    v-if="submitted"
    class="rounded-2xl border border-green-200 bg-green-50 p-8 text-center animate-fade-up"
  >
    <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
      <svg class="h-7 w-7 text-green-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
    </div>
    <h3 class="font-display text-2xl text-ink-950">Message Sent!</h3>
    <p class="mt-2 text-ink-500">
      Thanks for reaching out. I'll get back to you as soon as possible.
    </p>
    <button
      class="mt-6 text-sm font-medium text-accent hover:underline"
      @click="submitted = false; form.name = ''; form.email = ''; form.subject = ''; form.message = ''"
    >
      Send another message
    </button>
  </div>

  <!-- Form -->
  <form v-else class="space-y-6" @submit.prevent="handleSubmit" novalidate>
    <div class="grid gap-6 sm:grid-cols-2">
      <!-- Name -->
      <div>
        <label for="name" class="mb-1.5 block text-sm font-medium text-ink-700">Name</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          placeholder="Jane Doe"
          :aria-invalid="!!errors.name"
          :aria-describedby="errors.name ? 'name-error' : undefined"
          class="w-full rounded-xl border border-ink-200 bg-surface-raised px-4 py-3 text-sm text-ink-950 placeholder:text-ink-400 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          :class="errors.name ? 'border-red-400' : ''"
        />
        <p v-if="errors.name" id="name-error" class="mt-1 text-xs text-red-500">{{ errors.name }}</p>
      </div>

      <!-- Email -->
      <div>
        <label for="email" class="mb-1.5 block text-sm font-medium text-ink-700">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="jane@example.com"
          :aria-invalid="!!errors.email"
          :aria-describedby="errors.email ? 'email-error' : undefined"
          class="w-full rounded-xl border border-ink-200 bg-surface-raised px-4 py-3 text-sm text-ink-950 placeholder:text-ink-400 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          :class="errors.email ? 'border-red-400' : ''"
        />
        <p v-if="errors.email" id="email-error" class="mt-1 text-xs text-red-500">{{ errors.email }}</p>
      </div>
    </div>

    <!-- Subject -->
    <div>
      <label for="subject" class="mb-1.5 block text-sm font-medium text-ink-700">Subject</label>
      <input
        id="subject"
        v-model="form.subject"
        type="text"
        placeholder="Project inquiry"
        :aria-invalid="!!errors.subject"
        :aria-describedby="errors.subject ? 'subject-error' : undefined"
        class="w-full rounded-xl border border-ink-200 bg-surface-raised px-4 py-3 text-sm text-ink-950 placeholder:text-ink-400 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        :class="errors.subject ? 'border-red-400' : ''"
      />
      <p v-if="errors.subject" id="subject-error" class="mt-1 text-xs text-red-500">{{ errors.subject }}</p>
    </div>

    <!-- Message -->
    <div>
      <label for="message" class="mb-1.5 block text-sm font-medium text-ink-700">Message</label>
      <textarea
        id="message"
        v-model="form.message"
        rows="5"
        placeholder="Tell me about your project…"
        :aria-invalid="!!errors.message"
        :aria-describedby="errors.message ? 'message-error' : undefined"
        class="w-full resize-none rounded-xl border border-ink-200 bg-surface-raised px-4 py-3 text-sm text-ink-950 placeholder:text-ink-400 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        :class="errors.message ? 'border-red-400' : ''"
      />
      <p v-if="errors.message" id="message-error" class="mt-1 text-xs text-red-500">{{ errors.message }}</p>
    </div>

    <p v-if="submitError" class="text-sm text-red-500">{{ submitError }}</p>

    <Button size="lg" :disabled="loading">
      <svg
        v-if="loading"
        class="mr-2 h-4 w-4 animate-spin"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4Z" />
      </svg>
      {{ loading ? 'Sending…' : 'Send Message' }}
    </Button>
  </form>
</template>
