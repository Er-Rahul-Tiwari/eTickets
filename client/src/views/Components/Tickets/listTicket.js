import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getTicketList } from "actions/ticket";
import DataTable from "react-data-table-component";
import Moment from "moment";
import { DATE_FORMATE, SERVER_URL } from "constants/index";
import noImg from "assets/img/no-image.png";

import CustomLoader from "views/Skeleton";

const ListTicket = ({ getTicketList, ticketList, loading }) => {
  useEffect(() => {
    getTicketList();
  }, [getTicketList]);

  const customStyles = {
    headCells: {
      style: {
        fontWeight: "bold",
        fontSize: "14px",
      },
    },
  };

  const columns = [
    {
      name: "Image",
      selector: "imageCover",
      sortable: false,
      cell: (row) => {
        return (
          <img
            alt="eventCoverImage"
            width="80px"
            src={
              !row.imageCover ||
              row.imageCover == null ||
              row.imageCover == "null"
                ? noImg
                : SERVER_URL + "/ticket/" + row.imageCover
            }
          />
        );
      },
    },
    {
      name: "Ticket Name",
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
    },
  ];
  const data = [];

  return (
    <div className="createTickets">
      <div className="box">
        <div className="">
          <DataTable
            title="Ticket List"
            columns={columns}
            data={ticketList}
            defaultSortField="name"
            highlightOnHover={true}
            pagination={true}
            persistTableHead={true}
            progressPending={loading}
            progressComponent={<CustomLoader type="rect" />}            
            subHeader={true}
            subHeaderComponent={
              <div className=''>
                <Link to="/createTicket" className='btn btn--blue'>Create Ticket</Link>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

ListTicket.propTypes = {
  getTicketList: PropTypes.func.isRequired,
  ticketList: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  ticketList: state.ticket.ticketList,
  loading: state.ticket.loading,
});

export default connect(mapStateToProps, {
  getTicketList,
})(withRouter(ListTicket));
