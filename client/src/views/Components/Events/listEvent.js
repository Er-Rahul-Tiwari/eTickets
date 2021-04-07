import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getEventList } from "actions/event";
import { Button, Form, Input, Label ,} from "reactstrap";
import DataTable from "react-data-table-component";
import Moment from "moment";
import { DATE_FORMATE, SERVER_URL } from "constants/index";
import noImg from "assets/img/no-image.png";
import CustomLoader from "views/Skeleton";
// import 'sass/rootScss/root.scss';

const ListEvent = ({ getEventList, eventList, listLoading }) => {
  useEffect(() => {
    getEventList();
  }, [getEventList]);

  const customStyles = {
    headCells: {
      style: {
        fontWeight: "bold",
        fontSize: "14px",
      },
    },
  };
  const imgStyles = { padding: "10px" };

  const columns = [
    {
      name: "Image",
      selector: "imageCover",
      sortable: false,
      cell: (row) => {
        return (
          <img
            alt="eventCoverImage"
            width="100%"
            style={imgStyles}
            src={
              !row.imageCover ||
              row.imageCover === null ||
              row.imageCover === "null"
                ? noImg
                : SERVER_URL + "/event/" + row.imageCover
            }
          />
        );
      },
    },
    {
      name: "Event Name",
      selector: "name",
      sortable: true,
      left: true,
    },
    {
      name: "Start Date",
      selector: "startDate",
      sortable: true,
      cell: (row) => {
        return <div>{Moment(row.startDate).format(DATE_FORMATE)}</div>;
      },
    },
    {
      name: "End Date",
      selector: "endDate",
      sortable: true,
      cell: (row) => {
        return <div>{Moment(row.endDate).format(DATE_FORMATE)}</div>;
      },
    },
    {
      name: "Status",
      selector: "active",
      sortable: true,
      cell: (row) => {
        return <div>{row.active ? "Active" : "InActive"}</div>;
      },
    },
    {
      name: "Action",
      sortable: false,
      cell: (row) => {
        return (
          <div>
            <Link to={`/editEvent/${row._id}`} className="u-margin-right-small">
              Edit{" "}
            </Link>
            <Link to={`/eventDemo/${row._id}`} className="u-margin-right-small">
              {" "}
              View
            </Link>

            {/* <div className="button r" id="button-1">
              <Input type="checkbox" className="checkbox" />
              <div className="knobs"></div>
              <div className="layer"></div>
            </div> */}
          </div>
        );
      },
    },
  ];
  const data = [];

  return (
    <div className="createTickets">
        <DataTable
          title="Event List"
          columns={columns}
          data={eventList}
          defaultSortField="name"
          highlightOnHover={true}
          pagination={true}
          persistTableHead={true}
          progressPending={listLoading}
          progressComponent={<CustomLoader type="rect" />}            
          customStyles={customStyles}
          subHeader={true}
          // subHeaderComponent={
          //   <div className="">
          //     <Link to="/createEvent" className="btn btn--blue">
          //       Create Event
          //     </Link>
          //   </div>
          // }
        />
    </div>
  );
};

ListEvent.propTypes = {
  getEventList: PropTypes.func.isRequired,
  eventList: PropTypes.array.isRequired,
  listLoading: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  eventList: state.event.eventList,
  listLoading: state.event.listLoading,
});

export default connect(mapStateToProps, {
  getEventList,
})(withRouter(ListEvent));
