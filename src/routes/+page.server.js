import * as api from '$lib/server/api.js';
import { fail } from '@sveltejs/kit';

export async function load() {
    return {
        tasks: await api.getAllTasks()
    };
}

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        let dateCreated = new Date();
        let dateModified = new Date();
        var todo = {
            title: data.get('title'),
            description: data.get('description'),
            dateCreated,
            dateModified,
            isCompleted: data.get('completed') ? true : false
        };
        console.log(todo);
        await api.addTask(todo);
    },

    update: async ({ request }) => {
        const data = await request.formData();
        var todo = {
            id : data.get('id'),
            title: data.get('title'),
            dateCreated: data.get('dateCreated'),
            dateModified: data.get('dateModified'),
            description: data.get('description'),
            isCompleted: data.get('completed') ? true : false
        };
        await api.updateTask(data.get('id'), todo);
    },

    delete: async ({ request }) => {
        const data = await request.formData();
        await api.deleteTask(data.get('id'));
    }
};