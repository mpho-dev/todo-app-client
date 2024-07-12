<script>
    export let id;
    export let title;
    export let description;
    export let dateCreated;
    export let dateModified;
    export let isCompleted;

    dateCreated = dateCreated.substring(0, 10);
    dateModified = dateModified.substring(0, 10);
</script>

<article>
    <form method="POST" action="?/update">
        <div class="field label border prefix">
            <i>title</i>
            <input name="title" type="text" bind:value={title} />
            <label for="title">Title: </label>
        </div>
        <input type='hidden' name="id" id="id" bind:value="{id}" />
        <div class="field label border prefix">
            <i>book</i>
            <textarea name="description" bind:value={description}></textarea>
            <label for="description">Description: </label>
        </div>
        <div class="field label border prefix">
            <i>today</i>
            <input name="dateCreated" type="datetime" bind:value={dateCreated} >
            <label for="dateCreated">Date Created: </label>
        </div>
        <div class="field label border prefix">
            <i>today</i>
            <input name="dateModified" type="datetime" bind:value={dateModified} >
            <label for="dateModified">Date Modified: </label>
        </div>
        <div class="field middle align">
            <nav>
                <div class="max">
                    <h7><strong>Task Completed:</strong></h7>
                    <div>Has the task been taken care of?</div>
                </div>
                <label class="switch"> 
                    <input type="checkbox" name="completed" bind:checked={isCompleted} />
                    <span></span>
                </label>
            </nav>
        </div>
        <div style="display: inline-block" class="left-align">
            <button class="extra large-elevate">
                <i>update</i>
                <span>Update</span>
            </button>
        </div>
        <div style="display: inline-block" class="right-align">
            <button class="extra large-elevate">
                <i>delete</i>
                <span>Delete</span>
            </button>
        </div>
    </form>
    <form method="POST" action="?/delete">
        <input type="hidden" name="id" bind:value={id} />
        
    </form>
</article>