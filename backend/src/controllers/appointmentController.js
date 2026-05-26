import Appointment from "../models/Appointment.js";


export const createAppointment = async (req, res) => {

  try {

    const appointment = await Appointment.create(req.body);

    res.status(201).json({
      success: true,
      appointment
    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to create appointment"
    });

  }

};


export const getAppointments = async (req, res) => {

  try {

    const appointments = await Appointment.findAll();

    res.status(200).json({
      success: true,
      appointments
    });

  }

  catch (error) {

    res.status(500).json({
      success: false
    });

  }

};