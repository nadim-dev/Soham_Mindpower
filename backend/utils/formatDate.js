function formatDateReadable(dateStr) {
  const date = new Date(dateStr);

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

module.exports={formatDateReadable};