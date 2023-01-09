import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { StoreState } from './context/Context'
import Editor from './Editor'
import Pre from './Pre'

   
const MainEditor = () => {
    const params = useParams();
    const {id} = params; 

    const {state:{store}, dispatch} = StoreState()
    const [stateData, setStateData] = useState([])
    const getData=data=>setStateData(data)

return(
    <div className='container_fluid main__editor row'>
        <div className="col">
            <Editor   
            getData={getData}
            />
        </div>
        <div className="col">
            <Pre
                data={stateData}
                template_Id={id}
            />
        </div>
    </div>
)

}

export default MainEditor;