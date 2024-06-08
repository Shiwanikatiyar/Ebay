import React from 'react'
import { Image, Heading, Text, Button, Box } from '@chakra-ui/react'

const Poster = () => {
  return (

    <Box display={"flex"} position={"relative"} mt={"3em"} w={'100%'} >

      <Box padding={'2em'} background={'#FBCE20'}>
        <Heading  > Growing your collection? We’ve got your...</Heading>
        <Text fontSize='xl'>You’re protected by the eBay Money Back Guarantee.</Text>
        <Button variant='outline' colorScheme='#592E13' borderRadius={'30px'} mt={'2em'}>Shop Collectibles</Button>
      </Box>
      <Box  boxSize={'95%'}>

        <Image src='https://i.ebayimg.com/00/s/NTgxWDE2MDA=/z/KA0AAOSwKZhmQglh/$_57.PNG' />
      </Box>

    </Box>
  )
}

export default Poster


