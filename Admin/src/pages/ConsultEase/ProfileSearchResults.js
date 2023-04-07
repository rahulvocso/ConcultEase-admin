import React, { useEffect, useState } from "react"

import {
  Card,
  CardBody,
  Col,
  Row,
  CardTitle,
  Container,
  Button,
} from "reactstrap"
import Avatar from "react-avatar"

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"

import { connect, useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
// Router
import { Link } from "react-router-dom"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
//Hook useFetch
import useFetch from "../../hooks/useFetch"
// Actions
import {
  consulteaseProfileSearch,
  consulteaseProfileSearchResults,
} from "../../store/actions"

import AvatarSample from "../../assets/images/users/AvatarSample.png"
import AvatarSample1 from "../../assets/images/users/avatar-6.jpg"

const ProfileSearchResults = () => {
  const profileSearchResults = useSelector(
    state => state.consulteaseProfileSearchResults
  )

  const [searchProfileHandle, setSearchProfileHandle] = useState("")
  // const [searchProfileId, setSearchProfileId] = useState("")
  // const [searchFirstName, setSearchFirstName] = useState("")
  // const [searchLastName, setSearchLastName] = useState("")

  const [page, setPage] = useState({ pageNumber: 0 })
  const [searchProfile, setSearchProfile] = useState("")
  // const [searchProfileResults, setSearchProfileResults] = useState("")
  const [profiles, setProfiles] = useState([])
  const navigate = useNavigate()

  const auth_token = localStorage.getItem("auth_token")
    ? localStorage.getItem("auth_token")
    : "eyJhbGciOiJIUzI1NiJ9.NjM5ODU0YWY3OWNlYTYyNjgwNzY4OGJh.Z9xf4J2JpqUEb_2-5ObYFLrCbRRe8IeJZ3NDwXltKkE"
  const { get, loading } = useFetch(
    "https://callingserver.onrender.com/api/v1/"
  )

  const getData = () => {
    get(
      `user/list?&
      pageNumber=${parseInt(page.pageNumber) + 1}
      &sort=stats.rating_average&sort_type=1&keyword=${[
        searchProfileHandle,
      ].join(",")}`,
      { auth_token: auth_token }
    )
      .then(data => {
        console.log("hello")
        console.log(data.status, "data", data)
        // profiles
        //   ? setProfiles(() => [...data.body.data]): //...profiles
        setProfiles(() => [...data.body.data])
        setPage({
          pageNumber: data.body.pageNumber + 1,
          pageCount: data.body.pageCount,
          recordCount: data.body.recordCount,
        })
        console.log(profiles, "get request to search profile completed")
      })
      .catch(error => {
        console.error(error)
      })
    get()
  }

  useEffect(() => {
    //getData()
    // console.log(
    //   "handleSearchSubmit",
    //   "searchProfileHandle",
    //   searchProfileHandle,
    //   "searchProfileId",
    //   searchProfileId,
    //   "searchFirstName",
    //   searchFirstName,
    //   "searchLastName",
    //   searchLastName
    // )
    //   return () => {
    //     setProfiles(() => [])
    //   }
    console.log("profileSearchResults", profileSearchResults)
  }, [consulteaseProfileSearchResults])

  const handleSearchSubmit = () => {
    getData()
    // console.log(
    //   "handleSearchSubmit",
    //   "searchProfileHandle",
    //   searchProfileHandle,
    //   "searchProfileId",
    //   searchProfileId,
    //   "searchFirstName",
    //   searchFirstName,
    //   "searchLastName",
    //   searchLastName
    // )
  }

  const handleProfileClick = () => {
    navigate("/consultease-profile-view")
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          {/* <Breadcrumbs
            maintitle="ConsultEase"
            title="ProfileSearchResults"
            breadcrumbItem="Results in Responsive Table"
          /> */}
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
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr onClick={handleProfileClick}>
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

                          {profileSearchResults &&
                            profileSearchResults.map(profile_data => {
                              return (
                                <Tr onClick={handleProfileClick}>
                                  <Th>
                                    <Avatar
                                      size="50"
                                      round="50%"
                                      name={"profile.fname"}
                                      src={
                                        profile_data.profile.photo
                                          ? profile_data.profile.photo
                                          : AvatarSample1
                                      }
                                    />
                                  </Th>
                                  <Th>
                                    @{" "}
                                    <span className="co-name">
                                      {profile_data.profile.handle}
                                    </span>
                                  </Th>
                                  <Td>{profile_data.fname}</Td>
                                  <Td>{profile_data.lname}</Td>
                                </Tr>
                              )
                            })}
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

export default ProfileSearchResults
