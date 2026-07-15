<script setup lang="ts">
import {
  ArrowRight,
  BadgeDollarSign,
  CalendarClock,
  ChartNoAxesCombined,
  PiggyBank,
  ShieldCheck,
  Star,
} from '@lucide/vue';

const features = [
  {
    icon: ChartNoAxesCombined,
    title: 'Track Transactions',
    description:
      'Keep your income and expenses organized in one simple place.',
  },
  {
    icon: CalendarClock,
    title: 'Manage Payments',
    description:
      'Stay ahead of upcoming bills and never miss an important payment.',
  },
  {
    icon: PiggyBank,
    title: 'Build Your Funds',
    description:
      'Set money aside for emergencies, vacations, and future plans.',
  },
  {
    icon: Star,
    title: 'Plan Your Wishlists',
    description:
      'Save toward the things you want without affecting essential expenses.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Know What You Can Spend',
    description:
      'See how much money is truly available after bills and savings.',
  },
  {
    icon: ShieldCheck,
    title: 'Private and Secure',
    description:
      'Your financial information stays protected and under your control.',
  },
];
</script>

<template>
  <div class="min-h-screen bg-white text-zinc-900">
    <!-- NAVBAR -->
    <header class="border-b border-zinc-200">
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8"
      >
        <router-link
          to="/"
          class="flex items-center gap-3"
        >
          <div
            class="flex size-10 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white"
          >
            B
          </div>

          <span class="text-xl font-bold">
            BottleX
          </span>
        </router-link>

        <div class="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            class="text-sm font-medium text-zinc-600 transition hover:text-indigo-600"
          >
            Features
          </a>

          <a
            href="#about"
            class="text-sm font-medium text-zinc-600 transition hover:text-indigo-600"
          >
            About
          </a>
        </div>

        <router-link
          to="/login"
          class="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          Sign in
        </router-link>
      </nav>
    </header>

    <main>
      <!-- HERO -->
      <section class="relative overflow-hidden bg-zinc-50">
        <div
          class="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28"
        >
          <div>
            <div
              class="mb-6 inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700"
            >
              A simpler way to manage your money
            </div>

            <h1
              class="max-w-2xl text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl"
            >
              Take control of your money with
              <span class="text-indigo-600">
                BottleX
              </span>
            </h1>

            <p class="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
              Track transactions, prepare for upcoming payments, build your
              savings, and know exactly how much money is safe to spend.
            </p>

            <div class="mt-8 flex flex-col gap-4 sm:flex-row">
              <router-link
                to="/login"
                class="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3.5 font-semibold text-white transition hover:bg-indigo-700"
              >
                Get started

                <ArrowRight class="size-5" />
              </router-link>

              <a
                href="#features"
                class="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-6 py-3.5 font-semibold text-zinc-700 transition hover:bg-zinc-100"
              >
                Explore features
              </a>
            </div>

            <div class="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-500">
              <div class="flex items-center gap-2">
                <ShieldCheck class="size-4 text-indigo-600" />
                Simple and secure
              </div>

              <div class="flex items-center gap-2">
                <ShieldCheck class="size-4 text-indigo-600" />
                No credit card required
              </div>
            </div>
          </div>

          <!-- DASHBOARD PREVIEW -->
          <div class="relative">
            <div
              class="absolute -left-16 -top-16 size-56 rounded-full bg-indigo-200/50 blur-3xl"
            ></div>

            <div
              class="absolute -bottom-16 -right-16 size-56 rounded-full bg-purple-200/50 blur-3xl"
            ></div>

            <div
              class="relative rounded-3xl border border-zinc-200 bg-white p-5 shadow-xl"
            >
              <div class="mb-6 flex items-center justify-between">
                <div>
                  <p class="text-sm text-zinc-500">
                    Welcome back
                  </p>

                  <h2 class="text-xl font-semibold">
                    Financial overview
                  </h2>
                </div>

                <div class="size-10 rounded-full bg-indigo-100"></div>
              </div>

              <div class="grid gap-4 sm:grid-cols-2">
                <div class="rounded-2xl bg-indigo-600 p-5 text-white">
                  <p class="text-sm text-indigo-100">
                    Available to spend
                  </p>

                  <p class="mt-2 text-3xl font-bold">
                    $1,240.50
                  </p>

                  <p class="mt-3 text-xs text-indigo-100">
                    After bills and reserved savings
                  </p>
                </div>

                <div class="rounded-2xl border border-zinc-200 p-5">
                  <p class="text-sm text-zinc-500">
                    Spending this month
                  </p>

                  <p class="mt-2 text-3xl font-bold">
                    $1,850
                  </p>

                  <p class="mt-3 text-xs text-emerald-600">
                    8.7% less than last month
                  </p>
                </div>
              </div>

              <div class="mt-4 rounded-2xl border border-zinc-200 p-5">
                <div class="mb-5 flex items-center justify-between">
                  <h3 class="font-semibold">
                    Upcoming payments
                  </h3>

                  <span class="text-sm text-indigo-600">
                    View all
                  </span>
                </div>

                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-sm font-medium">
                        Internet
                      </p>

                      <p class="text-xs text-zinc-500">
                        Due tomorrow
                      </p>
                    </div>

                    <p class="font-semibold">
                      $60
                    </p>
                  </div>

                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-sm font-medium">
                        Car insurance
                      </p>

                      <p class="text-xs text-zinc-500">
                        Due July 18
                      </p>
                    </div>

                    <p class="font-semibold">
                      $120
                    </p>
                  </div>

                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-sm font-medium">
                        Rent
                      </p>

                      <p class="text-xs text-zinc-500">
                        Due August 1
                      </p>
                    </div>

                    <p class="font-semibold">
                      $1,800
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FEATURES -->
      <section
        id="features"
        class="scroll-mt-20 py-20 lg:py-28"
      >
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <p class="font-semibold text-indigo-600">
              Everything in one place
            </p>

            <h2 class="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Tools designed for everyday finances
            </h2>

            <p class="mt-5 text-lg text-zinc-600">
              BottleX helps you understand where your money goes and prepare
              for what comes next.
            </p>
          </div>

          <div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article
              v-for="feature in features"
              :key="feature.title"
              class="rounded-2xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                class="flex size-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600"
              >
                <component
                  :is="feature.icon"
                  class="size-6"
                />
              </div>

              <h3 class="mt-5 text-lg font-semibold">
                {{ feature.title }}
              </h3>

              <p class="mt-2 leading-7 text-zinc-600">
                {{ feature.description }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- ABOUT -->
      <section
        id="about"
        class="scroll-mt-20 bg-zinc-50 py-20 lg:py-28"
      >
        <div
          class="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8"
        >
          <div>
            <p class="font-semibold text-indigo-600">
              More than a balance
            </p>

            <h2 class="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Know how much money is truly yours to spend
            </h2>

            <p class="mt-5 text-lg leading-8 text-zinc-600">
              Your bank balance does not tell the whole story. BottleX considers
              upcoming payments, funds, and wishlist savings to calculate the
              amount that is actually available.
            </p>
          </div>

          <div class="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
            <div class="space-y-5">
              <div class="flex justify-between text-zinc-600">
                <span>Current balance</span>
                <span class="font-semibold text-zinc-900">$3,000</span>
              </div>

              <div class="flex justify-between text-zinc-600">
                <span>Upcoming payments</span>
                <span class="font-semibold text-rose-600">−$1,000</span>
              </div>

              <div class="flex justify-between text-zinc-600">
                <span>Reserved funds</span>
                <span class="font-semibold text-rose-600">−$500</span>
              </div>

              <div class="flex justify-between text-zinc-600">
                <span>Wishlist savings</span>
                <span class="font-semibold text-rose-600">−$250</span>
              </div>

              <div class="border-t border-zinc-200 pt-5">
                <div class="flex items-end justify-between">
                  <span class="font-semibold">
                    Available to spend
                  </span>

                  <span class="text-3xl font-bold text-indigo-600">
                    $1,250
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-20">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            class="overflow-hidden rounded-3xl bg-indigo-600 px-6 py-14 text-center text-white sm:px-12"
          >
            <h2 class="text-3xl font-bold sm:text-4xl">
              Start managing your money with confidence
            </h2>

            <p class="mx-auto mt-5 max-w-2xl text-lg text-indigo-100">
              Sign in to organize your finances and build better money habits.
            </p>

            <router-link
              to="/login"
              class="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 font-semibold text-indigo-600 transition hover:bg-indigo-50"
            >
              Continue to login

              <ArrowRight class="size-5" />
            </router-link>
          </div>
        </div>
      </section>
    </main>

    <!-- FOOTER -->
    <footer class="border-t border-zinc-200">
      <div
        class="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between lg:px-8"
      >
        <div class="flex items-center gap-2">
          <div
            class="flex size-8 items-center justify-center rounded-lg bg-indigo-600 font-bold text-white"
          >
            B
          </div>

          <span class="font-semibold text-zinc-900">
            BottleX
          </span>
        </div>

        <p>
          © 2026 BottleX. All rights reserved.
        </p>

        <div class="flex gap-5">
          <a
            href="#"
            class="transition hover:text-indigo-600"
          >
            Privacy
          </a>

          <a
            href="#"
            class="transition hover:text-indigo-600"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>