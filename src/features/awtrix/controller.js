const router = require("express").Router();
const awtrixService = require("./service");

router.post("/off", async (req, res) => {
  try {
    await awtrixService.turnOff();

    res.json("OK");
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error.",
    });
  }
});

router.post("/on", async (req, res) => {
  try {
    await awtrixService.turnOn();
    res.json("OK");
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error.",
    });
  }
});

router.post("/toggle", async (req, res) => {
  try {
    await awtrixService.turnToggle();
    res.json("OK");
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error.",
    });
  }
});

router.post("/next", async (req, res) => {
  try {
    await awtrixService.nextApp();
    res.json("OK");
  } catch (error) {
    console.error(error);
    res.status(500).json({  
      error: "Error.",
    });
  } 
});

router.post("/previous", async (req, res) => {
  try {
    await awtrixService.previousApp();
    res.json("OK");
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error.",
    });
  }
});

module.exports = router;
