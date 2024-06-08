import React from 'react'
//ANCHOR chakra 
import { Flex, Spacer, Box, Link, Text, Center, Image, Container } from '@chakra-ui/react'
import {
    Menu, MenuButton, MenuList, MenuItem, IconButton,  
} from '@chakra-ui/react'
import{ useNavigate} from 'react-router-dom'



//NOTE icons
import { FaRegBell } from "react-icons/fa6";
import { BsCart2, BsFullscreen } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

function StartNavbar() {
    const navigate = useNavigate()
const clickres=()=>{
    navigate("/register")
}
const clicksign=()=>{
    navigate("/signin")
}
const clickDailyDeals=()=>{
    navigate("/dailydeals")
}
const clickHeplContact=()=>{
    navigate('/help&contact')
}
const clickSell = ()=>{
    navigate('/sell')
}
  return (
    <Box boxSize={'95%'}paddingLeft={'5em'}>
            <Flex px={10} display="flex" alignItems="center" justifyContent="space-between" >
                <Box display="flex" alignItems="center" justifyContent="space-between" gap={6} >
                    <Box display="flex" alignItems="center" justifyContent="space-between" gap={1}>
                        <Text>Hi!</Text>
                        <Link color={'blue'}onClick={clicksign}> Sign in</Link>
                        <Text>or</Text>
                        <Link color={'blue'}onClick={clickres}> register</Link>
                    </Box>
                    <Link onClick={clickDailyDeals} >Daily Deals</Link>

                    <Link onClick={clickHeplContact}>Help & Contact</Link>

                </Box>
                <Spacer />
                <Box display="flex" alignItems="center" justifyContent="space-between" gap={4}>
                    <Link onClick={clickSell}>Sell</Link>

                    {/* dropdown */}
                    <Menu>
                        <MenuButton
                            transition='all 0.2s'
                        >
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                Watchlist
                                <IoIosArrowDown />

                            </Box>
                        </MenuButton>
                        <MenuList>
                            <Text>Please <Link color={'blue'} href=''>sign in</Link> to view items you are watching.</Text>
                        </MenuList>
                    </Menu>

                    {/* dropdown */}
                    <Menu>
                        <MenuButton>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                My eBay
                                <IoIosArrowDown />
                            </Box>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Summary</MenuItem>
                            <MenuItem>Recently Viewed</MenuItem>
                            <MenuItem>Bids/Offers</MenuItem>
                            <MenuItem>Watchlist</MenuItem>
                            <MenuItem>Purchase History</MenuItem>
                            <MenuItem>Buy Again</MenuItem>
                            <MenuItem>Selling</MenuItem>
                            <MenuItem>Saved Searches</MenuItem>
                            <MenuItem>Saved Sellers</MenuItem>
                            <MenuItem>Massage</MenuItem>
                        </MenuList>
                    </Menu>

                    {/* notification bell icon */}
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<FaRegBell />}
                            bg={"white"}
                            _hover={{ bg: 'white' }}
                        />
                        <MenuList>
                            <MenuItem>
                                New Tab
                            </MenuItem>
                        </MenuList>
                    </Menu>

                    {/* cart icon */}
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<BsCart2 />}
                            _hover={{ color: '#3665F3', bg: 'white' }}
                            bg={"white"}
                        />
                        <MenuList>
                            <MenuItem>
                                New Tab
                            </MenuItem>

                        </MenuList>
                    </Menu>
                </Box>
            </Flex>

        </Box>
    )
}

export default StartNavbar