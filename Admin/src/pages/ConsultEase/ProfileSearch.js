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

import { connect, useSelector, useDispatch } from "react-redux"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import { useNavigate } from "react-router-dom"

import useFetch from "../../hooks/useFetch"
import withRouter from "components/Common/withRouter"
import {
  consulteaseProfileSearch,
  consulteaseProfileSearchResults,
} from "../../store/actions"
import { Link } from "react-router-dom"

const ProfileSearch = () => {
  // const [searchProfileHandle, setSearchProfileHandle] = useState("")
  // const [searchProfileId, setSearchProfileId] = useState("")
  // const [searchFirstName, setSearchFirstName] = useState("")
  // const [searchLastName, setSearchLastName] = useState("")

  // consulteaseProfileSearch: {
  //   searchProfileHandle: "",
  //   searchProfileId: "",
  //   searchFirstName: "",
  //   searchLastName: "",
  // },
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // dispatch(consulteaseProfileSearch())
  const searchProfileHandle = useSelector(
    state => state.consulteaseProfileSearch
  )
  const searchProfileResults = useSelector(state => state.searchProfileResults)
  // const searchProfileId = useSelector(
  //   state => state.consulteaseProfileSearch.searchProfileId
  // )
  // const searchFirstName = useSelector(
  //   state => state.consulteaseProfileSearch.searchFirstName
  // )
  // const searchLastName = useSelector(
  //   state => state.consulteaseProfileSearch.searchLastName
  // )

  const [page, setPage] = useState({ pageNumber: 0 })
  const [searchProfile, setSearchProfile] = useState("")
  // const [searchProfileResults, setSearchProfileResults] = useState("")
  const [profiles, setProfiles] = useState([])

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
      &sort=stats.rating_average&sort_type=1&keyword=${
        "e"
        //[
        // searchProfileHandle
        // searchProfileId,
        // searchFirstName,
        // searchLastName,
        // ].join(",")
      }`,
      { auth_token: auth_token }
    )
      .then(data => {
        console.log("hello")
        console.log("data.status", data.status, "data", typeof data.body.data)
        // profiles
        //   ? setProfiles(() => [...data.body.data]): //...profiles
        setProfiles(() => [...data.body.data])
        // dispatch(consulteaseProfileSearchResults(data.body.data))
        dispatch({
          type: "CONSULTEASE_PROFILE_SEARCH_RESULTS",
          payload: data.body.data,
        })
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
    // get()
  }

  useEffect(() => {
    getData()
    console.log(
      // "handleSearchSubmit",
      "searchProfileHandle",
      searchProfileHandle
      // "searchProfileId",
      // searchProfileId,
      // "searchFirstName",
      // searchFirstName,
      // "searchLastName",
      // searchLastName
    )
    return () => {
      dispatch(consulteaseProfileSearch(""))
      setProfiles(() => [])
    }
  }, [])

  const handleSearchSubmit = () => {
    getData()
    console.log(
      "handleSearchSubmit",
      "searchProfileHandle",
      searchProfileHandle
      // "searchProfileId",
      // searchProfileId,
      // "searchFirstName",
      // searchFirstName,
      // "searchLastName",
      // searchLastName
    )
    navigate("/consultease-profile-search-results")
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          {/* <Breadcrumbs
            maintitle="pages"
            title="ConsultEaseComponents"
            breadcrumbItem="ConsultEaseUserData.js"
          /> */}

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <form onSubmit={handleSearchSubmit}>
                    <CardTitle className="h4">
                      ConsultEase User Search
                    </CardTitle>
                    <Row className="mb-3">
                      <div className="md3 position-relative">
                        <label
                          htmlFor="user-profile-handle-search-input"
                          className="col-md-2 col-form-label"
                        >
                          Profile handle:
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="validationTooltipUsernamePrepend"
                            >
                              @
                            </span>
                          </div>
                          <div className="col-md-10">
                            <input
                              className="form-control "
                              type="text"
                              name="user-profile-handle-search-input"
                              id="user-profile-handle-search-input"
                              placeholder="enter user profile handle"
                              onChange={e =>
                                dispatch(
                                  consulteaseProfileSearch(e.target.value)
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </Row>

                    {/* <Row className="mb-3">
                      <label
                        htmlFor="user-profile-id-search-input"
                        className="col-md-2 col-form-label"
                      >
                        Profile id:
                      </label>
                      <div className="col-md-10">
                        <input
                          className="form-control"
                          type="search"
                          name="user-profile-id-search-input"
                          id="user-profile-id-search-input"
                          placeholder="enter profile id"
                          onChange={e => setSearchProfileId(e.target.value)}
                        />
                      </div>
                    </Row>

                    <Row className="mb-3">
                      <label
                        htmlFor="user-first-name-search-input"
                        className="col-md-2 col-form-label"
                      >
                        First Name:
                      </label>
                      <div className="col-md-10">
                        <input
                          className="form-control"
                          type="text"
                          name="user-first-name-search-input"
                          id="user-first-name-search-input"
                          placeholder="enter first name"
                          onChange={e => setSearchFirstName(e.target.value)}
                        />
                      </div>
                    </Row>

                    <Row className="mb-3">
                      <label
                        htmlFor="user-last-name-search-input"
                        className="col-md-2 col-form-label"
                      >
                        Last Name:
                      </label>
                      <div className="col-md-10">
                        <input
                          className="form-control"
                          type="text"
                          name="user-last-name-search-input"
                          id="user-last-name-search-input"
                          placeholder="enter last name"
                          onChange={e => setSearchLastName(e.target.value)}
                        />
                      </div>
                    </Row> */}

                    <Row className="mb-3">
                      {/* <Link
                        to="/consultease-profile-search-results"
                        //className="logo logo-dark"
                        className="btn btn-block waves-effect waves-light"
                      > */}
                      <Button
                        type="submit"
                        className="btn btn-block waves-effect waves-light"
                        color="primary"
                        outline
                      >
                        Submit
                      </Button>
                      {/* </Link> */}
                    </Row>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default ProfileSearch
