
const pool = require('../config/db.js');
const { extractYouTubeId, fetchYouTubeMeta }=require("../utils/youtube.js");

//admin will add the vedio
 const addVideo = async (req, res) => {
  try {
    console.log("add vedio function is running");
    console.log("body ka content",req.body)
    const { youtube_url } = req.body;
     console.log("youtube ur",youtube_url )
    if (!youtube_url) {
      return res.status(400).json({ message: "YouTube URL is required" });
    }

    const videoId = extractYouTubeId(youtube_url);
    if (!videoId) {
      return res.status(400).json({ message: "Invalid YouTube URL" });
    }

    const meta = await fetchYouTubeMeta(youtube_url);

    await pool.execute(
      `INSERT INTO videos 
       (youtube_url, youtube_video_id, title, thumbnail_url)
       VALUES (?, ?, ?, ?)`,
      [youtube_url, videoId, meta.title, meta.thumbnail_url]
    );

    res.json({ message: "Video added successfully" });

  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }
};




//client will see all the vedios

 const getVideos = async (req, res) => {
  console.log("Get vedio function is running");
  try {
    const [videos] = await pool.execute(
      `SELECT id, title, youtube_video_id, thumbnail_url
       FROM videos
       WHERE is_active = 1
       ORDER BY created_at DESC`
    );

    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getVideos, addVideo };
 