import formStyles from "../styles/Forms.module.scss"
import { motion } from "framer-motion"
import { Checkbox, Spacer } from "@nextui-org/react";
import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import { IconContext } from "react-icons/lib";
import { AiFillGithub } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import { FiTwitter } from "react-icons/fi";
import { TbBrandDiscord } from "react-icons/tb";


export function LogIn() {


    return (

        <div className={formStyles.backgroundImg}>
            <Sidebar />
            <div className={formStyles.mainContainer}>
                <div className={formStyles.container2}>
                    <div className={formStyles.setText}>Name</div>
                    <input type="text" placeholder="Moogle1" className={formStyles.inputName}></input>
                </div>
                <div className={formStyles.container2}>
                    <div className={formStyles.setText}>PFP here</div>
                    <img className={formStyles.pfp} src="./mooglesnft2.png" draggable={false} />

                </div>
                <div className={formStyles.container2}>
                    <div className={formStyles.setText}>Banner here</div>
                    <img className={formStyles.banner} src="./logo3.png" draggable={false} />
                </div>
                <div className={formStyles.container2}>
                    <div className={formStyles.setText}>Something about you</div>
                    <textarea placeholder="I love learning about Web3..." className={formStyles.textArea}></textarea>
                </div>

                <div className={formStyles.containerCheck}>
                    <div className={formStyles.setText}>Your skills</div>
                    <Spacer />
                    <Checkbox color="primary" defaultSelected={false}>
                        <div className={formStyles.checkLetters} > Development</div>
                    </Checkbox>
                    <Spacer />
                    <Checkbox color="secondary" defaultSelected={false}>
                        <div className={formStyles.checkLetters} >Design</div>
                    </Checkbox>
                    <Spacer />
                    <Checkbox color="success" defaultSelected={false}>
                        <div className={formStyles.checkLetters} >Marketing Digital</div>
                    </Checkbox>
                    <Spacer />
                    <Checkbox color="warning" defaultSelected={false}>
                        <div className={formStyles.checkLetters} >Project Managment</div>
                    </Checkbox>
                    <Spacer />
                    <Checkbox color="error" defaultSelected={false}>
                        <div className={formStyles.checkLetters} > Investment</div>
                    </Checkbox>
                    <Spacer />
                    <Checkbox color="gradient" defaultSelected={false}>
                        <div className={formStyles.checkLetters} >Others</div>
                    </Checkbox>
                    <Spacer />
                </div>
                <div className={formStyles.containerCheck}>
                    <div className={formStyles.setText}>Your interests</div>
                    <Spacer />
                    <Checkbox color="primary" defaultSelected={false}>
                        <div className={formStyles.checkLetters} >NFTs</div>
                    </Checkbox>
                    <Spacer />
                    <Checkbox color="secondary" defaultSelected={false}>
                        <div className={formStyles.checkLetters} >DeFis</div>
                    </Checkbox>
                    <Spacer />
                    <Checkbox color="success" defaultSelected={false}>
                        <div className={formStyles.checkLetters} >DAOs</div>
                    </Checkbox>
                    <Spacer />
                    <Checkbox color="warning" defaultSelected={false}>
                        <div className={formStyles.checkLetters} >Cryptos</div>
                    </Checkbox>
                    <Spacer />
                    <Checkbox color="error" defaultSelected={false}>
                        <div className={formStyles.checkLetters} >DIDs</div>
                    </Checkbox>
                    <Spacer />
                    <Checkbox color="gradient" defaultSelected={false}>
                        <div className={formStyles.checkLetters} >Others</div>
                    </Checkbox>
                    <Spacer />
                </div>
                <div>
                    <div className={formStyles.setText}>Your links</div>
                </div>
                <div className={formStyles.linksBox}>
                    <IconContext.Provider value={{ size: "35px", color: "white" }}>
                        <div ><AiFillGithub /></div><input type="text" placeholder="moogUser1" className={formStyles.inputName}></input>
                    </IconContext.Provider>
                </div>
                <div className={formStyles.linksBox}>
                    <IconContext.Provider value={{ size: "35px", color: "white" }}>
                        <div ><MdComputer /></div><input type="text" placeholder="www.moog3.com" className={formStyles.inputName}></input>
                    </IconContext.Provider>
                </div>
                <div className={formStyles.linksBox}>
                    <IconContext.Provider value={{ size: "35px", color: "white" }}>
                        <div ><FiTwitter /></div><input type="text" placeholder="@mymoog" className={formStyles.inputName}></input>
                    </IconContext.Provider>
                </div>
                <div className={formStyles.linksBox}>
                    <IconContext.Provider value={{ size: "35px", color: "white" }}>
                        <div ><TbBrandDiscord /></div><input type="text" placeholder="#serverlink" className={formStyles.inputName}></input>
                    </IconContext.Provider>
                </div>


                <button className={formStyles.styleButton}>Save</button>
                {/* for projects also we can add an edit function in their profiles or in the dashboard, when on right click they can either edit it or eraser */}

            </div>

        </div>



    )

}
export default LogIn