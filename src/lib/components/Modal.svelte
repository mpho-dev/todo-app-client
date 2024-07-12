<script>
    import { closeModal } from 'svelte-modals';

    export let isOpen;
</script>

{#if isOpen}
    <div role="dialog" class="modal">
        <article class="no-padding medium center-align middle-align">
            <div class="padding secondary large-elevate contents">
                <div class="right-align">
                    <button class="circle extra fill elevate" on:click={closeModal}><i>close</i></button>
                </div>
                <h3>Create a Task: </h3>
                <div>
                    <form method="POST" action="?/create">
                        <div>
                            <div class="field label border prefix">
                                <i>title</i>
                                <input name="title" type="text" value="" required />
                                <label for="title">Title: </label>
                            </div>
                            <div class="field label border prefix">
                                <i>book</i>
                                <textarea name="description" value="" ></textarea>
                                <label for="description">Description: </label>
                            </div>
                            <div class="field middle align">
                                <nav>
                                    <div class="max">
                                        <h7>Task Completed:</h7>
                                        <div>Has the task been taken care of?</div>
                                    </div>
                                    <label class="switch"> 
                                        <input type="checkbox" name="completed" value="" />
                                        <span></span>
                                    </label>
                                </nav>
                            </div>
                            
                        </div>
                    </form>
                    <div class="inline">
                        <div class="left-align">
                            <button class="medium elevate">
                                <i>add</i>
                                <span>Add Task</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </div>
{/if}

<style>
    .modal {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 50;
      /* allow click-through to backdrop */
      pointer-events: none;
    }
  
    .contents {
      pointer-events: auto;
    }
</style>