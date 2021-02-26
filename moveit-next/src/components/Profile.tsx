import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/Profile.module.css"

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img 
                src="https://avatars.githubusercontent.com/u/8503067?s=460&u=1781a04f212ec71e05adce4761a1cee785e3fdde&v=4" 
                alt="Marcelo Peralta"
            />
            
            <div>
                <strong>Marcelo Peralta</strong>

                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}