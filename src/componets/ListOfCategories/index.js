import React, {useEffect, useState, Fragment} from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';
import { useCategoriesData } from '../../hooks/useCategoriesData';

export const ListOfCategories = () => {


    const [showFixed, setShowFixed] = useState(false)

    const {categories, loading} = useCategoriesData()


    useEffect(()=>{
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200
            showFixed != newShowFixed && 
            setShowFixed(newShowFixed)
        }

        document.addEventListener('scroll', onScroll)
        return () => document.removeEventListener('scroll', onScroll)
    },[showFixed])


    const renderList = (fixed) => (
        <List fixed ={fixed}>
        {
            loading ? <Item key='loading'><Category/></Item> :
            categories.map(category => <Item><Category {...category}  key={category.id} /></Item>)
        }
         </List>
    )


    return(
        <Fragment>
       {renderList()}
       {showFixed && renderList(true)}
       </Fragment>
    )
}