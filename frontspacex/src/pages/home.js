
const Home = () => {
    return (<>
        <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">Front Space X</h1>
        </div>

        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <a class="btn btn-primary" href="/launches" role="button">
                        Launches
                    </a>
                </div>
                <div class="col">
                    <a class="btn btn-primary" href="/capsules" role="button">
                        Capsules
                    </a>
                </div>
            </div>
        </div>
    </>

    )
}

export default Home;