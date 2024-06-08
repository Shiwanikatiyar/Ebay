import StartNavbar from '../components/StartNavbar'
import MiddleNavbar from '../components/MiddleNavbar'
import { useNavigate } from 'react-router-dom'
import { Box, Select,VStack,Link, Button, Heading, Image, SimpleGrid, Stack, Text, HStack } from '@chakra-ui/react'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'

function Sell() {
  return (
    <div>
      <StartNavbar />
      <hr />
      <MiddleNavbar />
      <hr />

      {/* Last Navbar */}
      <Box px={"2em"} marginTop={'1em'} display="flex" alignItems="center" justifyContent={"space-between"} >
        <Heading size={'lg'}> Selling</Heading>
        <Box display={"flex"} alignItems={"center"} gap={"2em"} >
          <Text>The basics</Text>
          <Text>Business selling</Text>
          <Text>Tips for listing</Text>
          <Text>FAQ</Text>
          <Text>My eBay</Text>
          <Button borderRadius={'3em'} style={{ background: 'blue', color: 'white' }}>List an item</Button>
        </Box>
      </Box>

      {/* Banner */}
      <Box display={"flex"} position={"relative"} mt={"1em"} w={'100%'}>

        <Box>
          <Image src='https://i.ebayimg.com/00/s/NDk2WDE0NDA=/z/hcQAAOSwg2dj6n~7/$_57.JPG' />
        </Box>

        <Box borderRadius={'1em'} background={'white'} position={'absolute'}
          padding={'3em'} boxSize={'md'} height={'250px'} marginLeft={'52em'} marginTop={'5em'}>
          <Stack>
            <Heading>Make money selling on eBay</Heading>
            <Text>Sell your items fast—millions of buyers are waiting.</Text>
            <Button borderRadius={'3em'} style={{ background: 'blue', color: 'white' }}>List an item</Button>
          </Stack>
        </Box>
      </Box>

      {/* learn basics */}
      <Box marginTop={'1em'} padding={'2em'}>
        <Heading>Learn the basics</Heading>
        <Text>Here's what you need to know to start selling.</Text>
        <Box padding={'2em'}>
          <SimpleGrid columns={3} spacing={10}>
            <Box >
              <Stack>
                <Heading>1</Heading>
                <Text as={'b'}>List your item </Text>
                <Text>You can list new or used items and pay
                  a final value fee only when it sells.
                  Learn more about fees- opens in new window or tab..</Text>
              </Stack>
            </Box>
            <Box>
              <Stack>
                <Heading>2</Heading>
                <Text as={'b'}>Get seller protection</Text>
                <Text>You’re protected by policies, monitoring, and our customer service team.
                </Text>
              </Stack>
            </Box>

            <Box>
              <Stack>
                <Heading borderRadius={'10em'}>3</Heading>
                <Text as={'b'}>Choose when you get paid </Text>
                <Text>You can schedule either daily or weekly payouts, and we'll deposit your earnings directly into your bank account.
                </Text>
              </Stack>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>

      {/* poster */}
      <Box boxSize={'100%'} display={'flex'} alignItems="center" background={'#F7F7F7'}
        justifyContent={"space-between"} >
        <Box boxSize={'45%'} padding={'5em'}>
          <Stack>
            <Heading>Selling as a business? We make it easy</Heading>
            <Text>We’ve got powerful tools to help you manage your inventory and orders,
              track your sales, and build your brand.</Text>
          </Stack>
          <Button variant={'outline'} colorScheme='blue' borderRadius={'4em'}>Learn More</Button>

        </Box>
        <Box boxSize={'45%'} padding={'4em'} >
          <Image borderRadius={'1em'} src='https://i.ebayimg.com/00/s/NjY3WDE2MDA=/z/wdoAAOSwU3tksa02/$_57.JPG' />
        </Box>
      </Box>

      {/* Create a great listing */}
      <Box px={'1em'} marginTop={'2em'} >
        <Box marginBottom={'1em'}>
          <Heading >Create a great listing</Heading>
          <Text>Here’s six ways to set yourself up for success.</Text>
        </Box>

        <Box display={'flex'} justifyContent={'space-between'} >
          <SimpleGrid columns={[2, 2]} spacing={4}>
            <Box borderRadius={'1em'} height={'15em'} background={'#FFDEC7'}>
              <VStack spacing={6}>
                <Heading textAlign={'center'} marginTop={'1em'}>Write a standout title</Heading>
                <UnorderedList>
                  <ListItem >We’ll recommend search terms that buyers often use, so be sure to add these in the title.</ListItem>
                  <ListItem >Avoid all caps and focus on specific details like brand, model, size, and color.</ListItem>
                </UnorderedList>
              </VStack>
            </Box>
            <Box borderRadius={'1em'} height={'15em'} background={'#FCF2BD'}>
              <VStack spacing={6}>
                <Heading textAlign={'center'} marginTop={'1em'}>Take high-quality photos</Heading>
                <UnorderedList>
                  <ListItem >Snap your items from multiple angles in a well-lit place, and capture any blemishes for transparency.</ListItem>
                  <ListItem >On the eBay app, you can clean up your images and add a white background.</ListItem>
                </UnorderedList>
              </VStack>
            </Box>
            <Box borderRadius={'1em'} height={'15em'} background={'#C5E5FB'}>
              <VStack spacing={6}>
                <Heading textAlign={'center'} marginTop={'1em'}>Pick a purchase format</Heading>
                <UnorderedList>
                  <ListItem >If you want to sell your item quickly, Buy it Now is probably the best format for you.</ListItem>
                  <ListItem >Otherwise, if you want to try your luck and shoot for the best possible price, choose Auction.</ListItem>
                </UnorderedList>
              </VStack>
            </Box>
            <Box borderRadius={'1em'} height={'15em'} background={'#FAD8F0'}>
              <VStack spacing={6}>
                <Heading textAlign={'center'} marginTop={'1em'}>Set the right price</Heading>
                <UnorderedList>
                  <ListItem >We will recommend a price based on recent sales of similar items.</ListItem>
                  <ListItem >You can even watch how other sellers are pricing their items, or use Best Offer to negotiate and sell faster.</ListItem>
                </UnorderedList>
              </VStack>
            </Box>
            <Box borderRadius={'1em'} height={'15em'} background={'#CCFDCE'}>
              <VStack spacing={6}>
                <Heading textAlign={'center'} marginTop={'1em'}>Stand out from the crowd</Heading>
                <UnorderedList>
                  <ListItem >Promote your listing and be seen by more buyers with sponsored placements across the eBay network.</ListItem>
                  <ListItem >Sell your items faster with eBay’s advertising tools.</ListItem>
                </UnorderedList>
              </VStack>
            </Box>
            <Box borderRadius={'1em'} height={'15em'} background={'#FFDFC9'}>
              <VStack spacing={6}>
                <Heading textAlign={'center'} marginTop={'1em'}>Ship with ease</Heading>
                <UnorderedList>
                  <ListItem>We provide recommendations for delivery, but to save on shipping, use an eBay delivery label.</ListItem>
                  <ListItem >Plus, if you’re selling locally, you can also offer Local Pickup.</ListItem>
                </UnorderedList>
              </VStack>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>

      {/* FAQ */}
      <Box marginTop={'2em'} px={'1em'}>
        <Heading>FAQ</Heading>
        <Box>
          <Select placeholder='How much does it cost to sell?'>
            <option value='option1' size='lg'>Once your item sells, we generally charge 10-15%
             of the final value. Your first 250 listings each month are free and, after, there’s a $0.35 
            insertion fee per listing. Learn more about fees- opens in new window or tab..</option>
          </Select>
          <Select placeholder='What’s the best way to ship my item?'>
            <option value='option1' size='lg'>eBay provides recommendations, but you can choose a
             preferred shipping carrier. Can’t make it to your local dropoff? Some offer free “ship from home” pickup. Print your shipping labels with eBay to receive a discount from the carriers we work with. If you don’t have a printer, 
            we also offer QR codes for eBay labels.</option>
          </Select>
          <Select placeholder='Can I sell locally on eBay?'>
            <option value='option1' size='lg'>When creating your listing, you can offer local pickup by selecting it in shipping details. Once the buyer pays, they’ll receive a QR code and a 6-digit code,
             which you can scan or enter with the app to confirm the sale.</option>
          </Select>
          <Select placeholder='How much will it cost to ship my item?'>
            <option value='option1' size='lg'>You can choose the shipping option that offers the greatest value and convenience for you. Learn more about shipping- opens in new window or tab..</option>
          </Select>
          <Select placeholder='How much does it cost to sell?'>
            <option value='option1' size='lg'>Once your item sells, we generally charge 10-15%
             of the final value. Your first 250 listings each month are free and, after, there’s a $0.35 
            insertion fee per listing. Learn more about fees- opens in new window or tab..</option>
          </Select>
          <Select placeholder='Where can I get shipping supplies?'>
            <option value='option1' size='lg'>You can use any packaging supplies you may already have at home or get free boxes from carriers. For an added touch, eBay branded supplies are available to purchase. Buy eBay branded packaging- opens in new window or tab..</option>
          </Select>
          <Select placeholder='How should I choose my listing price?'>
            <option value='option1' size='lg'>For most items, we can provide a price recommendation for you based on recently sold, similar items. How you price your item can depend on how you prefer to sell it—Auction or Buy It Now. Choose a lower starting price for auctions to create more interest.</option>
          </Select>
          <Select placeholder='How does eBay protect sellers?'>
            <option value='option1' size='lg'>We understand that things can happen that are out of your control as a seller. When they do, we have your back. Learn more about seller protection- opens in new window or tab..</option>
          </Select>
          <Select placeholder='What can I sell on eBay?'>
            <option value='option1' size='lg'>You can sell almost anything, from homemade goods to used or unused items from your closet. We restrict items that violate any laws, or infringe on intellectual property.</option>
          </Select>
          <Select placeholder='How do I create an account?'>
            <option value='option1' size='lg'>To get started, select List an item. We’ll help you create and verify your account, and set-up payment information during your first listing. Have your preferred payment account details on hand and be ready to receive a call or text on your phone for verification.</option>
          </Select>
          <Select placeholder='When will I get paid?'>
            <option value='option1' size='lg'>After we confirm the buyer's payment has been received, payouts are sent directly to your bank account, Monday through Friday (excluding bank holidays), within two business days. Once a payout is initiated, funds are typically available within 1-3 business days depending on your bank's normal processing time.</option>
          </Select>
          <Select placeholder='Do I have to pay federal income tax on my sales?'>
            <option value='option1' size='lg'>For tax year 2023, IRS regulations 
            require all businesses that process payments, including online marketplaces
            ike eBay, to issue a Form 1099-K for all sellers whose gross payments exceed th
             current reporting threshold of $20,000 and 200 transactions. However, just because 
             you receive a 1099-K doesn’t automatically mean that you’ll owe taxes on the amount 
             reported on your 1099-K. Form 1099-K reports proceeds (the total amount made from sales regardless 
             of whether you made a profit or a loss). You will need to determine what amount, if any, reported on Form 
             1099-K represents income to be declared on your tax return. Generally, you don’t have to pay taxes on the 
             sale of a personal item that was sold at a loss (you sold the item for less than what you paid for it). For 
             example, if you bought a bike for $1,000 last year, and then sold it on eBay today for $700, that $700 you 
             made would generally not be subject to income tax. Check out our 1099-K FAQ- opens in new window or tab..</option>
          </Select>
          <Select placeholder='How does eBay Ads work?'>
            <option value='option1' size='xl'>eBay Ads can help you build your business on eBay with effective advertising tools that create a meaningful connection between you and eBay’s global community of passionate buyers - and help you sell your items faster. Stand out among billions of listings on eBay by putting your items in front of interested buyers no matter the size of your budget. Learn More- opens in new window or tab..</option>
          </Select>
        </Box>
      </Box>


      {/* banner */}
      <Box marginTop={'2em'} position={'relative'} >
        <Box position={'absolute'} boxSize={'600px'} padding={'7em'} >
          <Heading>You've got this. We've got your back.</Heading>
          <Button margin={'1em'} style={{color: 'white',background:'blue',borderRadius:'4em'}}>List an item</Button>
        </Box>
        <Image src='https://i.ebayimg.com/00/s/NDk4WDE0NDA=/z/nVYAAOSwcCxkm1Et/$_57.JPG' />
      </Box>

      {/* footer */}
      <Box  marginTop={'1em'} marginBottom={'1em'}>
      <Box display={'flex'} marginTop={'2em'} px={'2em'} >
        <HStack>
        <VStack>
          <Text as={'b'} >Selling on eBay</Text>
          <Link>Seller Center</Link>
          <Link>Sell for charity</Link>
          <Link>Business tools</Link>
          </VStack>
          <VStack>
        <Text as={'b'} >Support</Text>
          <Link>Customer service</Link>
          <Link>Seller policies</Link>
          <Link>Community</Link>
          </VStack>
        </HStack>
        </Box>
        <Text marginTop={'2em'} style={{color:"grey"}}>Copyright © 1995-2024 eBay Inc. All Rights Reserved. Accessibility, User Agreement, Privacy, Payments Terms of Use, Cookies, CA Privacy Notice, Your Privacy Choices and AdChoice	
</Text>
      </Box>
    </div>

  )
}

export default Sell