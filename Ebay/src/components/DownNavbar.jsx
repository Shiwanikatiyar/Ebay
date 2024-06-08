import React from 'react'

//ANCHOR chakra 
import { Flex,  Box, Link} from '@chakra-ui/react'

export const DownNavbar = () => {
    return (    
            <Flex border="1px solid" px={10} py={1} display="flex" alignItems="center" justifyContent="space-between" >
                <Box  display="flex"  alignItems="center" justifyContent="space-between" px ={120} gap={4}>
                    <Link>Saved</Link>
                    <Link>Electronics</Link>
                    <Link>Motors</Link>
                    <Link>Fashion</Link>
                    <Link>Collectibles and Art</Link>
                    <Link>Sports</Link>
                    <Link>Health & Bauty</Link>
                    <Link>Industrial equipment</Link>
                    <Link>Home & Garden</Link>
                    <Link>Deals</Link>
                    <Link>Sell</Link>
                </Box>
            </Flex>
    )
}