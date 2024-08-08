import ExperienceCard from "./ExperienceCard";

const Experience = ({refHook}) => {
  const experienceData = [
    {
      logo: "/springworks.svg",
      details: {
        title: "Software Development Engineer 1",
         description: [
            'Worked as an Frontend Developer on various web-applications and mobile applications.',
            'Optimized loading time by migrating user media from cloud storage objects to a dedicated distribution networks.',
            'Wrote dozens reusable components and documented them to save time.',
            'Fixed major UI bugs to improve user experience.',
            'Collaborated with client and design teams to brainstorm, gather requirements.',
            'Tech used - Next.js, React, React-native, Vue.js, Expo.dev, AWS, MongoDB, Node.js and S3'
         ]
      },
      dates: "July 2023 - Feb 2024",
      id: 1
    },
    {
      logo: "/springworks.svg",
      details: {
        title: "Software Development Engineer Intern",
        description: [
            'Worked on a secondary ticket marketplace - majorly contributing to the Frontend, fixing bugs and resolving UI issue, optimizing load time and assets management',
            'Refactoring was major part of my daily routine, along with that documented various reusable components.',
            'Also worked on a React-Native based cross-platform mobile application which heavily relied on media - photos & videos',
            'I was also tasked with research and deployment of the mobile-app - used Expo.dev a react native cli which build-deploys-submit to Apple Developer and Google play console',
            'Also build a admin-panel for the app for moderators to use and review media that is reported and flagged as sensitive through the app - Retool, S3 and MongoDB aws used for this',
            'Also integrated AWS image-video detection service to flag unwanted media as it gets uploaded.'
         ]
      },
      dates: "March 2022 - June 2023",
      id: 2
    },
    {
        logo: "/DCS.png",
        details: {
            title: "IOT Intern",
            description: [
              'Worked on Internet of Things based Camera Security System which transmits camera feed to users mobile app in real time',
              'Hardware used - ESP32 module, IOT Camera, Blynk app and NGROK',
              'Implemented real-time streaming with minimal latency using NGROK for secure tunneling',
              'Integrated Blynk app for user-friendly mobile interface and remote monitoring capabilities'
          ]
          
          },
        dates: "Jul 2021 - Aug 2021",
        id: 3
      },
  ];
  return (
    <>
      <div className="px-20 py-24 bg-gray-100" ref={refHook}>
        <div className="flex flex-col gap-12 px-8">
          <div className="flex flex-col items-center gap-4">
            <div>
              <button className="px-5 py-1 text-sm font-medium text-gray-600 bg-gray-200 leading-20 rounded-xl">
                Experience
              </button>
            </div>
            <span className="text-xl text-gray-600 leading-28">
              Here is a quick summary of my most recent experiences:
            </span>
          </div>
          <div className="flex flex-col items-center gap-12">
            {experienceData.map((data) => (
              <ExperienceCard
                key={data.id}
                logo={data.logo}
                details={data.details}
                dates={data.dates}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
