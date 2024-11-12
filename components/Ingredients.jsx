import Subheader from "./Subheader";
function Ingredients() {
  return (
    <div className="">
      <Subheader label="Ingredients" />

      <ul className="mt-6 list-disc list-outside pl-4">
        <li className="mt-6 custom-bullet">2-3 large eggs</li>
        <li className="mt-6 custom-bullet">Salt, to taste</li>
        <li className="mt-6 custom-bullet">Pepper, to taste</li>
        <li className="mt-6 custom-bullet">1 tablespoon of butter or oil</li>
        <li className="mt-6 custom-bullet">
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </li>
      </ul>
    </div>
  );
}
export default Ingredients;
