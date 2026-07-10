<script setup lang="ts">
import { BanknoteArrowDown, BanknoteArrowUp, CircleDashed, Ellipsis, HandCoins, Wallet } from '@lucide/vue';
import { ref } from 'vue';
import api from '../services/axios';

type Account = {
    balance: number,
    safeToSpend: number,
    safeToSpendUntil: string
}

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

const account = ref<Account | null>(null);
const transactions = ref<Transaction[] | null>(null);
const isLoadingAccount = ref(true);
const isLoadingTransactions = ref(true);

async function getAccount() {
    const response = await api.get("/accounts");
    account.value = response.data
    isLoadingAccount.value = false
}

async function getTransactions() {
    const response = await api.get("/transactions");

    isLoadingTransactions.value = false;

    transactions.value = response.data;
}

getTransactions();
getAccount();
</script>

<template>
    <div class="flex flex-col gap-8">
    
        <div class="text-2xl font-semibold">Dashboard</div>
        
        <div class="flex flex-col gap-6 h-full">
        
            <div v-if="isLoadingAccount">loading account</div>
            <div v-else class="flex gap-6">
                <div class="flex justify-between items-center flex-1 border border-solid border-zinc-200 p-4 rounded-lg">
                    <div class="flex flex-col gap-2">
                        <div class="text-md">Safe to spend</div>
                        <div class="font-medium text-2xl">${{ account?.safeToSpend }}</div>
                        <div class="text-xs text-zinc-500 flex gap-1 items-center">
                            <div>until</div>
                            <div class="bg-green-100 px-1 py-0.5 rounded text-green-400 font-medium">{{ account?.safeToSpendUntil }}</div> 
                        </div>
                    </div>
                    <div class="bg-indigo-100 rounded-lg p-3 text-indigo-600"><HandCoins /></div>
                </div>
                <div class="flex justify-between items-center flex-1 border border-solid border-zinc-200 p-4 rounded-lg">
                    <div class="flex flex-col gap-2">
                        <div class="text-md">Current balance</div>
                        <div class="font-medium text-2xl">${{ account?.balance }}</div>
                        <div class="text-xs text-zinc-500 flex gap-1 items-center">
                            <div class="bg-green-100 px-1 py-0.5 rounded text-green-400 font-medium">+ $40</div> 
                            <div>from last transaction</div>
                        </div>
                    </div>
                    <div class="bg-indigo-100 rounded-lg p-3 text-indigo-600"><Wallet /></div>
                </div>
                <div class="flex justify-between items-center flex-1 border border-solid border-zinc-200 p-4 rounded-lg">
                    <div class="flex flex-col gap-2">
                        <div class="text-md">Earning this month</div>
                        <div class="font-medium text-2xl">$3,200.00</div>
                        <div class="text-xs text-zinc-500 flex gap-1 items-center">
                            <div class="bg-green-100 px-1 py-0.5 rounded text-green-400 font-medium">+ 8%</div> 
                            <div>from last month</div>
                        </div>
                    </div>
                    <div class="bg-indigo-100 rounded-lg p-3 text-indigo-600"><BanknoteArrowUp /></div>
                </div>
                <div class="flex justify-between items-center flex-1 border border-solid border-zinc-200 p-4 rounded-lg">
                    <div class="flex flex-col gap-2">
                        <div class="text-md">Spending this month</div>
                        <div class="font-medium text-2xl">$3,200.00</div>
                        <div class="text-xs text-zinc-500 flex gap-1 items-center">
                            <div class="bg-red-100 px-1 py-0.5 rounded text-red-400 font-medium">- 5%</div> 
                            <div>from last month</div>
                        </div>
                    </div>
                    <div class="bg-indigo-100 rounded-lg p-3 text-indigo-600"><BanknoteArrowDown /></div>
                </div>
            </div>

            <div class="flex gap-6 h-full">
                <div class="flex flex-col flex-3 p-4 border border-solid border-zinc-200 rounded-lg gap-2">
                    <div class="font-medium text-xl">Payments timeline</div>
                    <div class="overflow-y-scroll flex flex-col gap-8 items-center">
                        <div v-for="value in 16" class="flex flex-col gap-2 border border-solid border-zinc-200 rounded-lg p-4 w-1/2">
                            <div class="flex justify-between">
                                <div class="text-lg">Springfield rent</div>
                                <div><CircleDashed class="size-5 text-zinc-500" /></div>
                            </div>
                            <div class="text-sm text-zinc-500">$0 / $1000</div>
                            <div class="text-sm text-zinc-500">Aug 5, 2026</div>
                            <div class="flex gap-4 justify-between items-center">
                                <div class="bg-indigo-100 text-indigo-600 cursor-pointer hover:bg-indigo-600 hover:text-white py-2 rounded-md transition duration-150 w-full text-center text-sm">Add money</div>
                                <div class="cursor-pointer"><Ellipsis class="size-5" /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col gap-6 flex-2">
                    <div class="border border-solid p-4 rounded-lg border-zinc-200 flex flex-col gap-2">
                        <div class="flex items-baseline justify-between">
                            <div class="font-medium text-xl">Wishlist</div>
                            <div class="cursor-pointer text-sm text-indigo-600 hover:underline">See all</div>
                        </div>
                        <div class="flex flex-col gap-1.5">
                            <div v-for="value in 4" class="flex justify-between">
                                <div>Monitor 27in 4K</div>
                                <div>$24 / $399</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="border border-solid p-4 rounded-lg border-zinc-200 flex flex-col gap-2">
                        <div class="flex items-baseline justify-between">
                            <div class="font-medium text-xl">Funds</div>
                            <div class="cursor-pointer text-sm text-indigo-600 hover:underline">See all</div>
                        </div>
                        <div class="flex flex-col gap-1.5">
                            <div v-for="value in 4" class="flex justify-between">
                                <div>Monitor 27in 4K</div>
                                <div>$840</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="border border-solid p-4 rounded-lg border-zinc-200 flex flex-col gap-2">
                        <div class="flex items-baseline justify-between">
                            <div class="font-medium text-xl">Recent transactions</div>
                            <div class="cursor-pointer text-sm text-indigo-600 hover:underline">See all</div>
                        </div>
                        <div class="flex flex-col gap-1.5">
                            <div v-for="transaction in transactions" class="flex justify-between">
                                <div>{{ transaction.name }}</div>

                                <div>
                                    <span v-if="transaction.type === 'INCOME'">+</span>
                                    <span v-else-if="transaction.type === 'EXPENSE'">-</span>
                                    
                                    <span>${{ transaction.amount }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    
    </div>
</template>