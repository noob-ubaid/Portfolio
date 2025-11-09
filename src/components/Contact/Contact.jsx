import React, { useRef } from "react";
import Container from "../../shared/Container";
import Title from "../../shared/Title";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { fadeIn } from "../../shared/Variants";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const subject = formData.get("subject").trim();
    const message = formData.get("message").trim();

    if (!name || !email || !subject || !message) {
      toast.error("Fill up the contact form!");
      return;
    }

    emailjs
      .sendForm(
        "service_6vaff75",
        "template_9b6eds3",
        form.current,
        "CAZi6TZlvHaC_vc5M"
      )
      .then(
        () => {
          toast.success("Email has been sent!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send email: " + error.text);
        }
      );
  };

  const contact = [
    {
      id: 1,
      icon: <IoIosCall size={30} />,
      name: "Phone",
      call: "+880 1735-166610",
    },
    {
      id: 2,
      icon: <FaWhatsapp size={30} />,
      name: "Whatsapp",
      call: "+880 1735-166610",
    },
    {
      id: 3,
      icon: <MdOutlineMailOutline size={30} />,
      name: "Email",
      call: "ubaidurrahman661@gmail.com",
    },
  ];

  return (
    <div id="contact">
      <Container>
        <Title title="Contact me" />
        <section
          id="contact"
          className="flex flex-col-reverse md:flex-row pb-16 md:pb-28 gap-12"
        >
          {/* Left: Contact Info */}
          <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-4">
            <motion.h2
              variants={fadeIn("down", 0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-main"
            >
              Get in Touch
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-gray-300/70 text-center md:text-left max-w-[540px]"
            >
              Don’t hesitate to get in touch—whether it’s a new project idea or
              a collaboration invite. I’m eager to connect and typically respond
              within a day. Let’s create something amazing together!
            </motion.p>

            <div className="flex flex-col w-full gap-6 md:gap-8 mt-4">
              {contact.map((call, index) => (
                <motion.div
                  variants={fadeIn("up", `0.${index}`)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex items-center gap-3 sm:gap-6"
                  key={call.id}
                >
                  <div className="bg-gray-800 shadow-[0px_0px_15px_var(--color-main)] animate-wiggle p-3 rounded-md text-main">
                    {call.icon}
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-gray-300">
                      {call.name}
                    </p>
                    <p className="text-gray-300/70 mt-1 text-base sm:text-lg text-wrap">
                      {call.call}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <motion.form
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 flex flex-col gap-4 bg-gray-800/40 p-4 rounded-xl backdrop-blur"
          >
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="bg-gray-700/60 p-3 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-main/60 placeholder:text-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="bg-gray-700/60 p-3 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-main/60 placeholder:text-gray-400"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="bg-gray-700/60 p-3 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-main/60 placeholder:text-gray-400"
            />
            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              className="bg-gray-700/60 p-3 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-main/60 placeholder:text-gray-400 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-main/20 hover:bg-gray-800 cursor-pointer hover:text-main duration-300 flex items-center justify-center flex-row-reverse md:gap-4 gap-2 text-center w-full rounded-md md:px-4 md:py-3 px-2 py-2"
            >
              Send Message
            </button>
          </motion.form>
        </section>
      </Container>
    </div>
  );
};

export default Contact;





