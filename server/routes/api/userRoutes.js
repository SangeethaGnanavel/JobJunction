const router = require("express").Router();
const { getSingleUser } = require("../../controllers/userController");

router.route("/:userId").get(getSingleUser);

module.exports = router;
