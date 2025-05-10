// src/components/WhyChooseUs.js
import React from 'react';
import { VscWorkspaceTrusted } from "react-icons/vsc";
// import { SiFastly } from "react-icons/si";
import { AiOutlineTransaction } from "react-icons/ai";
import { MdOutlineContactSupport } from "react-icons/md";
const WhyChooseUs = () => {

    const data = [
        {
            title: 'Trusty Platform',
            desc: 'We guarantee fair valuations and secure transactions.',
            icon:VscWorkspaceTrusted
        },
        {
            title: 'Fast Transactions',
            desc: 'Get your payment in just a few business days.',
            icon:AiOutlineTransaction
        },
        {
            title: '24/7 Support',
            desc: 'Our support team is available to assist you at all times.',
            icon:MdOutlineContactSupport
        }

    ]
    return (
        <section className="py-16 text-center ">
            <h2 className="text-3xl font-semibold hover:cursor-pointer">Why Choose Us?</h2>
            <div className="mt-8 flex justify-around flex-wrap ">
                {
                    data?.map((item, index) => {
                        return<div key={index} className="md:w-1/3 w-[95%] p-6  rounded-lg hover:cursor-pointer hover:scale-105 transition delay-150">
                            {<item.icon className="w-12 h-12 mx-auto text-green-700" />}
                            <h3 className="mt-4 font-semibold">{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>

                    })
                }


            </div>
        </section>
    );
};

export default WhyChooseUs;
