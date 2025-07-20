import ContactForm from "@/src/components/ContactForm";
import Heading from "@/src/components/shared/Heading";
import React from "react";

const ContactUs = () => {
  const data = [
    {
      id: 1,
      title: "Address",
      description: "71-75 Shelton Street, Covent Garden,",
      description2: "London, United Kingdom, WC2H 9JQ",
    },
    {
      id: 2,
      title: "Contact",
      description: "Phone: +44 7466610404",
      description2: "Email: smartbahujan@gmail.com",
    },
  ];
  return (
    <section className="py-20 ">
      <div className="container">
        <div>
          <Heading
            title="CONTACT US"
            description="Let’s Connect And Build Together"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div
            style={{
              background:
                "linear-gradient(122deg, #CA6BE4 0%, rgba(0, 51, 153, 0.95) 97.82%)",
            }}
          >
            <div className="  px-[56px] py-20 !rounded-[16px] text-white flex flex-col gap-10">
              {data.map((item) => (
                <div key={item.id} className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 ">{item.title}</h3>
                  <p className="">{item.description}</p>
                  {item.description2 && <p className="">{item.description2}</p>}
                </div>
              ))}
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
