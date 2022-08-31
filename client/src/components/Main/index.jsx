import { Box, Image } from "@chakra-ui/react";
import Gym from "./Gym";
import styles from "./styles.module.css";

const Main = () => {
    const handleLogout=()=>{
        localStorage.removeItem("token");
        window.location.reload();
    }

    return(
        <div className={styles.main_container}>
        <nav className={styles.navbar}>
        <Image
         borderRadius='6rem'
         m={'2rem'}
         boxSize='60px'
         src='https://hellopretty.co.za/sites/hellopretty.co.za/files/styles/product_listing_450/public/products/bnb25.jpg?itok=VqFXCfAJ'
         alt='nav logo'
         />
            <h1>Gyms</h1>
            <button className={styles.white_btn} onClick={handleLogout}>
                Logout
            </button>
        </nav>
        <Box boxSize='full'>
        <Image 
        width={'100%'}
        h="25rem"
        mb={'-3rem'}
        src='https://www.teahub.io/photos/full/276-2763842_cardio-workout-full-hd-gym-workout-hd.jpg' alt='start img' />
        </Box>
       <Gym/>
    </div>
    )
}

export default Main;