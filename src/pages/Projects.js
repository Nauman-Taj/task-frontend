import { useEffect, useState } from "react";

import ProjectCard from "../components/ProjectCard";

import {
    getProjects,
    createProject
} from "../services/api";

function Projects() {

    const [projects, setProjects] = useState([]);

    const [form, setForm] = useState({

        name: "",

        description: ""

    });

    useEffect(() => {

        loadProjects();

    }, []);

    const loadProjects = async () => {

        try {

            const data = await getProjects();

            setProjects(data);

        }

        catch (error) {

            alert(error.message);

        }

    };

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await createProject(form);

            setForm({

                name: "",

                description: ""

            });

            loadProjects();

        }

        catch (error) {

            alert(error.message);

        }

    };

    return (

        <div>

            <h3 className="mb-4">

                Projects

            </h3>

            <div className="card mb-4">

                <div className="card-body">

                    <form onSubmit={handleSubmit}>

                        <div className="row">

                            <div className="col-md-4">

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Project Name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="col-md-6">

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Description"
                                    name="description"
                                    value={form.description}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="col-md-2">

                                <button
                                    className="btn btn-primary w-100"
                                >
                                    Create
                                </button>

                            </div>

                        </div>

                    </form>

                </div>

            </div>

            <div className="row">

                {

                    projects.length === 0 ?

                        <div className="col-12">

                            <div className="alert alert-light border">

                                No projects found.

                            </div>

                        </div>

                        :

                        projects.map(project => (

                            <ProjectCard
                                key={project._id}
                                project={project}
                            />

                        ))

                }

            </div>

        </div>

    );

}

export default Projects;