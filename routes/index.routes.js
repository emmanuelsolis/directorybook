const router = require("express").Router();
const authRoutes = require("./auth.routes");
const contactsRoutes = require("./contacts.routes");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json({name:"Kain", phone: "123456789"});
});

router.use("/auth", authRoutes);
router.use("/contact", contactsRoutes);


module.exports = router;
