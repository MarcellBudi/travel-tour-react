import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import Location from "../components/Location/Location";

const Contact = () => {
  return (
    <>
      <div className="container mx-auto pt-24 pb-10">
      <div className="pt-10">
        <h1 className="mt-8 mb-5 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Contact Us
        </h1>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap gap-10">
        <div className="flex-1 bg-white p-8 shadow-lg rounded-lg">
        <form className="space-y-4">
            <div className="flex gap-4">
              <div className="w-full">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                placeholder="Phone Number"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Message"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="policy"
                className="mr-2"
                required
              />
              <label htmlFor="policy" className="text-sm">
                You agree to our <a href="#" className="text-primary font-semibold">Privacy Policy</a>.
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        <div className="flex-1 lg:w-1/2">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <p className="mb-4 text-gray-600">
            You need more information? Check what other persons are saying about our product. They are very happy with their purchase.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faPhoneAlt} className="text-primary mr-3" />
              <span>+62123123123</span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-primary mr-3" />
              <span>info@gotravel.com</span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faTicketAlt} className="text-primary mr-3" />
              <span>Open Support Ticket</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Location />
    </>
  );
};

export default Contact;