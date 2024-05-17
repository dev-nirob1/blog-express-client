
const SectionTwo = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        <div className="flex justify-center items-center">
            <img src="/about3.jpg" alt="Authors at BlogExpress" className="w-full h-auto rounded-lg shadow-md" />
        </div>
    
        <div className="font-serif primary-text text-justify space-y-4">
            <p>
                At <span className="text-blue-600">Blog</span>Express, our authors are the backbone of our platform. Their dedication and expertise ensure that we deliver high-quality content to our readers. We&apos;re grateful for their contributions and commitment to excellence.
            </p>
            <p>
                Quality is our top priority at <span className="text-blue-600">Blog</span>Express. We take pride in providing our readers with accurate, well-researched, and engaging content that adds value to their lives. Our rigorous editorial standards guarantee that every piece of content meets our criteria for excellence.
            </p>
            <p>
                Last but not least, we owe a debt of gratitude to the creator of <span className="text-blue-600">Blog</span>Express, Al Hasan Nirob. His vision and leadership have been instrumental in shaping our platform into what it is today. We&apos;re inspired by his passion for knowledge and his commitment to fostering a thriving community.
            </p>
            <p>
                Together, we&apos;re on a journey to empower and inspire. Thank you for being part of the <span className="text-blue-600">Blog</span>Express family.
            </p>
        </div>
    
    </section>
    );
};

export default SectionTwo;