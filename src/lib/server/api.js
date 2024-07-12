const API_URL = 'http://localhost:5275/api/TODO';

export async function getAllTasks() {
    const response = await fetch(`${API_URL}/`);
    if(!response.ok) {
        console.log(await response.text());
        throw new Error('Failed to retrieve Task list');
    }
    return response.json();
}

export async function getTask(id) {
    const response = await fetch(`${API_URL}/${id}`);
    if(!response.ok) {
        console.log(await response.text());
        throw new Error(`Failed to retrieve Task with id ${id}`);
    }

    return response.json();
}

export async function addTask(todo) {
    const response = await fetch(`${API_URL}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    });

    if(!response.ok) {
        console.log(await response.text());
        throw new Error('Failed to create a Task');
    }

    return response.json();
}

export async function updateTask(id, todo) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    });

    if(!response.ok) {
        console.log(await response.text());
        throw new Error(`Could not update task ${id}`);
    }

}

export async function deleteTask(id) {

    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });

    if (!response.ok) {
        console.log(await response.text());
        throw new Error(`Could not remove Task ${id}`);
    }
}