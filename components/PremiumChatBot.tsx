"use client";
import { useState,useEffect  } from "react";

type Data = {
  service: string;
  business: string;
  budget: string;
  name: string;
  phone: string;
};



export default function PremiumChatBot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Data>({
    service: "",
    business: "",
    budget: "",
    name: "",
    phone: "",
  });

  const next = (key: keyof Data, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
    setStep((prev) => prev + 1);
  };

  useEffect(() => {
  if (step === 5) {
    const url = `https://wa.me/919028815714?text=${encodeURIComponent(
      `Hi Prosira,

New Lead 🚀

Service: ${data.service}
Business: ${data.business}
Budget: ${data.budget}
Name: ${data.name}
Phone: ${data.phone}`
    )}`;

    window.open(url, "_blank");
  }
}, [step]);

  return (
    <>
      {/* Floating Button */}
      <button
  onClick={() => setOpen(!open)}
  className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-xl hover:scale-110 transition flex items-center justify-center bg-black"
>
  <img 
    src="/images/chat.png"
    alt="chat"
    className="w-10 h-10 object-contain"
  />
</button>

      {/* Chat Box */}
      {open && (
      <div className="fixed bottom-20 right-6 w-[340px] bg-[#0f0f0f] text-white rounded-2xl shadow-2xl p-4 z-50 border border-[#222] backdrop-blur-xl">          
          {/* HEADER */}
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-sm tracking-wide text-[#d4af37]">
  Prosira Assistant
</h3>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          {/* STEPS */}
          {step === 0 && (
            <>
              <p className="mb-2">Hi 👋 What service do you need?</p>
              {["Advertising Services", "Digital Services","Event & Expo"].map((s) => (
                <button key={s} onClick={() => next("service", s)} className="btn">{s}</button>
              ))}
            </>
          )}

          {step === 1 && (
            <>
              <p className="mb-2">Your business type?</p>
              {["Local", "Startup", "E-commerce"].map((b) => (
                <button key={b} onClick={() => next("business", b)} className="btn">{b}</button>
              ))}
            </>
          )}

          {step === 2 && (
            <>
              <p className="mb-2">Monthly budget?</p>
              {["5k–10k", "10k–25k", "25k+"].map((b) => (
                <button key={b} onClick={() => next("budget", b)} className="btn">{b}</button>
              ))}
            </>
          )}

         {step === 3 && (
  <>
    <p className="mb-2">Your Name?</p>

    <input
      className="input"
      value={data.name}
      onChange={(e) =>
        setData((prev) => ({ ...prev, name: e.target.value }))
      }
    />

    <button
      onClick={() => next("name", data.name)}
      className="btn"
    >
      Continue
    </button>
  </> 
)}

          {step === 4 && (
            <>
              <p className="mb-2">Phone Number?</p>
              <input
  className="input"
  value={data.phone}
  onChange={(e) =>
    setData((prev) => ({ ...prev, phone: e.target.value }))
  }
/>

<button
  onClick={() => next("phone", data.phone)}
  className="btn"
>
  Continue
</button>
            </>
          )}

         {step === 5 && (
  <>
    <p className="text-[#d4af37] font-semibold">
      ✅ Thank you! Let’s continue on WhatsApp 🚀
    </p>

    <a
      href={`https://wa.me/919028815714?text=${encodeURIComponent(
        `Hi Prosira,

I am interested in your services.

Service: ${data.service}
Business: ${data.business}
Budget: ${data.budget}
Name: ${data.name}
Phone: ${data.phone}`
      )}`}
      target="_blank"
      className="block bg-gradient-to-r from-[#d4af37] to-[#f5d76e] text-black text-center p-3 rounded mt-3 font-semibold"
    >
      Continue on WhatsApp
    </a>
  </>
)}
        </div>
      )}

      {/* STYLES */}
      <style jsx>{`
  .btn {
    display: block;
    width: 100%;
    margin: 8px 0;
    padding: 12px;
    background: #1a1a1a;
    border-radius: 10px;
    text-align: left;
    color: white;
    border: 1px solid #2a2a2a;
    transition: all 0.25s ease;
  }

  .btn:hover {
    background: linear-gradient(135deg, #d4af37, #f5d76e);
    color: black;
    transform: scale(1.03);
  }

  .input {
    width: 100%;
    padding: 12px;
    border-radius: 10px;
    background: #1a1a1a;
    border: 1px solid #333;
    color: white;
  }
`}</style>
    </>
  );
}