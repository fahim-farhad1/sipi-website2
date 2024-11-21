import React from "react";
import MiddleSectionTitle from "../ReuseableTitle/MiddleSectionTitle";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Tech Conference 2024",
    date: "November 15, 2024",
    image:
      "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/428651003_357627230523135_1119649605795381666_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEwn6iQSYw_QhKJ2JWH1MPjlyyzf8CCF4uXLLN_wIIXiwPQQs8ytqIKBbyUgaVk1K5uj42wsMyheGw_Xc8RksRu&_nc_ohc=6jLKLxDNN3oQ7kNvgEzFbHZ&_nc_zt=23&_nc_ht=scontent.fdac24-2.fna&_nc_gid=AXRT2E7-hfRyiqaHxMgnsT_&oh=00_AYDlevLZq4rU8T-RFwceCfu-hnxkC_mHBegafzZ3iT-Pgw&oe=67447E4F",
    content:
      "Join industry leaders and innovators to explore the future of technology. Discover groundbreaking ideas and network with experts.",
  },
  {
    id: 2,
    title: "Art & Culture Festival",
    date: "December 5, 2024",
    image:
      "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/428638863_357627607189764_1098481427351756918_n.jpg?stp=dst-jpg_s417x417&_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGNU5QTwW3CGZbyfoVZr15AHEAWqL9uVfccQBaov25V9yduGiKFBOktZS-KjsWoRVZL1z4kBdhs93-m8VYfV2FO&_nc_ohc=vMRXtGnN0uYQ7kNvgEqN3sn&_nc_zt=23&_nc_ht=scontent.fdac24-1.fna&_nc_gid=A3wN7jFz2Hu9Bp95UIypmjA&oh=00_AYBr41CHBzFuo0fvVetQz05XWA7EBQAvMS8b8KQLkEGAHQ&oe=6744600C",
    content:
      "Celebrate creativity with vibrant art displays and cultural performances. Experience the richness of tradition and modern artistry.",
  },
  {
    id: 3,
    title: "Business Meetup",
    date: "January 20, 2025",
    image:
      "https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-6/428637244_357627930523065_3778783695501369939_n.jpg?stp=dst-jpg_s417x417&_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEDuIHu0paEfjhn_c2LbZJlD98Ig2BapTsP3wiDYFqlO2ZwAWv8up1DECulsYZ3yhu_opzB0hG5Ek4qNo3Hv2sy&_nc_ohc=ACghTJKFtD4Q7kNvgHuUQmA&_nc_zt=23&_nc_ht=scontent.fdac24-5.fna&_nc_gid=Ayu7NDg4tObW02pEfqYGO5k&oh=00_AYAoZEf58GTmqtGez5cay5UcgQmAKrT6_nNMXLGpMXPj0A&oe=67445C19",
    content:
      "Connect with professionals and explore emerging business opportunities. Gain insights from influential leaders and entrepreneurs.",
  },
  {
    id: 4,
    title: "Science Fair",
    date: "February 10, 2025",
    image:
      "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/428621793_357627877189737_7614698549543945159_n.jpg?stp=dst-jpg_s417x417&_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeG-vtlzWBBjU7KR9ID-3664k0BmHWwqpXOTQGYdbCqlc0SeOZtXlE_uvMw7e_DSQ-CfF0bO3oRN5kLdT18gq6Qw&_nc_ohc=OBDu3YwJNlcQ7kNvgG4FWDW&_nc_zt=23&_nc_ht=scontent.fdac24-2.fna&_nc_gid=AM4YKf4_idY075Gk1nfLHrd&oh=00_AYBLyPaGFH7Sr0ih7RuipT1iRM0MSFe5GHVX7t3JA9HltQ&oe=674462B8",
    content:
      "Discover groundbreaking scientific projects and innovative experiments. Be inspired by the next generation of thinkers and creators.",
  },
  {
    id: 5,
    title: "Music Concert",
    date: "March 25, 2025",
    image:
      "https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-6/428625875_357629360522922_752536312459571056_n.jpg?stp=dst-jpg_s417x417&_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFcLeCBSccC42xaFvU1_Ik37sMfO-rDLsvuwx876sMuy-lvXgI1xxhoUexNXfkyyW_IPGKN8qxwqTLCXYKjCCqE&_nc_ohc=1GPq6y2i00YQ7kNvgHoddrM&_nc_zt=23&_nc_ht=scontent.fdac24-5.fna&_nc_gid=Akhf0hzeFld7cl7ZDi3CCPs&oh=00_AYBBpXTpdVvWZOZTRf5YpTjbBDQIiyUJvrCTHA47YwWE2g&oe=67446F40",
    content:
      "Experience the thrill of live music performances by top artists. Enjoy an unforgettable evening filled with rhythm and melodies.",
  },
  {
    id: 6,
    title: "Literature Workshop",
    date: "April 12, 2025",
    image:
      "https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/428639121_357629107189614_829398667001382719_n.jpg?stp=dst-jpg_s417x417&_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFO1VlUS7QQf2Rocxlq5vTdiy5IdG2oHnOLLkh0bagec6OxyJA1vBtVbRZ58J3w7-PurnnGudM7lxkwquc3-sfg&_nc_ohc=OlZnsseJ-bgQ7kNvgFR9DvI&_nc_zt=23&_nc_ht=scontent.fdac24-3.fna&_nc_gid=Akhf0hzeFld7cl7ZDi3CCPs&oh=00_AYBFiBekDmeGTzFmD5R-pTPcZklzbfsYQi2WKzm2qNgxjA&oe=67446B09",
    content:
      "Unleash your creativity and sharpen your writing skills. Learn from acclaimed authors and engage in meaningful discussions.",
  },
];

export default function EventSection() {
  return (
    <section className="py-12 bg-gray-100">
      <div className=" mx-auto px-6 lg:px-8">
        <MiddleSectionTitle
          badge="Events"
          title="Great Moments Of Campus Life."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              {/* Event Image */}
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-[90%] mx-auto h-64 object-cover rounded-2xl my-3 border-4 border-primary/60"
                />
                {/* Event Date Overlay */}
                <div className="absolute top-2 left-2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded">
                  {event.date}
                </div>
              </div>

              {/* Event Details */}
              <div className="px-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {event.title}
                </h3>
                <p>{event.content}</p>
                <Link className="text-primary py-2  rounded transition-colors flex items-center">
                  Read More <FaLongArrowAltRight className="ml-2 my-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
