import axios from "axios";
import { useEffect, useState } from "react";

export default function Summary(){

    const [data, setData] = useState([]);

    const SUMMARY_API = 'https://api.covid19api.com/countries';

    useEffect(() => {
      axios
        .get(SUMMARY_API)
        .then(result =>{    
            console.log('inthen', result);
            setData(result.data)
        });

        window.$(document).ready(function() {
            window.$('#selectContry').select2({
              tags: false,
              width: 'resolve',
              placeholder:'Vui lòng chọn',
              allowClear : true 
            });
        });
    }, []);
  
    console.log('data:', data);
    return (
      <div>
        <select id="selectContry">
          {data.map((item, index) => (
            
            <option key={index} value={item.ISO2}>
              {item.Country}
            </option>
          ))}
        </select>
  
      </div>


    );
}