import React from 'react';
import Axios from 'axios';

function PostForm() {
    const url = "https://webhook.site/da7a26cb-a56f-4ef2-9250-aa9ae90877dd"
    const [data, setData] = useState({
        wallet: "",
        startDate:"",
        endDate: "",
        currency:""
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            wallet: data.wallet,
            startDate: data.startDate,
            endDate: data.endDate,
            currency: data.currency
        })
        .then(res=>{
            console.log(res.data)
        })
    }   

    function handle(e) {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return (
            <div>
                <form onSubmit={(e)=> submit(e)}>
                   <div>
                   <label> wallet : </label>
                   <input 
                       type='text' 
                       id="wallet"
                       value={data.wallet} 
                       onChange={(e) => handle(e) } 
                   />
                   </div>

                   <div>
                   <label> start date:  </label>
                   <input 
                       type='date' 
                       id="startDate"
                       value={data.startDate} 
                       onChange={(e) => handle(e) } 
                   />
                   </div>

                   <div>
                   <label> End date:  </label>
                   <input 
                       type='date' 
                       id="endDate"
                       value={data.endDate} 
                       onChange={(e) => handle(e) } 
                       />
                   </div>

                   <div>
                   <label> Currency:  </label>
                   
                   </div>
                   <button>Submit</button>
               </form>

            </div>
    );
}
