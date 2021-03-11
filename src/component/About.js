import { ResponsiveChoropleth } from "@nivo/geo";
import axios from "axios";
import { useEffect, useState } from "react";
import dataJson from '../unity/world_countries.json';

export default function About(){

    const [summary, setSummary] = useState([]);
    const [global, setGlobal] = useState([]);
    const SUMMARY_API = 'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases2_v1/FeatureServer/2/query?where=1%3D1&outFields=Confirmed,ISO3&outSR=4326&f=json';

 
  
    useEffect(() =>{
        axios.get(SUMMARY_API).then(function (response) {
            console.log(response.data.features);
            let data_summary = response.data.features.map(item => {
                let val = {};
                val.id = item.attributes.ISO3;
                val.value = item.attributes.Confirmed;

                return val;
            })

            setSummary(data_summary);
        }).catch(function (error) {
            console.error(error);
        });

        // eslint-disable-next-line
    }, [])


    console.log('data' , summary);
    console.log('global', global);
    console.log(dataJson.type);
    return (
        <div id="sodo"><br/>          
           <ResponsiveChoropleth
                data={summary}
                features={dataJson.features}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                colors="nivo"
                domain={[ 0, 1000000 ]}
                unknownColor="#666666"
                label="properties.name"
                valueFormat=".2s"
                projectionTranslation={[ 0.5, 0.5 ]}
                projectionRotation={[ 0, 0, 0 ]}
                enableGraticule={true}
                graticuleLineColor="#dddddd"
                borderWidth={0.5}
                borderColor="#152538"
                legends={[
                    {
                        anchor: 'bottom-left',
                        direction: 'column',
                        justify: true,
                        translateX: 20,
                        translateY: -100,
                        itemsSpacing: 0,
                        itemWidth: 94,
                        itemHeight: 18,
                        itemDirection: 'left-to-right',
                        itemTextColor: '#444444',
                        itemOpacity: 0.85,
                        symbolSize: 18,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000000',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />      
        </div>

        
    )
}