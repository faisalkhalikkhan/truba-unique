import { DatePicker, Input, Radio, Space } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState, useEffect } from "react";
// import shraddha from "../../../img/shraddha"
import "./TStu.css";
import axios from "axios";
import { message } from "antd";
import { Select } from "antd";

const TStudents = () => {
  const [Students, setStudents] = useState([]);
  let StudentsDetails = []
  const fetchStudents = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/student/get-students"
    )
    const Students = data;
    setStudents(Students);
    console.log(Students);
    for (let i = 0; i < Students.length; i++) {
      axios({
        method: "post",
        url: `http://localhost:5000/admin-power/user/${Students[i]["studentId"]}`,
      })
        .then(function (response) {
          //handle success
          console.log(response.data);
          console.log(typeof (response.data))
          StudentsDetails.push(response.data)
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    }
  };


  useEffect(() => {
    fetchStudents();
  }, []);



  return (
    <div className="Student-Top-div">
      <div>
        <title>Document</title>
        <div className="dashboard-content-one">
          {/* Breadcubs Area Start Here */}
          <div className="breadcrumbs-area">
            <h3>Students</h3>
          </div>
          {/* Breadcubs Area End Here */}

          {/* Student Table Area Start Here */}
          <div className="row">
            <div className="col-lg-12">
              <div className="card dashboard-card-eleven">
                <div className="card-body">
                  <div className="heading-layout1">
                    <div className="item-title">
                      <h3>My Students</h3>
                    </div>
                    <div className="dropdown">
                      <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">...</a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#"><i className="fas fa-times text-orange-red" />Close</a>
                        <a className="dropdown-item" href="#"><i className="fas fa-cogs text-dark-pastel-green" />Edit</a>
                        <a className="dropdown-item" href="#"><i className="fas fa-redo-alt text-orange-peel" />Refresh</a>
                      </div>
                    </div>
                  </div>
                  <div className="table-box-wrap">
                    <form className="search-form-box">
                      <div className="row gutters-8">
                        <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                          <input type="text" placeholder="Search by Roll ..." className="form-control" />
                        </div>
                        <div className="col-4-xxxl col-xl-4 col-lg-4 col-12 form-group">
                          <input type="text" placeholder="Search by Name ..." className="form-control" />
                        </div>
                        <div className="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
                          <input type="text" placeholder="Search by Class ..." className="form-control" />
                        </div>
                        <div className="col-1-xxxl col-xl-2 col-lg-2 col-12 form-group">
                          <button type="submit" className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                        </div>
                      </div>
                    </form>
                    <div className="table-responsive student-table-box">
                      <table className="table display data-table text-nowrap">
                        <thead>
                          <tr>
                            <th>
                              <div className="form-check">
                                <input type="checkbox" className="form-check-input checkAll" />
                                <label className="form-check-label">Roll</label>
                              </div>
                            </th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Class</th>
                            <th>Section</th>
                            <th>Parents</th>
                            <th>Address</th>
                            <th>Date Of Birth</th>
                            <th>Phone</th>
                            <th>E-mail</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label">#0021</label>
                              </div>
                            </td>
                            
                            <td className="text-center"><img src="https://filmfare.wwmindia.com/content/2021/nov/ranbirkapoorshraddha11637218597.jpg" alt="student" />
                            </td>
                            <td>Mark Willy</td>
                            <td>Male</td>
                            <td>2</td>
                            <td>A</td>
                            <td>Jack Sparrow </td>
                            <td>TA-107 Newyork</td>
                            <td>02/05/2001</td>
                            <td>+ 123 9988568</td>
                            <td><a href="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="5b303a21323d3a33323662681b3c363a323775383436">[email&nbsp;protected]</a>
                            </td>
                            <td>
                              <div className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                  <span className="flaticon-more-button-of-three-dots" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#"><i className="fas fa-times text-orange-red" />Close</a>
                                  <a className="dropdown-item" href="#"><i className="fas fa-cogs text-dark-pastel-green" />Edit</a>
                                  <a className="dropdown-item" href="#"><i className="fas fa-redo-alt text-orange-peel" />Refresh</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label">#0022</label>
                              </div>
                            </td>
                            <td className="text-center"><img src="https://filmfare.wwmindia.com/content/2021/nov/ranbirkapoorshraddha11637218597.jpg" alt="student" />
                            </td>
                            <td>Jessia Rose</td>
                            <td>Female</td>
                            <td>1</td>
                            <td>A</td>
                            <td>Maria Jamans</td>
                            <td>59 Australia, Sydney</td>
                            <td>02/05/2001</td>
                            <td>+ 123 9988568</td>
                            <td><a href="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="600b011a09060108090d595320070d01090c4e030f0d">[email&nbsp;protected]</a>
                            </td>
                            <td>
                              <div className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                  <span className="flaticon-more-button-of-three-dots" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#"><i className="fas fa-times text-orange-red" />Close</a>
                                  <a className="dropdown-item" href="#"><i className="fas fa-cogs text-dark-pastel-green" />Edit</a>
                                  <a className="dropdown-item" href="#"><i className="fas fa-redo-alt text-orange-peel" />Refresh</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label">#0023</label>
                              </div>
                            </td>
                            <td className="text-center"><img src="https://filmfare.wwmindia.com/content/2021/nov/ranbirkapoorshraddha11637218597.jpg" alt="student" />
                            </td>
                            <td>Mark Willy</td>
                            <td>Male</td>
                            <td>2</td>
                            <td>A</td>
                            <td>Jack Sparrow </td>
                            <td>TA-107 Newyork</td>
                            <td>02/05/2001</td>
                            <td>+ 123 9988568</td>
                            <td><a href="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="69020813000f08010004505a290e04080005470a0604">[email&nbsp;protected]</a>
                            </td>
                            <td>
                              <div className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                  <span className="flaticon-more-button-of-three-dots" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#"><i className="fas fa-times text-orange-red" />Close</a>
                                  <a className="dropdown-item" href="#"><i className="fas fa-cogs text-dark-pastel-green" />Edit</a>
                                  <a className="dropdown-item" href="#"><i className="fas fa-redo-alt text-orange-peel" />Refresh</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label">#0024</label>
                              </div>
                            </td>
                            <td className="text-center"><img src="https://filmfare.wwmindia.com/content/2021/nov/ranbirkapoorshraddha11637218597.jpg" alt="student" />
                            </td>
                            <td>Jessia Rose</td>
                            <td>Female</td>
                            <td>1</td>
                            <td>A</td>
                            <td>Maria Jamans</td>
                            <td>59 Australia, Sydney</td>
                            <td>02/05/2001</td>
                            <td>+ 123 9988568</td>
                            <td><a href="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="660d071c0f00070e0f0b5f5526010b070f0a4805090b">[email&nbsp;protected]</a>
                            </td>
                            <td>
                              <div className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                  <span className="flaticon-more-button-of-three-dots" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#"><i className="fas fa-times text-orange-red" />Close</a>
                                  <a className="dropdown-item" href="#"><i className="fas fa-cogs text-dark-pastel-green" />Edit</a>
                                  <a className="dropdown-item" href="#"><i className="fas fa-redo-alt text-orange-peel" />Refresh</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label">#0025</label>
                              </div>
                            </td>
                            <td className="text-center"><img src="https://filmfare.wwmindia.com/content/2021/nov/ranbirkapoorshraddha11637218597.jpg" alt="student" />
                            </td>
                            <td>Mark Willy</td>
                            <td>Male</td>
                            <td>2</td>
                            <td>A</td>
                            <td>Jack Sparrow </td>
                            <td>TA-107 Newyork</td>
                            <td>02/05/2001</td>
                            <td>+ 123 9988568</td>
                            <td><a href="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="4e252f3427282f262723777d0e29232f2722602d2123">[email&nbsp;protected]</a>
                            </td>
                            <td>
                              <div className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                  <span className="flaticon-more-button-of-three-dots" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#"><i className="fas fa-times text-orange-red" />Close</a>
                                  <a className="dropdown-item" href="#"><i className="fas fa-cogs text-dark-pastel-green" />Edit</a>
                                  <a className="dropdown-item" href="#"><i className="fas fa-redo-alt text-orange-peel" />Refresh</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label">#0026</label>
                              </div>
                            </td>
                            <td className="text-center"><img src="https://filmfare.wwmindia.com/content/2021/nov/ranbirkapoorshraddha11637218597.jpg" alt="student" />
                            </td>
                            <td>Jessia Rose</td>
                            <td>Female</td>
                            <td>1</td>
                            <td>A</td>
                            <td>Maria Jamans</td>
                            <td>59 Australia, Sydney</td>
                            <td>02/05/2001</td>
                            <td>+ 123 9988568</td>
                            <td><a href="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="7f141e0516191e171612464c3f18121e1613511c1012">[email&nbsp;protected]</a>
                            </td>
                            <td>
                              <div className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                  <span className="flaticon-more-button-of-three-dots" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#"><i className="fas fa-times text-orange-red" />Close</a>
                                  <a className="dropdown-item" href="#"><i className="fas fa-cogs text-dark-pastel-green" />Edit</a>
                                  <a className="dropdown-item" href="#"><i className="fas fa-redo-alt text-orange-peel" />Refresh</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label">#0027</label>
                              </div>
                            </td>
                            <td className="text-center"><img src="https://filmfare.wwmindia.com/content/2021/nov/ranbirkapoorshraddha11637218597.jpg" alt="student" />
                            </td>
                            <td>Mark Willy</td>
                            <td>Male</td>
                            <td>2</td>
                            <td>A</td>
                            <td>Jack Sparrow </td>
                            <td>TA-107 Newyork</td>
                            <td>02/05/2001</td>
                            <td>+ 123 9988568</td>
                            <td><a href="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="a2c9c3d8cbc4c3cacbcf9b91e2c5cfc3cbce8cc1cdcf">[email&nbsp;protected]</a>
                            </td>
                            <td>
                              <div className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                  <span className="flaticon-more-button-of-three-dots" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#"><i className="fas fa-times text-orange-red" />Close</a>
                                  <a className="dropdown-item" href="#"><i className="fas fa-cogs text-dark-pastel-green" />Edit</a>
                                  <a className="dropdown-item" href="#"><i className="fas fa-redo-alt text-orange-peel" />Refresh</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label">#0028</label>
                              </div>
                            </td>
                            <td className="text-center"><img src="https://filmfare.wwmindia.com/content/2021/nov/ranbirkapoorshraddha11637218597.jpg" alt="student" />
                            </td>
                            <td>Jessia Rose</td>
                            <td>Female</td>
                            <td>1</td>
                            <td>A</td>
                            <td>Maria Jamans</td>
                            <td>59 Australia, Sydney</td>
                            <td>02/05/2001</td>
                            <td>+ 123 9988568</td>
                            <td><a href="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="b5ded4cfdcd3d4dddcd88c86f5d2d8d4dcd99bd6dad8">[email&nbsp;protected]</a>
                            </td>
                            <td>
                              <div className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                  <span className="flaticon-more-button-of-three-dots" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#"><i className="fas fa-times text-orange-red" />Close</a>
                                  <a className="dropdown-item" href="#"><i className="fas fa-cogs text-dark-pastel-green" />Edit</a>
                                  <a className="dropdown-item" href="#"><i className="fas fa-redo-alt text-orange-peel" />Refresh</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label">#0029</label>
                              </div>
                            </td>
                            <td className="text-center"><img src="https://filmfare.wwmindia.com/content/2021/nov/ranbirkapoorshraddha11637218597.jpg" alt="student" />
                            </td>
                            <td>Mark Willy</td>
                            <td>Male</td>
                            <td>2</td>
                            <td>A</td>
                            <td>Jack Sparrow </td>
                            <td>TA-107 Newyork</td>
                            <td>02/05/2001</td>
                            <td>+ 123 9988568</td>
                            <td><a href="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="d8b3b9a2b1beb9b0b1b5e1eb98bfb5b9b1b4f6bbb7b5">[email&nbsp;protected]</a>
                            </td>
                            <td>
                              <div className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                  <span className="flaticon-more-button-of-three-dots" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#"><i className="fas fa-times text-orange-red" />Close</a>
                                  <a className="dropdown-item" href="#"><i className="fas fa-cogs text-dark-pastel-green" />Edit</a>
                                  <a className="dropdown-item" href="#"><i className="fas fa-redo-alt text-orange-peel" />Refresh</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label">#0030</label>
                              </div>
                            </td>
                            <td className="text-center"><img src="https://filmfare.wwmindia.com/content/2021/nov/ranbirkapoorshraddha11637218597.jpg" alt="student" />
                            </td>
                            <td>Jessia Rose</td>
                            <td>Female</td>
                            <td>1</td>
                            <td>A</td>
                            <td>Maria Jamans</td>
                            <td>59 Australia, Sydney</td>
                            <td>02/05/2001</td>
                            <td>+ 123 9988568</td>
                            <td><a href="https://www.radiustheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="573c362d3e31363f3e3a6e6417303a363e3b7934383a">[email&nbsp;protected]</a>
                            </td>
                            <td>
                              <div className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                  <span className="flaticon-more-button-of-three-dots" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#"><i className="fas fa-times text-orange-red" />Close</a>
                                  <a className="dropdown-item" href="#"><i className="fas fa-cogs text-dark-pastel-green" />Edit</a>
                                  <a className="dropdown-item" href="#"><i className="fas fa-redo-alt text-orange-peel" />Refresh</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Student Table Area End Here */}
          {/* <footer className="footer-wrap-layout1">
            <div className="copyright">© Copyrights <a href="#">akkhor</a> 2019. All rights reserved. Designed by <a href="#">PsdBosS</a></div>
          </footer> */}
        </div>
      </div>
      <div >
        <article className="leaderboard">
          {/* <header>
          <h1 className="leaderboard__title"><span className="leaderboard__title--top">Forbes</span><span className="leaderboard__title--bottom">Leaderboard</span></h1>
        </header> */}
          <main className="leaderboard__profiles">
            <article className="leaderboard__profile">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Mark Zuckerberg" className="leaderboard__picture" />
              <span className="leaderboard__name">Mark Zuckerberg</span>
              <span className="leaderboard__value">35.7<span>B</span></span>
            </article>
            <article className="leaderboard__profile">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Mark Zuckerberg" className="leaderboard__picture" />
              <span className="leaderboard__name">Mark Zuckerberg</span>
              <span className="leaderboard__value">35.7<span>B</span></span>
            </article>


            <article className="leaderboard__profile">
              <img src="https://randomuser.me/api/portraits/men/97.jpg" alt="Dustin Moskovitz" className="leaderboard__picture" />
              <span className="leaderboard__name">Dustin Moskovitz</span>
              <span className="leaderboard__value">9.9<span>B</span></span>
            </article>
            <article className="leaderboard__profile">
              <img src="https://randomuser.me/api/portraits/women/17.jpg" alt="Elizabeth Holmes" className="leaderboard__picture" />
              <span className="leaderboard__name">Elizabeth Holmes</span>
              <span className="leaderboard__value">4.5<span>B</span></span>
            </article>
            <article className="leaderboard__profile">
              <img src="https://randomuser.me/api/portraits/men/37.jpg" alt="Evan Spiegel" className="leaderboard__picture" />
              <span className="leaderboard__name">Evan Spiegel</span>
              <span className="leaderboard__value">2.1<span>B</span></span>
            </article>
            <article className="leaderboard__profile">
              <img src="https://randomuser.me/api/portraits/men/37.jpg" alt="Evan Spiegel" className="leaderboard__picture" />
              <span className="leaderboard__name">Evan Spiegel</span>
              <span className="leaderboard__value">2.1<span>B</span></span>
            </article>
            <article className="leaderboard__profile">
              <img src="https://randomuser.me/api/portraits/men/37.jpg" alt="Evan Spiegel" className="leaderboard__picture" />
              <span className="leaderboard__name">Evan Spiegel</span>
              <span className="leaderboard__value">2.1<span>B</span></span>
            </article>
            <article className="leaderboard__profile">
              <img src="https://randomuser.me/api/portraits/men/37.jpg" alt="Evan Spiegel" className="leaderboard__picture" />
              <span className="leaderboard__name">Evan Spiegel</span>
              <span className="leaderboard__value">2.1<span>B</span></span>
            </article>
            <article className="leaderboard__profile">
              <img src="https://randomuser.me/api/portraits/men/37.jpg" alt="Evan Spiegel" className="leaderboard__picture" />
              <span className="leaderboard__name">Evan Spiegel</span>
              <span className="leaderboard__value">2.1<span>B</span></span>
            </article>
            <article className="leaderboard__profile">
              <img src="https://randomuser.me/api/portraits/men/37.jpg" alt="Evan Spiegel" className="leaderboard__picture" />
              <span className="leaderboard__name">Evan Spiegel</span>
              <span className="leaderboard__value">2.1<span>B</span></span>
            </article>
          </main>
        </article>
      </div>

    </div>
  );
};
export default TStudents;
