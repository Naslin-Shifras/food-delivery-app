import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'


const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our menu</h1>
        <p className='explore-menu-text'>Choose from a diverse selection of mouthwatering dishes, each crafted with the finest ingredients and a sprinkle of culinary magic, promising a delightful dining adventure.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            }

            )}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu