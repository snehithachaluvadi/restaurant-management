import ErrorHandler from "../middlewares/error.js";

const send_reservation = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone } = req.body;

  if (!firstName || !lastName || !email || !date || !time || !phone) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

  try {
    // Instead of saving to MongoDB, just send a success response
    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully (Mock Response)!",
    });
  } catch (error) {
    return next(error);
  }
};

export default send_reservation;
