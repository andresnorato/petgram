import React, {useRef, useEffect, useState} from "react";
import { Article,  Img, ImgWrapper } from "./styles";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton";
import { ToggleLikeMutation } from "../../container/ToggleLikeMutation";



export const PhotoCard = ({
  id,
  src = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png",
  likes = 0,
}) => {

  const likekey = `like-${id}`;
  const [liked, setliked] = useLocalStorage(likekey, false)
  const [show, element ] = useNearScreen()

  
  
  
  
  return (
    <Article ref={element}>
      {show  &&  <>  <a href={`/?detail=${id}`}>
        <ImgWrapper>
          <Img src={src} />
        </ImgWrapper>
      </a> 
      

      {/* {console.log(liked)} */}
         <ToggleLikeMutation >
           {
           (toggleLike)=> {
             const handleFavClick =()=> 
             {
               !liked && toggleLike({ variables: {
                 input: {id}
               } })
               setliked(!liked)
              };

             return <FavButton likes={likes} liked={liked} onClick={handleFavClick} />
           }}
         </ToggleLikeMutation>
      </> }
     

    </Article>
  );    
};
