import React,{useState} from "react";
import "../App.css";
export default function ConnectUs() {
  const host = "http://localhost:5000";
  // const history = useHistory();
  const [connectUs, setConnectUs] = useState({
    email: ""
  });
  const onChange = (e) => {
    setConnectUs({ ...connectUs, [e.target.name]: e.target.value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { email } = connectUs;
    const res = await fetch(`${host}/api/connect-us-routes/connectUs`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
email 
      })
    })
    const data = await res.json();
    if(res.status=== 500 || !data){
      window.alert("Invalid registration");
    }else{
      window.alert("registration Successfull");

    }
  };

  return (
    <div className="blog-connect">
      <form method="POST">
        <div className="input">
          <input
            type="email" 
            className="inpult-field email"
            name="email"
            placeholder="Enter the e-mail"
            onChange={onChange}
            value={connectUs.email}
          />
          <input
            type="submit"
            className="inpult-field subscribe"
            
            onClick={postData}
            value="SUBSCRIBE"
          />
        </div>
      </form>
    </div>
  );
}
