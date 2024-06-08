import React from 'react'
import {data} from "../db"
import {Link,Heading, Image,Box} from "@chakra-ui/react"

const ShowCategoryProduct = () => {
console.log(data);
  return (
    <div style={{marginTop:"5em"}}>
      <Heading size={"lg"} >Explore Popular Categories</Heading>
      <Box display="flex" alignItems="center" justifyContent="space-between" gap={5}>
        
        {data.map((ele)=>(
            <div key={ele.id} style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <Image  boxSize='180px'  borderRadius='full'  src={ele.image} alt="image" />
                <Link as={'b'}>{ele.title}</Link>
            </div>
        ))}
      </Box>
    </div>
  )
}

export default ShowCategoryProduct