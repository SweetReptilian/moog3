import React from "react";
import searchStyles from "../styles/SettingStyles.module.scss"
import { BiSearchAlt } from "react-icons/bi"
import { IconContext } from "react-icons";

export  default function SearchBar(props) {
    return (

        <div>
            {/*<div className={searchStyles.searchBox}>*/}
            {/*    <IconContext.Provider*/}
            {/*        value={{ size: "25px", color: "white", className: searchStyles.searchIcon }}*/}
            {/*    >*/}
            {/*        <BiSearchAlt />*/}
            {/*    </IconContext.Provider>*/}

            {/*    <input className={searchStyles.inputBar} type="text" />*/}

            {/*</div>*/}
            <div className={searchStyles.filters}>
                <div onClick={props.handleProjectClick} className={searchStyles.check} >Projects</div>
                <div onClick={props.handleProfileClick} className={searchStyles.check} >Contributors</div>
            </div>
        </div>

    )
}