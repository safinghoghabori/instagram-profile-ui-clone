const mongoose = require("mongoose");
const express = require("express");

const router = express.Router();

const multer = require("multer");
const File = require("../models/file");

const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Math.floor(Math.random() * 90000) + 10000 + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: fileStorage, fileFilter });

router.post("/upload-image", upload.single("instaImage"), (req, res) => {
  try {
    console.log("req.file...", req.file);

    if (!req.file) return res.status(400).send({ error: "Image is required...!" });

    const imgUrl = new File({
      imageUrl: req.file.path,
    });

    imgUrl.save();
    res.status(200).send({ msg: "Image uploaded successfully...!" });
  } catch (error) {
    res.status(400).send({ msg: "Image can't be uploaded...!" });
  }
});

router.get("/get-images", async (req, res) => {
  try {
    const images = await File.find({});
    if (!images) return res.status(200).send({ msg: "No images available...!" });

    res.status(200).send(images);
  } catch (error) {
    res.status(400).send({ error });
  }
});

module.exports = router;
