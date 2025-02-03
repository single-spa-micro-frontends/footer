import {
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import logo from "./assets/logo.png";
import logoText from "./assets/logoText.png";
import Button from "./components/Button";

const FOOTER_BOOK_CATEGORIES = [
  {
    title: "Categories",
    items: ["Pathology", "Fantasy", "Self Help", "Romance", "Mystery"],
  },
  {
    title: "For Kids",
    items: ["Games", "Comics", "Fantasy"],
  },
  {
    title: "E-Book",
    items: ["Fiction", "Historical", "Horror"],
  },
];

const SocialLinks = () => (
  <div className="flex gap-4">
    <a
      href="https://www.instagram.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram />
    </a>
    <a
      href="https://www.facebook.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFacebook />
    </a>
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter />
    </a>
  </div>
);

const ContactInfo = () => (
  <div className="text-sm flex flex-col gap-2">
    <div className="flex items-center">
      <FaPhone />
      <span className="ml-2">+1 (555) 123-4567</span>
    </div>
    <div className="flex items-center">
      <FaMapMarkerAlt />
      <span className="ml-2">123 Main St, Belgrade, Serbia</span>
    </div>
    <div className="flex items-center">
      <FaClock />
      <span className="ml-2">Mon-Fri: 9am - 5pm</span>
    </div>
  </div>
);

const FooterSection = ({
  title,
  items,
  handleSearch,
}: {
  title: string;
  items: string[];
  handleSearch: (value: string) => void;
}) => (
  <div>
    <div className="font-normal mb-2">{title}</div>
    <div className="text-sm flex flex-col gap-1">
      {items.map((item) => (
        <div
          key={item}
          className="cursor-pointer"
          onClick={() => handleSearch(item)}
        >
          {item}
        </div>
      ))}
    </div>
  </div>
);

const App = () => {
  const handleSearch = (value: string) => {
    console.log(value);
  };

  return (
    <footer className="bg-purple-400 text-gray-100">
      <div className="border-b border-white py-4">
        <div className="flex justify-between container mx-auto w-[80%]">
          <div className="flex flex-col justify-between">
            <div className="flex flex-row items-center bg-white">
              <img src={logo} alt="Logo" />
              <img src={logoText} alt="Logo" />
            </div>
            <SocialLinks />
          </div>
          {FOOTER_BOOK_CATEGORIES.map((section) => (
            <FooterSection
              key={section.title}
              title={section.title}
              items={section.items}
              handleSearch={handleSearch}
            />
          ))}
          <div>
            <div className="font-normal mb-2">Help & Contact</div>
            <ContactInfo />
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-normal">
              If you have questions, <br /> you can call us, <br /> or we can do
              it for you.
            </div>
            <Button variant="primary">Request a Call</Button>
          </div>
        </div>
      </div>
      <div className="py-2 text-center text-sm">
        <p>&copy; 2025 B-World. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default App;
