import TaskRow from "./TaskRow";

function TaskTable({

    tasks,

    users,

    reload

}) {

    if (tasks.length === 0) {

        return (

            <div className="alert alert-light border">

                No Tasks Found

            </div>

        );

    }

    return (

        <div className="card">

            <div className="table-responsive">

                <table className="table mb-0">

                    <thead>

                        <tr>

                            <th>Title</th>

                            <th>Assigned To</th>

                            <th>Status</th>

                            <th>Attachment</th>

                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            tasks.map(task => (

                                <TaskRow

                                    key={task._id}

                                    task={task}

                                    users={users}

                                    reload={reload}

                                />

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default TaskTable;