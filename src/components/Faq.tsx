"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { createClient } from "@/utils/supabase/client";
import Spinner from "./Spinner";
import { Value } from "@/types";

const Faq = () => {
  
  const [loading, setLoading] = React.useState(false);

  
      var data:any[] = [
        {title: "What is Torch Initiatives all about?", description: "Torch Initiatives focuses on social responsibility, aiming to empower youth with positive attitudes and skills while promoting community sustainability. We champion the effective use of local resources, foster positive community cultures, and encourage responsible stewardship."},
        {title: "What are some of the core activities of Torch Initiatives?", description: "One of our key initiatives is promoting a healthy, eco-friendly, plant-based eating lifestyle. We believe this is important for individual well-being and the health of our planet. We also work to identify and utilize the inherent strengths within individuals and communities to improve livelihoods."},
        {title: "What is the vision of Torch Initiatives?", description: "We envision a future where empowered generations develop a transformative mindset, leading to resilient communities that thrive through sustainability, compassion, and positive change."},
        {title: "What is the mission of Torch Initiatives?", description: "Our mission is to catalyze transformative attitudes and equip individuals for a brighter future. Through dynamic initiatives, we aim to create lasting empowerment and sustainability that will benefit generations within our inspired communities."},
      ]
      
    

  if (loading) return <Spinner />;

  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {data.map((item, index) => (
          <div key={index} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.title}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-green-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.description}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Faq;
