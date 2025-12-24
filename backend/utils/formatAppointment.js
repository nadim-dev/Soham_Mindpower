const {formatDateReadable}=require("./formatDate");
const {convertTo12Hour}=require("./convertTo12Hours");


function formatAppointment(date, time) {
  return `${formatDateReadable(date)}, ${convertTo12Hour(time)}`;
}

module.exports={formatAppointment};