import Image from "next/image";
import logo from "../../public/logo.svg";
import styles from "../app/global.module.css";

export default function AboutUs() {
    return (
      <div className={styles.about_us}>
        <div className={styles.about_us_main + " grid grid-cols-2 gap-4 mt-12"}>
            <div>
                <div className={styles.about_us_left}>
                    ABOUT US
                </div>
                <div className="my-3">
                    Lorem
                </div>
                <div className="mb-3">
                    Lorem
                </div>
            </div>
        
            <div className={styles.about_us_right}>
                Dolor adipiscing condimentum aliquam nullam mauris ante ipsum vel nisl. Dignissim molestie amet purus felis egestas amet eget. Viverra malesuada ultricies nunc vel diam posuere mauris sociis maecenas. Aenean dui et nec ultrices libero lacus.
            </div>
            </div>
      </div>
    )
  }