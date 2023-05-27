<script setup>
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
</script>
<template> 
<!-- logo -->
<nav class="navbar navbar-expand-lg bg-white">
    <div class="container">
        <a class="navbar-brand" href="#"><img
                src="../assets/imgages/logo.png"
                alt=""></a>


    </div>
</nav>
<!-- logo ends -->
<!--  -->
<nav class="navbar bg-white">
    <div class="container-fluid">
        <a class="navbar-brand fw-bold fs-3 ms-lg-4">Dashboard
        </a>
        <form class="d-flex" role="search">
            <button type="button"
                class="btn bg-white upload-blogs me-5 active"
                data-bs-toggle="button"
                aria-pressed="true">Upload
                Blog <i
                    class="bi bi-cloud-arrow-up fs-5 fw-bold "></i>
            </button>
            <!--  -->
            <button type="button"
                class="btn  logout active me-4"
                data-bs-toggle="button"
                aria-pressed="true">Logout
            </button>

            <!--  -->
            <div
                class="lina-pic-and-name d-flex me-3">
                <img src="../assets/images/image 12.png"
                    alt="" class="pic-lina">
                <p
                    class="linaName fw-bold pt-2 ps-2">
                    Lina <i
                        class="bi bi-arrow-bar-down fw-bold fs-4"></i>
                </p>

            </div>

        </form>
    </div>
</nav>
<!-- nav ends -->

<!-- section one starts -->
<div class="container-fluid mt-5">
    <div
        class="my-blog-heading-plus-see-all d-flex">
        <h4 class="myblogh4 fs-5 ms-lg-4">My
            Blogs
        </h4>
        <a href="#" class="seeall-link">see
            all</a>
    </div>

    <div class="row mx-3 mt-3">
        <div
            class="col-lg-3 col-md-6 col-sm-12 col-xxl-3 col-xl-3 ">
            <div class="card first-card-sec-one-col-one"
                style="width: 18rem;">
                <img src="../assets/images/lp6.png"
                    class="card-img-top p-3"
                    alt="...">
                <!-- design icon and 3 months -->
                <div
                    class="design-icon-and-three-months d-flex">
                    <div
                        class=" d-flex ps-3 design-and-3month-flex-div">
                        <i
                            class="bi bi-bounding-box text-muted"></i>
                        <p
                            class="design ps-2 text-muted">
                            Design</p>
                    </div>
                    <!--  -->
                    <div class=" d-flex ps-3">
                        <i
                            class="bi bi-stopwatch text-muted"></i>
                        <p
                            class="design ps-2 text-muted 3months">
                            3 months</p>
                    </div>
                </div>
                <div
                    class="card-body text-start ps-3">
                    <h6>AWS Certified
                        solutions <br>
                        Architect
                    </h6>
                    <p
                        class="text-muted w-100">
                        Lorem ipsum dolor sit
                        amet, consectetur
                        adipising elit, sed do
                        eiusmod tempor</p>
                    <!--      +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
                    <div
                        class="lina-and-delet-button d-flex">
                        <div
                            class="lina-pic-and-name-in-first-card-sec-1 d-flex ">
                            <img src="../assets/images/image 12.png"
                                alt=""
                                class="pic-lina">
                            <p
                                class="linaName fw-bold pt-2 ps-2">
                                Lina
                            </p>

                        </div>
                        <!--  -->
                        <button type="button"
                            class="btn btn- delet-btn">Delete</button>
                    </div>
                </div>
            </div>

        </div>
        <!--  -->
        <div
            class="col-lg-3 col-md-6 col-sm-12 col-xxl-3 col-xl-3">
            <div class="card first-card-sec-one-col-one"
                style="width: 18rem;">
                <img src="../assets/images/lp6.png"
                    class="card-img-top p-3"
                    alt="...">
                <!-- design icon and 3 months -->
                <div
                    class="design-icon-and-three-months d-flex">
                    <div
                        class=" d-flex ps-3 design-and-3month-flex-div">
                        <i
                            class="bi bi-bounding-box text-muted"></i>
                        <p
                            class="design ps-2 text-muted">
                            Design</p>
                    </div>
                    <!--  -->
                    <div class=" d-flex ps-3">
                        <i
                            class="bi bi-stopwatch text-muted"></i>
                        <p
                            class="design ps-2 text-muted 3months">
                            3 months</p>
                    </div>
                </div>
                <div
                    class="card-body text-start ps-3">
                    <h6>AWS Certified
                        solutions <br>
                        Architect
                    </h6>
                    <p
                        class="text-muted w-100">
                        Lorem ipsum dolor sit
                        amet, consectetur
                        adipising elit, sed do
                        eiusmod tempor</p>
                    <!--      +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
                    <div
                        class="lina-and-delet-button d-flex">
                        <div
                            class="lina-pic-and-name-in-first-card-sec-1 d-flex ">
                            <img src="../assets/images/image 12.png"
                                alt=""
                                class="pic-lina">
                            <p
                                class="linaName fw-bold pt-2 ps-2">
                                Lina
                            </p>

                        </div>
                        <!--  -->
                        <button type="button"
                            class="btn btn- delet-btn">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->
        <div
            class="col-lg-3 col-md-6 col-sm-12 col-xxl-3 col-xl-3 mt-md-4 mt-lg-0 mt-sm-0 mt-xxl-0 mt-xl-0">
            <div class="card first-card-sec-one-col-one"
                style="width: 18rem;">
                <img src="../assets/images/lp5.png"
                    class="card-img-top p-3"
                    alt="...">
                <!-- design icon and 3 months -->
                <div
                    class="design-icon-and-three-months d-flex">
                    <div
                        class=" d-flex ps-3 design-and-3month-flex-div">
                        <i
                            class="bi bi-bounding-box text-muted"></i>
                        <p
                            class="design ps-2 text-muted">
                            Design</p>
                    </div>
                    <!--  -->
                    <div class=" d-flex ps-3">
                        <i
                            class="bi bi-stopwatch text-muted"></i>
                        <p
                            class="design ps-2 text-muted 3months">
                            3 months</p>
                    </div>
                </div>
                <div
                    class="card-body text-start ps-3">
                    <h6>AWS Certified
                        solutions <br>
                        Architect
                    </h6>
                    <p
                        class="text-muted w-100">
                        Lorem ipsum dolor sit
                        amet, consectetur
                        adipising elit, sed do
                        eiusmod tempor</p>
                    <!--      +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
                    <div
                        class="lina-and-delet-button d-flex">
                        <div
                            class="lina-pic-and-name-in-first-card-sec-1 d-flex ">
                            <img src="../assets/images/image 12.png"
                                alt=""
                                class="pic-lina">
                            <p
                                class="linaName fw-bold pt-2 ps-2">
                                Lina
                            </p>

                        </div>
                        <!--  -->
                        <button type="button"
                            class="btn btn- delet-btn">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->
        <div
            class="col-lg-3 col-md-6 col-sm-12 col-xxl-3 col-xl-3 mt-md-4 mt-lg-0 mt-sm-0 mt-xxl-0 mt-xl-0">
            <div class="card first-card-sec-one-col-one"
                style="width: 18rem;">
                <img src="../assets/images/lp10.png"
                    class="card-img-top p-3"
                    alt="...">
                <!-- design icon and 3 months -->
                <div
                    class="design-icon-and-three-months d-flex">
                    <div
                        class=" d-flex ps-3 design-and-3month-flex-div">
                        <i
                            class="bi bi-bounding-box text-muted"></i>
                        <p
                            class="design ps-2 text-muted">
                            Design</p>
                    </div>
                    <!--  -->
                    <div class=" d-flex ps-3">
                        <i
                            class="bi bi-stopwatch text-muted"></i>
                        <p
                            class="design ps-2 text-muted 3months">
                            3 months</p>
                    </div>
                </div>
                <div
                    class="card-body text-start ps-3">
                    <h6>AWS Certified
                        solutions <br>
                        Architect
                    </h6>
                    <p
                        class="text-muted w-100">
                        Lorem ipsum dolor sit
                        amet, consectetur
                        adipising elit, sed do
                        eiusmod tempor</p>
                    <!--      +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
                    <div
                        class="lina-and-delet-button d-flex">
                        <div
                            class="lina-pic-and-name-in-first-card-sec-1 d-flex ">
                            <img src="../assets/images/image 12.png"
                                alt=""
                                class="pic-lina">
                            <p
                                class="linaName fw-bold pt-2 ps-2">
                                Lina
                            </p>

                        </div>
                        <!--  -->
                        <button type="button"
                            class="btn btn- delet-btn">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- row two starts -->

    <div class="row mx-3 mt-3 mt-md-5 ">
        <div
            class="col-lg-3 col-md-6 col-sm-12 col-xxl-3 col-xl-3 w-100-sm ">
            <div class="card first-card-sec-one-col-one"
                style="width: 18rem;">
                <img src="../assets/images/lp6.png"
                    class="card-img-top p-3"
                    alt="...">
                <!-- design icon and 3 months -->
                <div
                    class="design-icon-and-three-months d-flex">
                    <div
                        class=" d-flex ps-3 design-and-3month-flex-div">
                        <i
                            class="bi bi-bounding-box text-muted"></i>
                        <p
                            class="design ps-2 text-muted">
                            Design</p>
                    </div>
                    <!--  -->
                    <div class=" d-flex ps-3">
                        <i
                            class="bi bi-stopwatch text-muted"></i>
                        <p
                            class="design ps-2 text-muted 3months">
                            3 months</p>
                    </div>
                </div>
                <div
                    class="card-body text-start ps-3">
                    <h6>AWS Certified
                        solutions <br>
                        Architect
                    </h6>
                    <p
                        class="text-muted w-100">
                        Lorem ipsum dolor sit
                        amet, consectetur
                        adipising elit, sed do
                        eiusmod tempor</p>
                    <!--      +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
                    <div
                        class="lina-and-delet-button d-flex">
                        <div
                            class="lina-pic-and-name-in-first-card-sec-1 d-flex ">
                            <img src="../assets/images/lp6.png"
                                alt=""
                                class="pic-lina">
                            <p
                                class="linaName fw-bold pt-2 ps-2">
                                Lina
                            </p>

                        </div>
                        <!--  -->
                        <button type="button"
                            class="btn btn- delet-btn">Delete</button>
                    </div>
                </div>
            </div>

        </div>
        <!--  -->
        <div
            class="col-lg-3 col-md-6 col-sm-12 col-xxl-3 col-xl-3">
            <div class="card first-card-sec-one-col-one"
                style="width: 18rem;">
                <img src="../assets/images/lp6.png"
                    class="card-img-top p-3"
                    alt="...">
                <!-- design icon and 3 months -->
                <div
                    class="design-icon-and-three-months d-flex">
                    <div
                        class=" d-flex ps-3 design-and-3month-flex-div">
                        <i
                            class="bi bi-bounding-box text-muted"></i>
                        <p
                            class="design ps-2 text-muted">
                            Design</p>
                    </div>
                    <!--  -->
                    <div class=" d-flex ps-3">
                        <i
                            class="bi bi-stopwatch text-muted"></i>
                        <p
                            class="design ps-2 text-muted 3months">
                            3 months</p>
                    </div>
                </div>
                <div
                    class="card-body text-start ps-3">
                    <h6>AWS Certified
                        solutions <br>
                        Architect
                    </h6>
                    <p
                        class="text-muted w-100">
                        Lorem ipsum dolor sit
                        amet, consectetur
                        adipising elit, sed do
                        eiusmod tempor</p>
                    <!--      +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
                    <div
                        class="lina-and-delet-button d-flex">
                        <div
                            class="lina-pic-and-name-in-first-card-sec-1 d-flex ">
                            <img src="../assets/images/lp20.png"
                                alt=""
                                class="pic-lina">
                            <p
                                class="linaName fw-bold pt-2 ps-2">
                                Lina
                            </p>

                        </div>
                        <!--  -->
                        <button type="button"
                            class="btn btn- delet-btn">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->
        <div
            class="col-lg-3 col-md-6 col-sm-12 col-xxl-3 col-xl-3 mt-md-4 mt-lg-0 mt-sm-0 mt-xxl-0 mt-xl-0">
            <div class="card first-card-sec-one-col-one"
                style="width: 18rem;">
                <img src="../assets/images/lp5.png"
                    class="card-img-top p-3"
                    alt="...">
                <!-- design icon and 3 months -->
                <div
                    class="design-icon-and-three-months d-flex">
                    <div
                        class=" d-flex ps-3 design-and-3month-flex-div">
                        <i
                            class="bi bi-bounding-box text-muted"></i>
                        <p
                            class="design ps-2 text-muted">
                            Design</p>
                    </div>
                    <!--  -->
                    <div class=" d-flex ps-3">
                        <i
                            class="bi bi-stopwatch text-muted"></i>
                        <p
                            class="design ps-2 text-muted 3months">
                            3 months</p>
                    </div>
                </div>
                <div
                    class="card-body text-start ps-3">
                    <h6>AWS Certified
                        solutions <br>
                        Architect
                    </h6>
                    <p
                        class="text-muted w-100">
                        Lorem ipsum dolor sit
                        amet, consectetur
                        adipising elit, sed do
                        eiusmod tempor</p>
                    <!--      +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
                    <div
                        class="lina-and-delet-button d-flex">
                        <div
                            class="lina-pic-and-name-in-first-card-sec-1 d-flex ">
                            <img src="../assets/images/lp10.png"
                                alt=""
                                class="pic-lina">
                            <p
                                class="linaName fw-bold pt-2 ps-2">
                                Lina
                            </p>

                        </div>
                        <!--  -->
                        <button type="button"
                            class="btn btn- delet-btn">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->
        <div
            class="col-lg-3 col-md-6 col-sm-12 col-xxl-3 col-xl-3 mt-md-4 mt-lg-0 mt-sm-0 mt-xxl-0 mt-xl-0">
            <div class="card first-card-sec-one-col-one"
                style="width: 18rem;">
                <img src="../assets/images/lp10.png"
                    class="card-img-top p-3"
                    alt="...">
                <!-- design icon and 3 months -->
                <div
                    class="design-icon-and-three-months d-flex">
                    <div
                        class=" d-flex ps-3 design-and-3month-flex-div">
                        <i
                            class="bi bi-bounding-box text-muted"></i>
                        <p
                            class="design ps-2 text-muted">
                            Design</p>
                    </div>
                    <!--  -->
                    <div class=" d-flex ps-3">
                        <i
                            class="bi bi-stopwatch text-muted"></i>
                        <p
                            class="design ps-2 text-muted 3months">
                            3 months</p>
                    </div>
                </div>
                <div
                    class="card-body text-start ps-3">
                    <h6>AWS Certified
                        solutions <br>
                        Architect
                    </h6>
                    <p
                        class="text-muted w-100">
                        Lorem ipsum dolor sit
                        amet, consectetur
                        adipising elit, sed do
                        eiusmod tempor</p>
                    <!--      +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
                    <div
                        class="lina-and-delet-button d-flex">
                        <div
                            class="lina-pic-and-name-in-first-card-sec-1 d-flex ">
                            <img src="../assets/images/image 12.png"
                                alt=""
                                class="pic-lina">
                            <p
                                class="linaName fw-bold pt-2 ps-2">
                                Lina
                            </p>

                        </div>
                        <!--  -->
                        <button type="button"
                            class="btn btn- delet-btn">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

html {
    font-size: 16px;
}


/* nav */

.pic-lina {
    border-radius: 50%;
    border: 1px solid black;
    object-fit: cover;
    width: 3rem;
    height: 3rem;
}

.upload-blogs {
    border-radius: 20px;
    font-weight: bold;
    border: none;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.logout {
    border-radius: 20px;
    background-color:
        #FFDC5F !important;
    font-weight: bold;
    width: 10rem;
    border: none;
}

/* nav ends */

/* section one starts */
.first-card-sec-one-col-one {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.myblogh4 {
    width: 92%;
}

.seeall-link {
    /* list-style: none; */
    text-decoration: none;
    font-size: 18px;
    font-weight: 700;
    /* font-size: 13.9918px; */
    line-height: 21px;
    /* identical to box height */


    color: #FFDC5F;
}

.design-and-3month-flex-div {
    width: 55%;
}

.delet-btn {
    background: #FF3333;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    width: 10rem;
}

.lina-pic-and-name-in-first-card-sec-1 {
    width: 70%;
}

/* section one ends */
</style>