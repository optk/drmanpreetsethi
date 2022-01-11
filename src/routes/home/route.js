const { hookInterface, hookEntityDefinitions } = require('@elderjs/elderjs');

module.exports = {
  // the all function returns an array of all of the 'request' objects of a route. Since this is the homepage, there is only one.
  all: () => [{ slug: '/' }],
  // the permalink function takes a 'request' object and returns a relative permalink. In this case "/"
  permalink: '/',
  data: ({ data }) => {

    data.clinics = [
      {
        name: "Clinic",
        address: "91 Pushpanjali, Vikas Marg Extension, Delhi 110092",
        avail: ["Monday: 10am - 1pm", "Wednesday: 10am - 1pm", "Saturday: 10am - 5pm"],
        color: "rgb(255,82,82)"
      },
      {
        name: "Max Hospital Vaishali",
        avail: ["Monday: 2pm - 4pm"],
        color: "rgb(15,157,88)"

      },
      {
        name: "Max Hospital Noida",
        avail: ["Tuesday: 2pm - 4pm"],
        color: "rgb(2,136,209)"
      },
      {
        name: "Max Hospital Patparganj",
        avail: ["Wednesday: 2pm - 4pm"],
        color: "rgb(251,192,45)"
      },
      {
        name: "Apollo Cradle Nehru Enclave",
        avail: ["Tuesday: 5pm - 7pm"],
        color: "rgb(57,73,171)"
      },
      {
        name: "Galleria Towers Gurgaon",
        avail: ["Friday: 1pm - 5pm"],
        color: "rgb(245,124,0)"
      }
    ]
    
    return data;
  },
};
