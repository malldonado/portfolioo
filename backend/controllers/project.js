const ProjectData = require("../models/ProjectData");

exports.createProject = async (req, res) => {
  try {
    const { title, description } = req.body;
    const images = req.files.map((file) => file.filename);

    const newProject = new ProjectData({
      title,
      description,
      images,
    });

    await newProject.save();

    res.status(201).json({ message: 'Project created successfully!', data: newProject });
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ error: 'An error occurred during processing' });
  }
};

exports.getProjectAll = async (req, res) => {
  try {
    // Busca todos os posts no banco de dados
    const projects = await ProjectData.find();

    res.status(200).json({ data: projects });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "An error occurred during processing" });
  }
};
exports.getProjectID = async (req, res) => {
  try {
    const project = await ProjectData.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  } catch (error) {
    console.error("Error fetching image by ID:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
