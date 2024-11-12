function SimpleOmelete() {
  return (
    <div className="">
          <h1
            className={` mt-[2.5rem] font-semibold text-4xl font-young_serif text-black`}
          >
            Simple Omelette Recipe
          </h1>
          <p className="mt-[1.75rem]">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          <div className="mt-[2.06rem] p-[1.75rem] bg-[#FFF7FC] rounded-xl">
            <h2 className="text-[#6C2F4A] font-semibold text-xl">
              Preparation time
            </h2>
            <ul className="mt-6 list-none">
              <li className="mt-6 custom-bullet">
                <span className="text-[#5E5453] font-semibold">Total:</span>{" "}
                Approximately 10 minutes
              </li>
              <li className="mt-6 custom-bullet">
                <span className="text-[#5E5453] font-semibold">
                  Preparation:
                </span>{" "}
                5 minutes
              </li>
              <li className="mt-6 custom-bullet">
                <span className="text-[#5E5453] font-semibold">Cooking:</span> 5
                minutes
              </li>
            </ul>
          </div>
        </div>
  )
}
export default SimpleOmelete