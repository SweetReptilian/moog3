import formStyles from "../styles/Forms.module.scss"
import {motion} from "framer-motion"
import Link from "next/link"
import {Checkbox, Spacer} from "@nextui-org/react";
import React, {useState} from 'react';
import {
    arrow2,
    item,
    item2,
    arrow,
    checkBox,
    checkBox2,
    button,
    container,
    item3,
    party
} from "../animations/applyFormAnimations"

export function ApplyForm() {

    const [first, setFirst] = useState(true);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const [fourth, setFourth] = useState(false);

    const First =
        <div className={formStyles.backgroundImg}>
            <div className={formStyles.applyTitle}> APPLY FORM</div>
            <div className={formStyles.container}>
                <motion.div initial="hidden" animate="visible" variants={item}>
                    <div className={formStyles.welcomeText}>We are looking for a blockchain dev to build a SC for a NFT
                        minter page. This work needs to be done in one week.
                    </div>

                </motion.div>

                <motion.div initial="hidden" animate="visible" variants={item}>
                    <div className={formStyles.setText}>(Paid Contribution)</div>
                </motion.div>

            </div>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                <div className={formStyles.links}>
                    <a onClick={() => setContent(3)}><i className={formStyles.arrow}></i></a>
                </div>

            </motion.div>
        </div>;
    const Second =
        <div className={formStyles.backgroundImg}>
            <div className={formStyles.container}>
                <motion.div initial="hidden" animate="visible" variants={item}>
                    <div className={formStyles.setText}>Why are you the perfect contributor?</div>
                </motion.div>


                <motion.div initial="hidden" animate="visible" exit="exit" variants={item2}>
                    <textarea placeholder="I've been creating couple of Smart Contracts for different bussines..."
                              className={formStyles.textArea}></textarea>
                </motion.div>
                <motion.div initial="hidden" animate="visible" exit="exit" variants={button}>
                    <div>
                        <button className={formStyles.styleButton}>Attach files</button>

                    </div>

                </motion.div>
            </div>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                <div className={formStyles.links}>
                    <a onClick={() => setContent(4)}><i className={formStyles.arrow}></i></a>
                </div>

            </motion.div>
        </div>;
    const Third =
        <div className={formStyles.backgroundImg}>
            <div className={formStyles.container}>
                <motion.div initial="hidden" animate="visible" variants={item}>
                    <div className={formStyles.welcomeText}></div>

                </motion.div>

                <motion.div initial="hidden" animate="visible" variants={item}>
                    <div className={formStyles.setText}>We require the following...</div>
                </motion.div>

                <motion.div initial="hidden" animate="visible" variants={checkBox2}>
                    <div className={formStyles.setText}> Please, mark those who fit perfect with you</div>
                </motion.div>

                <Spacer/>
                <motion.div className="loader">
                    <motion.div
                        variants={container}

                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className="loader-inner"
                    >
                        <motion.div variants={checkBox} id="check-1">
                            <Checkbox color="primary" defaultSelected={false}>
                                <div className={formStyles.checkLetters}>Availability (5 hs/ day one week)</div>
                            </Checkbox>
                        </motion.div>
                        <Spacer/>
                        <motion.div variants={checkBox} id="check-2">
                            <Checkbox color="secondary" defaultSelected={false}>
                                <div className={formStyles.checkLetters}>Previous experience - attach in next page</div>
                            </Checkbox>
                        </motion.div>
                        <Spacer/>
                        <motion.div variants={checkBox} id="check-3">
                            <Checkbox color="success" defaultSelected={false}>
                                <div className={formStyles.checkLetters}>Requirement #3</div>
                            </Checkbox>
                        </motion.div>
                        <Spacer/>
                        <motion.div variants={checkBox} id="check-3">
                            <Checkbox color="success" defaultSelected={false}>
                                <div className={formStyles.checkLetters}>Requirement #4</div>
                            </Checkbox>
                        </motion.div>
                        <Spacer/>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={arrow}>
                <div className={formStyles.links}>
                    <a onClick={() => setContent(2)}><i className={formStyles.arrow}></i></a>
                </div>

            </motion.div>
        </div>;
    const Fourth =
        <div className={formStyles.backgroundImg}>
            <div className={formStyles.container}>

                <motion.div initial="hidden" animate="visible" variants={item2}>
                    <div className={formStyles.welcomeText}>You've applied!</div>

                </motion.div>
                <motion.div initial="hidden" animate="visible" exit="exit" variants={button}>
                    <div>
                        <Link href="/home">
                            <button className={formStyles.styleButton}>Close</button>

                        </Link>
                    </div>

                </motion.div>
            </div>
        </div>;

    function setContent(id) {
        setFirst(id === 1);
        setSecond(id === 2);
        setThird(id === 3);
        setFourth(id === 4);
    }

    return (

        <div className={formStyles.backgroundImg}>
            <div className={formStyles.setProfileStepsDiv}>
                {first && <div>{First}</div>}
                {second && <div>{Second}</div>}
                {third && <div>{Third}</div>}
                {fourth && <div>{Fourth}</div>}
            </div>


        </div>


    )

}

export default ApplyForm