import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Button, Text } from '@chakra-ui/react';

import Property from '../components/Property';
import { baseUrl, fetchApi } from '../utils/fetchApi';

export const Banner = ({ purpose,title1,title2,desc1,desc2,linkName,buttonText,imageUrl }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10" marginTop={'100px'} >
    <Box borderRadius={'lg'} overflow="hidden" width={500} height={300}>
      <Image src={imageUrl} width={500} height={300} alt='Banner-Pic' />
    </Box>
    <Box p="5">
      <Text  fontSize="sm" fontWeight='medium'color='gray.500'>{purpose}</Text>
      <Text fontSize="3xl" fontWeight='bold'>{title1}<br/>{title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom='3' color='gray.700'>{desc1}<br/>{desc2}</Text>
      <Button fontSize='xl' colorScheme='cyan'>
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

const Home= ({propertiesForSale,propertiesForRent})=> (
    
      <Box >
        <Banner
          purpose="LOCATION"
          title1="Une Villa a Louer"
          title2="Pour Tous"
          desc1="Visitez Nos Appartements, Maison et Villas"
          desc2="Et Bien Plus"
          buttonText="Trouvez Location"
          linkName="/search?purpose=for-rent"
          imageUrl="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
        <Flex flexWrap="wrap">
          {propertiesForRent.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Flex>
        <Banner
          purpose="ACHAT"
          title1="Acheter & Posséder"
          title2="La Maison de vos Reves"
          desc1="Visitez Nos Appartements, Maison et Villas"
          desc2="Et Bien Plus"
          buttonText="Trouvez Achat"
          linkName="/search?purpose=for-sale"
          imageUrl="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        />
        <Flex flexWrap="wrap">
        {propertiesForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
        </Flex>
      </Box>
    
  );



export async function getStaticProps(){
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=9`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=9`)

  return{
    props:{
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    }
  }
}

export default Home;