import React from 'react';

import Hero from "@/components/Hero";
import WorkList from "@/components/WorkList";
import Statlist from "@/components/Statlist";
import FeaturedProject from "@/components/FeaturedProject";

const Page = () => {
    return (
        <div>
            
           <Hero/>
           <WorkList/>
        <Statlist/>
            <FeaturedProject/>
        </div>
    );
};

export default Page;
