const router = require("express").Router();
const { getjobs } = require("../../controllers/jobController");

router.route("/").get(getjobs);

module.exports = router;
