import React from 'react';

const Review = () => {
    return (
        <div className="container-fluid my-5">
            {/*  heading  */}
            <div className="heading mb-5">
                <h1 className="title lh-base fw-bolder">Reviews</h1>
            </div>
            {/* review cards  */}
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                <div className="col">
                    <div className="card h-100" style={{ backgroundColor: "#e3f2fd" }}>
                        <img src="https://image.freepik.com/free-photo/young-woman-receiving-dental-check-up_1098-1512.jpg" className="card-img-top" alt="slide-image1" />
                        <div className="card-body">
                            <h5 className="card-title title">Anna Michale</h5>
                            <p className="card-text">Patient</p>
                            <p className="card-text text-secondary lh-sm mt-3">Best dental hospital. Doctors are very supportive and polite. Mostly impressed by there staff behaviour. They help me the whole time.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100" style={{ backgroundColor: "#e3f2fd" }}>
                        <img src="https://image.freepik.com/free-photo/close-up-successful-winning-happy-asian-man-with-teeth-braces-smiling-broadly-showing-thumbs-up-approval-praising-great-work-saying-well-done-standing-white-background-pleased_1258-55801.jpg" className="card-img-top" alt="slide-image2" />
                        <div className="card-body">
                            <h5 className="card-title title">Jhon Doe</h5>
                            <p className="card-text">Patient</p>
                            <p className="card-text text-secondary lh-sm mt-3">Best dental hospital. Doctors are very supportive and polite. Mostly impressed by there staff behaviour. They help me the whole time.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100" style={{ backgroundColor: "#e3f2fd" }}>
                        <img src="https://image.freepik.com/free-photo/smiling-woman-dentist-chair_1153-655.jpg" className="card-img-top" alt="slide-image3" />
                        <div className="card-body">
                            <h5 className="card-title title ">Martha Swart</h5>
                            <p className="card-text">Patient</p>
                            <p className="card-text text-secondary lh-sm mt-3">Best dental hospital. Doctors are very supportive and polite. Mostly impressed by there staff behaviour. They help me the whole time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;