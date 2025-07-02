import Styles from "./SearchResult.module.css";
import filterIcon from "../../images/filterIcons.png";
import showResultsIcon from "../../images/showResultsIcons.png";
import XIconForShowResultsModal from "../../images/XIconForShowResultsModal.png";
import { icons } from "../utils/IconsLibrary";

const closeTagIcon = icons.closeTagIcon.url;

const SearchResult = ({
  stations,
  loading,
  searchTerm,
  showFilterOptions,
  setShowFilterOptions,
  selectedFilters,
  handleFilterChange,
  onClose,
}) => {
  const downArrowLightIcon = icons.downArrowBlack.url;

  return (
    <div className={Styles.searchResultsContainer}>
      <div className={Styles.ResultModalTopNavContainer}>
        <div>
          <img
            src={filterIcon}
            className={Styles.filterIcon}
            alt="Filter"
            onClick={() => setShowFilterOptions(!showFilterOptions)}
          />
          <img
            src={showResultsIcon}
            className={Styles.showResultsIcon}
            alt="Show Results"
          />
        </div>
        <img
          src={XIconForShowResultsModal}
          className={Styles.XIconForShowResultsModal}
          alt="Close"
          onClick={onClose}
        />
      </div>

      {/* FILTER OPTIONS */}
      {showFilterOptions && (
        <div className={Styles.filterOptionsDropdown}>
          <h3>Filter by Service:</h3>
          {["Carwash", "Coffee", "LPG"].map((filter) => (
            <label key={filter}>
              <input
                type="checkbox"
                value={filter}
                checked={selectedFilters.includes(filter)}
                onChange={() => handleFilterChange(filter)}
              />
              {filter}
            </label>
          ))}
        </div>
      )}

      {/* SEARCH RESULTS */}
      {loading ? (
        <p>Loading results...</p>
      ) : stations.length > 0 ? (
        stations.map((station) => (
          <div
            key={station.id || `${station.name}-${station.location?.latitude}`}
            className={Styles.stationCard}
          >
            <h4 className={Styles.stationNameH4}>{station.name}</h4>
            {station.location && (
              <p className={Styles.stationLocationP}>{station.location.city}</p>
            )}

            {/* SERVICE TAGS */}
            <div className={Styles.stationServicesDiv}>
              {station.services?.map((service) => {
                const normalizedService = service
                  .replace(/[\s_]/g, "")
                  .toLowerCase();

                // Check if any selected filters match this normalized service
                const isFilterActive = selectedFilters.some(
                  (filter) =>
                    filter.replace(/[\s_]/g, "").toLowerCase() ===
                    normalizedService
                );

                // Only render the tag if a matching filter is active
                return (
                  isFilterActive && (
                    <div key={service} className={Styles.serviceTagContainer}>
                      <p className={Styles.serviceTagName}>
                        {service.replace(/([A-Z])/g, " $1").trim()}
                        <img
                          src={closeTagIcon}
                          alt={`Remove ${service} filter`}
                          onClick={() => handleFilterChange(service)}
                        />
                      </p>
                    </div>
                  )
                );
              })}
            </div>

            <p>
              <span className={Styles.stationOpenNowSpan}>Open Now: </span>
              {station.is_open_now ? (
                <span>
                  Yes{" "}
                  <img
                    src={downArrowLightIcon}
                    className={Styles.downArrowLightIcon}
                    alt="Open Now"
                  />
                </span>
              ) : (
                <span>No</span>
              )}
            </p>
          </div>
        ))
      ) : (
        searchTerm && <p>No Z Station Services found for {searchTerm}.</p>
      )}
    </div>
  );
};

export default SearchResult;
