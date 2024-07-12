<script>
    import { Modals, closeModal, openModal } from 'svelte-modals';
    import TodoItem from "$lib/components/TodoItem.svelte";
    import Modal from "$lib/components/Modal.svelte";

    export let data;

    function handleAdd() {
        console.log("Open Modal");
        openModal(Modal);
    }
</script>
<div class="medium-space">
    <header>
        <div clasas="medium-space"></div>
        <h1 class="small-padding">Welcome to Task Mania</h1>
    </header>
    <nav class="bottom">
        <button class="extra large-elevate fill" on:click={handleAdd} >
            <i>Add</i>
        </button>
    </nav>
    <main class="responsive">
        <Modals></Modals>
        <ul>
            {#each data.tasks as task}
                <TodoItem {...task} />
            {/each}
        </ul>
    </main>
</div>