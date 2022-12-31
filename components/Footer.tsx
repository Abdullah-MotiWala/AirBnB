import React, { FC } from "react";

const Footer: FC = () => {
  const footerContent: {
    heading: string;
    values: { value: string; link: string }[];
  }[] = [
    {
      heading: "ABOUT",
      values: [
        { value: "How Airbnb Works", link: "" },
        { value: "Newsroom", link: "" },
        { value: "Investors", link: "" },
        { value: "Airbnb Plus", link: "" },
        { value: "Airbnb Luxe", link: "" }
      ]
    },
    {
      heading: "COMMUNITY",
      values: [
        { value: "Accessibility", link: "" },
        { value: "This is not a real site", link: "" },
        { value: "Its a pretty awesome clone", link: "" },
        { value: "Referral Accepted", link: "" },
        { value: "Pentone Code", link: "" }
      ]
    },
    {
      heading: "HOST",
      values: [
        { value: "Next with Tailwand", link: "" },
        { value: "Presents", link: "" },
        { value: "React & Next JS", link: "" },
        { value: "Hundred of lines", link: "" },
        { value: "Contact Now", link: "" }
      ]
    },
    {
      heading: "SUPPORT",
      values: [
        { value: "Help Center   ", link: "" },
        { value: "Trust & Safety", link: "" },
        { value: "Say Hi to Github", link: "" },
        { value: "Learn Something new", link: "" },
        { value: "For the win", link: "" }
      ]
    }
  ];
  return (
    <footer className="bg-gray-100 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-10 md:px-32 py-6 ">
        {footerContent.map((content) => (
          <div
            key={content.heading}
            className="space-y-1 text-xs text-gray-600"
          >
            <h5 className="font-bold">{content.heading}</h5>
            {content.values?.map((value, index) => (
              <p key={`${value}_${index}`}>{value.value}</p>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
