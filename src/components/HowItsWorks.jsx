
import React from 'react';
import { LuUpload } from "react-icons/lu";
import { FcPaid } from "react-icons/fc";
import { SiUnlicense } from "react-icons/si";

const HowItWorks = () => {
    return (
        <section className="py-16 text-center ">
            <h2 className="text-3xl font-semibold">How It Works</h2>
            <div className="mt-8 flex justify-around flex-wrap">
                <div className="md:w-1/3 w-[95%] p-4 hover:cursor-pointer hover:scale-105 transition delay-150">
                <LuUpload className="w-12 h-12 mx-auto text-blue-500" />
                   
                    <h3 className="mt-4 font-semibold">Upload License</h3>
                    <p>Submit your license details for a quick review.</p>
                </div>
                <div className="md:w-1/3 w-[95%] p-4 hover:cursor-pointer hover:scale-105 transition delay-150">
                     <SiUnlicense className="w-12 h-12 mx-auto text-green-500"/>
                    
                    <h3 className="mt-4 font-semibold">Get Valuation</h3>
                    <p>Receive a fair and accurate valuation of your license.</p>
                </div>
                <div className="md:w-1/3 w-[95%] p-4 hover:cursor-pointer hover:scale-105 transition delay-150">
                <FcPaid className="w-14 h-12 mx-auto text-emerald-500 " />

                    <h3 className="mt-4 font-semibold">Get Paid</h3>
                    <p>Receive your payment quickly and securely.</p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
