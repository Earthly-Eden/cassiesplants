import Navbar from "shared-components/Navbar";
import RedirectToSignInIfSignedOut from "shared-components/RedirectToSignInIfSignedOut";
import { useEffect, useState } from "react";
import * as plantService from "services/plants";
import PlantItem from "./PlantItem";


const PlantListPage = () => {
  const [ plants, setPlants ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await plantService.getPlants();
      const data = await response.json();
      setPlants(data);
      setIsLoading(false);
    })()

  }, [])


  return (
      <RedirectToSignInIfSignedOut>
        <Navbar />
        <div className="bg-green-50 min-h-screen">
        {
          isLoading ? 
          <div className="flex justify-center pt-80">
            <i className="text-3xl text-emerald-800 fa-solid fa-spinner animate-spin"></i>


          </div> : <div className="flex justify-center py-24">
            <div className="w-full max-w-5xl">
              <div className="text-3xl font-playfair text-emerald-500">
                Plants in Stock
              </div>
              <div className="flex flex-wrap justify-center ">
               {
                // Not using the idx for the key because the backend is calling the api twice and our indices are changing causing a crash to occur on our plantItem component.
                plants.map((plant, idx) => <PlantItem key={plant.name} plant={plant}/>)
               }
              </div>
            </div>
          </div>
        }

          </div>
      </RedirectToSignInIfSignedOut>
  );
};

export default PlantListPage;
