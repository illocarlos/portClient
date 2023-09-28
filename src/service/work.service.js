import axios from "axios";

class WorkService {

  constructor() {
    this.api = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL}`,
    });

    this.api.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  getWorks() {
    return this.api.get("/work/list");
  }

  getWorkDetails(work_id) {
    return this.api.get(`/work/${work_id}`);
  }

  newWork(workData) {
    return this.api.post("/work/newWork", workData);
  }

  editWork(work_id, workData) {
    return this.api.put(`/work/edit/${work_id}`, { workData })
  }

  deleteWork(work_id) {
    return this.api.delete(`/work/delete/${work_id}`);
  }

}

const workService = new WorkService();

export default workService;
