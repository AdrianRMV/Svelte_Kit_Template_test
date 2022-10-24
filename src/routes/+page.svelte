<script>
    import { browser } from '$app/environment';

    if(browser){
        window.localStorage.setItem('user','adrian');
    }
</script>
<a href="/pokemon/2">New pokemon</a>