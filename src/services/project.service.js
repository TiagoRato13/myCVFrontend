import axios from "axios";

class ProjectService {
  constructor() {
    this.api = axios.create({
      baseURL:
        import.meta.env.VITE_API_URL || "https://tiagorato.vercel.app",
      /* withCredentials: true  */
    });

    //here we intercept every request thtat uses this api and call a middleware function
    this.api.interceptors.request.use((config) => {
      //inside this middleware function the first thing we do is get the token from the localstorage
      const storedToken = localStorage.getItem("authToken");

      //if there is a token we're going to add it to the headers of the request
      if (storedToken) {
        //here we pass to the headers an object with Authorization and the Bearer token
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  errorHandler = (err) => {
    throw err;
  };

  //Here we can create the metods to connect to the API

  /* ------- USER ------- */
  //Get User

  getUser = () => {
    return this.api.get("/api/user");
  };

  /* ----- END USER ----- */

  /* ------- HOME ------- */
  //Get Home

  getContacts = () => {
    return this.api.get("/api/home");
  };

  /* ----- END HOME ----- */

  /* ------- INTERESTS ------- */
  //Get Interests

  getInterests = () => {
    return this.api.get("/api/interest");
  };

  /* ----- END INTERESTS ----- */

  /* ------- EDUCATION ------- */
  //Get Education

  getEducation = () => {
    return this.api.get("/api/education");
  };

  /* ----- END EDUCATION ----- */

  /* ------- PROJECTS ------- */
  //Get Projects

  getProject = () => {
    return this.api.get("/api/project");
  };

  /* ----- END PROJECTS ----- */

  /* ------- EXPERIENCE ------- */
  //Get Experience

  getExperience = () => {
    return this.api.get("/api/experience");
  };

  /* ----- END EXPERIENCE ----- */

  /* ----- CLOUDINARY ----- */
  uploadImage = (file) => {
    return this.api
      .post("/api/upload", file)
      .then((res) => res.data)
      .catch(this.errorHandler);
  };

  /* ----- END CLOUDINARY ----- */
}

const projectService = new ProjectService();

export default projectService;
