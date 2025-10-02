const express = require('express');
const StationInfo = require('../models/StationInfo');
const router = express.Router();

// Get station info (assume only one record)
router.get('/', async (req, res) => {
  try {
    let info = await StationInfo.findOne();
    if (!info) {
      info = await StationInfo.create({});
    }
    res.json(info);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update station info
router.put('/', async (req, res) => {
  try {
    let info = await StationInfo.findOne();
    if (!info) {
      info = await StationInfo.create({});
    }
    // Only update allowed fields
  const fields = ['station', 'locator', 'address', 'postcode', 'operatorName', 'email', 'cqZone', 'latitude', 'longitude'];
    const updateData = {};
    fields.forEach(f => {
      if (req.body[f] !== undefined) {
        updateData[f] = req.body[f];
      }
    });
    await info.update(updateData);
    res.json(info);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
