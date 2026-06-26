<script setup lang="ts">
    import api from '../services/axios';

    // async function getTransactions() {
    //     const response = await api.get("/transactions");
    //     console.log(response.data);
    // }

    // getTransactions();

    async function getMe() {
        try {
            const res = await api.get("/auth/me");
            console.log(res.data);
        } catch (err: any) {
            console.log(err.response?.status);
            console.log(err.response?.data);
        }
    }

    getMe();
</script>

<template>
    <h1>User view</h1>
</template>