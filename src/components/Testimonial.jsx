
import React from 'react';

const Testimonials = ({ isDark }) => {
  const testmonialData = [
    {
      desc: 'SoftSell made selling my licenses incredibly easy. I got the best price within hours!',
      author: 'John Doe',
      post: 'Software Engineer at TechCorp'
    },

    {
      desc: 'Excellent service! Fast and reliable. I highly recommend SoftSell to anyone looking to sell licenses.',
      author: 'Jane Smith',
      post: 'Product Manager at InnovateX'
    }


  ]
  return (
    <section className={`py-16  text-center ${isDark === false ? "testimonial" : ""}`}>
      <h2 className="text-3xl font-semibold">What Our Customers Say</h2>
      <div className={`mt-8 flex justify-center  md:gap-20 gap-6 flex-wrap md:flex-columns ${isDark == true && 'text-gray-700'}`}>
        {
          // iterate all items here to display
          testmonialData?.map((item, index) => {
            return <div key={index} className="md:w-1/3 w-[95%] p-4 card  shadow-lg rounded-lg hover:scale-105 transition delay-150 hover:cursor-pointer">
              <p>{item.desc}</p>
              <h4 className="mt-4 font-semibold">{item.author}</h4>
              <p>{item.post}</p>
            </div>
          })
        }

      </div>
    </section>
  );
};

export default Testimonials;
