import { useState } from 'react'
import profiles from './profiles.json';
/*import reactLogo from './assets/react.svg'*/
import './App.css'

function UserPage() 
{
  var selected;
  return (
    //html code here
    <div>
      <Header />
      <h1>Featured Companies:</h1>
          {
            // <div style={{display: 'flex', justifyContent: 'center'}}>
            //     <input className="search-bar" placeholder="Search Companies" />
            // </div>
          }
      <CompanyList />
    </div>
  )
}

function CompanyList() 
{
  return (
    <div>
      <table id="companyTable">
        <thead key="thead">
          <tr className="header">
            <th style={{width: "150px"}}>Name</th>
            <th>Industry</th>
            <th>Carbon Footprint Score</th>
            <th>Recycled Materials Percent</th>
            <th>Packaging Type</th>
            <th>Renewable Energy Percent</th>
            <th>Material</th>
          </tr>
        </thead>
        <tbody key="tbody">
        { profiles.map((company, i)=> (
            <tr key={i}>
              <td>{company.company}</td>
              <td>{company.industry}</td>
              <td>{company.metrics.carbonFootprintScore}</td>
              <td>{company.metrics.renewableEnergyPercent}</td>
              <td>{company.metrics.recycledMaterialsPercent}</td>
              <td>{company.metrics.packagingType}</td>
              <td>{company.metrics.waterSavedPerUnit}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  )
}

function Header() {
  return (
    <div>
      <h1 className="title">SUSTAINABUDDIES</h1>
    </div>
  )
}

export default UserPage
