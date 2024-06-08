import React from 'react'
import { Heading, Text, Link, Flex, Box } from '@chakra-ui/react'
// icons
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (

    <div style={{background: "#F7F7F7", marginTop:"4em"}}>
      <Flex  px={10} display="flex" justifyContent="space-between" borderTop={"1px solid gray"} py={"2em"}>
        {/* Footer Buy section */}
        <Box>
          <Heading size={"md"}><Link>Buy</Link></Heading>
          <Text fontSize='md'><Link>Registration</Link></Text>
          <Text fontSize='md'><Link>eBay Money Back Guarantee</Link></Text>
          <Text fontSize='md'><Link>Bidding & buying help</Link></Text>
          <Text fontSize='md'><Link>Stores</Link></Text>
        </Box>
        {/* sell and tool apps */}
        <Box display={"flex"} flexDirection={"column"} gap={"2em"}>
          
          <div>
            <Heading size={"md"}><Link>Sell</Link></Heading>
            <Text fontSize='md'><Link>Start selling</Link></Text>
            <Text fontSize='md'><Link>Learn to sell</Link></Text>
            <Text fontSize='md'><Link>Affiliates</Link></Text>
          </div>
          <div>
            <Heading size={"md"}><Link>Tools & apps</Link></Heading>
            <Text fontSize='md'><Link>Developers</Link></Text>
            <Text fontSize='md'><Link>Security center</Link></Text>
            <Text fontSize='md'><Link>Site map</Link></Text>
          </div>
          
        </Box>
        {/* Stay connected */}
        <Box>
          <Heading size={"md"}><Link>Stay connected</Link></Heading>
          <Text fontSize='md'><Link>eBay's Blogs</Link></Text>
          <Box>
          <Box display={"flex"} alignItems={"center"} gap={"2px"}>
            <FaFacebookSquare />
            <Link fontSize='md'>Facebook</Link>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={"2px"}>
            <FaTwitterSquare />
            <Link fontSize='md'>Twitter</Link>
          </Box>
          </Box>
        </Box>
        {/* About eBay */}
        <Box>
          <Heading size={"md"}><Link>About eBay</Link></Heading>
          <Text fontSize='md'><Link>Company info</Link></Text>
          <Text fontSize='md'><Link>News</Link></Text>
          <Text fontSize='md'><Link>Investors</Link></Text>
          <Text fontSize='md'><Link>Careers</Link></Text>
          <Text fontSize='md'><Link>Government relations</Link></Text>
          <Text fontSize='md'><Link>Advertise with us</Link></Text>
          <Text fontSize='md'><Link>Policies</Link></Text>
          <Text fontSize='md'><Link>Verified Rights Owner (VeRO) Program</Link></Text>
        </Box>
        {/* Help & Contact, Community , eBay Sites */}
        <Box display={"flex"} flexDirection={"column"} gap={"2em"}>
         
          <div>
            <Heading size={"md"}><Link>Help & Contact</Link></Heading>
            <Text fontSize='md'><Link>Selller Information Center</Link></Text>
            <Text fontSize='md'><Link>Contact us</Link></Text>
          </div>
          <div>
            <Heading size={"md"}><Link>Community</Link></Heading>
            <Text fontSize='md'><Link>Announcements</Link></Text>
            <Text fontSize='md'><Link>Discussion boards</Link></Text>
            <Text fontSize='md'><Link>eBay Giving Works</Link></Text>
          </div>
        </Box>
      </Flex>
      <Box marginTop={'3em'}>
        <Text> Copyright © 1995-2024eBay Inc. All RightsReserved. Accessibility, User Agreement, Privacy, Payment. Terms of USe. Cookies, CA Privacy Notice, Your Privacy Choices and AdChoice.</Text>
      </Box>
    </div>

  )
}

export default Footer