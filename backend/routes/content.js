const express = require("express");
const db = require("../config/db");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Get Content with Pagination
router.get("/", authMiddleware, async (req, res) => {
  const { search = "", page = 1, limit = 10 } = req.query;
  const offset = (page - 1) * limit;
  const [rows] = await db.query(
    `SELECT contents.id,contents.title,contents.description, modules.name AS module FROM contents
    JOIN modules ON modules.id = contents.module_id 
    WHERE title LIKE ? ORDER BY contents.id LIMIT ? OFFSET ?`,
    [`%${search}%`, parseInt(limit), parseInt(offset)]
  );
  const [[{ total }]] = await db.query(
    `SELECT COUNT(*) AS total FROM contents`
  );
  res.json({
    data: rows,
    total,
    page: parseInt(page),
    limit: parseInt(limit),
  });
});

router.get("/modules", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM  modules");
  res.json({
    data: rows,
  });
});

router.post("/", authMiddleware, async (req, res) => {
  const { title, description, module_id, created_by } = req.body;
  await db.query(
    "INSERT INTO contents (title, description, module_id, created_by) VALUES (?, ?, ?, ?)",
    [title, description, module_id, created_by]
  );
  res.json({
    message: "Content created",
  });
});

router.put("/:id", authMiddleware, async (req, res) => {
  const { title, description, module_id } = req.body;
  const [
    result,
  ] = await db.query(
    "UPDATE contents SET title = ?, description = ?, module_id = ? WHERE id = ?",
    [title, description, module_id, req.params.id]
  );
  if (result.affectedRows === 0)
    return res.status(404).json({
      message: "content not found",
    });
  res.json({
    message: "Content updated",
  });
});

router.delete("/:id", authMiddleware, async (req, res) => {
  const [result] = await db.query("DELETE FROM contents WHERE id = ?", [
    req.params.id,
  ]);
  if (result.affectedRows === 0)
    return res.status(404).json({
      message: "content not found",
    });
  res.json({
    message: "Content deleted",
  });
});

router.get("/participant-scores/", authMiddleware, async (req, res) => {
  const participants = await db.query(`
    SELECT users.id, users.name, SUM(participant_scores.score) AS points
    FROM participant_scores
    JOIN users ON participant_scores.user_id = users.id
    GROUP BY users.id, users.name
    ORDER BY points DESC
    LIMIT 10
  `);
  res.json(participants[0]);
});

router.get("/users/", authMiddleware, async (req, res) => {
  const [rows] = await db.query("SELECT users.name, users.email, users.role FROM users");
  res.json({data:rows});
});

module.exports = router;
