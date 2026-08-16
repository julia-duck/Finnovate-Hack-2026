import {Header} from './App.jsx'
import './Company.css'
import companyData from './profiles.json'
import {useState} from 'react'
import {NavLink, Route, Routes} from 'react-router-dom'
import {Home} from './App.jsx'


function Company({company, editCompany}) {
    const [isEditing, setIsEditing] = useState(false);
    
    return (
        <div>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
        
        <NavLink to="/">Home</NavLink>

        {(isEditing) ? <Editing company={company} editCompany={editCompany} setIsEditing={setIsEditing} /> : <Display company={company} setIsEditing={setIsEditing} />}
        </div>
    )
}

function Editing({company, editCompany, setIsEditing}) {
    return (
        <div>
            <Header />
            <div className="profile-box">
                <h3>Edit Company Profile</h3>
                <p>Company Name</p>
                <input type="text" placeholder="Company Name" value={company.company} onChange={(e) => editCompany({...company, company: e.target.value})} />
                <p>Industry</p>
                <input type="text" placeholder="Industry" value={company.industry} onChange={(e) => editCompany({...company, industry: e.target.value})} />
                <p>Carbon Footprint Score</p>
                <input type="text" placeholder="Carbon Footprint Score" value={company.metrics.carbonFootprintScore} onChange={(e) => editCompany({...company, metrics: {...company.metrics, carbonFootprintScore: e.target.value}})} />
                <p>Recycled Materials Percentage</p>
                <input type="text" placeholder="Recycled Materials Percentage" value={company.metrics.recycledMaterialsPercent} onChange={(e) => editCompany({...company, metrics: {...company.metrics, recycledMaterialsPercent: e.target.value}})} />
                <p>Packaging Type</p>
                <input type="text" placeholder="Packaging Type" value={company.metrics.packagingType} onChange={(e) => editCompany({...company, metrics: {...company.metrics, packagingType: e.target.value}})} />
                <p>Renewable Energy Percentage</p>
                <input type="text" placeholder="Renewable Energy Percentage" value={company.metrics.renewableEnergyPercent} onChange={(e) => editCompany({...company, metrics: {...company.metrics, renewableEnergyPercent: e.target.value}})} />
                <p>Water Saved Per Unit</p>
                <input type="text" placeholder="Water Saved Per Unit" value={company.metrics.waterSavedPerUnit} onChange={(e) => editCompany({...company, metrics: {...company.metrics, waterSavedPerUnit: e.target.value}})} />
                <button className="edit-button" onClick={() => setIsEditing(false)}><u>Save</u></button>
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
                <p><b>Metrics</b><br/>
                <b>Carbon footprint per item: </b> {company.metrics.carbonFootprintScore} <br/>
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