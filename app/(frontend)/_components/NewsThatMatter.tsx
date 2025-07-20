import React from "react";

const NewsThatMatter = () => {
  const data = [
    "World News",
    "Politics",
    "Business",
    "Technology",
    "Health",
    "Sports",
  ];
  return (
    <section>
      <div className="container">
        <div>
          <h1 className="text-black text-center mb-5">News That Matter</h1>
          <div>
            <div className="flex flex-wrap justify-around">
              {data.map((item, index) => (
                <button
                  key={index}
                  className={`mb-4 px-5 py-3 rounded-[30px] bg-white ${
                    index == 0 ? "text-primary" : "text-black"
                  } font-semibold`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsThatMatter;
