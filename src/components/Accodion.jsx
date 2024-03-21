import React from "react";
import { Accordion } from "flowbite-react";
import AOS from "aos";
import "aos/dist/aos.css";
const Accodion = () => {
  return (
    <>
      <div
        className="flex justify-center mt-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="w-full p-4">
          <Accordion collapseAll className="border-none">
            <Accordion.Panel>
              <Accordion.Title>
                Introducing the Nike Product Tester Program
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Embark on an exciting journey with Nike as we invite you to
                  join our esteemed Product Tester Program. Here, we offer you
                  not just a chance to test our latest innovations, but an
                  opportunity to be at the forefront of athletic footwear
                  evolution.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out our about page
                  <a
                    href="https://flowbite.com/docs/getting-started/introduction/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    to get started
                  </a>
                  and start earning rewards today!
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Survey and Testing Period</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  At Nike, we understand the significance of comprehensive
                  testing and insightful feedback. Therefore, our Product Tester
                  Program spans across various phases, ensuring that each
                  product undergoes rigorous scrutiny before reaching the
                  market.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Different Kinds of Testing</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                Our testing phases encompass a diverse range of activities tailored to provide a holistic understanding of our products. Here's a glimpse into some of the testing activities you may participate in
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                With Nike's Product Tester Program, you'll not only get to experience our latest innovations firsthand but also contribute directly to their development. Join us today and become an integral part of shaping the future of athletic footwear
                </p>
               
            
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Accodion;
