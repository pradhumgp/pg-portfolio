const ExperienceCard = ({ logo, details, dates }) => {
  return (
    <>
      <div className="p-8 bg-white shadow-sm rounded-xl">
        <div className="flex flex-col items-start gap-12 justify-evenly lg:flex-row">
          <img src={logo} alt="" className="h-10 w-36" />
          <div className="flex flex-col max-w-xl gap-4">
            <span className="text-xl font-semibold text-gray-900">
            {details.title}
            </span>
            <ul className="flex flex-col gap-1 pl-5 text-gray-600 list-disc">
            {
                details.description.map((data, index)=>(
                    <li key={index}>{data}</li>
                ))
            }
            </ul>
          </div>
          <div className="text-gray-700">{dates}</div>
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
