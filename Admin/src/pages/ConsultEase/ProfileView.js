import React from "react"
import { useState, useEffect } from "react"

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"

import BootstrapTable from "react-bootstrap-table-next"
import cellEditFactory, { Type } from "react-bootstrap-table2-editor"

import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import Avatar from "react-avatar"
import AvatarSample1 from "../../assets/images/users/avatar-6.jpg"

// const ProfileView = () => {
//   document.title =
//     "Responsive Tables | Veltrix - React Admin & Dashboard Template"

//   const products = [
//     { id: 1, age: 25, qty: 1500, cost: 1000 },
//     { id: 2, age: 34, qty: 1900, cost: 1300 },
//     { id: 3, age: 67, qty: 1300, cost: 1300 },
//     { id: 4, age: 23, qty: 1100, cost: 6400 },
//     { id: 5, age: 78, qty: 1400, cost: 4000 },
//   ]

//   const columns = [
//     {
//       dataField: "id",
//       text: "ID",
//     },
//     {
//       dataField: "age",
//       text: "Age(AutoFill)",
//     },
//     {
//       dataField: "qty",
//       text: "Qty(AutoFill and Editable)",
//     },
//     {
//       dataField: "cost",
//       text: "Cost(Editable)",
//     },
//   ]

//   return (
//     <React.Fragment>
//       <div className="page-content">
//         <div className="container-fluid">
//           <Breadcrumbs
//             maintitle="Consultease"
//             title="ProfileView.js"
//             breadcrumbItem="Profile View"
//           />
//           <Row>
//             <Col>
//               <Card>
//                 <CardBody>
//                   <CardTitle className="h4">Datatable Editable </CardTitle>

//                   <div className="table-responsive">
//                     <BootstrapTable
//                       keyField="id"
//                       data={products}
//                       columns={columns}
//                       cellEdit={cellEditFactory({ mode: "click" })}
//                     />
//                   </div>
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>
//           <Row>
//             <Col>
//               <Card>
//                 <CardBody>
//                   <CardTitle className="h4">Profile Search Results</CardTitle>
//                   {/* <p className="card-title-desc">
//                     This is an experimental awesome solution for responsive
//                     tables with complex data.
//                   </p> */}

//                   <div className="table-rep-plugin">
//                     <div
//                       className="table-responsive mb-0"
//                       data-pattern="priority-columns"
//                     >
//                       <Table
//                         id="tech-companies-1"
//                         className="table table-striped table-bordered"
//                       >
//                         <Thead>
//                           <Tr>
//                             <Th>Profile Picture</Th>
//                             <Th data-priority="1">@Profile_Handle</Th>
//                             <Th data-priority="3">First Name</Th>
//                             <Th data-priority="1">Last Name</Th>
//                             <Th data-priority="1">Auth_token</Th>
//                             <Th data-priority="1">Active</Th>
//                             <Th data-priority="1">Created_At</Th>
//                             <Th data-priority="1">Updated_At</Th>
//                             <Th data-priority="1">Deleted</Th>
//                             <Th data-priority="1">Last Login</Th>
//                             <Th data-priority="1">Mobile</Th>
//                             <Th data-priority="1"></Th>
//                             <Th data-priority="1"></Th>
//                             <Th data-priority="1"></Th>
//                             <Th data-priority="1"></Th>
//                             <Th data-priority="1"></Th>
//                             <Th data-priority="1"></Th>
//                           </Tr>
//                         </Thead>
//                         <Tbody>
//                           <Tr>
//                             {/* <Th>
//                               GOOG <span className="co-name">Google Inc.</span>
//                             </Th> */}
//                             <Th>
//                               <Avatar
//                                 size="50"
//                                 round="50%"
//                                 name={"profile.fname"}
//                                 src={AvatarSample1}
//                               />
//                             </Th>
//                             <Th>
//                               @<span className="co-name">elonmusk</span>
//                             </Th>
//                             <Td>Elon</Td>
//                             <Td>Musk</Td>
//                           </Tr>
//                           {/* <Tr>
//                             <Th>
//                               <Avatar
//                                 size="50"
//                                 round="50%"
//                                 name={"profile.fname"}
//                                 src={AvatarSample1}
//                               />
//                             </Th>
//                             <Th>
//                               @{" "}
//                               <span className="co-name">
//                                 {"profile_data.profile.handle"}
//                               </span>
//                             </Th>
//                             <Td>{"profile_data.fname"}</Td>
//                             <Td>{"profile_data.lname"}</Td>
//                           </Tr> */}
//                         </Tbody>
//                       </Table>
//                     </div>
//                   </div>
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>
//         </div>
//       </div>
//     </React.Fragment>
//   )
// }

// export default ProfileView

// import React, { useState } from "react";
// import BootstrapTable from "react-bootstrap-table-next";
// import cellEditFactory, { Type } from "react-bootstrap-table2-editor";

const data = [
  { id: 1, name: "John Doe", age: 30, city: "New York" },
  { id: 2, name: "Jane Smith", age: 25, city: "San Francisco" },
  { id: 3, name: "Bob Johnson", age: 40, city: "Chicago" },
]

const columns = [
  { dataField: "id", text: "ID" },
  { dataField: "name", text: "Name" },
  { dataField: "age", text: "Age", editor: { type: Type.TEXT } },
  { dataField: "city", text: "City", editor: { type: Type.TEXT } },
]

const EditableTable = () => {
  const [tableData, setTableData] = useState(data)
  const [isHorizontal, setIsHorizontal] = useState(false)

  const handleToggleClick = () => {
    setIsHorizontal(!isHorizontal)
  }

  const handleSaveClick = () => {
    console.log("Table data saved:", tableData)
  }

  const transposeData = data => {
    const newData = []
    const fields = Object.keys(data[0])
    for (let i = 0; i < fields.length; i++) {
      const fieldData = [{ [fields[i]]: fields[i] }]
      for (let j = 0; j < data.length; j++) {
        fieldData.push({ [fields[i]]: data[j][fields[i]] })
      }
      newData.push(fieldData)
    }
    return newData
  }

  const transposedData = transposeData(tableData)

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs
            maintitle="Consultease"
            title="ProfileView.js"
            breadcrumbItem="Profile View"
          />
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Datatable Editable </CardTitle>

                  {/* <div className="table-responsive">
                    <BootstrapTable
                      keyField="id"
                      data={products}
                      columns={columns}
                      cellEdit={cellEditFactory({ mode: "click" })}
                    />
                  </div> */}
                  <div>
                    <BootstrapTable
                      keyField="id"
                      data={isHorizontal ? transposedData : tableData}
                      columns={
                        isHorizontal
                          ? [{ dataField: " ", text: " " }, ...columns]
                          : columns
                      }
                      cellEdit={cellEditFactory({
                        mode: "click",
                        blurToSave: true,
                      })}
                    />
                    <button onClick={handleToggleClick}>
                      {isHorizontal
                        ? "Show vertical table"
                        : "Show horizontal table"}
                    </button>
                    <button onClick={handleSaveClick}>Save</button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Profile Search Results</CardTitle>
                  {/* <p className="card-title-desc">
                    This is an experimental awesome solution for responsive
                    tables with complex data.
                  </p> */}

                  <div className="table-rep-plugin">
                    <div
                      className="table-responsive mb-0"
                      data-pattern="priority-columns"
                    >
                      <Table
                        id="tech-companies-1"
                        className="table table-striped table-bordered"
                      >
                        <Thead>
                          <Tr>
                            <Th>Profile Picture</Th>
                            <Th data-priority="1">@Profile_Handle</Th>
                            <Th data-priority="3">First Name</Th>
                            <Th data-priority="1">Last Name</Th>
                            <Th data-priority="1">Auth_token</Th>
                            <Th data-priority="1">Active</Th>
                            <Th data-priority="1">Created_At</Th>
                            <Th data-priority="1">Updated_At</Th>
                            <Th data-priority="1">Deleted</Th>
                            <Th data-priority="1">Last Login</Th>
                            <Th data-priority="1">Mobile</Th>
                            <Th data-priority="1"></Th>
                            <Th data-priority="1"></Th>
                            <Th data-priority="1"></Th>
                            <Th data-priority="1"></Th>
                            <Th data-priority="1"></Th>
                            <Th data-priority="1"></Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            {/* <Th>
                              GOOG <span className="co-name">Google Inc.</span>
                            </Th> */}
                            <Th>
                              <Avatar
                                size="50"
                                round="50%"
                                name={"profile.fname"}
                                src={AvatarSample1}
                              />
                            </Th>
                            <Th>
                              @<span className="co-name">elonmusk</span>
                            </Th>
                            <Td>Elon</Td>
                            <Td>Musk</Td>
                          </Tr>
                          {/* <Tr>
                            <Th>
                              <Avatar
                                size="50"
                                round="50%"
                                name={"profile.fname"}
                                src={AvatarSample1}
                              />
                            </Th>
                            <Th>
                              @{" "}
                              <span className="co-name">
                                {"profile_data.profile.handle"}
                              </span>
                            </Th>
                            <Td>{"profile_data.fname"}</Td>
                            <Td>{"profile_data.lname"}</Td>
                          </Tr> */}
                        </Tbody>
                      </Table>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

export default EditableTable
