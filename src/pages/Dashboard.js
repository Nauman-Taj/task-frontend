import { useEffect, useState } from "react";

import { getDashboard } from "../services/api";

import StatCard from "../components/StatCard";

function Dashboard() {

    const [dashboard, setDashboard] = useState({

        totalProjects: 0,

        totalTasks: 0,

        completedTasks: 0,

        pendingTasks: 0,

        recentLogs: []

    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        try {

            const data = await getDashboard();

            setDashboard(data);

        }

        catch (error) {

            alert(error.message);

        }

        finally {

            setLoading(false);

        }

    };

    if (loading) {

        return <h5>Loading...</h5>;

    }

    return (

        <div>

            <h3 className="mb-4">

                Dashboard

            </h3>

            <div className="row">

                <StatCard
                    title="Projects"
                    value={dashboard.totalProjects}
                />

                <StatCard
                    title="Tasks"
                    value={dashboard.totalTasks}
                />

                <StatCard
                    title="Completed"
                    value={dashboard.completedTasks}
                />

                <StatCard
                    title="Pending"
                    value={dashboard.pendingTasks}
                />

            </div>

            <div className="card mt-3">

                <div className="card-header">

                    Recent Activity

                </div>

                <div className="card-body">

                    {

                        dashboard.recentLogs.length === 0 ?

                            <p className="text-muted">

                                No recent activity.

                            </p>

                            :

                            <ul className="list-group list-group-flush">

                                {

                                    dashboard.recentLogs.map(log => (

                                        <li
                                            key={log._id}
                                            className="list-group-item"
                                        >

                                            {log.action}

                                        </li>

                                    ))

                                }

                            </ul>

                    }

                </div>

            </div>

        </div>

    );

}

export default Dashboard;