import React, { useState } from 'react';
import Select from 'react-select';
import './style.css';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

export const SelectWrapper = (props)=>{
    const [selected, setSelected] = useState('chocolate');
    const [select, showSelect] = useState(false);
    return (
        <div style={{display:'inline-block'}}>
            <div className={select?'bg':''} onClick={()=>showSelect(false)}></div>
            <div className={['btn', select?'btn-selected':'btn-hover'].join(' ')} onClick={()=>showSelect(!select)}>
                <div className="btn-text">{selected?options.find(o=>selected==o.value).label:'Select'}</div>
            </div>
                {select?<div className="items">
                    {options.map((o, i)=>{
                        return o.value!=selected?
                            <div key={'k'+i} className="item" onClick={()=>{setSelected(o.value); showSelect(false);}}>{o.label}</div>
                            :null
                    })}
                </div>:null}
        </div>
    )
}

SelectWrapper.defaultProps = {
    // onChange: ()=>{console.log("HELLOW")}
}


export default SelectWrapper;