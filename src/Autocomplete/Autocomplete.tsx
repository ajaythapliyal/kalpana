import { useState } from 'react'
import styles from './Autocomplete.module.scss'

export function Autocomplete({defaultItem, items, onItemSelect} : {defaultItem : string,  items: readonly string[], onItemSelect: (item : string) => void}){
    const [item, setItem] = useState(defaultItem);
    const  getFilteredItems = (searchItem : string) => items.filter(item =>  searchItem.length && item.includes(searchItem) )
    const onSuggestionClick = (item : string)=>{
        onItemSelect(item);
        setItem(item);
    }
    const isSuggestionsVisible = (item : string, filteredItems: string[])=> {
        return !(filteredItems.length === 1 && filteredItems[0] === item)
    }

    const filteredItems = getFilteredItems(item);
    return <div>
            <input value={item} onChange={(event)=> setItem(event.target.value)} placeholder={"eg. Hydrogen"} className={styles.input}></input>
            { isSuggestionsVisible(item, filteredItems) && filteredItems.map(filteredItem => <div onClick={()=> {onSuggestionClick(filteredItem)}} className={styles.suggestion} key={filteredItem}><p>{filteredItem}</p></div>)}
        </div>
}