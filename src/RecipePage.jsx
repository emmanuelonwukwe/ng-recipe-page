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
              src={recipe.ImgUrl}
              alt="Favorite recipe image"
              className="w-full h-[40vh] object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline-block mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                />
              </svg>

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
          {/* Repeat similar structure for more meal items */}
        </div>
      </main>
    </>
  );
}

export default RecipePage;
