import { useState } from 'react'
import styles from './Autocomplete.module.scss'

export function Autocomplete({defaultItem, items, onItemSelect, placeholder} : {defaultItem : string,  items: readonly string[], onItemSelect: (item : string) => void, placeholder?: string }){
    const [item, setItem] = useState(defaultItem);
    const [isDirty, setIsDirty] = useState(false);
    const  getFilteredItems = (searchItem : string) => items.filter(item =>  searchItem.length && item.includes(searchItem) )
    const onSuggestionClick = (item : string)=>{
        setItem(item);
        setIsDirty(false)
        onItemSelect(item);
    }
    const handleChange =(searchItem : string) =>{
        setItem(searchItem.trim().toLowerCase());
        setIsDirty(true);
    }
    
    const filteredItems = getFilteredItems(item);
    return <div>
            <input value={item} onChange={(event)=> handleChange(event.target.value)} placeholder={placeholder} className={styles.input}></input>
            { isDirty && filteredItems.map(filteredItem => <div onClick={()=> {onSuggestionClick(filteredItem)}} className={styles.suggestion} key={filteredItem}><p>{filteredItem}</p></div>)}
        </div>
}