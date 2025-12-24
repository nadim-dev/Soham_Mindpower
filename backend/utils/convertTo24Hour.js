function convertTo24Hour(time12h) {
  const [time, modifier] = time12h.trim().split(" ");
  let [hours, minutes] = time.split(":");

  if (modifier === "PM" && hours !== "12") {
    hours = parseInt(hours, 10) + 12;
  }

  if (modifier === "AM" && hours === "12") {
    hours = "00";
  }

  return `${hours.toString().padStart(2, "0")}:${minutes}:00`;
}

module.exports={convertTo24Hour};