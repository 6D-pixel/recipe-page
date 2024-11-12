import Subheaer from "./Subheader";

function Nutrition() {
  return (
    <div className="pb-[2.75rem] ">
      <Subheaer label="Nutrition" />
      <p className="mt-8">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table className="table-auto w-full text-left mt-8 ">
        <tbody>
          <tr className="border-b-2 mt-2">
            <td className="pl-8 py-4"> Calories</td>
            <td className="text-[#844732] font-semibold">277kcal</td>
          </tr>
          <tr className="border-b-2">
            <td className="pl-8 py-4">Carbs</td>
            <td className="text-[#844732] font-semibold">0g</td>
          </tr>
          <tr className="border-b-2">
            <td className="pl-8 py-4">Protein</td>
            <td className="text-[#844732] font-semibold">20g</td>
          </tr>
          <tr className="">
            <td className="pl-8 py-4">Fat</td>
            <td className="text-[#844732] font-semibold">22g</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Nutrition;
