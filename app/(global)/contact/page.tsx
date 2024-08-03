import React from 'react'

export default function Contact() {
    // use reacthookform
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: "url(/images/img-13.webp)",
        }}
      >
        <div className="flex flex-col items-center bg-black bg-opacity-50 py-28">
          <p className="text-white text-3xl font-semibold">Contact Us</p>
          <div>
            {/* <Breadcrumbs page="contact" secondary /> */}
          </div>
        </div>
      </div>
      <div className="container flex flex-col md:flex-row gap-6 items-start pb-16 pt-4 my-8">
        <div className="w-full md:w-2/3 shadow p-4 rounded">
          <div className="text-sm font-medium my-4">
            <p className="text-2xl font-medium uppercase">Leave us a message</p>
            <p className="text-sm font-medium pb-4 mt-2">
              Get in touch with us.
            </p>
          </div>
          <form>
            {/* <InputField
              label="First Name"
              id="firstname"
              name="firstname"
              required
              type="text"
              value={values.firstname}
              onChange={handleChange("firstname")}
              errorMsg={touched.firstname ? errors.firstname : undefined}
              placeholder="Enter your name"
            />

            <InputField
              label="Email"
              id="email"
              type="email"
              name="email"
              required
              value={values.email}
              onChange={handleChange("email")}
              errorMsg={touched.email ? errors.email : undefined}
              placeholder="Enter your email address"
            />

            <InputField
              label="Phone"
              id="phone"
              type="text"
              name="phone"
              value={values.phone}
              onChange={handleChange("phone")}
              errorMsg={touched.phone ? errors.phone : undefined}
              placeholder="Enter your Phone Number"
              optional
            />

            <InputField
              label="Subject"
              id="subject"
              type="text"
              name="subject"
              required
              value={values.subject}
              onChange={handleChange("subject")}
              errorMsg={touched.subject ? errors.subject : undefined}
              placeholder="Enter your email address"
            />

            <TextArea
              label="Message"
              required
              id="message"
              type="text"
              name="message"
              value={values.message}
              onChange={handleChange("message")}
              errorMsg={touched.message ? errors.message : undefined}
            /> */}

            <div className="my-8">
              <button
                type="submit"
                // onClick={handleSubmit}
                className="w-full block text-center bg-primary border-primary text-white border px-4 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary transition uppercase"
              >
                Send
              </button>
            </div>
          </form>

          {/* <ToastContainer /> */}
        </div>

        <div className="w-full md:w-1/3 shadow p-4 rounded">
          <p className="text-gray-800 text-lg mb-4 font-medium uppercase">
            Our stores
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <i className="fas fa-location pr-1"></i>
              <p className="text-sm text-gray-600">
                18, Oremeji street, Computer Village, Ikeja.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-phone-volume"></i>
              <p className="text-sm text-gray-600">
                (+234)8103431851, (+234)7051405791
              </p>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-paper-plane"></i>
              <p className="text-sm text-gray-600">info@bitshub.it</p>
            </div>
          </div>
          <p className="text-gray-800 text-lg mt-8 font-medium uppercase">
            Hours of Operation
          </p>
          <div className="flex justify-between text-gray-800 font-medium py-3 uppercase">
            <p className="text-sm text-gray-600">Sunday-Monday</p>
            <p className="text-sm text-gray-600">24 Hours</p>
          </div>
        </div>
      </div>
    </div>
  )
}
