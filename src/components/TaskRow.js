import { useState } from "react";

import {
    assignTask,
    completeTask,
    uploadAttachment
} from "../services/api";

function TaskRow({

    task,

    users,

    reload

}) {

    const [assignedTo, setAssignedTo] = useState(

        task.assignedTo?._id || ""

    );

    const handleAssign = async (e) => {

        const userId = e.target.value;

        setAssignedTo(userId);

        try {

            await assignTask(task._id, userId);

            reload();

        }

        catch (error) {

            alert(error.message);

        }

    };

    const handleComplete = async () => {

        try {

            await completeTask(task._id);

            reload();

        }

        catch (error) {

            alert(error.message);

        }

    };

    const handleUpload = async (e) => {

        const file = e.target.files[0];

        if (!file) return;

        try {

            await uploadAttachment(task._id, file);

            reload();

        }

        catch (error) {

            alert(error.message);

        }

    };

    return (

        <tr>

            <td>

                <strong>

                    {task.title}

                </strong>

                <br />

                <small className="text-muted">

                    {task.description}

                </small>

            </td>

            <td style={{ width: "220px" }}>

                <select
                    className="form-select"
                    value={assignedTo}
                    onChange={handleAssign}
                >

                    <option value="">

                        Select User

                    </option>

                    {

                        users.map(user => (

                            <option
                                key={user._id}
                                value={user._id}
                            >

                                {user.name}

                            </option>

                        ))

                    }

                </select>

            </td>

            <td>

                {

                    task.status === "Completed"

                        ?

                        <span className="badge bg-success">

                            Completed

                        </span>

                        :

                        <span className="badge bg-warning text-dark">

                            Pending

                        </span>

                }

            </td>

            <td>

                {

                    task.attachment

                        ?

                        <a
                            href={`http://localhost:5000/${task.attachment}`}
                            target="_blank"
                            rel="noreferrer"
                        >

                            View File

                        </a>

                        :

                        <input
                            type="file"
                            className="form-control"
                            onChange={handleUpload}
                        />

                }

            </td>

            <td>

                {

                    task.status === "Completed"

                        ?

                        <button
                            className="btn btn-success btn-sm"
                            disabled
                        >

                            Completed

                        </button>

                        :

                        <button
                            className="btn btn-primary btn-sm"
                            onClick={handleComplete}
                        >

                            Complete

                        </button>

                }

            </td>

        </tr>

    );

}

export default TaskRow;