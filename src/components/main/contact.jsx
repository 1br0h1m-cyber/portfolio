import React, { useState } from 'react'

//icons
import { FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const botToken = "7692156985:AAGA2YbbiPHyr_tEKJM4EipsEg9nPJVgBKk"; // Bot tokeningiz
    const chatId = "-1002333672853"; // Telegram kanal ID'si

    const text = `📩 Yangi Xabar! \n \n 👤 Ism: ${formData.name} \n 📧 Email: ${formData.email} \n ✉️ Xabar: ${formData.message}`;
    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });

      const data = await response.json();

      if (data.ok) {
        setStatus("Xabar muvaffaqiyatli yuborildi!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Xatolik yuz berdi. Xabar yuborilmadi.");
      }
    } catch (error) {
      setStatus(`Xatolik: ${error.message}`);
    }
  };
  
  return (
    <div id='contact' className='space-y-6 py-12'>
      
      <h1 className='flex justify-center gap-2 text-[40px] sm:text-[45px] font-bold'>Contact<span className='text-blue-700'>Me</span></h1>
      
      <div className='flex flex-wrap justify-center px-5 sm:px-10 gap-5'>
        <a className='flex justify-center items-center p-5 gap-1 rounded-xl cursor-pointer bg-gray-50 hover:bg-white border-solid border-[2px] border-gray-50 hover:border-blue-600 hover:text-blue-500 transition-all shadow-lg hover:shadow-xl' href='https://t.me/Normahmatov04'>
          <div className='text-[24px] text-blue-500'><FaTelegramPlane/></div>  
          <p>T.me/Normahmatov04</p>
        </a>

        <a className='flex justify-center items-center p-5 gap-1 rounded-xl cursor-pointer bg-gray-50 hover:bg-white border-solid border-[2px] border-gray-50 hover:border-violet-600 hover:text-violet-600 transition-all shadow-lg hover:shadow-xl insta' href='https://instagram.com/normahmatov1broh1m'>
          <div className='text-[24px] text-violet-600'><BsInstagram/></div>
          <p>normahmatov1broh1m</p>
        </a>
        
        <a className='flex justify-center items-center p-5 gap-1 rounded-xl cursor-pointer bg-gray-50 hover:bg-white border-solid border-[2px] border-gray-50  hover:border-sky-500 hover:text-sky-500 transition-all shadow-lg hover:shadow-xl' href='https://www.linkedin.com/in/normahmatov-ibrohim-949bb5345/'>
          <div className='text-[24px] text-sky-500'><FaLinkedinIn/></div>
          <p>Normahmatov Ibrohim</p>
        </a>
      </div>
      
      
      <div className='flex justify-center items-center py-4 px-6 sm:px-12'>
        <form className="flex flex-col gap-4 p-5 bg-gray-50 rounded-xl shadow-xl w-full max-w-[800px]" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required 
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-600/30 focus:border-blue-600 outline-none sm:text-sm"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required 
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-600/30 focus:border-blue-600 outline-none sm:text-sm"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Write your message" required 
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-600/30 focus:border-blue-600 outline-none sm:text-sm"
            ></textarea>
          </div>
          
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all">
            Submit
          </button>
        
        </form>
      </div>
    
    </div>
  )
}

export default Contact