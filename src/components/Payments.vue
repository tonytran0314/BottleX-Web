<script setup lang="ts">
import { PlusCircle } from '@lucide/vue';
import api from '../services/axios';
import { ref } from 'vue';

type Payment = {
    id: number;
    name: string;
    amount: number;
    startDate: string;
    endDate: string;
    userId: number;
    dueDates: number[]; // fix the type
}

const payments = ref<Payment[] | null>(null);
const isLoadingPayments = ref(true);

async function getPayments() {
    const response = await api.get("/payments");
console.log(response.data)
    isLoadingPayments.value = false;

    payments.value = response.data;
}

getPayments();
</script>

<template>
    <div class="flex flex-col gap-8">
        <!-- Header -->
        <div class="flex items-center justify-between">
            <div class="text-2xl font-semibold">Payments</div>
            <div class="bg-indigo-100 flex items-center cursor-pointer gap-1.5 rounded-md px-4 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-150">
                <div><PlusCircle class="size-5" /></div>
                <div class="text-sm font-semibold">New payment</div>
            </div>
        </div>
        <!-- Filter -->
        <!-- <div class="bg-violet-300 h-32 shrink-0">filter here</div> -->
        
        <div class="grid grid-cols-2 gap-4">

            <div v-for="payment in payments" class="border border-solid rounded-lg p-4 border-zinc-200 flex gap-3">
                <div class="bg-zinc-300 flex-4 h-48 flex items-center justify-center text-zinc-400 rounded-lg"><div>image</div></div>
                <div class="flex-3 flex flex-col justify-between">
                    <div class="flex flex-col gap-1">
                        <div class="text-xl">{{ payment.name }}</div>
                        
                        <div class="text-md">${{ payment.amount }}</div> 

                        <div v-for="dueDate in payment.dueDates" class="line-clamp-1 text-zinc-400 text-sm">On {{ dueDate.dueDateOnMonth }}</div>
                        <div class="line-clamp-1 text-zinc-400 text-sm">From {{ payment.startDate }}</div>
                        <div class="line-clamp-1 text-zinc-400 text-sm">To {{ payment.endDate }}</div>
                    </div>
                    <!-- <div class="flex justify-center items-center gap-4">
                        <div class="bg-indigo-100 text-indigo-600 cursor-pointer hover:bg-indigo-600 hover:text-white py-2 rounded-md transition duration-150 w-full text-center text-sm">Add money</div>
                        <div><Ellipsis class="size-5 cursor-pointer" /></div>
                    </div> -->
                </div>
            </div>
            
        </div>

        <!-- pagination -->
        <!-- <div>pagination</div> -->
    </div>
</template>