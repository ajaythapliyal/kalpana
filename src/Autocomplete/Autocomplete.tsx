import React, { useState } from 'react'
import styles from './Autocomplete.module.scss'

export function Autocomplete({defaultItem, items, onItemSelect, placeholder} : {defaultItem : string,  items: readonly string[], onItemSelect: (item : string) => void, placeholder?: string }){
    const [item, setItem] = useState(defaultItem);
    const [isDirty, setIsDirty] = useState(false);
    const [activeSuggestion, setActiveSuggestion ]  = useState(-1);

    const  getFilteredItems = (searchItem : string) => items.filter(item =>  searchItem.length && item.includes(searchItem) )

    const onSelectSuggestion = (item : string)=>{
        setActiveSuggestion(-1)
        setItem(item);
        setIsDirty(false)
        onItemSelect(item);
    }
    
    const handleChange =(searchItem : string) =>{
        setItem(searchItem.trim().toLowerCase());
        setActiveSuggestion(-1)
        setIsDirty(true);
    }

    const onKeyPress = (code : string)=>{
        if(code === "ArrowDown"){
            setActiveSuggestion(activeSuggestion === (filteredItems.length-1)? 0 : (activeSuggestion + 1))
        }
        else if(code === "ArrowUp"){
            setActiveSuggestion(activeSuggestion === -1 ? filteredItems.length-1 :activeSuggestion - 1)
        }
        else if(code === "Enter"){
            onSelectSuggestion(filteredItems[activeSuggestion])
        }
    }
    
    const filteredItems = getFilteredItems(item);
    return <div onKeyDown={(e)=> { onKeyPress(e.code)}}>
            <input value={item} onChange={(event)=> handleChange(event.target.value)} placeholder={placeholder} className={styles.input}></input>
            { isDirty && filteredItems.map((filteredItem, index) => <div onClick={()=> {onSelectSuggestion(filteredItem)}} onMouseEnter={(e)=> setActiveSuggestion(index)} className={`${styles.suggestion} ${activeSuggestion === index ? styles['active-suggestion'] : ''}`} key={filteredItem}><p>{filteredItem}</p></div>)}
        </div>
}