<template>
    <div>
        <h2 class="text-center">Animals List</h2>
 
        <table class="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Detail</th>
                <!-- <th>Actions</th> -->
            </tr>
            </thead>
            <tbody>
            <tr v-for="animal in animals" :key="animal.id">
                <td>{{ animal.id }}</td>
                <td>{{ animal.name }}</td>
                <td>{{ animal.detail }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'edit', params: { id: animal.id }}" class="btn btn-success">Edit</router-link>
                        <button class="btn btn-danger" @click="deleteAnimal(animal.id)">Delete</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                animals: []
            }
        },
        created() {
            this.axios
                .get('http://localhost:8000/api/animals/')
                .then(response => {
                    this.animals = response.data;
                });
        },
        methods: {
            deleteAnimal(id) { 
                this.axios
                    .delete(`http://localhost:8000/api/animals/${id}`)
                    .then(response => {
                        let i = this.animals.map(data => data.id).indexOf(id);
                        this.animals.splice(i, 1)
                    });
            }
        }
    }
</script>