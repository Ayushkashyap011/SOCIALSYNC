
import { useEffect, useState } from 'react';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { Heading, Box, Text,Flex,Badge,Stack} from '@chakra-ui/react'; 
import './UserPage.css';

const UserPage = () => {

  // const { id } = useParams();
  
  const [user, setUser] = useState({
    id: 1,
    Name: "Kylie Jenner",
    Instagram_id: "Kylie123",
    Followers: "9700",
    Domain: "beauty",
    Email: "kylie123@gmail.com",
    PhoneNumber: "9345817282",
    HighestReached: "20000",
    DemandPerPromotion: "9500",
    Description:"fashion freak"
});
 console.log("sadas");
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(`http://localhost:3001/users/${id}`); // Using fetch API with route parameter
  //       if (!res.ok) {
  //         throw new Error('Failed to fetch user');
  //       }
  //       const userData = await res.json();
  //       console.log(userData);
  //       setUser(userData);
  //     } catch (error) {
  //       console.error('Error fetching user:', error);
  //     }
  //   }

  //   useEffect(()=>{
  //     fetchData();
  //   },[]);
  // const getAllData = async () => {
  //   try {
  //     const getPeople = await fetch(
  //       `${process.env.url}/getInfluencers/:${id}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     const res = await getPeople.json();
  //     setUser(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getAllData();
  // },[]);
  // console.log(user,"something");

  return (
    <div className='outerDiv'>
    <div className='rightDiv'>
      <Box >
        <Avatar className='profilePic' name='Dan Abrahmov' src='' />
      </Box>
      {user && (
        <>
      <Box className='userDetails'>
          <Heading as="h1" size="l">Hi, {user.name}</Heading>
          <Box borderWidth="1px" borderRadius="lg" p="4" mt="4">
            <Text>ID: {user.id}</Text>
            <Text>Instagram ID: {user.Instagram_id}</Text>
            <Text>Followers: {user.Followers}</Text>
            <Text>Highest Reached: {user.HighestReached}</Text>
            <Text>Email: {user.Email}</Text>
            <Text>Phone Number: {user.PhoneNumber}</Text>
            <Text>Domain: {user.Domain}</Text>
            <Text>Demand per Promotion: {user.DemandPerPromotion}</Text>
            <Text>Description: {user.Description}</Text>
          </Box>
      </Box>
        </>
      )}
    </div>
    <Box className='leftDiv'>
      
    </Box>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  try {
    const res = await fetch(`http://localhost:3001/users/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch user');
    }
    const userData = await res.json();
    return {
      props: { userData },
    };
  } catch (error) {
    console.error('Error fetching user data from JSON server:', error);
    return {
      notFound: true,
    };
  }
}

export default UserPage;
