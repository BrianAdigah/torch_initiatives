import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import blogData from '@/components/blogData';
import Image from 'next/image';
import { Navbar } from "@/components/Navbar";
import Banner from "@/components/Banner";
import Banner2 from "@/components/Banner2";
import { Footer } from '@/components/Footer';
import { Video } from "@/components/Video";

export function generateStaticParams() {
    return blogData.map(blog => ({ slug: blog.slug }));
}

interface BlogPageProps {
    params: { slug: string };
}

export default function BlogPage({ params }: BlogPageProps) {

    
    return (
        <>
            <Navbar />
            <Banner />
            <Banner2 />
           
            <Container>
                <SectionTitle
                    preTitle="Our Story"
                    title={"Participation in the Plant-Powered Holiday Season Campaign 2024"}
                >
                </SectionTitle>
               
                <p className="mt-10 mb-2 py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                    {"🌱 Torch Initiatives is thrilled to be part of the"} <b>#ThriveAfricaPlantPoweredHolidays</b>  {"campaign, an exciting initiative led by the Thrive Africa Vegan Women’s Initiative (AVWI)! 🌍✨"}<br />
                </p>
                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                    {"Through the support of Thrive Philanthropy, we’ve gained valuable skills and knowledge to effectively advocate for plant-based living. This year, we’re embracing the opportunity to gear up for a"} 
                    <b>plant-based Happy Holidays 2024, </b> {"celebrating African culture, health, and sustainability."}<br />
                </p>
                <p className="mt-5 mb-2 py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                    {"We’ll be sharing delicious recipes, practical tips, and creative ideas on our social media pages to inspire a meatless, healthy, and environmentally conscious festive season. Follow our journey and stay connected through the links below:"}<br />
                </p>
                <ul className="list-disc list-inside mb-4" >
                
                    <li>
                        <b>👉 Facebook:</b>
                        <a href=" https://www.facebook.com/Torch2024" target="_blank" className="text-blue-500 underline">
                             https://www.facebook.com/Torch2024
                        </a>
                    </li>
                    <li>
                        <b>👉 LinkedIn: </b>
                        <a href="https://www.linkedin.com/company/torch-initiatives/" target="_blank" className="text-blue-500 underline">
                         https://www.linkedin.com/company/torch-initiatives/ 
                        </a>
                    </li>

                    <li>
                        <b>👉 Instagram: </b>
                        <a href="hhttps://www.instagram.com/torchinitiatives/" target="_blank" className="text-blue-500 underline">
                         https://www.instagram.com/torchinitiatives/
                        </a>
                    </li>

                    <li>
                        <b>👉 Twitter: </b>
                        <a href='https://x.com/torchCBO' target="_blank" className="text-blue-500 underline">
                         @TorchCBO
                        </a>
                    </li>

                
                </ul>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="col-lg-6">
                        <Video videoId="-NSnwSBMbZk" previewImageUrl="/img/logo.png" />

                    </div>
                    <div className="col-lg-6">
                        <Video videoId="1HKbpVYluKQ" previewImageUrl="/img/logo.png" />
                    </div>
                </div>

                <p className=" text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                    {"Our participation underscores our commitment to promoting plant-based advocacy across Africa, fostering a collective movement toward healthier communities and a sustainable planet."
                    }
                </p>
                <p className="mt-4 mb-2 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                    {"Join us on this journey to make this holiday season meaningful, impactful, and plant- powered! 🎄💚"}<br />
                </p>

                
            </Container>
            <Footer />
        </>
    );
}
