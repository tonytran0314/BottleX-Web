<script setup lang="ts">
    import { PlusCircle } from '@lucide/vue';
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
        
       

        <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
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
                    <tr v-for="value in 8" class="bg-neutral-primary border-b border-default">
                        <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                            Apple MacBook Pro 17"
                        </th>
                        <td class="px-6 py-4">
                            Silver
                        </td>
                        <td class="px-6 py-4">
                            Laptop
                        </td>
                        <td class="px-6 py-4">
                            $2999
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


    </div>
</template>