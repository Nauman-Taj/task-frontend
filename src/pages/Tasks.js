import { useEffect, useState } from "react";

import {
    getTasks,
    createTask,
    getUsers
} from "../services/api";

import TaskTable from "../components/TaskTable";

function Tasks() {

    const [tasks, setTasks] = useState([]);

    const [users, setUsers] = useState([]);

    const [form, setForm] = useState({

        title: "",

        description: "",

        assignedTo: ""

    });

    useEffect(() => {

        loadTasks();

        loadUsers();

    }, []);

    const loadTasks = async () => {

        try {

            const data = await getTasks();

            setTasks(data);

        }

        catch (error) {

            alert(error.message);

        }

    };

    const loadUsers = async () => {

        try {

            const data = await getUsers();

            setUsers(data);

        }

        catch (error) {

            console.log(error);

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

            const task = {

                title: form.title,

                description: form.description

            };

            await createTask(task);

            setForm({

                title: "",

                description: "",

                assignedTo: ""

            });

            loadTasks();

        }

        catch (error) {

            alert(error.message);

        }

    };

    return (

        <div>

            <h3 className="mb-4">

                Tasks

            </h3>

            <div className="card mb-4">

                <div className="card-body">

                    <form onSubmit={handleSubmit}>

                        <div className="row g-3">

                            <div className="col-md-4">

                                <input
                                    className="form-control"
                                    placeholder="Task Title"
                                    name="title"
                                    value={form.title}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="col-md-5">

                                <input
                                    className="form-control"
                                    placeholder="Description"
                                    name="description"
                                    value={form.description}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="col-md-3">

                                <button
                                    className="btn btn-primary w-100"
                                >
                                    Create Task
                                </button>

                            </div>

                        </div>

                    </form>

                </div>

            </div>

            <TaskTable

                tasks={tasks}

                users={users}

                reload={loadTasks}

            />

        </div>

    );

}

export default Tasks;