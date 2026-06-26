'use client';
import {
  Tabs as MTTabs,
  TabsHeader as MTTabsHeader,
  TabsBody as MTTabsBody,
  Tab as MTTab,
  TabPanel as MTTabPanel,
} from "@material-tailwind/react";

const Tabs = MTTabs as any;
const TabsHeader = MTTabsHeader as any;
const TabsBody = MTTabsBody as any;
const Tab = MTTab as any;
const TabPanel = MTTabPanel as any;
 
export default function TabbedGallery() {
  const data = [
    {
      label: "Corporate",
      value: "corporate",
      images: [
        { imageLink: "/gallery/image1.jpeg" },
        { imageLink: "/gallery/image2.jpg" },
        { imageLink: "/gallery/image3.jpg" },
        { imageLink: "/gallery/image4.jpg" },
        { imageLink: "/gallery/image5.jpg" },
        { imageLink: "/gallery/image6.jpg" },
        { imageLink: "/gallery/image7.jpg" },
        { imageLink: "/gallery/image8.jpg" },
      ],
    },
    {
      label: "Wedding",
      value: "wedding",
      images: [
        { imageLink: "/wedding/1.jpg" },
        { imageLink: "/wedding/2.jpg" },
        { imageLink: "/wedding/3.png" },
        { imageLink: "/wedding/4.png" },
        { imageLink: "/wedding/5.png" },
        { imageLink: "/wedding/6.jpg" },
        { imageLink: "/wedding/7.jpg" },
        { imageLink: "/wedding/8.jpg" },
        { imageLink: "/wedding/9.jpg" },
        { imageLink: "/wedding/10.jpg" },
        { imageLink: "/wedding/11.jpg" },
        { imageLink: "/wedding/12.jpg" },
      ],
    },
  ];
 
  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-2">Gallery</h2>
        <p className="text-sm tracking-[0.2em] uppercase text-gray-500 relative inline-block before:content-[''] before:absolute before:w-12 before:h-[1px] before:bg-gray-300 before:right-full before:mr-4 before:top-1/2 after:content-[''] after:absolute after:w-12 after:h-[1px] after:bg-gray-300 after:left-full after:ml-4 after:top-1/2">
          That You Will Remember Forever
        </p>
      </div>

      <Tabs value="corporate">
        <TabsHeader className="bg-transparent mb-12 flex justify-center border-b border-gray-200 rounded-none w-max mx-auto p-0">
          {data.map(({ label, value }) => (
            <Tab 
              key={value} 
              value={value}
              className="text-gray-600 font-medium pb-4 px-8 z-10 w-auto uppercase tracking-widest text-sm"
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="grid grid-cols-1 gap-4">
          {data.map(({ value, images }) => (
            <TabPanel
              className="p-0"
              key={value}
              value={value}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map(({ imageLink }, index) => (
                  <div key={index} className="w-full aspect-[4/3] overflow-hidden group bg-gray-100">
                    <img
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      src={imageLink}
                      alt={`Gallery Image ${index + 1}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
