const BASE_URL = process.env.REACT_APP_API_URL;
const getToken = () => {
    return localStorage.getItem("token");
};

const request = async (url, options = {}) => {

    const response = await fetch(BASE_URL + url, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            "auth-token": getToken(),
            ...(options.headers || {})
        }
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
    }

    return data;
};

export const login = (body) =>
    request("/auth/login", {
        method: "POST",
        body: JSON.stringify(body)
    });

export const register = (body) =>
    request("/auth/createuser", {
        method: "POST",
        body: JSON.stringify(body)
    });

export const getUsers = () =>
    request("/auth/fetchallusers");

export const getDashboard = () =>
    request("/dashboard");

export const getProjects = () =>
    request("/projects/fetchallprojects");

export const createProject = (body) =>
    request("/projects/createproject", {
        method: "POST",
        body: JSON.stringify(body)
    });

    export const createTask = (task) =>
        request(`/tasks/createtask`, {
            method: "POST",
            body: JSON.stringify(task)
        });

        export const getTasks = () =>
            request(`/tasks/fetchalltasks`);
        
export const assignTask = (id, assignedTo) =>
    request(`/tasks/assigntask/${id}`, {
        method: "PUT",
        body: JSON.stringify({ assignedTo })
    });

export const completeTask = (id) =>
    request(`/tasks/completetask/${id}`, {
        method: "PUT"
    });

export const uploadAttachment = async (id, file) => {

    const formData = new FormData();

    formData.append("attachment", file);

    const response = await fetch(
        `${BASE_URL}/tasks/uploadattachment/${id}`,
        {
            method: "POST",
            headers: {
                "auth-token": getToken()
            },
            body: formData
        }
    );

    return await response.json();
};

export const getLogs = () =>
    request("/logs/fetchalllogs");