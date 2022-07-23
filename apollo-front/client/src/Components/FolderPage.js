import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

// Actions
import { listFolderDetails } from "../actions/folderActions";

// CSS
import "./Home/home.css";
import "./Folders/folder.css";

// Parts
import Spinning from "./Extras/Spinning";
import FolderBoxes from "./Folders/FolderBoxes";
import FoldersSeries from "./Folders/FoldersSeries";
import TopFolder from "./Folders/TopFolder";
import NotFound from "./Extras/NotFound";
import FolderBoxesCustomized from "./Folders/FolderBoxesCustomized";
import FolderMoreBoxesCustomized from "./Folders/FolderMoreBoxesCustomized";
import ContactUsBar from "./Layout/ContactUsBar";
import FirstBoxes from "./CatsAndProds/FirstBoxes";
import SecondSection from "./CatsAndProds/SecondSection";
import FolderBoxesLinks from "./Folders/FolderBoxesLinks";
import FolderBoxesThree from "./Folders/FolderBoxesThree";
import FolderBoxesNoLink from "./Folders/FolderBoxesNoLink";
import ProductsList from "./CatsAndProds/ProductsList";

const FolderPage = () => {
  const dispatch = useDispatch();
  const { fmlink } = useParams();
  const url = useLocation();

  const folderDetails = useSelector((state) => state.folderDetails);
  const { loading, error, folder } = folderDetails;

  useEffect(() => {
    dispatch(listFolderDetails(fmlink));
  }, [dispatch, fmlink]);

  return loading ? (
    <Spinning />
  ) : error ? (
    <section>
      <NotFound />
    </section>
  ) : (
    <div className="all-body folder-page">
      <TopFolder
        title={folder.fmtitle}
        content={folder.fmcontent}
        featuredimg={
          folder.featuredimg === "" || folder.featuredimg === undefined
            ? "uploads/big-placeholder.jpg"
            : folder.featuredimg
        }
        subtitle={folder.subtitle ? folder.subtitle : ""}
      />

      {!!folder.id && (
        <ProductsList
          title={folder.fmtitle}
          title2={folder.subtitle}
          pathname={url.pathname}
          forApi={{
            id3: folder.id,
            title: folder.fmtitle,
          }}
        />
      )}

      {folder?.extraboxes?.length > 0 && (
        <Fragment>
          {folder.fmtitle !== "Embedded Accessories Products" &&
           folder.fmtitle !== "Customized Solutions" && (
            <FoldersSeries
              folderTitle={folder.title}
              folderLink={folder.fmlink}
            />
          )}
          {folder.fmtitle === "Modern optical Bonding technology: VacuBond®" ? (
            <Fragment>
              <FolderBoxes
                boxone={folder?.extraboxes[0]}
                boxtwo={folder?.extraboxes[1]}
              />

              {folder?.extraboxes[2] && (
                <FirstBoxes boxone={folder?.extraboxes[2]} />
              )}
              {folder?.extraboxes[3] && (
                <SecondSection boxtwo={folder?.extraboxes[3]} />
              )}

              {folder?.extraboxes[4] && (
                <FirstBoxes boxone={folder?.extraboxes[4]} />
              )}
              {folder?.extraboxes[5] && (
                <SecondSection boxtwo={folder?.extraboxes[5]} />
              )}
              {folder?.extraboxes[6] && (
                <FirstBoxes boxone={folder?.extraboxes[6]} />
              )}
              {folder?.extraboxes[7] && (
                <SecondSection boxtwo={folder?.extraboxes[7]} />
              )}
            </Fragment>
          ) : folder.fmtitle === "Customized Solutions" ? (
            <Fragment>
              <FolderBoxesCustomized boxes={folder?.extraboxes} />
              <FolderMoreBoxesCustomized boxes={folder?.extraboxes} />

              {folder?.extraboxes[6] && (
                <FirstBoxes boxone={folder?.extraboxes[6]} />
              )}
              {folder?.extraboxes[7] && (
                <SecondSection boxtwo={folder?.extraboxes[7]} />
              )}
            </Fragment>
          ) : folder.fmtitle === "Embedded" ? (
            <Fragment>
              <FolderBoxesLinks boxes={folder?.extraboxes} />
            </Fragment>
          ) : folder.fmtitle === "Embedded Accessories Products" ? (
            <Fragment>
              <FolderBoxesThree boxes={folder?.extraboxes} />
            </Fragment>
          ) : folder.fmtitle === "TFT-Accessories Products" ? (
            <Fragment>
              <FolderBoxesNoLink boxes={folder?.extraboxes} />
            </Fragment>
          ) : (
            <Fragment>
              {folder?.extraboxes[0] && (
                <FirstBoxes boxone={folder?.extraboxes[0]} />
              )}
              {folder?.extraboxes[1] && (
                <SecondSection boxtwo={folder?.extraboxes[1]} />
              )}
              {folder?.extraboxes[2] && (
                <FirstBoxes boxone={folder?.extraboxes[2]} />
              )}
              {folder?.extraboxes[3] && (
                <SecondSection boxtwo={folder?.extraboxes[3]} />
              )}
              {folder?.extraboxes[4] && (
                <FirstBoxes boxone={folder?.extraboxes[4]} />
              )}
              {folder?.extraboxes[5] && (
                <SecondSection boxtwo={folder?.extraboxes[5]} />
              )}
              {folder?.extraboxes[6] && (
                <FirstBoxes boxone={folder?.extraboxes[6]} />
              )}
              {folder?.extraboxes[7] && (
                <SecondSection boxtwo={folder?.extraboxes[7]} />
              )}
            </Fragment>
          )}
        </Fragment>
      )}

      <ContactUsBar />
    </div>
  );
};

export default FolderPage;
