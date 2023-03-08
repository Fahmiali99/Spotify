const Songs = ({ title, artists, image, duration, buttonSelect, select }) => {
  const handleSelect = () => {
    buttonSelect();
  };

  return (
    <div>
      <div className="card lg:card-side card-compact bg-base-100 shadow-xl">
        <img
          className="h-40 w-full object-cover sm:h-full xl:w-48"
          src={image}
          alt="Album"
        />
        <div className="card-body truncate">
          <div className="m-2 lg:mb-6 truncate">
            <span className="text-sm lg:text-xl font-bold">{title}</span>
            <p className="font-normal  sm:font-semibold">{artists}</p>
            <p className="text-primary-focus">{duration}</p>
          </div>
          <div className="card-actions justify-center sm:justify-end">
            {select ? (
              <button
                data-testid="selected-button"
                className="btn btn-sm md:btn-md gap-2 btn-secondary"
                onClick={handleSelect}
              >
                Selected
              </button>
            ) : (
              <button
                data-testid="select-button"
                className="btn btn-sm md:btn-md btn-primary"
                onClick={handleSelect}
              >
                Select
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Songs;
