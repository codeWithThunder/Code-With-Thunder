import React from "react";
import HTestimonialsChild from "./HTestimonialsChild/HTestimonialsChild";

const HTestimonials = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
            Testimonials
          </h1>
          <div className="flex flex-wrap -m-4">
            
            <HTestimonialsChild person="Mohit Kumar" deteils="I don't have words to thank this man, I'm really grateful to have this channel and website in my daily routine. If you're a mere beginner, then you can trust this guy and can put your time into his content. I can assure you that it'll be worth it."></HTestimonialsChild>
            <HTestimonialsChild person="Rakesh Shetty" deteils="For everyone who wants to level up their #Coding and #Dev skills - seriously, this channel is for you! Both basic and advanced stacks are covered on this channel, and one can learn according to his skill levels. And the icing on the cake is, everything is available for free."></HTestimonialsChild>

          </div>
        </div>
      </section>
    </div>
  );
};

export default HTestimonials;
