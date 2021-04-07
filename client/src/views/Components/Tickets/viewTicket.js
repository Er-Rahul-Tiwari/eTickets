import React from "react";
// import card02 from '../img/card-02.jpg';
import card02 from "assets/img/card-02.jpg";

const ViewTicket = () => {
  return (
    <div className="tickets box">
      <div className="tickets--text">
        <div className="tickets--text--header curd">
          <span className="edit edit--color para--size-11 text-cap">Edit</span>
          <p className="tickets--text--header-para">
            Auto Expo 2020 iOS 13 & Swift 5 - The Complete iOS App Development
            Bootcamp
          </p>
          <p className="para para--dark line-height-1_2 u-margin-top-sub-small">
            Come, visit and look at all the exciting upcoming automobiles. New
            updates on Honda City and Maruti Dzire. From Beginner to iOS App
            Developer with Just One Course! Fully Updated
          </p>
          <div className=" u-margin-top-small">
            <i className="glyph-icon flaticon-man"> </i>
            from
            <span className="tickets--text--header-span">Mon, 20 Jun 2020</span>
            to
            <span className="tickets--text--header-span">Sat, 22 Jun 2020</span>
          </div>
          <p className="para--size-12 para--dark-2 text-upper">
            <i className="glyph-icon flaticon-locate"> </i>
            San Clemente Palace Kempinski Venice
          </p>
          <div className="profile--para__box--card__days__item para--size-12">
            <span>3 days event</span>
            <span>12 stops</span>
            <span>10 person per ticket</span>
          </div>
          <div className="profile--para__box--card__rating">
            <span className="profile--para__box--card__rating--number">
              4.5
            </span>
            <span className='rating-star'>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='12px' width='12px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='12px' width='12px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='12px' width='12px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='12px' width='12px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i>
            <i data-spec="icon" aria-hidden="true">
                      {/* star */}
                <svg id="icon-rating-star" viewBox="0 0 24 24" height='12px' width='12px'><path d="M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73z"></path></svg>
                
                    </i></span>
              
            <span className="profile--para__box--card__rating--person">
              ( 101 )
            </span>
          </div>
          <div className="para--size-12 text-lower u-margin-right-sub-small">
            <span>created by </span>
            <span className="para--size-13 para--dark-2 text-upper">
              MD pritesh sharma
            </span>
          </div>
        </div>
        {/* card */}
        <div className="ticket">
          {/* Repeating tickets here.. */}
          <div className="ticket--card curd">
            <p className="para--size-12 para--dark-2 text-upper">Free</p>
            <span className="edit edit--color para--size-11 text-cap">
              Edit
            </span>
            <p className="ticket--card--name">
              Ticket Cards Name Ticket Cards Name Ticket Cards Name
            </p>
            <p className="ticket--card--date para para--size-12 para--dark-2 u-margin-top-sub-small">
              <span className="para--dark para--size-11 text-lower">
                start{" "}
              </span>
              Fri, 7 Aug 2020 00:30 IST
            </p>
            <p className="ticket--card--date para para--size-12 para--dark-2">
              <span className="para--dark para--size-11 text-lower">end </span>
              Sat, 8 Aug 2020 01:22 IST
            </p>
            <p className="para para--size-12 para--dark-2 ticket--card--location">
              <i className="glyph-icon flaticon-locate"> </i>
              San Clemente Palace Kempinski Venice
            </p>
            <div className="profile--para__box--card__days__item para--dark para--size-11">
              <span>2 days</span>
              <span>5 person per ticket</span>
            </div>
            <p className="profile--para__box--card__currentPrice u-margin-top-sub-small">
              <span>₹12000</span>
              <s className="profile--para__box--card__currentPrice__discount">
                <span>₹20000</span>
              </s>
              <span className="para--size-14 u-margin-left-small">90% off</span>
            </p>
            <button className="btn btn--blue u-margin-top-small">
              Book Now
            </button>
          </div>
          <div className="ticket--card curd">
            <span className="edit edit--color para--size-11 text-cap">
              Edit
            </span>
            <p className="para--size-12 para--dark-2 text-upper">Online</p>
            <p className="ticket--card--name">
              Ticket Cards Name Ticket Cards Name Ticket Cards Name
            </p>
            <p className="ticket--card--date para para--size-12 para--dark-2 u-margin-top-sub-small">
              <span className="para--dark para--size-11 text-lower">
                start{" "}
              </span>
              Fri, 7 Aug 2020 00:30 IST
            </p>
            <p className="ticket--card--date para para--size-12 para--dark-2">
              <span className="para--dark para--size-11 text-lower">end </span>
              Sat, 8 Aug 2020 01:22 IST
            </p>
            <p className="para para--size-12 para--dark-2 ticket--card--location">
              <i className="glyph-icon flaticon-locate"> </i>
              San Clemente Palace Kempinski Venice
            </p>
            <div className="profile--para__box--card__days__item para--dark para--size-11">
              <span>2 days</span>
              <span>5 person per ticket</span>
            </div>
            <p className="profile--para__box--card__currentPrice u-margin-top-sub-small">
              <span>₹12000</span>
              <s className="profile--para__box--card__currentPrice__discount">
                <span>₹20000</span>
              </s>
              <span className="para--size-14 u-margin-left-small">90% off</span>
            </p>
            <button className="btn btn--blue u-margin-top-small">
              Book Now
            </button>
          </div>
          <div className="ticket--card curd">
            <span className="edit edit--color para--size-11 text-cap">
              Edit
            </span>
            <p className="para--size-12 para--dark-2 text-upper">paid</p>
            <p className="ticket--card--name">
              Ticket Cards Name Ticket Cards Name Ticket Cards Name
            </p>
            <p className="ticket--card--date para para--size-12 para--dark-2 u-margin-top-sub-small">
              <span className="para--dark para--size-11 text-lower">
                start{" "}
              </span>
              Fri, 7 Aug 2020 00:30 IST
            </p>
            <p className="ticket--card--date para para--size-12 para--dark-2">
              <span className="para--dark para--size-11 text-lower">end </span>
              Sat, 8 Aug 2020 01:22 IST
            </p>
            <p className="para para--size-12 para--dark-2 ticket--card--location">
              <i className="glyph-icon flaticon-locate"> </i>
              San Clemente Palace Kempinski Venice
            </p>
            <div className="profile--para__box--card__days__item para--dark para--size-11">
              <span>2 days</span>
              <span>5 person per ticket</span>
            </div>
            <p className="profile--para__box--card__currentPrice u-margin-top-sub-small">
              <span>₹12000</span>
              <s className="profile--para__box--card__currentPrice__discount">
                <span>₹20000</span>
              </s>
              <span className="para--size-14 u-margin-left-small">90% off</span>
            </p>
            <button className="btn btn--blue u-margin-top-small">
              Book Now
            </button>
          </div>
          <div className="ticket--card curd">
            <span className="edit edit--color para--size-11 text-cap">
              Edit
            </span>
            <p className="para--size-12 para--dark-2 text-upper">donation</p>
            <p className="ticket--card--name">
              Ticket Cards Name Ticket Cards Name Ticket Cards Name
            </p>
            <p className="ticket--card--date para para--size-12 para--dark-2 u-margin-top-sub-small">
              <span className="para--dark para--size-11 text-lower">
                start{" "}
              </span>
              Fri, 7 Aug 2020 00:30 IST
            </p>
            <p className="ticket--card--date para para--size-12 para--dark-2">
              <span className="para--dark para--size-11 text-lower">end </span>
              Sat, 8 Aug 2020 01:22 IST
            </p>
            <p className="para para--size-12 para--dark-2 ticket--card--location">
              <i className="glyph-icon flaticon-locate"> </i>
              San Clemente Palace Kempinski Venice
            </p>
            <div className="profile--para__box--card__days__item para--dark para--size-11">
              <span>2 days</span>
              <span>5 person per ticket</span>
            </div>
            <p className="profile--para__box--card__currentPrice u-margin-top-sub-small">
              <span>₹12000</span>
              <s className="profile--para__box--card__currentPrice__discount">
                <span>₹20000</span>
              </s>
              <span className="para--size-14 u-margin-left-small">90% off</span>
            </p>
            <button className="btn btn--blue u-margin-top-small">
              Book Now
            </button>
          </div>
          <div className="ticket--card curd">
            <span className="edit edit--color para--size-11 text-cap">
              Edit
            </span>
            <p className="para--size-12 para--dark-2 text-upper">Free</p>
            <p className="ticket--card--name">
              Ticket Cards Name Ticket Cards Name Ticket Cards Name
            </p>
            <p className="ticket--card--date para para--size-12 para--dark-2 u-margin-top-sub-small">
              <span className="para--dark para--size-11 text-lower">
                start{" "}
              </span>
              Fri, 7 Aug 2020 00:30 IST
            </p>
            <p className="ticket--card--date para para--size-12 para--dark-2">
              <span className="para--dark para--size-11 text-lower">end </span>
              Sat, 8 Aug 2020 01:22 IST
            </p>
            <p className="para para--size-12 para--dark-2 ticket--card--location">
              <i className="glyph-icon flaticon-locate"> </i>
              San Clemente Palace Kempinski Venice
            </p>
            <div className="profile--para__box--card__days__item para--dark para--size-11">
              <span>2 days</span>
              <span>5 person per ticket</span>
            </div>
            <p className="profile--para__box--card__currentPrice u-margin-top-sub-small">
              <span>₹12000</span>
              <s className="profile--para__box--card__currentPrice__discount">
                <span>₹20000</span>
              </s>
            </p>
            <button className="btn btn--blue u-margin-top-small">
              Book Now
            </button>
          </div>
          <div className="ticket--card curd">
            <span className="edit edit--color para--size-11 text-cap">
              Edit
            </span>
            <p className="para--size-12 para--dark-2 text-upper">Free</p>
            <p className="ticket--card--name">
              Ticket Cards Name Ticket Cards Name Ticket Cards Name
            </p>
            <p className="ticket--card--date para para--size-12 para--dark-2 u-margin-top-sub-small">
              <span className="para--dark para--size-11 text-lower">
                start{" "}
              </span>
              Fri, 7 Aug 2020 00:30 IST
            </p>
            <p className="ticket--card--date para para--size-12 para--dark-2">
              <span className="para--dark para--size-11 text-lower">end </span>
              Sat, 8 Aug 2020 01:22 IST
            </p>
            <p className="para para--size-12 para--dark-2 ticket--card--location">
              <i className="glyph-icon flaticon-locate"> </i>
              San Clemente Palace Kempinski Venice
            </p>
            <div className="profile--para__box--card__days__item para--dark para--size-11">
              <span>2 days</span>
              <span>5 person per ticket</span>
            </div>
            <p className="profile--para__box--card__currentPrice u-margin-top-sub-small">
              <span>₹12000</span>
              <s className="profile--para__box--card__currentPrice__discount">
                <span>₹20000</span>
              </s>
            </p>
            <button className="btn btn--blue u-margin-top-small">
              Book Now
            </button>
          </div>
          <div className="ticket--card curd">
            <span className="edit edit--color para--size-11 text-cap">
              Edit
            </span>
            <p className="para--size-12 para--dark-2 text-upper">Free</p>
            <p className="ticket--card--name">
              Ticket Cards Name Ticket Cards Name Ticket Cards Name
            </p>
            <p className="ticket--card--date para para--size-12 para--dark-2 u-margin-top-sub-small">
              <span className="para--dark para--size-11 text-lower">
                start{" "}
              </span>
              Fri, 7 Aug 2020 00:30 IST
            </p>
            <p className="ticket--card--date para para--size-12 para--dark-2">
              <span className="para--dark para--size-11 text-lower">end </span>
              Sat, 8 Aug 2020 01:22 IST
            </p>
            <p className="para para--size-12 para--dark-2 ticket--card--location">
              <i className="glyph-icon flaticon-locate"> </i>
              San Clemente Palace Kempinski Venice
            </p>
            <div className="profile--para__box--card__days__item para--dark para--size-11">
              <span>2 days</span>
              <span>5 person per ticket</span>
            </div>
            <p className="profile--para__box--card__currentPrice u-margin-top-sub-small">
              <span>₹12000</span>
              <s className="profile--para__box--card__currentPrice__discount">
                <span>₹20000</span>
              </s>
            </p>
            <button className="btn btn--blue u-margin-top-small">
              Book Now
            </button>
          </div>
          <div className="ticket--card curd">
            <span className="edit edit--color para--size-11 text-cap">
              Edit
            </span>
            <p className="para--size-12 para--dark-2 text-upper">Free</p>
            <p className="ticket--card--name">
              Ticket Cards Name Ticket Cards Name Ticket Cards Name
            </p>
            <p className="ticket--card--date para para--size-12 para--dark-2 u-margin-top-sub-small">
              <span className="para--dark para--size-11 text-lower">
                start{" "}
              </span>
              Fri, 7 Aug 2020 00:30 IST
            </p>
            <p className="ticket--card--date para para--size-12 para--dark-2">
              <span className="para--dark para--size-11 text-lower">end </span>
              Sat, 8 Aug 2020 01:22 IST
            </p>
            <p className="para para--size-12 para--dark-2 ticket--card--location">
              <i className="glyph-icon flaticon-locate"> </i>
              San Clemente Palace Kempinski Venice
            </p>
            <div className="profile--para__box--card__days__item para--dark para--size-11">
              <span>2 days</span>
              <span>5 person per ticket</span>
            </div>
            <p className="profile--para__box--card__currentPrice u-margin-top-sub-small">
              <span>₹12000</span>
              <s className="profile--para__box--card__currentPrice__discount">
                <span>₹20000</span>
              </s>
            </p>
            <button className="btn btn--blue u-margin-top-small">
              Book Now
            </button>
          </div>
        </div>

        {/* Requirement */}
        <div className="requirement">
          <div className="ticket--card curd">
            <span className="edit edit--color para--size-11 text-cap">
              Edit
            </span>
            <h4 className="heading-4 heading-4--dark-2 text-cap">
              Requirements
            </h4>
            <p className="para para--dark">
              No programming experience needed - I'll teach you everything you
              need to know A Mac computer running macOS 10.15 (Catalina) or a PC
              running macOS. No paid software required - all apps will be
              created in Xcode 11 (which is free to download) I'll walk you
              through, step-by-step how to get Xcode installed and set up
            </p>
          </div>
          <div className="ticket--card curd">
            <span className="edit edit--color para--size-11 text-cap">
              Edit
            </span>
            <h4 className="heading-4 heading-4--dark-2 text-cap">
              Descriptions
            </h4>
            <p className="para para--dark">
              Welcome to the Complete iOS App Development Bootcamp. With over
              39,000 5 star ratings and a 4.8 average my iOS course is the
              HIGHEST RATED iOS Course in the history of Udemy!
              <span role="img" aria-label="">
                {" "}
                ⭐️⭐️⭐️⭐️⭐️
              </span>
              At 55+ hours, this iOS 13 course is the most comprehensive iOS
              development course online! This Swift 5.1 course is based on our
              in-person app development bootcamp in London, where we've
              perfected the curriculum over 4 years of in-person teaching. Our
              complete app development bootcamp teaches you how to code using
              Swift 5.1 and build beautiful iOS 13 apps for iPhone and iPad.
              Even if you have ZERO programming experience. I'll take you
              step-by-step through engaging and fun video tutorials and teach
              you everything you need to know to succeed as an iOS app
              developer. The course includes 55+ hours of HD video tutorials and
              builds your programming knowledge while making real world apps.
              e.g. Pokemon Go, Whatsapp, QuizUp and Yahoo Weather. The
              curriculum has been completely revamped for iOS 13 and Xcode 11.
              Including comprehensive modules on Apple's latest technology -
              SwiftUI iOS, iPadOS and macOS app interface design, ARKit for
              making Augmented Reality apps as well as CoreML & CreateML for
              making intelligent apps with Machine Learning. You'll be building
              3D augmented reality apps that look like Pokemon Go and Harry
              Potter's magical newspapers!
            </p>
          </div>
          <div className="ticket--card curd">
            <span className="edit edit--color para--size-11 text-cap">
              Edit
            </span>
            <h4 className="heading-4 heading-4--dark-2 text-cap">
              Who this event is for:
            </h4>
            <p className="para para--dark">
              If you are an absolute beginner to coding, then take this course.
              If you are a seasoned programmer, then take this course to to get
              up to speed quickly with Swift 5.1 and native app development.
              Start with the Xcode walkthrough lesson and we'll get you familiar
              with iOS development in no time! If you are switching from
              Objective-C to Swift then this is a fast-track way of doing it.
              You can get started straight away with the Intermediate Swift
              Language module. If you are a pro iOS developer and want to
              quickly get up to date with Apple's latest technology, then start
              with the modules on SwiftUI, ARKit and CoreML.
            </p>
          </div>
        </div>
      </div>
      <div className="tickets--story curd">
        <span className="edit edit--color para--size-11 text-cap">Edit</span>
        <img
          src={card02}
          className="tickets--story--img"
          alt="event name graph"
        />

        {/* <div className='tickets--story--para ticket--card u-margin-top-small text-cap para--dark'>
                        <p className='para para--size-15 para--dark-2 text-upper'>This event includes</p>
                        <p className='para para--size-14'>
                            58.5 hours on-demand drama
                        </p>
                        <p className='para para--size-14'>
                            147 Artist
                        </p>
                        <p className='para para--size-14'>
                            11 downloadable drama scripts
                        </p>
                        <p className='para para--size-14'>
                            1 competition 
                        </p>
                        <p className='para para--size-14'>
                            Full lifetime access
                        </p>
                        <p className='para para--size-14'>
                            Access on mobile and TV
                        </p>
                        <p className='para para--size-14'>
                            Assignments
                        </p>
                        <p className='para para--size-14'>
                            Assignments
                            Certificate of event
                        </p>
                    </div> */}
      </div>
    </div>
  );
};

export default ViewTicket;
