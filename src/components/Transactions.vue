<script setup lang="ts">
    import { PlusCircle } from '@lucide/vue';
    import api from '../services/axios';
    import { ref } from 'vue';

    type Transaction = {
        id: number;
        amount: number;
        image: string;
        name: string;
        note: string;
        transactionDate: string;
        type: string;
        userId: number;
    }

    const transactions = ref<Transaction[] | null>(null);
    const isLoadingTransactions = ref(true);

    async function getTransactions() {
        const response = await api.get("/transactions");

        isLoadingTransactions.value = false;

        transactions.value = response.data;
    }

    getTransactions();
</script>

<template>
    <div class="flex flex-col gap-8">
        <!-- Header -->
        <div class="flex items-center justify-between">
            <div class="text-2xl font-semibold">Transactions</div>
            <div class="bg-indigo-100 flex items-center cursor-pointer gap-1.5 rounded-md px-4 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-150">
                <div><PlusCircle class="size-5" /></div>
                <div class="text-sm font-semibold">New transaction</div>
            </div>
        </div>

        <!-- Filter -->
        <!-- <div class="bg-violet-300 h-32 shrink-0">filter here</div> -->
        
       

        <div v-if="isLoadingTransactions">loading transactions</div>
        <div v-else class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
            <table class="w-full text-sm text-left rtl:text-right text-body">
                <thead class="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                    <tr>
                        <th scope="col" class="px-6 py-3 font-medium">
                            Transaction name
                        </th>
                        <th scope="col" class="px-6 py-3 font-medium">
                            Amount
                        </th>
                        <th scope="col" class="px-6 py-3 font-medium">
                            Note
                        </th>
                        <th scope="col" class="px-6 py-3 font-medium">
                            Date
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="transaction in transactions" class="bg-neutral-primary border-b border-default">
                        <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                            {{ transaction.name }}
                        </th>
                        <td class="px-6 py-4">
                            <span v-if="transaction.type === 'EXPENSE'">-</span> 
                            <span v-else-if="transaction.type === 'INCOME'">+</span> 
                            
                            <span>${{ transaction.amount }}</span>
                        </td>
                        <td class="px-6 py-4">
                            {{ transaction.note }}
                        </td>
                        <td class="px-6 py-4">
                            {{ transaction.transactionDate }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


    </div>
</template>