import Image from "next/image";
import logo from "../../public/logo.svg";
import styles from "../app/global.module.css";
import hug from '../../public/hug.svg';
import man_laughing from "../../public/Man_laughing.png";

export default function Info() {
    return (
        <div>
            <div className={styles.info_heading}>
                lorem ipsum 
            </div>
            <div className={styles.info_heading}>
                dolor set
            </div>
            <div className="grid grid-cols-3 gap-4 mt-12">
                <div>
                    <div className="text-2xl font-bold">LOREM IPSUM DOLOR</div>
                    <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>   
                    <div className="mt-8">
                        <Image
                            priority
                            src={hug}
                            alt="hug"
                        />
                    </div>
                </div>
                <div>
                    <div className="text-2xl font-bold">DOLOR SIT AMET</div>
                    <div>
                    Dolor adipiscing condimentum aliquam nullam mauris ante ipsum vel nisl. Dignissim molestie amet purus felis egestas amet eget. Viverra malesuada ultricies nunc vel diam posuere mauris sociis maecenas. Aenean dui et nec ultrices libero lacus.
                    </div>
                    <div className="mt-8">
                        <Image
                            priority
                            src={hug}
                            alt="hug"
                        />
                    </div>
                </div>         
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
            <div></div>
            <div>
                <Image
                    src={man_laughing}
                    alt="Man"
                />
            </div>
            <div>
                <div className="text-2xl font-bold">LOREM IPSUM</div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="mt-8">
                    <Image
                        priority
                        src={hug}
                        alt="hug"
                    />
                </div>
            </div>
            </div>
        </div>
    )
  }