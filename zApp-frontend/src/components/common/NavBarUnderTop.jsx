import React from 'react';
import { icons } from "../utils/IconsLibrary";
import Styles from "./NavBarTop.module.css";

function NavBarUnderTop() {
  const downArrowLightIcon = icons.downArrowBlack.url;
  return (

    <div className={Styles.NavBarUnderTop}>
        <ul className={Styles.NavBarUnderTopList}>
            <li className={Styles.listItemsNav}>At the Station <img src={downArrowLightIcon} alt="Down Arrow" /></li>
            <li className={Styles.listItemsNav}>Power <img src={downArrowLightIcon} alt="Down Arrow" /></li>
            <li className={Styles.listItemsNav}>Rewards and promotions <img src={downArrowLightIcon} alt="Down Arrow" /></li>
            <li className={Styles.listItemsNav}>Locations <img src={downArrowLightIcon} alt="Down Arrow" /></li>
        </ul>
    </div>
  )
}

export default NavBarUnderTop