import { useEffect, useState } from "react";
import { getLogs } from "../services/api";

function Logs() {

    const [logs, setLogs] = useState([]);

    useEffect(() => {

        loadLogs();

    }, []);

    const loadLogs = async () => {

        try {

            const data = await getLogs();

            setLogs(data);

        }

        catch (error) {

            alert(error.message);

        }

    };

    return (

        <div>

            <h3 className="mb-4">

                Activity Logs

            </h3>

            {

                logs.length === 0 ?

                    <div className="alert alert-light border">

                        No logs available.

                    </div>

                    :

                    <div className="card">

                        <div className="table-responsive">

                            <table className="table mb-0">

                                <thead>

                                    <tr>

                                        <th>Action</th>

                                        <th>Project</th>

                                        <th>Task</th>

                                        <th>Date</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {

                                        logs.map(log => (

                                            <tr key={log._id}>

                                                <td>

                                                    {log.action}

                                                </td>

                                                <td>

                                                    {log.project?.name || "-"}

                                                </td>

                                                <td>

                                                    {log.task?.title || "-"}

                                                </td>

                                                <td>

                                                    {new Date(log.date).toLocaleDateString()}

                                                </td>

                                            </tr>

                                        ))

                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>

            }

        </div>

    );

}

export default Logs;