<script>
    export let data;
    console.log(data);
</script>
{#if data.user.data != null}
    <h1>{data.user.data.name}</h1>
{:else}
    <h2>No existe ese wey</h2>
{/if}


