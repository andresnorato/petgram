import React from 'react';
import { PhotoCard } from '../PhotoCard';
import { ListPhotoCards } from './styles';
import {} from '../../container/ListOfPhtotoCards'


 export const ListOfPhotoCardsComponent = ({data: {photos = [] }}) => {
     console.log(photos)
    return (
        <ListPhotoCards>
            {
                photos.map(photo => <PhotoCard key={photo.id} {...photo}/>)
            }
        </ListPhotoCards>
    )
}
