const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  timeslots: [
    {
      startTime: "1st june 10AM",
      slotavailable: "1st june 10AM to 10:30AM",
      endtime: "5PM",
      vacchineavailableforslot: "doses",
    },
    {
      startTime: "1st june 10AM",
      slotavailable: "1st june 10:30AM to 11AM ",
      endtime: "5PM",
      vacchineavailableforslot: "doses",
    },
    {
      startTime: "1st june 10AM",
      slotavailable: "1st june 11AM to 11:30AM",
      endtime: "5PM",
      vacchineavailableforslot: "doses",
    },
    {
      startTime: "1st june 10AM",
      slotavailable: "1st june 11:30AM to 12PM",
      endtime: "5PM",
      vacchineavailableforslot: "doses",
    },
    {
      startTime: "1st june 10AM",
      slotavailable: "1st june 12:00PM to 12:30",
      endtime: "5PM",
      vacchineavailableforslot: "doses",
    },
    {
      startTime: "1st june 10AM",
      slotavailable: "1st june 12:30PM to 1PM",
      endtime: "5PM",
      vacchineavailableforslot: "doses",
    },
    {
      startTime: "1st june 10AM",
      slotavailable: "1st june 1:00PM to 1:30PM",
      endtime: "5PM",
      vacchineavailableforslot: "doses",
    },
    {
      startTime: "1st june 10AM",
      slotavailable: "1st june 1:30PM to 2PM",
      endtime: "5PM",
      vacchineavailableforslot: "doses",
    },
    {
      startTime: "1st june 10AM",
      slotavailable: "1st june 2:00PM to 2:30PM",
      endtime: "5PM",
      vacchineavailableforslot: "doses",
    },
    {
      startTime: "1st june 10AM",
      slotavailable: "1st june 2:30PM to 3:00PM",
      endtime: "5PM",
      vacchineavailableforslot: "doses",
    },
    {
      startTime: "1st june 10AM",
      slotavailable: "1st june 3:00PM to 3:30PM",
      endtime: "5PM",
      vacchineavailableforslot: "doses",
    },
    {
      startTime: "1st june 10AM",
      slotavailable: "1st june 3:30PM to 4:00PM",
      endtime: "5PM",
      vacchineavailableforslot: "doses",
    },
    {
      startTime: "1st june 10AM",
      slotavailable: "1st june 4:00PM to 4:300PM",
      endtime: "5PM",
      vacchineavailableforslot: "doses",
    },
    {
      startTime: "1st june 10AM",
      slotavailable: "1st june 4:30PM to 5:00PM",
      endtime: "5PM",
      vacchineavailableforslot: "doses",
    },
  ],
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
