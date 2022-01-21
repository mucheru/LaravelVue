import AllAnimal from './components/AllAnimal.vue';
import CreateAnimal from './components/createAnimal.vue';
import EditAnimal from './components/editAnimal.vue';
 
export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllAnimal
    },
    {
        name: 'create',
        path: '/create',
        component: CreateAnimal
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditAnimal
    }
];