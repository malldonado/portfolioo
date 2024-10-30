const ProjectData = require("../models/ProjectData");

exports.createProject = async (req, res) => {
  try {
    const { title, description } = req.body;
    const images = req.files.map((file) => ({
      data: file.buffer,
      contentType: file.mimetype,
    }));

    const newProject = new ProjectData({ title, description, images });
    await newProject.save();

    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project || !project.images || project.images.length === 0) {
      return res.status(404).json({ message: "Image not found" });
    }

    const imageBuffer = project.images[0].data;
    const base64Image = imageBuffer.toString("base64");

    // Envia a imagem como string base64
    res.json({
      image: `data:${project.images[0].contentType};base64,${base64Image}`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
