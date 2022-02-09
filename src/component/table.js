import React from 'react'
import "./style.css"
import Props from "./prop"

const table = () => {
    return (
        <table class="table">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Marks%</th>
                    <th>Status</th>
                </tr>
            </thead>

            {/* with props */}
            <tbody>
                <Props />
            </tbody>


            {/* without props */}
            {/* <tbody>
          <tr>
                <td data-label="S.No">1</td>
                <td data-label="Name">Dinesh</td>
                <td data-label="Age">34</td>
                <td data-label="Marks%">50%</td>
                <td data-label="Staus">Passed</td>
          </tr>

          <tr>
                <td data-label="S.No">2</td>
                <td data-label="Name">Kamal</td>
                <td data-label="Age">2323578952147</td>
                <td data-label="Marks%">70%</td>
                <td data-label="Staus">Passed</td>
          </tr>

    </tbody> */}
        </table>
    )
}

export default table