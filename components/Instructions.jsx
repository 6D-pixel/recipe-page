import Subheader from "./Subheader"
function Instructions() {
  return (
    <div>
          <Subheader label="Instructions" />
          <ol className="list-decimal mt-4  pt-6 pl-4 custom-marker">
            <li className="pl-5">
              <span className="text-[#5E5453] font-semibold">
                Beat the eggs:
              </span>{" "}
              In a bowl, beat the eggs with a pinch of salt and pepper until
              they are well mixed. You can add a tablespoon of water or milk for
              a fluffier texture.
            </li>
            <li className="mt-4 pl-5">
              <span className="text-[#5E5453] font-semibold">
                Heat the pan:
              </span>{" "}
              Place a non-stick frying pan over medium heat and add butter or
              oil.
            </li>
            <li className="mt-4 pl-5">
              <span className="text-[#5E5453] font-semibold">
                Cook the omelette:
              </span>{" "}
              Once the butter is melted and bubbling, pour in the eggs. Tilt the
              pan to ensure the eggs evenly coat the surface.
            </li>
            <li className="mt-4 pl-5">
              <span className="text-[#5E5453] font-semibold">
                Add fillings (optional):
              </span>{" "}
              When the eggs begin to set at the edges but are still slightly
              runny in the middle, sprinkle your chosen fillings over one half
              of the omelette.
            </li>
            <li className="mt-4 pl-5">
              <span className="text-[#5E5453] font-semibold">
                Fold and serve:
              </span>{" "}
              As the omelette continues to cook, carefully lift one edge and
              fold it over the fillings. Let it cook for another minute, then
              slide it onto a plate.
            </li>
            <li className="mt-4 pl-5">
              <span className="text-[#5E5453] font-semibold">Enjoy:</span> Serve
              hot, with additional salt and pepper if needed.
            </li>
          </ol>
        </div>
  )
}
export default Instructions