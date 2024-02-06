const User = require("../models/userModel");

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// Get a specific user by email
exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    res.status(200).json(user.name);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// Update a specific user by email
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { email: req.params.email },
      { $set: req.body },
      {
        returnOriginal: false,
      }
    );
    console.log(user);
    if (user) {
      res.status(200).json({ message: "User updated successfully!" });
    } else {
      res
        .status(404)
        .json({ message: "User not found or no changes were made." });
    }
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: message.error });
  }
};

// Delete a specific user by email
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ email: req.params.email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found or no changes were made." });
    }
    res.status(200).json({ message: "User has been removed successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
