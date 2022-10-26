<script>
    import { browser } from '$app/environment';

</script>
    
    <svelte:head>
        <title>DevEcommerce | Registro</title>
        <!-- ============================================ -->
        <!-- Css template -->
        <!-- ============================================ -->
    
        <!-- Layout config Js -->
        <script defer src="http://localhost:5173/assets/js/layout.js"></script>
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
                <div class="bg-overlay"></div>
    
                <div class="shape">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 120">
                        <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
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
                                        <img src="http://localhost:5173/assets/images/logo-light.png" alt="" height="20">
                                    </a>
                                </div>
                                <p class="mt-3 fs-15 fw-medium">Premium Admin & Dashboard Template</p>
                            </div>
                        </div>
                    </div>
                    <!-- end row -->
    
                    <div class="row justify-content-center">
                        <div class="col-md-8 col-lg-6 col-xl-5">
                            <div class="card mt-4">
    
                                <div class="card-body p-4">
                                    <div class="text-center mt-2">
                                        <h5 class="text-primary">Create New Account</h5>
                                        <p class="text-muted">Get your free velzon account now</p>
                                    </div>
                                    <form method="POST" enctype=multipart/form-data>
                                        <div class="p-2 mt-4">
                                            <form method="POST">
                                                <div class="mb-3">
                                                    <label for="username" class="form-label">Nombre <span class="text-danger">*</span></label>
                                                    <input type="text" name="name" class="form-control" id="username" placeholder="Ingresa tu nombre" required>
                                                    <div class="invalid-feedback">
                                                        Porfavor ingresa tu nombre
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="userlastname" class="form-label">Apellidos <span class="text-danger">*</span></label>
                                                    <input type="text" name="lastname" class="form-control" id="userlastname" placeholder="Ingresa tus apellidos" required>
                                                    <div class="invalid-feedback">
                                                        Porfavor ingresa tus apellidos
                                                    </div>
                                                </div>
        
                                                <div class="mb-3">
                                                    <label for="useremail" class="form-label">Email <span class="text-danger">*</span></label>
                                                    <input type="email" name="email" class="form-control" id="useremail" placeholder="Ingresa tu email" required>
                                                    <div class="invalid-feedback">
                                                        Porfavor ingresa tu email
                                                    </div>
                                                </div>
        
                                                <div class="mb-3">
                                                    <label for="userphone" class="form-label">Telefono <span class="text-danger">*</span></label>
                                                    <input type="tel" name="phone_number" class="form-control" id="userphone" placeholder="Ingresa tu telefono" required>
                                                    <div class="invalid-feedback">
                                                        Porfavor ingresa tu telefono
                                                    </div>
                                                </div>
        
                                                <div class="mb-3">
                                                    <label class="form-label" for="password-input">Password</label>
                                                    <div class="position-relative auth-pass-inputgroup">
                                                        <input type="password" name="password" class="form-control pe-5 password-input" onpaste="return false" placeholder="Enter password" id="password-input" aria-describedby="passwordInput" required>
                                                        <button class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i class="ri-eye-fill align-middle"></i></button>
                                                    </div>
                                                </div>
        
                                                <div id="password-contain" class="p-3 bg-light mb-2 rounded">
                                                    <h5 class="fs-13">Password must contain:</h5>
                                                    <p id="pass-length" class="invalid fs-12 mb-2">Minimum <b>8 characters</b></p>
                                                    <p id="pass-lower" class="invalid fs-12 mb-2">At <b>lowercase</b> letter (a-z)</p>
                                                    <p id="pass-upper" class="invalid fs-12 mb-2">At least <b>uppercase</b> letter (A-Z)</p>
                                                    <p id="pass-number" class="invalid fs-12 mb-0">A least <b>number</b> (0-9)</p>
                                                </div>
        
                                                <div class="mb-3">
                                                    <input name="cover" id="image_cover" required type="file" class="form-control" aria-describedby="basic-addon1">
                                                </div>
        
                                                <div class="mt-4">
                                                    <button class="btn btn-success w-100" type="submit">Sign Up</button>
                                                </div>
                                                <input type="hidden" name="action" value="create">
                                            </form>
                                        </div>
                                    </form>
                                </div>
                                <!-- end card body -->
                            </div>
                            <!-- end card -->
    
                            <div class="mt-4 text-center">
                                <p class="mb-0">Ya tienes una cuenta?  <a href="/login" class="fw-semibold text-primary text-decoration-underline"> Inicia Sesion </a> </p>
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
    
    </main>

        {#if browser}
            <script defer src="http://localhost:5173/assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script defer src="http://localhost:5173/assets/libs/simplebar/simplebar.min.js"></script>
            <script defer src="http://localhost:5173/assets/libs/node-waves/waves.min.js"></script>
            <script defer src="http://localhost:5173/assets/libs/feather-icons/feather.min.js"></script>
            <script defer src="http://localhost:5173/assets/js/pages/plugins/lord-icon-2.1.0.js"></script>
            <script defer src="http://localhost:5173/assets/js/plugins.js"></script>
        
            <!-- particles js -->
            <script defer src="http://localhost:5173/assets/libs/particles.js/particles.js"></script>
            <!-- particles app js -->
            <script defer src="http://localhost:5173/assets/js/pages/particles.app.js"></script>
            <!-- validation init -->
            <script defer src="http://localhost:5173/assets/js/pages/form-validation.init.js"></script>
            <!-- password create init -->
            <script defer src="http://localhost:5173/assets/js/pages/passowrd-create.init.js"></script>
        {/if}
    