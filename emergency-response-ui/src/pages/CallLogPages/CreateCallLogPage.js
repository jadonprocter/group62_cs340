import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
function CreateCallLogPage() {
  const history = useHistory();
  const [callID, setCallID] = useState();
  const [shiftID, setShiftID] = useState();
  const [dispatcherID, setDispatcherID] = useState();
  const [timeStamp, setTimeStamp] = useState();
  const [responseType, setResponseType] = useState();
  const [callerFirstName, setCallerFirstName] = useState();
  const [callerLastName, setCallerLastName] = useState();
  const [chiefComplaint, setChiefComplaint] = useState();
  const [areaCode, setAreaCode] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [streetAddress, setStreetAddress] = useState();
  const [zipCode, setZipCode] = useState();
  const [phoneNotes, setPhoneNotes] = useState();

  const createCallLog = (newCallLogObj) => {
    console.log(newCallLogObj);
    setTimeStamp("default");
    alert("Call Log Created (not really though there is no backend yet)");
    history.push("/call-logs");
  };

  return (
    <form>
      <div>
        <label>
          Call ID:
          <input
            type="number"
            value={callID}
            placeholder="Call ID"
            onChange={(e) => setCallID(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Shift ID:
          <input
            type="number"
            value={shiftID}
            placeholder="Shift ID"
            onChange={(e) => setShiftID(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Dispatcher ID:
          <input
            type="number"
            value={dispatcherID}
            placeholder="Dispatcher ID"
            onChange={(e) => setDispatcherID(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Response Type:
          <select onChange={(e) => setResponseType(e.target.value)}>
            <option value="default">Default</option>
            <option value="different-default">Different Default</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Caller First Name:
          <input
            type="text"
            value={callerFirstName}
            placeholder="Caller First Name"
            onChange={(e) => setCallerFirstName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Caller Last Name:
          <input
            type="text"
            value={callerLastName}
            placeholder="Caller Last Name"
            onChange={(e) => setCallerLastName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Chief Complaint:
          <input
            type="text"
            value={chiefComplaint}
            placeholder="Chief Complaint"
            onChange={(e) => setChiefComplaint(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Area Code:
          <input
            type="text"
            value={areaCode}
            placeholder="000"
            onChange={(e) => setAreaCode(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            placeholder="000-0000 (exclude area code)"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Street Address:
          <input
            type="text"
            value={streetAddress}
            placeholder="123 Example Street"
            onChange={(e) => setStreetAddress(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Zip Code:
          <input
            type="text"
            value={zipCode}
            placeholder="12345"
            onChange={(e) => setZipCode(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Phone Notes:
          <input
            type="text"
            value={phoneNotes}
            placeholder="Notes..."
            onChange={(e) => setPhoneNotes(e.target.value)}
          />
        </label>
      </div>
      <div>
        <button
          onClick={() =>
            createCallLog({
              callID,
              shiftID,
              dispatcherID,
              timeStamp,
              responseType,
              callerFirstName,
              callerLastName,
              chiefComplaint,
              areaCode,
              phoneNumber,
              streetAddress,
              zipCode,
              phoneNotes,
            })
          }
        >
          Create New Call Log
        </button>
      </div>
    </form>
  );
}

export default CreateCallLogPage;
