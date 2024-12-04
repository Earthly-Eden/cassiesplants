import Navbar from "shared-components/Navbar";
import RedirectToSignInIfSignedOut from "shared-components/RedirectToSignInIfSignedOut";

const PlantListPage = () => {
  return (
    <div>
      <RedirectToSignInIfSignedOut>
        <Navbar />
      </RedirectToSignInIfSignedOut>
    </div>
  );
};

export default PlantListPage;
