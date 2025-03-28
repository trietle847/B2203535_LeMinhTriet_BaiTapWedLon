const express = require("express");
const docgia = require("../controllers/docgia.controller");

const router = express.Router();

router
  .route("/")
  .get(docgia.findAll)
  .post(docgia.create)
  .delete(docgia.deleteAll);

// router.route("/favorite").get(contacts.findAllFavorite);

router
  .route("/:id")
  .get(docgia.find)
  .put(docgia.update)
  .delete(docgia.delete);

module.exports = router;
