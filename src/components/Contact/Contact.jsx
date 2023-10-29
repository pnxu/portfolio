import React from "react";
import { useForm } from "react-hook-form";
import { sendForm } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import { IconMail } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";

function Contact() {
  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      sendForm(data);
      reset();
      toast.success("Contact message submitted successfully!");
    } catch (error) {
      toast.error("An error occurred while submitting the contact form.");
    }
  };

  return (
    <section id="contact" className="py-4">
      <div className="container text-center mt-5">
        <h2>Contact me</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="contact-icons mb-2">
              <a
                href="mailto:fcaavv@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconMail
                  size={24}
                  color="black"
                  stroke={2}
                  strokeLinejoin="miter"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/fcaavv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandLinkedin
                  size={24}
                  color="black"
                  stroke={2}
                  strokeLinejoin="miter"
                />
              </a>
              <a
                href="https://github.com/pnxu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandGithub
                  size={24}
                  color="black"
                  stroke={2}
                  strokeLinejoin="miter"
                />
              </a>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-danger">Name is required</span>
                )}
              </div>
              <div className="form-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.email && (
                  <span className="text-danger">Valid email is required</span>
                )}
              </div>
              <div className="form-group mb-3">
                <textarea
                  className="form-control"
                  placeholder="Message"
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <span className="text-danger">Message is required</span>
                )}
              </div>
              <button type="submit" className="btn btn-dark mb-3">
                Submit
              </button>
              <ToastContainer
                className="custom-toast"
                position="top-right"
                autoClose={3000}
                hideProgressBar
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
