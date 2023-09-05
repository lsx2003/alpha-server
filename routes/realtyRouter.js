const router = require("express").Router();
const realtyCtrl = require("../controllers/realtyController");

router // api/realty
  .route("/")
  .get(realtyCtrl.getRealty)
  .post(realtyCtrl.addRealty)
  // .put(realtyCtrl.updateDone)

router // api/realty:id
  .route("/:id")
  .delete(realtyCtrl.deleteRealty)
  // .put(todoCtrl.updateDone)

module.exports = router;
