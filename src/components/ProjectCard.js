function ProjectCard({ project }) {

    return (

        <div className="col-md-4 mb-4">

            <div className="card h-100">

                <div className="card-body">

                    <h5 className="card-title">

                        {project.name}

                    </h5>

                    <p className="card-text text-muted">

                        {project.description || "No description"}

                    </p>

                </div>

            </div>

        </div>

    );

}

export default ProjectCard;