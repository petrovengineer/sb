import React, { useState } from 'react';
import './style.css';
import {ReactComponent as Arrow} from '../svg/next.svg';

export const SelectWrapper = ({options, multi, selected=multi?[]:null, setSelected})=>{
    const [select, showSelect] = useState(false);
    return (
        <div style={{display:'inline-block'}}>
            <div className={['btn', select?'btn-selected':'btn-hover'].join(' ')} 
                onClick={(e)=>{
                    if(e.target.id!=='btn-close'){showSelect(!select)};
                }}>
                {multi?<div className="btn-text">{selected.map((s,i)=>{
                    return <span className="btn-item" key={'s'+i}>
                        {s}
                        <span className="btn-item-close" id="btn-close" onClick={()=>{
                            const newSelected = [...selected];
                            newSelected.splice(i,1);
                            setSelected(newSelected);
                        }}>x</span>
                    </span>
                })}{selected.length===0?'Выбрать':null}</div>
                :<div className="btn-text">{selected?options.find(o=>selected===o.value).label:'Выбрать'}</div>
                }
                <div className="btn-right">
                    <span className="btn-separator"></span>
                        <Arrow className="btn-arrow"/>
                </div>
            </div>
{/* ==========================ITEMS======================================================= */}
            {select?<div className="items">{
                multi?options.filter(o=>selected.indexOf(o.value)>-1).length!==options.length?
                        options.map((o, i)=>(selected.indexOf(o.value)===-1?
                            <div key={'k'+i} className="item" 
                                onClick={()=>{setSelected([...selected, o.value]);}}>
                                {o.label}
                            </div>
                        :null))
                    :<div className="item" style={{color:'gray'}}>Пусто</div>
                :options.length!=0?options.map((o, i)=>(
                    o.value!==selected?
                        <div key={'k'+i} className="item" onClick={()=>{showSelect(false); setSelected(o.value);}}>
                                {o.label}
                        </div>
                    :null
                )):<div className="item" style={{color:'gray'}}>Пусто</div>
                }</div>
                :null
            }
            <div className={select?'bg':''} onClick={()=>showSelect(false)}></div>
        </div>
    )
}

SelectWrapper.defaultProps = {
    // onChange: ()=>{console.log("HELLOW")}
}


export default SelectWrapper;