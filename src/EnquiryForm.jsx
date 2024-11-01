import React, { useState } from "react";
import axios from "axios";

const EnquiryForm = () => {
  const defaultEnquiry = {
    name: "",
    email: "",
    category: "Service Request",
    message: "",
  };
  const [enquiryForm, setEnquiryForm] = useState(defaultEnquiry);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setEnquiryForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", enquiryForm);
    axios
      .post(`http://localhost:5001/enquiry`, enquiryForm, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setEnquiryForm(defaultEnquiry);
        alert("Your enquiry has been submitted successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Unable to submit the enquiry form");
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-700">
      <form
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"
        onSubmit={onFormSubmit}
      >
        <h2 className="text-xl font-bold mb-4">Enquiry Frorm</h2>
        <div className="mb-4">
          <label htmlFor="name" className=" block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full p-2 border border-green-300 rounded"
            placeholder="Enter your name"
            min={2}
            max={60}
            autoComplete="off"
            required
            value={enquiryForm.name}
            onChange={handleFormChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className=" block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full p-2 border border-green-300 rounded"
            placeholder="Enter your email"
            min={2}
            max={60}
            autoComplete="off"
            required
            value={enquiryForm.email}
            onChange={handleFormChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className=" block text-sm font-medium mb-2">
            Category
          </label>
          <select
            name="category"
            id="category"
            className="block w-full p-2 border border-green-300 rounded"
            required
            value={enquiryForm.category}
            onChange={handleFormChange}
          >
            <option value="Service Request">Service Request</option>
            <option value="Feedback">Feedback</option>
            <option value="Complaint">Complaint</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className=" block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            type="text"
            name="message"
            id="message"
            className="block w-full p-2 border border-green-300 rounded"
            placeholder="Enter your Query"
            autoComplete="off"
            rows={4}
            minLength={3}
            maxLength={200}
            required
            value={enquiryForm.message}
            onChange={handleFormChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
