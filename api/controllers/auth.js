import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  // CHECK IF WE HAVE SAME USERNAME OR EAMIL
  const q = `SELECT * FROM users WHERE email=? or username=?`;
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("user already exist");

    // HASH PASSWORD
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    // CREATE USER
    const q = "INSERT INTO users(`username`,`email`,`password`) VALUES(?,?,?)";

    const values = [req.body.username, req.body.email, hash];

    db.query(q, values, (err, result) => {
      if (err) return res.json(err);
      return res.status(200).json("user created successfully");
    });
  });
};
export const login = (req, res) => {
  // check if user exists
  const q = `SELECT * FROM users WHERE username = ?`;

  db.query(q, [req.body.username], (err, result) => {
    if (err) return res.json(err);
    if (result.length === 0) return res.status(404).json("User Not found");

    // Check password
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, result[0].password);
    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password");

    const token = jwt.sign({ id: result[0].id }, "jwtkey");

    // we shouldn't send our password along with other data so we deconstruct it
    const { password, ...other } = result[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};
export const logout = (req, res) => {
  res.json("logout controller");
};
