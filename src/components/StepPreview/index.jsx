import styles from "./styles.module.scss";
import Image from "next/image";
function StepPreview() {
    return (
        <>
            <div className={styles.step_preview_container}>
                <div className={styles.step_preview_1}>
                    <div className={styles.step_preview_number}>
                        01.
                    </div>
                    <div className={styles.step_preview_title}>
                        Camera Single
                    </div>
                    <Image
                    src={"/images/camera-single/camera-single.jpeg"}
                    objectFit="cover"
                    objectPosition="center"
                    alt="logo"
                    layout='responsive'
                    width={300}
                    height={200}
                    className={styles.image_logo_calculator}
                    />
                    <Image
                    src={"/images/camera-single/camera-single-2.jpeg"}
                    objectFit="cover"
                    objectPosition="center"
                    alt="logo"
                    layout='responsive'
                    width={300}
                    height={200}
                    className={styles.image_logo_calculator}
                    />
                </div>
                <div className={styles.step_preview_2}>
                    <div className={styles.step_preview_number}>
                        02.
                    </div>
                    <div className={styles.step_preview_title}>
                        Camera Dubla
                    </div>
                    <Image
                    src={"/images/camera-dubla/camera-dubla.jpeg"}
                    objectFit="cover"
                    objectPosition="center"
                    alt="logo"
                    layout='responsive'
                    width={300}
                    height={200}
                    className={styles.image_logo_calculator}
                    />
                    <Image
                    src={"/images/camera-dubla/camera-dubla-1.jpeg"}
                    objectFit="cover"
                    objectPosition="center"
                    alt="logo"
                    layout='responsive'
                    width={300}
                    height={200}
                    className={styles.image_logo_calculator}
                    />
                </div>
                <div className={styles.step_preview_3}>
                    <div className={styles.step_preview_number}>
                        03.
                    </div>
                    <div className={styles.step_preview_title}>
                        Camera Tripla
                    </div>
                    <Image
                    src={"/images/camera-dubla/camera-dubla.jpeg"}
                    objectFit="cover"
                    objectPosition="center"
                    alt="camera-dubla-1"
                    layout='responsive'
                    width={300}
                    height={200}
                    className={styles.image_logo_calculator}
                    />
                    <Image
                    src={"/images/camera-dubla/camera-dubla-1.jpeg"}
                    objectFit="cover"
                    objectPosition="center"
                    alt="camera-dubla-1"
                    layout='responsive'
                    width={300}
                    height={200}
                    className={styles.image_logo_calculator}
                    />
                </div>
                <div className={styles.step_preview_4}>
                    <div className={styles.step_preview_number}>
                        04.
                    </div>
                    <div className={styles.step_preview_title}>
                        Apartament Superior
                    </div>
                    <Image
                    src={"/images/apartament-superior/apartament-superior-dormitor2.jpeg"}
                    objectFit="cover"
                    objectPosition="center"
                    alt="apartament-superior-sufragerie-2"
                    layout='responsive'
                    width={300}
                    height={200}
                    className={styles.image_logo_calculator}
                    />
                    <Image
                    src={"/images/apartament-superior/apartament-superior-sufragerie-2.jpeg"}
                    objectFit="cover"
                    objectPosition="center"
                    alt="apartament-superior-sufragerie-2"
                    layout='responsive'
                    width={300}
                    height={200}
                    className={styles.image_logo_calculator}
                    />
                </div>
            </div>
        </>
    );
};

export default StepPreview;