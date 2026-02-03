export default function BootstrapExercise() {
    return (
        <div>
            <h3> Responsive Grid </h3>
            <div className="row">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 bg-primary text-white"> Column A </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 bg-secondary text-white"> Column B</div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 bg-danger text-white"> Column C</div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 bg-success text-white"> Column D</div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 bg-warning text-white"> Column E</div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 bg-black text-white"> Column E</div>
            </div> <br/>

            <h3>  Responsively Show/Hide Elements </h3>
            <div>
                <div className="d-none d-sm-block bg-danger">
                    This is being hidden when screen is small.
                </div>
                <div className="d-block d-sm-none bg-success">
                    This is being shown in small screen.
                </div>
            </div>
        </div>
    )
} 