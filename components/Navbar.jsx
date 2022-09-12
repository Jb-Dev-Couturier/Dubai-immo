import Link from 'next/link'
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import {TbBuildingSkyscraper} from 'react-icons/tb'




const Navbar = () => (
  <Flex p="2" borderBottom="1px" borderColor="blue.400" position={'fixed'} zIndex='500' background={'blue.400'} width='100%' top={0} left='0'>
    <Box fontSize="3xl" color="white" fontWeight="bold" display={'flex'} alignItems='center' justifyContent={'center'}>
      <TbBuildingSkyscraper />
      <Link href="/" paddingLeft="2">
        DubaÏmmo
      </Link>  
    </Box>
    <Spacer />
    <Box>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FcMenu />}
        />
        <MenuList >
          <Link href="/" passHref>
            <MenuItem icon={<FcHome />}>Accueil</MenuItem>
          </Link>
          <Link href="/search" passHref>
            <MenuItem icon={<BsSearch />}>Rechercher</MenuItem>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <MenuItem icon={<FcAbout />}>Acheter</MenuItem>
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            <MenuItem icon={<FiKey />}>Louer</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);


export default Navbar