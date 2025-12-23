 function extractYouTubeId(url) {
  const regex =
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&?/]+)/;
  return url.match(regex)?.[1] || null;
}


async function fetchYouTubeMeta(url) {
  const res = await fetch(
    `https://www.youtube.com/oembed?url=${url}&format=json`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch video details");
  }

  return res.json(); // title, thumbnail_url
}

module.exports={extractYouTubeId,fetchYouTubeMeta};