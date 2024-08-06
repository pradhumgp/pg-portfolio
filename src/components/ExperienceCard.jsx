const ExperienceCard = ({ logo, details, dates }) => {
  return (
    <>
      <div className="w-10/12 p-8 bg-white shadow-md rounded-xl">
        <div className="flex justify-around gap-12">
          <img src={logo} alt="" className="w-32 h-8" />
          <div>
            <span>
            {details.title}
            </span>
            <ul>
            {
                details.description.map((data, index)=>(
                    <li key={index}>{data}</li>
                ))
            }
            </ul>
          </div>
          <div>{dates}</div>
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
