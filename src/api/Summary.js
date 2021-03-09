import axios from "axios";
import { useEffect, useState } from "react";

export default function Summary(){

    const [data, setData] = useState([]);

    const SUMMARY_API = 'https://api.covid19api.com/countries';
    const USER_API = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
      axios
        .get(SUMMARY_API)
        .then(result =>{    
            console.log('inthen', result);
            setData(result.data)
        });
    }, []);
  
    console.log('data:', data);
    return (
      <div>
        <select id="selectContry">
          {data.map((item, index) => (
            
            <option key={index}>
              {item.Country}: {item.ISO2}
            </option>
          ))}
        </select>
  
      </div>


    );
}