import React from 'react'
import StartNavbar from '../components/StartNavbar'
import MiddleNavbar from '../components/MiddleNavbar'
import { Link, Box, Flex, Heading, Image, Container, SimpleGrid, Card, Stack, CardBody, Text, Spacer } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'

function DailyDeals() {
    return (
        <>
            <StartNavbar />
            <hr />
            <Box background={'#F9F9F9'}>
                <MiddleNavbar />

                {/*down navbar  */}
                <Box px={"7em"} display="flex" alignItems="center" justifyContent={"space-between"} >
                    <Heading size={'lg'}> Deals</Heading>
                    <Box display={"flex"} alignItems={"center"} gap={"2em"} >

                        {/* Feature */}
                        <Menu>
                            <MenuButton>
                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                    Featured
                                </Box>
                            </MenuButton>
                            <MenuList >
                                <Box display={"flex"} gap={"2em"}>
                                    <Box>
                                        <MenuItem >Home & Garden</MenuItem>
                                        <MenuItem>Business & Industrial</MenuItem>
                                        <MenuItem>Collectibles</MenuItem>
                                        <MenuItem>Fashion</MenuItem>
                                        <MenuItem>Electronics</MenuItem>
                                    </Box>
                                    <Box>
                                        <MenuItem>Lifestyle</MenuItem>
                                        <MenuItem>Parts & Accessories</MenuItem>
                                        <MenuItem>Videogames and Consoles</MenuItem>
                                        <MenuItem>Smartphones & Smartwatches</MenuItem>
                                        <MenuItem>Men's Shoes</MenuItem>
                                    </Box>
                                </Box>

                            </MenuList>
                        </Menu>

                        {/* Tech */}
                        <Menu>
                            <MenuButton>
                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                  Tech
                                </Box>
                            </MenuButton>
                            <MenuList >
                                <Box display={"flex"} gap={"2em"}>
                                    <Box>
                                        <MenuItem >Laptops & Netbooks</MenuItem>
                                        <MenuItem>Cameras & Photo</MenuItem>
                                        <MenuItem>TV, Video & Home Audio</MenuItem>
                                        <MenuItem>iPads, Tablets & eReaders</MenuItem>
                                        <MenuItem>Video Games & Consoles</MenuItem>
                                    </Box>
                                    <Box>
                                        <MenuItem>Phone Cases & Accessories</MenuItem>
                                        <MenuItem>Vehicle Electronics & GPS</MenuItem>
                                        <MenuItem>Memory Drives & Storage</MenuItem>
                                        <MenuItem>Printers & Printer Supplies</MenuItem>
                                        <MenuItem>Headphones & Portable Audio</MenuItem>
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
                                <Box display={"flex"} gap={"2em"}>
                                    <Box>
                                        <MenuItem >Fine Jewelry</MenuItem>
                                        <MenuItem>Fashion Jewelry</MenuItem>
                                        <MenuItem>Beauty</MenuItem>
                                        <MenuItem>Health</MenuItem>
                                        <MenuItem>Men's Shoes & Accessories</MenuItem>
                                    </Box>
                                    <Box>
                                        <MenuItem>Women's Shoes & Accessories</MenuItem>
                                        <MenuItem>Handbags and accessories</MenuItem>
                                        <MenuItem>Men's Clothing</MenuItem>
                                        <MenuItem>Women's Clothing</MenuItem>
                                        <MenuItem>Kid's Stuff</MenuItem>
                                    </Box>
                                </Box>

                            </MenuList>
                        </Menu>

                        {/* Home */}
                        <Menu>
                            <MenuButton>
                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                    Home
                                </Box>
                            </MenuButton>
                            <MenuList >
                                <Box display={"flex"} gap={"2em"}>
                                    <Box>
                                        <MenuItem >Sporting Goods</MenuItem>
                                        <MenuItem>Yard, Garden & Outdoor Living</MenuItem>
                                        <MenuItem>Cycling</MenuItem>
                                        <MenuItem>Home Improvement</MenuItem>
                                        <MenuItem>Kitchen, Dining & Bar</MenuItem>
                                    </Box>
                                    <Box>
                                        <MenuItem>Toys</MenuItem>
                                        <MenuItem>Outdoor Sports</MenuItem>
                                        <MenuItem>Tools</MenuItem>
                                        <MenuItem>Inside the Home</MenuItem>
                                        <MenuItem>Exercise & Fitness</MenuItem>
                                    </Box>
                                </Box>

                            </MenuList>
                        </Menu>

                        {/* More */}
                        <Menu>
                            <MenuButton>
                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                    More
                                </Box>
                            </MenuButton>
                            <MenuList >
                                <Box display={"flex"} gap={"2em"}>
                                    <Box>
                                        <MenuItem >Coins</MenuItem>
                                        <MenuItem>Collectibles</MenuItem>
                                        <MenuItem>Toys</MenuItem>
                                        <MenuItem>Musical Instruments & Gear</MenuItem>
                                        <MenuItem>Travel</MenuItem>
                                    </Box>
                                    <Box>
                                        <MenuItem>Sports Fan Shop</MenuItem>
                                        <MenuItem>Office Furniture & Supplies</MenuItem>
                                        <MenuItem>Automotive</MenuItem>
                                        <MenuItem>Business & Industrial</MenuItem>
                                        
                                    </Box>
                                </Box>

                            </MenuList>
                        </Menu>
                      
                    </Box>
                   
                </Box>

                {/* banner */}
                <Box boxSize={'95%'} paddingLeft={'5em'}>
                    <Image src='https://i.ebayimg.com/00/s/MTAwWDEyMDA=/z/F3QAAOSwxt5mPJcr/$_57.JPG' alt='banner' />
                </Box>

                {/* spot Light */}
                <Box boxSize={"88%"} margin={"auto"} boxShadow='xs' p='auto' rounded='md' bg='white' marginTop={'1em'} >
                    <Text fontSize={'2xl'} margin={'0.5em'} style={{ textAlign: 'center' }}>SPOTLIGHT DEAL</Text>
                    <hr />

                    <Flex margin={'2em'} justifyContent={'space-around'}>
                        <Box boxSize={'45%'} >
                            <Image src='https://i.ebayimg.com/images/g/OscAAOSw33JlQYIR/s-l400.jpg' />
                        </Box>
                        <Box boxSize={'50%'} >
                            <Link style={{ fontSize: '2em' }}>Motorola One 5G UW Ace - 64GB Gray (Factory Unlocked) NEW SEALED</Link>
                            <Spacer />
                            <Text as={'b'} fontSize={'2xl'}>US $94.99</Text>
                        </Box>
                    </Flex>
                </Box>

                {/* Featured deals */}
                <Box boxSize={'88%'} margin={'auto'} boxShadow='xs' p='auto' rounded='md' bg='white' marginTop={'1em'} marginBottom={'1em'}>
                    <Text fontSize={'2xl'} style={{ textAlign: 'center' }}  >FEATURED DEALS</Text>
                </Box>

                {/* cards */}
                <Box boxSize={'88%'} margin={'auto'} marginTop={'1em'}>

                    <SimpleGrid columns={[2, 3]} spacing='40px'>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/nu0AAOSwruBhHjjq/s-l225.jpg'
                                alt='Caffe Latte'
                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        Samsung Galaxy S10+ G975U 128GB Factory
                                    </Text>
                                    <Heading size='md'>US $172.99</Heading>

                                </CardBody>
                            </Stack>
                        </Card>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/IFUAAOSwQk9jcpV~/s-l225.jpg'

                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        Samsung Galaxy S21 5G Unlocked G991U 128GB
                                    </Text>
                                    <Heading size='md'>US $173.00</Heading>

                                </CardBody>
                            </Stack>
                        </Card>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/HGQAAOSwMMBmBqFi/s-l225.jpg'

                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        Clarks Mens Un Hugh Cap Black Leather Dress
                                    </Text>
                                    <Heading size='md'>US $54.99</Heading>

                                </CardBody>
                            </Stack>
                        </Card>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/MugAAOSwJWBlPAVZ/s-l225.jpg'

                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        Puma Playmaker Pro Mid Splatter Mens Black
                                    </Text>
                                    <Heading size='md'>US $53.99</Heading>

                                </CardBody>
                            </Stack>
                        </Card>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/OzsAAOSwqjBkjjGt/s-l225.jpg'

                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        UA Under Armour Men's Velocity Tee Top Athletic
                                    </Text>
                                    <Heading size='md'>US $20.53</Heading>

                                </CardBody>
                            </Stack>
                        </Card>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/ywMAAOSwDLljl75S/s-l225.jpg'
                                alt='Caffe Latte'
                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        Apple AirPods Pro (2nd Generation) Gen 2 - USB
                                    </Text>
                                    <Heading size='md'>US $149.99</Heading>

                                </CardBody>
                            </Stack>
                        </Card>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/cmoAAOSwqGpmW1o9/s-l225.jpg'
                                alt='Caffe Latte'
                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        Samsung Galaxy S22 SM-S901U1 Factory Unlocked
                                    </Text>
                                    <Heading size='md'>US $239.99</Heading>

                                </CardBody>
                            </Stack>
                        </Card>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/S7EAAOSw6ttlW7gG/s-l225.jpg'
                                alt='Caffe Latte'
                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        HP 17-CN3165CL 17.3" HD+ Touch Laptop Intel
                                    </Text>
                                    <Heading size='md'>US $549.00</Heading>

                                </CardBody>
                            </Stack>
                        </Card>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/9WwAAOSwOAZmFv~s/s-l225.jpgg'
                                alt='Caffe Latte'
                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        Cobra Golf Club AeroJet 15* 3 Wood Stiff Graphite
                                    </Text>
                                    <Heading size='md'>US $144.99</Heading>

                                </CardBody>
                            </Stack>
                        </Card>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/5jkAAOSwz5Nj-P72/s-l225.jpg'
                                alt='Caffe Latte'
                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        BenQ TK700 3200-Lumen 4K UHD DLP Projector
                                    </Text>
                                    <Heading size='md'>US $849.00</Heading>

                                </CardBody>
                            </Stack>
                        </Card>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/EWMAAOSwQdRmDcU5/s-l225.jpg'
                                alt='Caffe Latte'
                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        TaylorMade Golf Club STEALTH 2 16.5* 3HL
                                    </Text>
                                    <Heading size='md'>US $174.99</Heading>

                                </CardBody>
                            </Stack>
                        </Card>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/HD0AAOSwaSVlWR6p/s-l225.jpg'
                                alt='Caffe Latte'
                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        Seagate Exos X20 20TB 7200 SATA 6Gb/s 3.5"
                                    </Text>
                                    <Heading size='md'>US $215.00</Heading>

                                </CardBody>
                            </Stack>
                        </Card>

                    </SimpleGrid>
                </Box>
                {/* Home garden */}
                <Box boxSize={'88%'} margin={'auto'} marginTop={'3em'}>
                    <Text fontSize={'3xl'} >Home & Garden</Text>
                    <SimpleGrid columns={[2, 3]}>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/8pMAAOSw361mA6FC/s-l225.jpg'
                                alt='Caffe Latte'
                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        eufy X10 Pro Omni Robot Vacuum and Mop 8000Pa
                                    </Text>
                                    <Heading size='md'>US $679.99</Heading>
                                    <Text>15% OFF</Text>
                                </CardBody>
                            </Stack>
                        </Card>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/TE0AAOSwh~BlWo57/s-l225.jpg'

                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        Good Cook Jolly Time Popcorn Baller Ball Mold by
                                    </Text>
                                    <Heading size='md'>US $8.88</Heading>
                                    <Text>Free shipping</Text>

                                </CardBody>
                            </Stack>
                        </Card>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/SF0AAOSwBG5mK-pQ/s-l300.jpg'

                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        Jura E6 Piano White
                                    </Text>
                                    <Heading size='md'>US $899.99</Heading>
                                    <Text>60% OFF</Text>
                                </CardBody>
                            </Stack>
                        </Card>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/t3gAAOSwoVhmQZ-a/s-l225.jpg'

                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        BOSCH Brushless 18V 2-Tool Combo Kit with Two
                                    </Text>
                                    <Heading size='md'>US $419.00</Heading>
                                    <Text>21% OFF</Text>
                                </CardBody>
                            </Stack>
                        </Card>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/h24AAOSwzAhk3aVL/s-l300.jpg'

                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        1885316S Carburetor For Kohler Replaces 18-853-16-S SH265 Lawn
                                    </Text>
                                    <Heading size='md'>US $8.88</Heading>
                                    <Text>Free shipping</Text>
                                </CardBody>
                            </Stack>
                        </Card>

                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/n2AAAOSwyvVmRfHe/s-l300.jpg'

                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        Bosch Profactor GDS18V-740N 18V 1/2 In Impact Wrench with Friction
                                    </Text>
                                    <Heading size='md'>US $259.00</Heading>
                                    <Text> 7% OFF</Text>
                                </CardBody>
                            </Stack>
                        </Card>

                    </SimpleGrid>
                </Box>

                {/* Collectibles */}
                <Box boxSize={'88%'} margin={'auto'} marginTop={'3em'}>
                    <Text fontSize={'3xl'} >Collectibles</Text>
                    <SimpleGrid columns={[2, 3]}>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/-NEAAOSw2zVlew2N/s-l225.jpg'
                                alt='Caffe Latte'
                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        Pokemon Sword & Shield SILVER TEMPEST 10 BOX
                                    </Text>
                                    <Heading size='md'>US $289.90</Heading>

                                </CardBody>
                            </Stack>
                        </Card>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/eNwAAOSwyWZmO5KK/s-l225.jpg'

                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        Disney Lorcana Ursula's Return Booster Box - Bran
                                    </Text>
                                    <Heading size='md'>US $118.75</Heading>


                                </CardBody>
                            </Stack>
                        </Card>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/60wAAOSwiYpmH9et/s-l300.jpg'

                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        Pokemon TCG Twilight Masquerade Booster Box Factory Sealed New
                                    </Text>
                                    <Heading size='md'>US $100.90</Heading>

                                </CardBody>
                            </Stack>
                        </Card>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/60wAAOSwiYpmH9et/s-l300.jpg'

                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        Yugioh 25th Anniversary Rarity Collection II (2)
                                    </Text>
                                    <Heading size='md'>US $115.99</Heading>
                                    <Text> 35% OFF</Text>
                                </CardBody>
                            </Stack>
                        </Card>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/J4kAAOSwOE5jRGlN/s-l300.jpg'

                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        Pokemon Silver Tempest Sleeved Booster Pack Case of 144 Packs
                                    </Text>
                                    <Heading size='md'>US $489.99</Heading>

                                </CardBody>
                            </Stack>
                        </Card>

                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/9kQAAOSwpIxluVz4/s-l300.jpg'

                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        Pokemon TCG: Iono Premium Tournament Collection Disply 4
                                    </Text>
                                    <Heading size='md'>US $149.59</Heading>

                                </CardBody>
                            </Stack>
                        </Card>

                    </SimpleGrid>
                </Box>

                {/*Fashion  */}
                <Box boxSize={'88%'} margin={'auto'} marginTop={'3em'}>
                    <Text fontSize={'3xl'} >Fashion</Text>
                    <SimpleGrid columns={[2, 3]}>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/bOQAAOSwk31mKA5s/s-l225.jpg'
                                alt='Caffe Latte'
                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        Dyson HS06 Airstrait | Certified Refurbished
                                    </Text>
                                    <Heading size='md'>US $279.99</Heading>

                                </CardBody>
                            </Stack>
                        </Card>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/G30AAOSw2sRmMpiz/s-l225.jpg'

                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        Oakley Men's OO9208-C4 Radar EV Path 38mm Matt
                                    </Text>
                                    <Heading size='md'>US $69.99</Heading>
                                    <Text>67% OFF</Text>
                                </CardBody>
                            </Stack>
                        </Card>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/TxMAAOSwFjZmNwtg/s-l300.jpg'

                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        Dyson Airwrap Multi-styler Complete Long (Silver | NIckel)
                                    </Text>
                                    <Heading size='md'>US $599.00</Heading>

                                </CardBody>
                            </Stack>
                        </Card>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/VFwAAOSwY7BlLgQG/s-l225.jpg'

                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        Medicube AGE-R Booster Pro Home Skin Care Device
                                    </Text>
                                    <Heading size='md'>US $247.01</Heading>

                                </CardBody>
                            </Stack>
                        </Card>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/Nx8AAOSwCxBmO7LI/s-l300.jpg'

                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        Oakley Men's OO9102-U2 Holbrook 57mm Matte Black Sunglasses
                                    </Text>
                                    <Heading size='md'>US $64.99</Heading>
                                    <Text>60% OFF</Text>
                                </CardBody>
                            </Stack>
                        </Card>

                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            height={'13em'}
                        >
                            <Image
                                objectFit='cover'
                                boxSize='125px'
                                paddingTop={'2em'}
                                src='https://i.ebayimg.com/images/g/mFYAAOSwZRZlt9Xe/s-l300.jpg'

                            />

                            <Stack>
                                <CardBody>
                                    <Text fontSize={'xl'} py='2'>
                                        Michael Kors Gilly Large Tote Light Powder Blush Pink MK Miami Beach
                                    </Text>
                                    <Heading size='md'>US $148.00</Heading>
                                    <Text>73% OFF</Text>
                                </CardBody>
                            </Stack>
                        </Card>

                    </SimpleGrid>
                </Box>

                {/* Footer */}
                <Box marginTop={'3em'} marginBottom={'2em'} background={'white'}>

                    <Flex display="flex" justifyContent="space-between" borderTop={"1px solid gray"} py={"2em"} px={'3em'}>
                        <Link>AbouteBay</Link>
                        <Link>Announcements</Link>
                        <Link>Community</Link>
                        <Link>Security Center</Link>
                        <Link>Seller Information Center</Link>
                        <Link>Policies</Link>
                        <Link>Affiliates</Link>
                        <Link>Help & Contact</Link>
                        <Link>Site Map</Link>
                    </Flex>
                    <Text style={{ color: 'grey' }} px={'3em'}>Copyright © 1995-2024 eBay Inc.
                        All Rights Reserved. Accessibility,
                        User Agreement, Privacy, Payments Terms of Use,
                        Cookies, CA Privacy Notice, Your Privacy Choices and AdChoice</Text>
                </Box>

            </Box>
        </>
    )
}

export default DailyDeals