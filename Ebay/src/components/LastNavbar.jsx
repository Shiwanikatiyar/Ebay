import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Menu, MenuButton, MenuList, MenuItem, 
} from '@chakra-ui/react'

function LastNavbar() {
  const navigate = useNavigate()
    const clickSaved = () => {
        navigate('/signin')
    }
    return (
        <Flex border="1px solid" px={10} py={1} display="flex" alignItems="center" justifyContent="space-between" >
            <Box display="flex" alignItems="center" justifyContent="space-between" px={120} gap={4}>


                <Link onClick={clickSaved}>Saved</Link>

                {/* Electronics */}
                <Menu>
                    <MenuButton>
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                            Electronics
                        </Box>
                    </MenuButton>
                    <MenuList >
                        <Box display={"flex"} >
                            <Box>
                                <Box>
                                    <MenuItem as={'b'}>Most populor categories</MenuItem>
                                    <hr />
                                    <MenuItem>Smartphones and accessories</MenuItem>
                                    <MenuItem>/video games and consoles</MenuItem>
                                    <MenuItem>Computer and tablets</MenuItem>
                                    <MenuItem>Cameras and photos</MenuItem>
                                    <MenuItem>Camera sand drones</MenuItem>
                                    <MenuItem>Refubished</MenuItem>
                                    <MenuItem>Smart home</MenuItem>
                                </Box>

                            </Box>

                            <Box>
                                <Box>
                                    <MenuItem as={'b'}>More categories</MenuItem>
                                    <hr />
                                    <MenuItem>Apple</MenuItem>
                                    <MenuItem>Samsung</MenuItem>
                                    <MenuItem>Portable audio and headphones</MenuItem>
                                    <MenuItem>Smart watches</MenuItem>
                                    <MenuItem>Deals</MenuItem>
                                    <MenuItem>Sell on eBay</MenuItem>
                                </Box>

                            </Box>

                            <Box>
                                <Image marginTop={'0.5em'} borderRadius={'1em'} src='https://ir.ebaystatic.com/cr/v/c01/ROW-19392_Fallback_Electronics_770x270.png' />
                            </Box>

                        </Box>
                    </MenuList>
                </Menu>

                {/* Motors*/}
                <Menu>
                    <MenuButton>
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                        Motors
                        </Box>
                    </MenuButton>
                    <MenuList >
                        <Box display={"flex"} >
                            <Box>
                                <Box>
                                    <MenuItem as={'b'}>Most populor categories</MenuItem>
                                    <hr />
                                    <MenuItem>Smartphones and accessories</MenuItem>
                                    <MenuItem>/video games and consoles</MenuItem>
                                    <MenuItem>Computer and tablets</MenuItem>
                                    <MenuItem>Cameras and photos</MenuItem>
                                    <MenuItem>Camera sand drones</MenuItem>
                                    <MenuItem>Refubished</MenuItem>
                                    <MenuItem>Smart home</MenuItem>
                                </Box>

                            </Box>

                            <Box>
                                <Box>
                                    <MenuItem as={'b'}>More categories</MenuItem>
                                    <hr />
                                    <MenuItem>Apple</MenuItem>
                                    <MenuItem>Samsung</MenuItem>
                                    <MenuItem>Portable audio and headphones</MenuItem>
                                    <MenuItem>Smart watches</MenuItem>
                                    <MenuItem>Deals</MenuItem>
                                    <MenuItem>Sell on eBay</MenuItem>
                                </Box>

                            </Box>

                            <Box>
                                <Image marginTop={'0.5em'} borderRadius={'1em'} src='https://ir.ebaystatic.com/cr/v/c01/ROW-19392_Fallback_Electronics_770x270.png' />
                            </Box>

                        </Box>
                    </MenuList>
                </Menu>

                {/* Fashion */}
                <Menu>
                    <MenuButton>
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                        Fashion
                        </Box>
                    </MenuButton>
                    <MenuList >
                        <Box display={"flex"} >
                            <Box>
                                <Box>
                                    <MenuItem as={'b'}>Most populor categories</MenuItem>
                                    <hr />
                                    <MenuItem>Smartphones and accessories</MenuItem>
                                    <MenuItem>/video games and consoles</MenuItem>
                                    <MenuItem>Computer and tablets</MenuItem>
                                    <MenuItem>Cameras and photos</MenuItem>
                                    <MenuItem>Camera sand drones</MenuItem>
                                    <MenuItem>Refubished</MenuItem>
                                    <MenuItem>Smart home</MenuItem>
                                </Box>

                            </Box>

                            <Box>
                                <Box>
                                    <MenuItem as={'b'}>More categories</MenuItem>
                                    <hr />
                                    <MenuItem>Apple</MenuItem>
                                    <MenuItem>Samsung</MenuItem>
                                    <MenuItem>Portable audio and headphones</MenuItem>
                                    <MenuItem>Smart watches</MenuItem>
                                    <MenuItem>Deals</MenuItem>
                                    <MenuItem>Sell on eBay</MenuItem>
                                </Box>

                            </Box>

                            <Box>
                                <Image marginTop={'0.5em'} borderRadius={'1em'} src='https://ir.ebaystatic.com/cr/v/c01/ROW-19392_Fallback_Electronics_770x270.png' />
                            </Box>

                        </Box>
                    </MenuList>
                </Menu>

                {/*  Collectibles and Art*/}
                <Menu>
                    <MenuButton>
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                        Collectibles and Art
                        </Box>
                    </MenuButton>
                    <MenuList >
                        <Box display={"flex"} >
                            <Box>
                                <Box>
                                    <MenuItem as={'b'}>Most populor categories</MenuItem>
                                    <hr />
                                    <MenuItem>Smartphones and accessories</MenuItem>
                                    <MenuItem>/video games and consoles</MenuItem>
                                    <MenuItem>Computer and tablets</MenuItem>
                                    <MenuItem>Cameras and photos</MenuItem>
                                    <MenuItem>Camera sand drones</MenuItem>
                                    <MenuItem>Refubished</MenuItem>
                                    <MenuItem>Smart home</MenuItem>
                                </Box>

                            </Box>

                            <Box>
                                <Box>
                                    <MenuItem as={'b'}>More categories</MenuItem>
                                    <hr />
                                    <MenuItem>Apple</MenuItem>
                                    <MenuItem>Samsung</MenuItem>
                                    <MenuItem>Portable audio and headphones</MenuItem>
                                    <MenuItem>Smart watches</MenuItem>
                                    <MenuItem>Deals</MenuItem>
                                    <MenuItem>Sell on eBay</MenuItem>
                                </Box>

                            </Box>

                            <Box>
                                <Image marginTop={'0.5em'} borderRadius={'1em'} src='https://ir.ebaystatic.com/cr/v/c01/ROW-19392_Fallback_Electronics_770x270.png' />
                            </Box>

                        </Box>
                    </MenuList>
                </Menu>

                {/* Sports */}
                <Menu>
                    <MenuButton>
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                        Sports
                        </Box>
                    </MenuButton>
                    <MenuList >
                        <Box display={"flex"} >
                            <Box>
                                <Box>
                                    <MenuItem as={'b'}>Most populor categories</MenuItem>
                                    <hr />
                                    <MenuItem>Smartphones and accessories</MenuItem>
                                    <MenuItem>/video games and consoles</MenuItem>
                                    <MenuItem>Computer and tablets</MenuItem>
                                    <MenuItem>Cameras and photos</MenuItem>
                                    <MenuItem>Camera sand drones</MenuItem>
                                    <MenuItem>Refubished</MenuItem>
                                    <MenuItem>Smart home</MenuItem>
                                </Box>

                            </Box>

                            <Box>
                                <Box>
                                    <MenuItem as={'b'}>More categories</MenuItem>
                                    <hr />
                                    <MenuItem>Apple</MenuItem>
                                    <MenuItem>Samsung</MenuItem>
                                    <MenuItem>Portable audio and headphones</MenuItem>
                                    <MenuItem>Smart watches</MenuItem>
                                    <MenuItem>Deals</MenuItem>
                                    <MenuItem>Sell on eBay</MenuItem>
                                </Box>

                            </Box>

                            <Box>
                                <Image marginTop={'0.5em'} borderRadius={'1em'} src='https://ir.ebaystatic.com/cr/v/c01/ROW-19392_Fallback_Electronics_770x270.png' />
                            </Box>

                        </Box>
                    </MenuList>
                </Menu>

                {/*  Health & Bauty*/}
                <Menu>
                    <MenuButton>
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                        Health & Bauty
                        </Box>
                    </MenuButton>
                    <MenuList >
                        <Box display={"flex"} >
                            <Box>
                                <Box>
                                    <MenuItem as={'b'}>Most populor categories</MenuItem>
                                    <hr />
                                    <MenuItem>Smartphones and accessories</MenuItem>
                                    <MenuItem>/video games and consoles</MenuItem>
                                    <MenuItem>Computer and tablets</MenuItem>
                                    <MenuItem>Cameras and photos</MenuItem>
                                    <MenuItem>Camera sand drones</MenuItem>
                                    <MenuItem>Refubished</MenuItem>
                                    <MenuItem>Smart home</MenuItem>
                                </Box>

                            </Box>

                            <Box>
                                <Box>
                                    <MenuItem as={'b'}>More categories</MenuItem>
                                    <hr />
                                    <MenuItem>Apple</MenuItem>
                                    <MenuItem>Samsung</MenuItem>
                                    <MenuItem>Portable audio and headphones</MenuItem>
                                    <MenuItem>Smart watches</MenuItem>
                                    <MenuItem>Deals</MenuItem>
                                    <MenuItem>Sell on eBay</MenuItem>
                                </Box>

                            </Box>

                            <Box>
                                <Image marginTop={'0.5em'} borderRadius={'1em'} src='https://ir.ebaystatic.com/cr/v/c01/ROW-19392_Fallback_Electronics_770x270.png' />
                            </Box>

                        </Box>
                    </MenuList>
                </Menu>

                {/* Industrial equipment */}
                <Menu>
                    <MenuButton>
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                        Industrial equipment 
                        </Box>
                    </MenuButton>
                    <MenuList >
                        <Box display={"flex"} >
                            <Box>
                                <Box>
                                    <MenuItem as={'b'}>Most populor categories</MenuItem>
                                    <hr />
                                    <MenuItem>Smartphones and accessories</MenuItem>
                                    <MenuItem>/video games and consoles</MenuItem>
                                    <MenuItem>Computer and tablets</MenuItem>
                                    <MenuItem>Cameras and photos</MenuItem>
                                    <MenuItem>Camera sand drones</MenuItem>
                                    <MenuItem>Refubished</MenuItem>
                                    <MenuItem>Smart home</MenuItem>
                                </Box>

                            </Box>

                            <Box>
                                <Box>
                                    <MenuItem as={'b'}>More categories</MenuItem>
                                    <hr />
                                    <MenuItem>Apple</MenuItem>
                                    <MenuItem>Samsung</MenuItem>
                                    <MenuItem>Portable audio and headphones</MenuItem>
                                    <MenuItem>Smart watches</MenuItem>
                                    <MenuItem>Deals</MenuItem>
                                    <MenuItem>Sell on eBay</MenuItem>
                                </Box>

                            </Box>

                            <Box>
                                <Image marginTop={'0.5em'} borderRadius={'1em'} src='https://ir.ebaystatic.com/cr/v/c01/ROW-19392_Fallback_Electronics_770x270.png' />
                            </Box>

                        </Box>
                    </MenuList>
                </Menu>

                {/* Home & Garden */}
                <Menu>
                    <MenuButton>
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                        Home & Garden
                        </Box>
                    </MenuButton>
                    <MenuList >
                        <Box display={"flex"} >
                            <Box>
                                <Box>
                                    <MenuItem as={'b'}>Most populor categories</MenuItem>
                                    <hr />
                                    <MenuItem>Smartphones and accessories</MenuItem>
                                    <MenuItem>/video games and consoles</MenuItem>
                                    <MenuItem>Computer and tablets</MenuItem>
                                    <MenuItem>Cameras and photos</MenuItem>
                                    <MenuItem>Camera sand drones</MenuItem>
                                    <MenuItem>Refubished</MenuItem>
                                    <MenuItem>Smart home</MenuItem>
                                </Box>

                            </Box>

                            <Box>
                                <Box>
                                    <MenuItem as={'b'}>More categories</MenuItem>
                                    <hr />
                                    <MenuItem>Apple</MenuItem>
                                    <MenuItem>Samsung</MenuItem>
                                    <MenuItem>Portable audio and headphones</MenuItem>
                                    <MenuItem>Smart watches</MenuItem>
                                    <MenuItem>Deals</MenuItem>
                                    <MenuItem>Sell on eBay</MenuItem>
                                </Box>

                            </Box>

                            <Box>
                                <Image marginTop={'0.5em'} borderRadius={'1em'} src='https://ir.ebaystatic.com/cr/v/c01/ROW-19392_Fallback_Electronics_770x270.png' />
                            </Box>

                        </Box>
                    </MenuList>
                </Menu>

                {/* Deals */}
                <Menu>
                    <MenuButton>
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                          Deals

                        </Box>
                    </MenuButton>
                    <MenuList >
                        <Box display={"flex"} >
                            <Box>
                                <Box>
                                    <MenuItem as={'b'}>Most populor categories</MenuItem>
                                    <hr />
                                    <MenuItem>Smartphones and accessories</MenuItem>
                                    <MenuItem>/video games and consoles</MenuItem>
                                    <MenuItem>Computer and tablets</MenuItem>
                                    <MenuItem>Cameras and photos</MenuItem>
                                    <MenuItem>Camera sand drones</MenuItem>
                                    <MenuItem>Refubished</MenuItem>
                                    <MenuItem>Smart home</MenuItem>
                                </Box>

                            </Box>

                            <Box>
                                <Box>
                                    <MenuItem as={'b'}>More categories</MenuItem>
                                    <hr />
                                    <MenuItem>Apple</MenuItem>
                                    <MenuItem>Samsung</MenuItem>
                                    <MenuItem>Portable audio and headphones</MenuItem>
                                    <MenuItem>Smart watches</MenuItem>
                                    <MenuItem>Deals</MenuItem>
                                    <MenuItem>Sell on eBay</MenuItem>
                                </Box>

                            </Box>

                            <Box>
                                <Image marginTop={'0.5em'} borderRadius={'1em'} src='https://ir.ebaystatic.com/cr/v/c01/ROW-19392_Fallback_Electronics_770x270.png' />
                            </Box>

                        </Box>
                    </MenuList>
                </Menu>
                {/* Sell */}
                <Menu>
                    <MenuButton>
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                        Sell
                        </Box>
                    </MenuButton>
                    <MenuList >
                        <Box display={"flex"} >
                            <Box>
                                <Box>
                                    <MenuItem as={'b'}>Most populor categories</MenuItem>
                                    <hr />
                                    <MenuItem>Smartphones and accessories</MenuItem>
                                    <MenuItem>/video games and consoles</MenuItem>
                                    <MenuItem>Computer and tablets</MenuItem>
                                    <MenuItem>Cameras and photos</MenuItem>
                                    <MenuItem>Camera sand drones</MenuItem>
                                    <MenuItem>Refubished</MenuItem>
                                    <MenuItem>Smart home</MenuItem>
                                </Box>

                            </Box>

                            <Box>
                                <Box>
                                    <MenuItem as={'b'}>More categories</MenuItem>
                                    <hr />
                                    <MenuItem>Apple</MenuItem>
                                    <MenuItem>Samsung</MenuItem>
                                    <MenuItem>Portable audio and headphones</MenuItem>
                                    <MenuItem>Smart watches</MenuItem>
                                    <MenuItem>Deals</MenuItem>
                                    <MenuItem>Sell on eBay</MenuItem>
                                </Box>

                            </Box>

                            <Box>
                                <Image marginTop={'0.5em'} borderRadius={'1em'} src='https://ir.ebaystatic.com/cr/v/c01/ROW-19392_Fallback_Electronics_770x270.png' />
                            </Box>

                        </Box>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    )
}

export default LastNavbar