import {Header} from './App.jsx'
import './Company.css'
import companyData from './profiles.json'
import {useState} from 'react'

function Company() {
    const [company, editCompany] = useState(companyData[0]);
    const [isEditing, setIsEditing] = useState(false);
    
    return (
        (isEditing) ? <Editing company={company} editCompany={editCompany} /> : <Display company={company} setIsEditing={setIsEditing} />
    )
}

function Editing({company, editCompany}) {
    return (
        <div>
            <Header />
            <div className="profile-box">
                <h3>My Company Profile</h3>
                <input type="text" placeholder="Company Name" value={company.company} onChange={(e) => editCompany({...company, company: e.target.value})} />
                <p><b>Industry:</b> {company.industry}</p>
                <p><b>Metrics:</b><br/>
                <b>Carbon footprint per item: </b> {company.metrics.carbonFootprintPerItem} <br/>
                <b>Recycled Materials percentage: </b> {company.metrics.recycledMaterialsPercent} <br/>
                <b>Packaging type: </b> {company.metrics.packagingType}<br/>
                <b>Renewable energy percentage: </b> {company.metrics.renewableEnergyPercent} <br/>
                <b>Water saved per unit: </b> {company.metrics.waterSavedPerUnit}</p>
                <button className="edit-button"><u>Save</u></button>
            </div>
        </div>
    )
}


function Display({company, setIsEditing}) {
    function handleEdit() {
        setIsEditing(true);
    }
    return (
        <div>
            <Header />
            <div className="profile-box">
                <h3>My Company Profile</h3>
                <p><b>Company Name:</b> {company.company} </p>
                <p><b>Industry:</b> {company.industry}</p>
                <p><b>Metrics:</b><br/>
                <b>Carbon footprint per item: </b> {company.metrics.carbonFootprintPerItem} <br/>
                <b>Recycled Materials percentage: </b> {company.metrics.recycledMaterialsPercent} <br/>
                <b>Packaging type: </b> {company.metrics.packagingType}<br/>
                <b>Renewable energy percentage: </b> {company.metrics.renewableEnergyPercent} <br/>
                <b>Water saved per unit: </b> {company.metrics.waterSavedPerUnit}</p>
                <button className="edit-button" onClick={handleEdit}><u>Edit</u></button>
            </div>
        </div>
    )
}
export default Company