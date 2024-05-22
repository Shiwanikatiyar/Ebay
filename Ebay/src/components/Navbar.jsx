import React from 'react'
//ANCHOR chakra 
import { Flex, Spacer, Box, Link, Text, Center } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'
//NOTE icons
import { FaRegBell } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
    return (
        <div>
            <Flex border="1px solid" px={10} display="flex" alignItems="center" justifyContent="space-between" >
                <Box display="flex" alignItems="center" justifyContent="space-between" gap={6} >
                    <Box display="flex" alignItems="center" justifyContent="space-between" gap={1}>
                        <Link>Hi! Sign in</Link>
                        <Text>or</Text>
                        <Link> register</Link>
                    </Box>
                    <Link>Daily Deals</Link>

                    <Link>Help & Contact</Link>

                </Box>
                <Spacer />
                <Box display="flex" alignItems="center" justifyContent="space-between" gap={4}>
                    <Link>Sell</Link>

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
                            <MenuItem>New File</MenuItem>
                            <MenuItem>New Window</MenuItem>
                            <MenuDivider />
                            <MenuItem>Open...</MenuItem>
                            <MenuItem>Save File</MenuItem>
                        </MenuList>
                    </Menu>

                    <Menu>
                        <MenuButton

                        >
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                My eBay
                                <IoIosArrowDown />
                            </Box>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>New File</MenuItem>
                            <MenuItem>New Window</MenuItem>
                            <MenuDivider />
                            <MenuItem>Open...</MenuItem>
                            <MenuItem>Save File</MenuItem>
                        </MenuList>
                    </Menu>

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
            <DownNavbar/>
            
        </div>
    )
}

export default Navbar



export const DownNavbar = () => {
  return (
    <Flex border="1px solid" px={10} py={10} display="flex" alignItems="center" justifyContent="space-between" >
        jgjhjkhhkhkihkgjhfgj gghgrbhbgjgh
    </Flex>
  )
}
