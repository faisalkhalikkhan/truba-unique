import { SearchOutlined } from "@ant-design/icons/lib/icons";
import React from "react";
import "./Td.css";
import { Progress } from "antd";

const TDashboardContent = () => {
  return (
    <div className="dashboard">
      <div className="breadcrumbs-area">
        <h3>Dashboard</h3>
      </div>
      <div className="row">

        <div className="col-12 col-4-xxxl">
          <div className="row">
            <div className="col-6-xxxl col-lg-3 col-sm-6 col-12">
              <div className="dashboard-summery-two">
                <div className="item-icon bg-light-magenta">
                  <i className="flaticon-classmates text-magenta" />
                </div>
                <div className="item-content">
                  <div className="item-number"><span className="counter" data-num={35000}>35,000</span>
                  </div>
                  <div className="item-title">Total Students</div>
                </div>
              </div>
            </div>
            <div className="col-6-xxxl col-lg-3 col-sm-6 col-12">
              <div className="dashboard-summery-two">
                <div className="item-icon bg-light-blue">
                  <i className="flaticon-shopping-list text-blue" />
                </div>
                <div className="item-content">
                  <div className="item-number"><span className="counter" data-num={19050}>19,050</span>
                  </div>
                  <div className="item-title">Total Exams</div>
                </div>
              </div>
            </div>
            <div className="col-6-xxxl col-lg-3 col-sm-6 col-12">
              <div className="dashboard-summery-two">
                <div className="item-icon bg-light-yellow">
                  <i className="flaticon-mortarboard text-orange" />
                </div>
                <div className="item-content">
                  <div className="item-number"><span className="counter" data-num={23890}>23,890</span>
                  </div>
                  <div className="item-title">Graduate Studes</div>
                </div>
              </div>
            </div>
            <div className="col-6-xxxl col-lg-3 col-sm-6 col-12">
              <div className="dashboard-summery-two">
                <div className="item-icon bg-light-red">
                  <i className="flaticon-money text-red" />
                </div>
                <div className="item-content">
                  <div className="item-number"><span>$</span><span className="counter" data-num={2102050}>21,02,050</span></div>
                  <div className="item-title">Total Teachers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Dashboard summery End Here */}
        {/* Students Chart End Here */}

        {/* Students Chart End Here */}
        {/* Notice Board Start Here */}
        <div className="col-lg-6 ">
          <div className="card dashboard-card-six">
            <div className="card-body">
              <div className="heading-layout1 mg-b-17">
                <div className="item-title">
                  <h3>Notifications</h3>
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
              <div className="notice-box-wrap">
                <div className="notice-list">
                  <div className="post-date bg-skyblue">16 June, 2019</div>
                  <h6 className="notice-title"><a href="#">Great School manag mene esom tus eleifend
                    lectus
                    sed maximus mi faucibusnting.</a></h6>
                  <div className="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
                </div>
                <div className="notice-list">
                  <div className="post-date bg-yellow">16 June, 2019</div>
                  <h6 className="notice-title"><a href="#">Great School manag printing.</a></h6>
                  <div className="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
                </div>
                <div className="notice-list">
                  <div className="post-date bg-pink">16 June, 2019</div>
                  <h6 className="notice-title"><a href="#">Great School manag Nulla rhoncus eleifensed
                    mim
                    us mi faucibus id. Mauris vestibulum non purus lobortismenearea</a></h6>
                  <div className="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
                </div>
                <div className="notice-list">
                  <div className="post-date bg-skyblue">16 June, 2019</div>
                  <h6 className="notice-title"><a href="#">Great School manag mene esom text of the
                    printing.</a></h6>
                  <div className="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
                </div>
                <div className="notice-list">
                  <div className="post-date bg-yellow">16 June, 2019</div>
                  <h6 className="notice-title"><a href="#">Great School manag printing.</a></h6>
                  <div className="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
                </div>
                <div className="notice-list">
                  <div className="post-date bg-pink">16 June, 2019</div>
                  <h6 className="notice-title"><a href="#">Great School manag meneesom.</a></h6>
                  <div className="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Notice Board End Here */}
      </div>


      <div className="dashboard_end"></div>
    </div>
  );
};

export default TDashboardContent;
