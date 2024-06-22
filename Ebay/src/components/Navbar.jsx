import React from 'react'


//ANCHOR chakra 
import { Flex, Spacer, Box, Link, Text, Center, Image, Container } from '@chakra-ui/react'
import {
    Menu, MenuButton, MenuList, MenuItem, IconButton, MenuItemOption,
    MenuGroup, MenuOptionGroup, MenuDivider, Input, Button
} from '@chakra-ui/react'


//NOTE icons
import { FaRegBell } from "react-icons/fa6";
import { BsCart2, BsFullscreen } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'

// Start Navbar

const Navbar = () => {
    const navigate = useNavigate();

    const clickres = () => {
        navigate("/register");
    };

    const clicksign = () => {
        navigate("/signin");
    };

    const clickDailyDeals = () => {
        navigate("/dailydeals");
    };

    const clickHelpContact = () => {
        navigate('/help&contact');
    };

    const clickSell = () => {
        navigate('/sell');
    };

    return (
        <div>
            <Flex
                border="1px solid"
                px={[2, 4, 6, 10]} // Responsive padding example
                py={2} // Responsive padding example
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                flexDirection={['column', 'row']} // Adjust flex direction for small screens
            >
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    gap={4}
                    flexWrap="wrap" // Allow items to wrap on smaller screens
                    mb={[2, 0]} // Responsive margin bottom example
                    width={['100%', 'auto']} // Ensure full width on mobile
                >
                    {/* Left section */}
                    <Box display="flex" alignItems="center" gap={1}>
                        <Text>Hi!</Text>
                        <Link color={'blue'} onClick={clicksign}>Sign in</Link>
                        <Text>or</Text>
                        <Link color={'blue'} onClick={clickres}>register</Link>
                    </Box>
                    <Link onClick={clickDailyDeals}>Daily Deals</Link>
                    <Link onClick={clickHelpContact}>Help & Contact</Link>
                </Box>

                <Spacer />

                {/* Right section */}
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    gap={4}
                >
                    <Link onClick={clickSell}>Sell</Link>

                    {/* Dropdown example */}
                    <Menu>
                        <MenuButton>
                            Watchlist
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Summary</MenuItem>
                            {/* Add more menu items */}
                        </MenuList>
                    </Menu>

                    {/* Add more dropdowns and icons as needed */}
                </Box>
            </Flex>
            {/* Add additional components like DownNavbar and LastNavbar */}
            <DownNavbar />
            <LastNavbar />
        </div>
    );
};

export default Navbar;

// Start Down Navbar
export const DownNavbar = () => {
    return (
        <div>
            <Flex
                border="1px solid"
                px={{ base: 2, md: 10 }}   // Adjust padding based on screen size
                py={1}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                flexDirection={{ base: 'column', md: 'row' }}   // Stack items vertically on small screens
            >

                {/* Ebay Logo */}
                <Image
                    maxW={{ base: '100px', md: '120px' }}   // Adjust maximum width based on screen size
                    src='data:image/png;base64,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' // Replace with your actual eBay logo URL
                    alt='EbayLogo'
                    mb={{ base: 4, md: 0 }}   // Add margin bottom on small screens to separate from other elements
                />

                {/* Shop by category Drop Down */}
                <Menu>
                    <MenuButton>
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                            Shop by category
                            <IoIosArrowDown />
                        </Box>
                    </MenuButton>
                    <MenuList>
                        {/* Your category items here */}
                    </MenuList>
                </Menu>

                {/* Search with all categories */}
                <Box w="100%" display="flex" alignItems="center" position="relative">
                    <IoSearchOutline style={{ position: "absolute", left:'15px' }} />
                    <Input
                    placeholder='     Search for anything' border="1px solid" />
                    <Menu>
                        <MenuButton position="absolute" right="0" borderLeft="1px solid" h="100%" w="9em" px={3}>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                All Category
                                <IoIosArrowDown />
                            </Box>
                        </MenuButton>
                        <MenuList>
                            {/* Your category items here */}
                        </MenuList>
                    </Menu>
                </Box>

                {/* Search button */}
                <Box>
                    <Button
                        backgroundColor='#3665F3'
                        color="white"
                        _hover={{ bg: '#3665F3' }}
                        size='lg'
                        m={3}
                        px={{ base: 4, md: 50 }}   // Adjust padding based on screen size
                    >
                        Search
                    </Button>
                </Box>

                {/* Advance page */}
                <Box display={{ base: 'none', md: 'block' }} p={3}>   // Hide on small screens
                    <Link>Advance</Link>
                </Box>
            </Flex>
        </div>
    )
}



// start Last Navbar
export const LastNavbar = () => {
    const navigate = useNavigate();

    const clickSaved = () => {
        navigate('/signin');
    };

    return (
        <Flex
            border="1px solid"
            px={{ base: 2, md: 10 }} // Adjust padding based on screen size
            py={1}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexDirection={{ base: 'column', md: 'row' }} // Stack items vertically on small screens
        >
            {/* Saved Link */}
            <Box px={{ base: 2, md: 0 }} mb={{ base: 4, md: 0 }}> {/* Adjust padding and margin based on screen size */}
                <Link onClick={clickSaved}>Saved</Link>
            </Box>

            {/* Electronics */}
            <Menu>
                <MenuButton>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        Electronics
                        <IoIosArrowDown />
                    </Box>
                </MenuButton>
                <MenuList>
                    {/* Electronics Menu Items */}
                    {/* Assuming similar structure for other menu sections */}
                </MenuList>
            </Menu>

            {/* Motors */}
            <Menu>
                <MenuButton>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        Motors
                        <IoIosArrowDown />
                    </Box>
                </MenuButton>
                <MenuList>
                    {/* Motors Menu Items */}
                </MenuList>
            </Menu>

            {/* Fashion */}
            <Menu>
                <MenuButton>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        Fashion
                        <IoIosArrowDown />
                    </Box>
                </MenuButton>
                <MenuList>
                    {/* Fashion Menu Items */}
                </MenuList>
            </Menu>

            {/* Collectibles and Art */}
            <Menu>
                <MenuButton>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        Collectibles and Art
                        <IoIosArrowDown />
                    </Box>
                </MenuButton>
                <MenuList>
                    {/* Collectibles and Art Menu Items */}
                </MenuList>
            </Menu>

            {/* Sports */}
            <Menu>
                <MenuButton>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        Sports
                        <IoIosArrowDown />
                    </Box>
                </MenuButton>
                <MenuList>
                    {/* Sports Menu Items */}
                </MenuList>
            </Menu>

            {/* Health & Beauty */}
            <Menu>
                <MenuButton>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        Health & Beauty
                        <IoIosArrowDown />
                    </Box>
                </MenuButton>
                <MenuList>
                    {/* Health & Beauty Menu Items */}
                </MenuList>
            </Menu>

            {/* Industrial equipment */}
            <Menu>
                <MenuButton>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        Industrial equipment
                        <IoIosArrowDown />
                    </Box>
                </MenuButton>
                <MenuList>
                    {/* Industrial equipment Menu Items */}
                </MenuList>
            </Menu>

            {/* Home & Garden */}
            <Menu>
                <MenuButton>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        Home & Garden
                        <IoIosArrowDown />
                    </Box>
                </MenuButton>
                <MenuList>
                    {/* Home & Garden Menu Items */}
                </MenuList>
            </Menu>

            {/* Deals */}
            <Menu>
                <MenuButton>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        Deals
                        <IoIosArrowDown />
                    </Box>
                </MenuButton>
            </Menu>

            {/* Sell */}
            <Menu>
                <MenuButton>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        Sell
                        <IoIosArrowDown />
                    </Box>
                </MenuButton>
                <MenuList>
                    {/* Sell Menu Items */}
                </MenuList>
            </Menu>
        </Flex>
    );
};

