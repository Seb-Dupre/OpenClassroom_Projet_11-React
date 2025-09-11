import Banner from "../components/Banner.jsx";
import Features from "../components/Feature_Card.jsx";
import iconChat from "../assets/icon-chat.png";
import iconMoney from "../assets/icon-money.png";
import iconSecurity from "../assets/icon-security.png";
import bankTree from "../assets/bank-tree.jpeg";

const Home = () => {
  const subtitleContent = [
    "No fees.",
    "No minimum deposit.",
    "High interest rates.",
  ];

  const textContent = "Open a savings account with Argent Bank today!";

  const featuresData = [
    {
      icon: iconChat,
      title: "You are our #1 priority",
      description:
        "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      icon: iconMoney,
      title: "More savings means higher rates",
      description:
        "The more you save with us, the higher your interest rate will be!",
    },
    {
      icon: iconSecurity,
      title: "Security you can trust",
      description:
        "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];

  return (
    <div>
      <Banner
        subtitles={subtitleContent}
        text={textContent}
        backgroundImage={bankTree}
      />
      <Features features={featuresData} />
    </div>
  );
};

export default Home;
