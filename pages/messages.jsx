import Sidebar from "../components/Sidebar";
import styles from "../styles/Messages.module.scss"


const Messages = () => {
    return (

        <div className={styles.mainBox}>
            <Sidebar />
            <div className={styles.glassBox}>
                <div className={styles.leftAndRight}>
                    <div className={styles.leftSideObjects}>
                        <div className={styles.userData}>
                            <img src="./logo512.png" className={styles.userPic} />
                            <div className={styles.userName}> UserName</div>
                            <div className={styles.options}>
                                <div className={styles.newMessage}></div>
                            </div>
                        </div>
                        <div className={styles.contactsData}>
                            <div className={styles.contactsDiv}>
                                <div className={styles.userData}>
                                    <div className={styles.messageNotification}></div>
                                    <img src="./logo512.png" className={styles.userPic} />
                                    <div className={styles.userName}> Other User</div>
                                </div>
                            </div>
                            <div className={styles.contactsDiv}>
                                <div className={styles.userData}>
                                    <div className={styles.messageNotification}></div>
                                    <img src="./logo512.png" className={styles.userPic} />
                                    <div className={styles.userName}> Other User</div>
                                </div>
                            </div>
                            <div className={styles.contactsDiv}>
                                <div className={styles.userData}>
                                    <div className={styles.messageNotification}></div>
                                    <img src="./logo512.png" className={styles.userPic} />
                                    <div className={styles.userName}> Other User</div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className={styles.rightSideObjects}>
                        <div className={styles.messageUserData}>
                            <img className={styles.userPic} />
                            <div className={styles.userName}> Other User</div>
                            <div className={styles.contactsData}>Information</div>
                        </div>
                        <div className={styles.messageData}>
                            <div className={styles.messagingBox}>
                                <div className={styles.myMessage}>
                                    Hey dude!
                                </div>
                                <div className={styles.theirMessage}>
                                    Lol
                                </div>
                            </div>
                            <div className={styles.writingBox}>
                                <div className={styles.files}></div>
                                <div className={styles.messageInput}></div>
                                <div className={styles.emojisIcon}></div>
                                <div className={styles.sendMessage}></div>
                            </div>



                        </div>
                    </div>
                </div>

            </div>
        </div>


    );
};
export default Messages;