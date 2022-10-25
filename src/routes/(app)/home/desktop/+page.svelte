<script>
    /** @type {import('./$types').PageData} */
    export let data;
    const products = data.products.data;
</script>

<p>
    {products[0].name}
</p>