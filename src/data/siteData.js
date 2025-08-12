import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export const siteData = {
  bandName: "Through Blind Eyes",
  navItems: [
    { name: "Home", page: "home" },
    { name: "Dates", page: "dates" },
    { name: "All Merch", page: "allMerch" },
    { name: "Videos", page: "videos" },
    { name: "Socials", href: "#socials" },
  ],
  header: {
    title: "", 
    subtitle: "", 
    ctaText: "Listen Now",
    ctaLink: "https://www.youtube.com/watch?v=aQTAaa6dyXY&list=RDaQTAaa6dyXY&start_radio=1",
    videoUrl: "tbeheader.mp4",
    headerLogoUrl: "/static/overdose.png"
  },
  tourDates: [
    { city: "New York, NY", date: "Oct 25, 2025", venue: "Terminal 5", tickets: "#" },
    { city: "Chicago, IL", date: "Oct 27, 2025", venue: "House of Blues", tickets: "#" },
    { city: "Los Angeles, CA", date: "Nov 1, 2025", venue: "The Wiltern", tickets: "#" },
    { city: "Dallas, TX", date: "Nov 5, 2025", venue: "The Factory", tickets: "#" },
    { city: "London, UK", date: "Dec 10, 2025", venue: "The O2", tickets: "#" },
  ],
  merch: [
    // The image property is now an array to hold multiple image URLs
    { name: "Pocket Tee", price: "$10.00", image: ["/static/pocketT-Front.jpg", "/static/pocketT-back.jpg"], category: 'Shirts' }, 
    { name: "Overdose Tee", price: "$10.00", image: ["/static/overdoseT-2.jpg", "/static/overdoseT-back.jpg", "/static/overdoseT-Front.jpg"], category: 'Shirts' },
    { name: "Texas Hate Tee", price: "$15.00", image: ["/static/texashateT.jpg"], category: 'Shirts' },
    { name: "Overdose Album", price: "$15.00", image: ["static/overdose.png"], category: 'Vinyls' },
    { name: "Band Hat", price: "$20.00", image: ["https://placehold.co/300x300/27272a/ffffff?text=Hat"], category: 'Hats/Beanies' },
    { name: "Wall Flag", price: "$25.00", image: ["https://placehold.co/300x300/27272a/ffffff?text=Flag"], category: 'Flags' },
    { name: "Overdose T-Shirt", price: "$25.00", image: ["https://placehold.co/300x300/27272a/ffffff?text=Overdose+Tee"], category: 'Shirts' },
    { name: "Distressed Hoodie", price: "$55.00", image: ["https://placehold.co/300x300/27272a/ffffff?text=Distressed+Hoodie"], category: 'Hoodies' },
    { name: "Another T-Shirt", price: "$25.00", image: ["https://placehold.co/300x300/27272a/ffffff?text=T-Shirt+2"], category: 'Shirts' },
    { name: "Another Hoodie", price: "$50.00", image: ["https://placehold.co/300x300/27272a/ffffff?text=Hoodie+2"], category: 'Hoodies' },
  ],
  videos: {
    mainVideo: {
      title: "Through Blind Eyes - Overdose",
      youtubeUrl: "https://www.youtube.com/watch?v=aQTAaa6dyXY",
      embedUrl: "https://www.youtube.com/embed/aQTAaa6dyXY",
      //description: "This music video titled 'Overdose' by 'Through Blind Eyes' shows the band performing the song in a dark venue with flashing lights while people dance to the music. There are also close-up shots of band members and a group photo of the band in a forest. [00:00, 00:29]"
    },
    otherVideos: [
      { title: "Another Video Title", youtubeUrl: "#", thumbnailUrl: "https://placehold.co/320x180/18181b/a1a1aa?text=Video+1" },
      { title: "Third Video", youtubeUrl: "#", thumbnailUrl: "https://placehold.co/320x180/18181b/a1a1aa?text=Video+2" },
      { title: "Fourth Video", youtubeUrl: "#", thumbnailUrl: "https://placehold.co/320x180/18181b/a1a1aa?text=Video+3" },
    ]
  },
  socials: [
    { name: "Facebook", url: "https://www.facebook.com/throughblindeyes16" },
    { name: "Twitter", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "YouTube", url: "#" },
  ]
};
