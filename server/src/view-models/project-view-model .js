class ProjectViewModel {
  constructor(project) {
    const { SERVER_DOMAIN, SERVER_PORT } = process.env;
    this.id = project.id;
    this.date = project.date;
    this.category = 1;
    this.title = project.title;
    this.description = project.description;
    this.editor = project.editor;
    this.technologies = project.technologies;
    if  (project.images) {
      this.images = `${SERVER_DOMAIN}:${SERVER_PORT}$ project.images}`;
    }
  }
};
export default ProjectViewModel;
