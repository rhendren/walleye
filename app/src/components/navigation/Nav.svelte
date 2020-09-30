<script context="module">
    import Home from '../../pages/home.svelte';
    import LogIn from '../../pages/login.svelte';
    import SignUp from '../../pages/signup.svelte';
    export const navOptions = [
        { page: 'Home',   component: Home },
        { page: 'Log In',   component: LogIn },
        { page: 'Sign Up',   component: SignUp }
    ];
</script>