import React from "react";
import "sass/rootScss/root.scss";
// import "sass/table.scss";

const table = () => {
  return (
    <div className="table">
      <div className="box">
        <section>
          <ol class="collection collection-container">
            <li class="item item-container">
              <div class="attribute"></div>
              <div class="attribute" data-name="#">
                #
              </div>
              <div class="attribute-container event">
                <div class="attribute-container event">
                  <div class="attribute" data-name="event">
                    Event Name
                  </div>
                </div>
                <div class="attribute-container ticket">
                  <div class="attribute" data-name="ticket">
                    Ticket Name
                  </div>
                </div>
              </div>
              <div class="attribute-container date">
                <div class="attribute">Date</div>
              </div>
              <div class="attribute-container category">
                <div class="attribute">Category</div>
              </div>
              <div class="attribute-container status">
                <div class="attribute">Status</div>
              </div>
              <div class="attribute-container editEvent">
                <div class="attribute">Edit Event</div>
              </div>
              <div class="attribute-container editTicket">
                <div class="attribute">Edit Ticket</div>
              </div>

              <div class="attribute-container delete">
                <div class="attribute" data-name="delete">
                  Delete
                </div>
              </div>
            </li>
            <li class="item item-container">
              <div class="attribute" data-name="Select">
                <input type="checkbox" name="" id="" />
              </div>
              <div class="attribute" data-name="#">
                1
              </div>
              <div class="attribute-container event">
                <div class="attribute-container event">
                  <div class="attribute" data-name="event">
                    Event name first
                  </div>
                </div>
                <div class="attribute-container ticket">
                  <div class="attribute" data-name="ticket">
                    Ticket Name 1
                  </div>
                  <div class="attribute" data-name="ticket">
                    Ticket Name 2
                  </div>
                  <div class="attribute" data-name="ticket">
                    Ticket Name 3
                  </div>
                  <div class="attribute" data-name="ticket">
                    Ticket Name 4
                  </div>
                  <div class="attribute" data-name="ticket">
                    Ticket Name 5
                  </div>
                  <div class="attribute" data-name="ticket">
                    Ticket Name 6
                  </div>
                  <div class="attribute" data-name="ticket">
                    Ticket Name 7
                  </div>
                  <div class="attribute" data-name="ticket">
                    Ticket Name 8
                  </div>
                </div>
              </div>
              <div class="attribute-container date">
                <div class="attribute" data-name="date">
                  {" "}
                  01, July 2020
                </div>
              </div>
              <div class="attribute-container exhibition">
                <div class="attribute" data-name="exhibition">
                  Exhibition
                </div>
              </div>
              <div class="attribute-container status">
                <div class="attribute" data-name="status">
                  Active
                </div>
              </div>
              <div class="attribute-container editEvent">
                <div class="attribute" data-name="editEvent">
                  Edit Event
                </div>
              </div>
              <div class="attribute-container editTicket">
                <div class="attribute" data-name="editTicket">
                  Edit Ticket
                </div>
              </div>
              <div class="attribute-container editTicket">
                <div class="attribute" data-name="delete">
                  Delete
                </div>
              </div>
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default table;
