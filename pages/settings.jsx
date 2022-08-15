import NavbarSettings from "../components/NavbarSettings"
import formStyles from "../styles/Forms.module.scss"
import { motion } from "framer-motion"
import Link from "next/link"
import { Checkbox, Spacer } from "@nextui-org/react";
import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";


export function LogIn() {


    return (



        <div className={formStyles.backgroundImg}>
            <Sidebar />
            <div className={formStyles.titleSet}>
                <div className={formStyles.settingsTitle}>Settings</div>
            </div>
            <div className={formStyles.secondContainer}>

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

                <button className={formStyles.styleButton}>Save</button>
            </div>

        </div>



    )

}
export default LogIn