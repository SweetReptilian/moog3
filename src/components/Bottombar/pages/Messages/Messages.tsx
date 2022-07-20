import "./Messages.css"
import "../Messages/styles.css"

const Messages = () => {
    return (
        <>
            <main className="chatBackground">
                <div className="chatCard">
                    <div id="container">
                        <aside className="asideX">
                            <header>
                                <input type="text" placeholder="search" />
                            </header>
                            <ul>
                                <li>
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt="" />
                                    <div>
                                        <h2>Prénom Nom</h2>
                                        <p>0x420...314</p>

                                    </div>
                                </li>

                                <li>
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_05.jpg" alt="" />
                                    <div>
                                        <h2>Prénom Nom</h2>
                                        <p>0x41...314</p>

                                    </div>
                                </li>
                                <li>
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_06.jpg" alt="" />
                                    <div>
                                        <h2>Prénom Nom</h2>
                                        <p>0x41...314</p>

                                    </div>
                                </li>
                                <li>
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_07.jpg" alt="" />
                                    <div>
                                        <h2>Prénom Nom</h2>
                                        <p>0x41...314</p>

                                    </div>
                                </li>
                                <li>
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_08.jpg" alt="" />
                                    <div>
                                        <h2>Prénom Nom</h2>
                                        <p>0x41...314</p>

                                    </div>
                                </li>
                                <li>
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_09.jpg" alt="" />
                                    <div>
                                        <h2>Prénom Nom</h2>
                                        <p>0x41...314</p>

                                    </div>
                                </li>

                            </ul>
                        </aside>
                        <main>
                            <header>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt="" />
                                <div>
                                    <h2>Chat with Vincent Porter</h2>
                                    <h3>0x420...314</h3>
                                </div>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png" alt="" />
                            </header>
                            <ul id="chat">
                                <li className="you">
                                    <div className="entete">

                                        <h2>Vincent</h2>
                                        <h3>0x420...314</h3>
                                    </div>
                                    <div className="triangle"></div>
                                    <div className="message">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                    </div>
                                </li>
                                <li className="me">
                                    <div className="entete">
                                        <h3>0x420...314</h3>
                                        <h2>Vincent</h2>
                                    </div>
                                    <div className="triangle"></div>
                                    <div className="message">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                    </div>
                                </li>
                                <li className="me">
                                    <div className="entete">
                                        <h3>0x420...314</h3>
                                        <h2>Vincent</h2>
                                    </div>
                                    <div className="triangle"></div>
                                    <div className="message">
                                        OK
                                    </div>
                                </li>
                                <li className="you">
                                    <div className="entete">

                                        <h2>Vincent</h2>
                                        <h3>0x420...314</h3>
                                    </div>
                                    <div className="triangle"></div>
                                    <div className="message">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                    </div>
                                </li>
                                <li className="me">
                                    <div className="entete">
                                        <h3>0x420...314</h3>
                                        <h2>Vincent</h2>
                                    </div>
                                    <div className="triangle"></div>
                                    <div className="message">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                    </div>
                                </li>
                                <li className="me">
                                    <div className="entete">
                                        <h3>0x420...314</h3>
                                        <h2>Vincent</h2>
                                    </div>
                                    <div className="triangle"></div>
                                    <div className="message">
                                        OK
                                    </div>
                                </li>
                            </ul>
                            <footer>
                                <textarea placeholder="Type your message"></textarea>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png" alt="" />
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png" alt="" />
                                <a href="#">Send</a>
                            </footer>
                        </main>
                    </div>

                </div>
            </main>
        </>
    );
};
export default Messages;