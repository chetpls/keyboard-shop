import React from "react";
import InputField from "./InputField";

function Contact(){
    return(
        <div className="flex flex-col min-h-screen bg-[#141414] p-5 text-green">          
        <h1 className="text-5xl text-center font-bold uppercase mb-10 pt-20">
            Contact
          </h1>
            <div className="flex flex-col justify-center items-center flex-grow p-5 ">

            <form className="flex flex-col gap-5 max-w-md bg-[#262626] p-5 rounded-3xl box-border">              
              <h3 className="text-3xl text-center font-bold uppercase">Get in touch</h3>
            <InputField
              type="text"
              name="name"
              id="contact-name"
              placeholder="John Doe"
              label="Name"
            />
            <InputField
              type="email"
              name="email"
              id="contact-email"
              placeholder="JohnDoe@example.com"
              label="Email"
            />
            <InputField
              type="text"
              name="subject"
              id="contact-subject"
              placeholder="Subject"
              label="Subject"
            />
            <div className="relative w-full min-w-[200px]">
              <textarea
                className="peer h-full min-h-[100px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-green focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=""
                required
              ></textarea>
              <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-green transition-all after:absolute after:-bottom-0 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-green after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green peer-focus:after:scale-x-100 peer-focus:after:border-green peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Message
              </label>
            </div>
            <button
              type="submit"
              class=" self-center font-semibold rounded-xl p-3 w-fit text-center text-black bg-green hover:bg-black"
            >
              <h3  glitch="SUBMIT">SUBMIT</h3>
            </button>
          </form>
        </div>
      </div>

    );
}

export default Contact;