import { useEffect, useState } from "react"

export default function Contract(props){
    const styleInput = {
        margin: "0 2% 2% 25%",
        width: "50%"
    }
    const styleForm ={
        width: "50%",
        position: "relative",
        top: "1%",
        left: "25%",
    }

    const [FormData, setFormData] = useState({
        email : "",
        checkbox : true,
        nameMe : ""
    });
    useEffect(() =>{
        if(props.email){
            setFormData( {
                ...FormData,
                email : props.email
            });
        }
        // eslint-disable-next-line
    }, [])
    const handleOnChange = e =>{
        let target = e.target;
        let val = target.type === 'checkbox' ? target.checked : target.value;

        setFormData({
            ...FormData,
            [target.name] : val
        });
    }

    let emailTemplate = {
        from_name : "GrandUp",
        to_name : FormData.nameMe,
        message : `Thanks for Subcribe ${FormData.checkbox ? 'Happy Hacking' : 'Happing Jaking'}`,
        reply_to : "",
        to_Email : FormData.email
    }

    const handleClick = e =>{
        e.preventDefault();
        console.log('formsub:', FormData);
        sendFeedback(process.env.REACT_APP_TEMPLATE_MAIL, emailTemplate);

    }

    function sendFeedback (templateId, variables) {
        window.emailjs.send(
         'service_7s8gcps', templateId,
          variables
          ).then(res => {
            console.log('Email successfully sent!')
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }

    return (<div>
        <form id="contract_subcribe" style={styleForm} method='post'>
            <div className="form-group">
                <input style={styleInput} className="form-control" type="text" placeholder="Email" name="email" value={FormData.email} onChange={(e) => handleOnChange(e)}></input>
                <input style={styleInput} className="form-control" type="text" placeholder="Name" name="nameMe" value={FormData.nameMe} onChange={(e) => handleOnChange(e)}></input>
                <input style={styleInput} className="form-control" type="checkbox" name="checkbox" checked={FormData.checkbox} onChange={(e) => handleOnChange(e)}></input>
                <button type="submit" className="btn btn-success" onClick={(e) => handleClick(e)} >Subcribe</button>
            </div>
        </form>
    </div>)
}