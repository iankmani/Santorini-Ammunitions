export const validateLoginInformation = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({
        success: false,
        message: "Please fill all the fields before proceeding",
      });
  }
  next();
};
