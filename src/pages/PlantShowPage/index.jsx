/* eslint-disable react/prop-types */
import Navbar from "shared-components/Navbar";
import { useEffect, useState } from "react";
import * as plantService from "services/plants"
import { useParams } from "react-router-dom";
import LoadingSpinner from "shared-components/LoadingSpinner";
import PlantInfoSection from "./PlantInfoSection";

const PlantShowPage = () => {
  const { plantId } = useParams()
  const [ plant, setPlant ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(true);


  useEffect(() => {
    ( async () => {
      const response = await plantService.getPlantById({ id: plantId});
      setPlant(await response.json());
      setIsLoading(false)
    })()
  }, [plantId]);

return (
  <>
    <Navbar/>
    <div className="flex justify-center min-h-screen bg-emerald-50 font-lato">
       <div className="w-full max-w-5xl px-8 py-24">
          {
            isLoading ? <LoadingSpinner /> : <PlantInfoSection plant={plant}/>
          }
       </div>
    </div>

  </>
)

};
export default PlantShowPage