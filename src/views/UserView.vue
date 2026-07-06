<script setup lang="ts">
    import { LayoutDashboard, ArrowRightLeft, Milk, Star, PiggyBank, Settings } from '@lucide/vue';
    import api from '../services/axios';

    const menuItems = [
        {
            icon: LayoutDashboard,
            title: "Dashboard",
            destination: "/user/dashboard"
        },
        {
            icon: ArrowRightLeft,
            title: "Transactions",
            destination: "/user/transactions"
        },
        {
            icon: Milk,
            title: "Payments",
            destination: "/user/payments"
        },
        {
            icon: Star,
            title: "Wishlists",
            destination: "/user/wishlists"
        },
        {
            icon: PiggyBank,
            title: "Funds",
            destination: "/user/funds"
        },
        {
            icon: Settings,
            title: "Settings",
            destination: "/user/settings"
        }
    ];
</script>

<template>
    <div class="flex h-screen overflow-hidden">
        <!-- SIDEBAR -->
        <div class="w-64 h-screen shrink-0 px-4 py-8 bg-zinc-50 flex flex-col gap-8">
            <div class="font-bold text-4xl bg-indigo-100 border-2 rounded-md text-center text-indigo-600 hover:cursor-pointer py-2">LOGO</div>
            <div class="w-full h-full flex flex-col justify-between">
                <div class="flex flex-col gap-2">
                    <div class="text-zinc-400 text-xs">MENU</div>
                    <div class="flex flex-col gap-1">
                        <router-link
                            v-for="item in menuItems"
                            :key="item.destination"
                            :to="item.destination"
                            class="flex gap-2 items-center hover:bg-indigo-100 hover:cursor-pointer py-3 px-4 rounded text-zinc-600 hover:text-indigo-600 font-medium">
                            <div><component :is="item.icon" class="size-5" /></div>
                            <div class="text-sm">{{ item.title }}</div>
                        </router-link>
                    </div>
                </div>
                <!-- banner for "BottleX is now on mobile, download AppStore or CHPlay now" or "Upgrade to BottleX Premium with $9.99/month, Upgrade now" -->
                <!-- <div class="bg-sky-500">banner</div> -->
                <div class="bg-zinc-50 hover:bg-white hover:cursor-pointer flex p-2 gap-2 items-center rounded-md hover:shadow-sm">
                    <div class="bg-indigo-600 min-w-12 min-h-12 size-12 rounded-full"></div>
                    <div>
                        <div class="line-clamp-1 text-sm font-medium">Tran Gia Huy</div>
                        <div class="line-clamp-1 text-zinc-400 text-xs">Premium User</div>
                    </div>
                </div>
            </div>
        </div>
        <router-view class="w-full h-full overflow-y-auto px-8 py-12" />
    </div>
</template>