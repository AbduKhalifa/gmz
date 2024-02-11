



import React, { useRef } from 'react'
import styles from "./auth.module.css";
import LoginComponent from './LoginCompoent/LoginComponent';
import SignUpComponent from './SignUpComponent/SignUpComponent';


export default function Authentication() {

    const loginSection = useRef(null);
    const registerSection = useRef(null);

    function getRegisterPanel() {
        const r_panel = registerSection.current;
        const l_panel = loginSection.current;
        l_panel.style.top = "-100%"
        r_panel.style.top = "80px"
    }
    function getLoginPanel() {
        const r_panel = registerSection.current;
        const l_panel = loginSection.current;
        r_panel.style.top = "calc(100vh + 100px)"
        l_panel.style.top = "80px"
    }

    return (
        <section className={styles.auth + " relative h-screen overflow-hidden"}>
            <div className=" absolute top-0 left-0 w-full h-full z-10">
                <div className={styles.overlay + " absolute top-0 left-0 w-full h-full -z-10 overflow-hidden"}>  </div>
                <div className=' py-20 z-10 relative h-full'>
                    <section
                        className={styles.panel + " absolute top-0 left-[50%] w-full"}
                        ref={loginSection}
                        style={{ top: "80px" }}
                    >
                        <LoginComponent getRegisterPanel={getRegisterPanel} />
                    </section>
                    <section
                        className={styles.panel + " absolute top-0 left-[50%] w-full"}
                        ref={registerSection}
                        style={{ top: "calc(100vh + 100px)" }}
                    >
                        <SignUpComponent getLoginPanel={getLoginPanel} />
                    </section>
                </div>
            </div>
        </section>
    )
}
