import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const serviceId = "gmail";
const publicId = "9At7SeQMTFYs8y2Sl";
const templateContactId = "Contact";
const templateCalculateId = "Calculate";

export function sendEmail(params, contact) {
  emailjs
    .send(
      serviceId,
      contact ? templateContactId : templateCalculateId,
      params,
      publicId
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Email trimis!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      },
      function (error) {
        console.log("FAILED...", error);
        toast.error("Ceva nu a mers bine..", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    );
}
