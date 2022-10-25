<script>
    import { browser } from '$app/environment';
    let dataUsuario = {
        email : "",
        password : "",
    }

    function login () {
        console.log("Hola")
    }

</script>

<svelte:head>
    <!-- Layout config Js -->
    <script src="http://localhost:5173/assets/js/layout.js"></script>
    <!-- Bootstrap Css -->
    <link
        href="http://localhost:5173/assets/css/bootstrap.min.css"
        rel="stylesheet"
        type="text/css"
    />
    <!-- Icons Css -->
    <link
        href="http://localhost:5173/assets/css/icons.min.css"
        rel="stylesheet"
        type="text/css"
    />
    <!-- App Css-->
    <link
        href="http://localhost:5173/assets/css/app.min.css"
        rel="stylesheet"
        type="text/css"
    />
    <!-- custom Css-->
    <link
        href="http://localhost:5173/assets/css/custom.min.css"
        rel="stylesheet"
        type="text/css"
    />
</svelte:head>
<main>
    <div class="auth-page-wrapper pt-5">
        <!-- auth page bg -->
        <div class="auth-one-bg-position auth-one-bg" id="auth-particles">
            <div class="bg-overlay" />

            <div class="shape">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 1440 120">
                    <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z" />
                </svg>
            </div>
        </div>

        <!-- auth page content -->
        <div class="auth-page-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-center mt-sm-5 mb-4 text-white-50">
                            <div>
                                <a href="index.html" class="d-inline-block auth-logo">
                                    <img src="http://localhost:5173/assets/images/logo-light.png" alt="" height="20" />
                                </a>
                            </div>
                            <p class="mt-3 fs-15 fw-medium">
                                El Ecommerce de gente pro
                            </p>
                        </div>
                    </div>
                </div>
                <!-- end row -->

                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-5">
                        <div class="card mt-4">
                            <div class="card-body p-4">
                                <div class="text-center mt-2">
                                    <h5 class="text-primary">Welcome Back !</h5>
                                    <p class="text-muted">
                                        Sign in to continue to Velzon.
                                    </p>
                                </div>
                                <div class="p-2 mt-4">
                                    <div class="mb-3">
                                        <label for="useremail" class="form-label">Email
                                            <span class="text-danger">*</span>
                                        </label>
                                        <input type="email" class="form-control" id="useremail" bind:value={dataUsuario.email}
                                            placeholder="Enter email address" required name="email"/>
                                        <div class="invalid-feedback">
                                            Please enter email
                                        </div>
                                    </div>

                                    <div class="mb-3">
                                        <div class="float-end">
                                            <a
                                                href="./forgotPassword"
                                                class="text-muted"
                                                >Forgot password?</a
                                            >
                                        </div>

                                        <label class="form-label" for="password-input">Password
                                            <span class="text-danger">*</span></label>
                                        <div class="position-relative auth-pass-inputgroup mb-3">
                                            <input type="password" class="form-control pe-5 password-input" bind:value={dataUsuario.password}
                                                placeholder="Enter password" id="password-input" name="password" required />
                                            <button
                                                class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted shadow-none password-addon"
                                                type="button" id="password-addon">
                                                <i class="ri-eye-fill align-middle" />
                                            </button>
                                        </div>
                                    </div>

                                    <div class="mt-4">
                                        <button class="btn btn-success w-100" on:click={login}>
                                            Sign In
                                        </button>
                                    </div>
                                    <input type="hidden" name="action" value="access">
                                </div>
                            </div>
                            <!-- end card body -->
                        </div>
                        <!-- end card -->

                        <div class="mt-4 text-center">
                            <p class="mb-0">
                                Don't have an account ? <a
                                    href="/registerUser"
                                    class="fw-semibold text-primary text-decoration-underline"
                                >
                                    Signup
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </div>
        <!-- end auth page content -->
    </div>
    <!-- end auth-page-wrapper -->
    {#if browser}
    <script
    
    src="http://localhost:5173/assets/libs/bootstrap/js/bootstrap.bundle.min.js"
></script>
<script
    
    src="http://localhost:5173/assets/libs/simplebar/simplebar.min.js"
></script>
<script
    
    src="http://localhost:5173/assets/libs/node-waves/waves.min.js"
></script>
<script
    
    src="http://localhost:5173/assets/libs/feather-icons/feather.min.js"
></script>
<script
    
    src="http://localhost:5173/assets/js/pages/plugins/lord-icon-2.1.0.js"
></script>
<script  src="http://localhost:5173/assets/js/plugins.js"></script>
<script
    
    src="http://localhost:5173/assets/libs/particles.js/particles.js"
></script>
<script
    
    src="http://localhost:5173/assets/js/pages/particles.app.js"
></script>
<script
    
    src="http://localhost:5173/assets/js/pages/password-addon.init.js"
></script>
    {/if}
</main>