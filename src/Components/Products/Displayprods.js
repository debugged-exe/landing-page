import React,{useState} from 'react';
import 'tachyons';



const Displayprods=({products})=>  {

		return (
			<div style={{paddingTop:70}}>
					<div>
					{
            products.map((data)=>{
             return(
							<div>
							<h1 className='bl bw2 pl2  mt-5 mb3 ml4' style={{borderLeftColor:'#fa741b'}}>	{data.company}</h1>
							<div className='flex flex-wrap '>
							{data.items.map((sub)=>{
								return(
                   <div className="ma4 shadow-2">
									 <img src={sub.image} height='270' width='240'/>
									 <h4 className="tc black ma3">{sub.name}</h4>
									 </div>
								 )
							})}
							</div>
							</div>
						)
						}
						)
				  }
					</div>
			</div>
		);
}

export default Displayprods;
