import { Box, Flex } from '@chakra-ui/layout';
import Link from 'next/link';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { SiTripadvisor, SiHotelsdotcom } from 'react-icons/si';
import { TbBrandBooking } from 'react-icons/tb';

const Footer = () => (
  <Flex width={'100%'} display>
    <Flex
      width={'100%'}
      justifyContent="center"
      alignItems={'center'}
      borderTop="1px"
      borderColor="blue.400"
    >
      <Box
        p="5"
        width={'100%'}
        cursor="pointer"
        display={'flex'}
        flexDirection="row"
        justifyContent={'space-around'}
      >
        <a href={'https://www.facebook.com/'} target="blank">
          <AiOutlineFacebook className="LinkSocial" />
        </a>
        <a href={'https://www.instagram.com/'} target="blank">
          <AiOutlineInstagram className="LinkSocial" />
        </a>
        <a href={'https://www.tripadvisor.fr/'} target="blank">
          <SiTripadvisor className="LinkSocial" />
        </a>
        <a href={'https://fr.hotels.com/'} target="blank">
          <SiHotelsdotcom className="LinkSocial" />
        </a>
        <a href={'https://www.booking.com/'} target="blank">
          <TbBrandBooking className="LinkSocial" />
        </a>
      </Box>
    </Flex>
    <Box textAlign="center" color="gray.600">
      conditions générales | C.G.V | Droits Exploitation <br />
      Tout droit resérvés © J&K Web 2022
    </Box>
    <Box
      textAlign="center"
      p="5"
      color="gray.600"
      borderBottom="1px"
      borderColor="blue.400"
      marginBottom={'50px'}
    >
      © 2022 DubaÏmmo, Inc.
    </Box>
  </Flex>
);

export default Footer;
