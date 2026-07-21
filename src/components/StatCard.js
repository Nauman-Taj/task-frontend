function StatCard({ title, value }) {

    return (

        <div className="col-md-3 mb-4">

            <div className="card h-100">

                <div className="card-body text-center">

                    <h6 className="text-muted">
                        {title}
                    </h6>

                    <h2 className="text-success">
                        {value}
                    </h2>

                </div>

            </div>

        </div>

    );

}

export default StatCard;