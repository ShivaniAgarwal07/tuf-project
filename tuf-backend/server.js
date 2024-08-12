const express = require("express");
const cors = require("cors");
const { Sequelize } = require("sequelize");
const config = require("./config/database");

const app = express();
app.use(cors());
app.use(express.json());

const sequelize = new Sequelize(config.development);

const { Banner } = require("./models");

app.get("/banner", async (req, res) => {
  try {
    const banner = await Banner.findOne();
    res.json(banner || { message: "No data available" });
  } catch (error) {
    res.status(500).json({ error: "Error fetching banner data" });
  }
});

app.post("/banner", async (req, res) => {
  const { description, timer, link } = req.body;
  try {
    const [banner, created] = await Banner.findOrCreate({
      where: {},
      defaults: { description, timer, link },
    });
    if (!created) {
      await banner.update({ description, timer, link });
    }
    res.json({ message: "Banner data updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error updating banner data" });
  }
});

const PORT = 3001;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});