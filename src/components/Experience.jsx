import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const experienceData = [
    {
      logo: "/springworks.svg",
      details: {
        title: "Software Development Engineer 1",
         description: [
            'this is 1',
            'this is 2'
         ]
      },
      dates: "March 2022 - June 2023",
      id: 1
    },
    {
      logo: "/springworks.svg",
      details: {
        title: "Software Development Engineer 1",
        description: [
            'this is 1',
            'this is 2'
         ]
      },
      dates: "July 2023 - Feb 2024",
      id: 2
    },
    {
        logo: "/DCS.png",
        details: {
            title: "IOT Intern",
            description: [
                'this is 1',
                'this is 2'
             ]
          },
        dates: "Jul 2021 - Aug 2021",
        id: 2
      },
  ];
  return (
    <>
      <div className="px-20 py-24 bg-gray-100">
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
