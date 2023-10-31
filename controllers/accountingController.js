const Technician = require('../models/Technician');
const WarrantyRequest = require('../models/WarrantyRequest');

exports.assignTask = async (req, res) => {
  try {
    const { technicianId, requestId } = req.body;
    const technician = await Technician.findById(technicianId);
    const request = await WarrantyRequest.findById(requestId);

    if (!technician || !request) {
      return res.status(404).send('Technician or request not found.');
    }

    request.technicianId = technicianId;
    await request.save();

    res.send('Task assigned to technician.');
  } catch (error) {
    res.status(500).send('Server error.');
  }
};

exports.getStatistics = async (req, res) => {
  try {
    const completedRequests = await WarrantyRequest.find({ status: 'completed' });
    res.send({ totalCompleted: completedRequests.length });
  } catch (error) {
    res.status(500).send('Server error.');
  }
};
