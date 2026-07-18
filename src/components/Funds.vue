<script setup lang="ts">
    import { PlusCircle, Ellipsis } from '@lucide/vue';
    import api from '../services/axios';
    import { ref } from 'vue';

    type Fund = {
        id: number;
        name: string;
        reserved: number;
        image: string;
        description: string;
        userId: number;
    }

    const funds = ref<Fund[] | null>(null);
    const isLoadingFunds = ref(true);

    async function getFunds() {
        const response = await api.get("/funds");

        isLoadingFunds.value = false;

        funds.value = response.data;
    }

    async function addNewFund() {
        const newFund = {
            "name": "Healing Trip",
            "description": "listen to old songs"
        }

        const response = await api.post('/funds', newFund);

        console.log(newFund)
    }

    getFunds();
</script>

<template>
    <div class="flex flex-col gap-8">
        <!-- Header -->
        <div class="flex items-center justify-between">
            <div class="text-2xl font-semibold">Funds</div>
            <div class="bg-indigo-100 flex items-center cursor-pointer gap-1.5 rounded-md px-4 py-3 text-indigo-600" v-on:click="addNewFund">
                <div><PlusCircle class="size-5" /></div>
                <div class="text-sm font-semibold">New fund</div>
            </div>
        </div>

        <!-- Filter -->
        <!-- <div class="bg-violet-300 h-32 shrink-0">filter here</div> -->
        
        <div class="grid grid-cols-2 gap-4">

            <div v-for="fund in funds" class="border border-solid rounded-lg p-4 border-zinc-200 flex gap-3">
                <div class="bg-zinc-300 flex-4 h-48 flex items-center justify-center text-zinc-400 rounded-lg"><div>image</div></div>
                <div class="flex-3 flex flex-col justify-between">
                    <div class="flex flex-col gap-1">
                        <div class="text-xl">{{ fund.name }}s</div>
                        
                        <div class="text-md">Funded $0</div> 

                        <div class="line-clamp-3 text-zinc-400 text-sm">{{ fund.description }}</div>
                    </div>
                    <div class="flex justify-center items-center gap-4">
                        <div class="bg-indigo-100 text-indigo-600 cursor-pointer hover:bg-indigo-600 hover:text-white py-2 rounded-md transition duration-150 w-full text-center text-sm">Add money</div>
                        <div><Ellipsis class="size-5 cursor-pointer" /></div>
                    </div>
                </div>
            </div>
            
        </div>

        <!-- pagination -->
        <!-- <div>pagination</div> -->
    </div>
</template>