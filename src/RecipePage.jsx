import PotIcon from "./components/Icons/PotIcon";
import recipe from "./recipe-data";

function RecipePage() {
  return (
    <>
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto text-white text-center">
          <h1 className="text-3xl font-semibold">Afang soup</h1>
          <p className="mt-2">My Favorite Nigerian Recipe</p>
        </div>
      </header>

      <main className="container mx-auto mt-6">
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src={recipe.imgUrl}
              alt="Favorite recipe image"
              className="w-full h-[40vh] object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold mt-2">
              <PotIcon />
              {recipe.name}
            </h2>
            <div className="mt-3 flex flex-wrap gap-2 flex-col md:flex-row">
              <div className="flex-1 mb-4">
                <h1 className="text-slate-600 text-lg bg-slate-200 p-3">
                  Ingredients
                </h1>
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li className="text-left mb-2" key={index}>
                      {index + 1 + ".0 " + ingredient}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <h1 className="text-slate-600 text-lg bg-slate-200 p-3">
                  Instructions
                </h1>
                <ul>
                  {recipe.instructions.map((instruction, index) => (
                    <li className="text-left mb-4" key={index}>
                      {index + 1 + ".0 \f" + instruction}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-2">
            <h1 className="text-slate-600 text-lg bg-slate-200 p-3">
                  Notes
                </h1>
              <ul>
                {recipe.notes.map((note, index) => (
                  <li className="text-left mb-4" key={index}>
                    {index + 1 + ".0 " + note}
                  </li>
                ))}
              </ul>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 mt-3 rounded-lg w-full">
              Order Now
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default RecipePage;
