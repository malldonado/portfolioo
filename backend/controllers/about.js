const AboutData = require('../models/AboutData'); // Ajuste o caminho conforme necessário
const fs = require('fs');
const path = require('path');

exports.updateAboutData = async (req, res) => {
  try {
    const { title, text } = req.body;
    const file = req.file ? req.file.filename : null;

    const { lastImage, updatedData } = await updateData({ title, text, file });

    if (lastImage) {
      removeLastImage(lastImage);
    }

    if (!updatedData) {
      return res.status(404).json({ message: 'No data found' });
    }

    res.status(200).json({ message: 'Data updated successfully!', data: updatedData });
  } catch (error) {
    handleError(res, error, 'Error updating data');
  }
};

exports.createAboutData = async (req, res) => {
  try {
    const { title, text } = req.body;
    const file = req.file ? req.file.filename : null;

    const { lastImage, updatedData } = await createOrUpdateData({ title, text, file });

    if (lastImage) {
      removeLastImage(lastImage);
    }

    res.status(200).json({ message: 'Data created or updated successfully!', data: updatedData });
  } catch (error) {
    handleError(res, error, 'Error creating or updating data');
  }
};

exports.getAboutLastData = async (req, res) => {
  try {
    const latestData = await AboutData.findOne().sort({ _id: -1 });

    if (!latestData) {
      return res.status(404).json({ message: 'No data found' });
    }

    res.status(200).json(latestData);
  } catch (error) {
    handleError(res, error, 'Error fetching latest data');
  }
};

const updateData = async ({ title, text, file }) => {
  const lastData = await AboutData.findOne().sort({ _id: -1 });
  const lastImage = lastData?.file || null;

  const updatedData = await AboutData.findOneAndUpdate(
    {},
    { title, text, file },
    { new: true }
  );

  return { lastImage, updatedData };
};

const createOrUpdateData = async ({ title, text, file }) => {
  const lastData = await AboutData.findOne().sort({ _id: -1 });
  const lastImage = lastData?.file || null;

  const updatedData = await AboutData.findOneAndUpdate(
    {},
    { title, text, file },
    { new: true, upsert: true }
  );

  return { lastImage, updatedData };
};

const removeLastImage = (imageName) => {
  fs.unlink(path.join(__dirname, '../uploads/', imageName), (err) => {
    if (err) {
      console.error('Error removing the last image:', err);
    } else {
      console.log('Last image removed successfully:', imageName);
    }
  });
};

const handleError = (res, error, customMessage) => {
  console.error(customMessage, error);
  res.status(500).json({ error: 'An error occurred while processing the request' });
};
