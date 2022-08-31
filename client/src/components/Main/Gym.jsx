import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {
  Box,
  Grid,
  Heading,
  Text,
  Select,
  Stack,
  Divider,
  Input,
  InputLeftElement,
  InputGroup,
  Icon,
  InputRightElement,
  Button,
  Tag,
} from "@chakra-ui/react";
import {ExternalLinkIcon, SearchIcon, StarIcon} from "@chakra-ui/icons";
import {  useParams } from "react-router-dom";

const Gym = () => {
  const [data, setData] = useState([]);
   const { str } = useParams();
 

  useEffect(() => {
    const getData = async () => {
      let res = await axios.get(
        `https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231`
      );
      setData(res.data.data);
    };
    getData();
  }, []);
console.log(data)
  const handleFilter = async (val) => {
    
      if (val === "new delhi") {
      let d = data.filter((a) => (a.city === "New Delhi" ? a : ""));
      return setData([...d]);
    } else if (val === "delhi") {
      let d = data.filter((a) => (a.city === "City" ? a : ""));
      return setData([...d]);
    } else if (val === "noida") {
      let d = data.filter((a) => (a.city === "Noida" ? a : ""));
      return setData([...d]);
    } else if (val === "ghaziabad") {
      let d = data.filter((a) => (a.city === "Ghaziabad" ? a : ""));
      return setData([...d]);
    } else if (val === "greater noida") {
      let d = data.filter((a) => (a.city === "Greater Noida" ? a : ""));
      return setData([...d]);
    } 
   
  };

  return (
    <Box>
      <Box w={"92%"} m="6rem auto auto auto" display={"flex"}>
        <Box w={"30%"}>
          <Box p={"1rem"}>
            <Text
              fontSize={"4xl"}
              mr={"5rem"}
              as="h5"
              size="lg"
              m={"0rem 2rem 2rem 1rem"}
              justifySelf={"left"}
            >
              Filters
            </Text>
            <Heading fontSize="lg" m={"1rem"}>
              Location
            </Heading>
            <Stack spacing={4}>
         <InputGroup>
       <InputLeftElement
      pointerEvents='none'
      children={<Icon color='gray.300' />}
      />
     <Input type='tel' placeholder='Enter Location' />
        </InputGroup>
        </Stack>
            <Divider m={"2rem"} />
            <Heading fontSize="lg" m={"1rem"}>
             Price
            </Heading>
            <Stack spacing={4}>
         <InputGroup >
       <InputLeftElement
      pointerEvents='none'
      
      />
     <Input type='tel' placeholder='Min' />
     <Input type='tel' placeholder='Max' />
        </InputGroup>
        </Stack>
            <Divider m="1rem" />
            <Heading fontSize="lg" m={"1rem"}>
              {" "}
              Cities
            </Heading>
            <Select
              onChange={(e) => {
                handleFilter(e.target.value);
              }}
              borderColor="black"
              w={"20rem"}
              placeholder="Select City"
            >
              <option value="new delhi">New Delhi</option>
              <option value="ghaziabad">Ghaziabad</option>
              <option value="greater noida">Greater Noida</option>
              <option value="noida">Noida</option>
              <option value="delhi">Delhi</option>
            </Select>
          </Box>
        </Box>
        <Box w={"70%"} h="auto">
          <Box w={"100%"} h="4rem" m="0rem auto auto auto" display={"flex"}>
            <Text
              fontSize={"2xl"}
              mr={"7rem"}
              as="h5"
              size="lg"
              w="60%"
              justifySelf={"left"}
            >
              {str}
            </Text>
           
           
       
       <InputGroup>
        <InputLeftElement
        pointerEvents='none'
        color='gray.300'
        fontSize='1.2em'
        children={<SearchIcon/>}
       />
       <Input placeholder='Search gym name here...' />
       <InputRightElement>
       <Button mr={'1rem'}  h='1.75rem' size='lg' color={"white"} background="red">
          Clear
        </Button>
       </InputRightElement>
      </InputGroup>
   
          </Box>
          <Grid
            templateRows="repeat(auto,1fr)"
            templateColumns="repeat(1, 1fr)"
            gap="6"
          
          >
            {data.map((elem, ind) => (
              <Box
                key={elem.user_id}
                border="1px"
                boxShadow="md"
                p="3rem"
                rounded="md"
                bg="gray"
                // onClick={() => {
                //   navigate(`/productdetails/${elem.title}`);
                //   localStorage.setItem("frequently", JSON.stringify(str));
                // }}
                borderColor={"gray"}
                _hover={{ borderColor: "gray", borderWidth: "2px" }}
              >
                  <Heading fontSize="1.5rem" ml={'-1rem'}>
                   <Tag mr={'15rem'} size="lg" variant='solid' colorScheme='red'color={'white'}>
                    Free
                    </Tag>
                  {elem.slug}
                  
                </Heading>
                <Box ml={'18rem'} color='white'><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></Box>
                
                <Heading ml={'18rem'} mb={"0.7rem"} noOfLines={2} as="h5" size="md">
                  {elem.address1},{elem.address2}
                </Heading>
              
                <Box display={"flex"} ml={'18rem'}>
                  <Text color={"blue"} mr="1.3rem" mt={"1px"} as="b">
                   <ExternalLinkIcon/> {elem.duration_text} | {elem.distance_text}
                  </Text>
                  </Box>
                 
                 <Button
                 ml={'35rem'}
                  bg={'red'}
                  color='white'
                  size="md"
                  height="48px"
                  width="200px"
                  border="2px"
                  borderColor="green.500"
                  variant={'solid'}
                  >
                Book Now
               </Button>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
      <Divider m={"5rem"} />
     
      <Divider mb={"2rem"} />
    </Box>
  );
};

export default Gym;