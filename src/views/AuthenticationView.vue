<script setup lang="ts">
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-zinc-50 px-6">
        <div class="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
            <div class="flex flex-col items-center gap-4">
                <div class="size-16 rounded-2xl bg-indigo-100 flex items-center justify-center">
                    <span class="text-2xl font-bold text-indigo-600">B</span>
                </div>

                <h1 class="text-3xl font-bold text-zinc-900">
                    BottleX
                </h1>

                <p class="text-center text-sm text-zinc-500">
                    Manage your money smarter. Track your spending, organize
                    your bills, and achieve your financial goals.
                </p>

                <a
                    href="http://localhost:3000/auth/google"
                    class="mt-4 w-full rounded-lg bg-indigo-600 py-3 text-center font-medium text-white transition hover:bg-indigo-700"
                >
                    Sign in with Google
                </a>
            </div>
        </div>
    </div>
</template>