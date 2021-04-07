import React from "react";
import 'sass/emailTemplate/header.scss';
import { Button, Form, Input, Label } from "reactstrap";


const Header = () => {
  return (
    <>
      <div className="headers">
        
      <div className="head">
          <h3 className='heading-4 text-cap'>Basic info*</h3>
        <div className='header'>
             
              <div className="form__group">
                <Input
                  className="form__input"
                  type="text"
                  name="tags"
                  id="tags"
                  // value='tags'
                />
                <Label htmlFor="tags" className="form__label">
                  Event Name
                </Label>
              </div>        
              <div className="form__group">
                <Input
                  className="form__input"
                  type="text"
                  name="tags"
                  id="tags"
                  // value='tags'
                />
                <Label htmlFor="tags" className="form__label">
                  Tag1-2
                </Label>
              </div>        
              <div className="form__group">
                <Input
                  className="form__input"
                  type="text"
                  name="tags"
                  id="tags"
                  // value='tags'
                />
                <Label htmlFor="tags" className="form__label">
                  Tag1-3
                </Label>
              </div>        
              <div className="form__group">
                <Input
                  className="form__input"
                  type="text"
                  name="tags"
                  id="tags"
                  // value='tags'
                />
                <Label htmlFor="tags" className="form__label">
                  Tag1-4
                </Label>
              </div>        
        </div>
      
        <div className='header'>
              <div className="form__group">
                <Input
                  className="form__input"
                  type="text"
                  name="tags"
                  id="tags"
                  // value='tags'
                />
                <Label htmlFor="tags" className="form__label">
                  Tag2
                </Label>
              </div>        
              <div className="form__group">
                <Input
                  className="form__input"
                  type="text"
                  name="tags"
                  id="tags"
                  // value='tags'
                />
                <Label htmlFor="tags" className="form__label">
                  Tag3
                </Label>
              </div>      
 
              <select
                name="eventType"
                // value={eventType}
                className="form__select form__select__size-2 form__height form__width"
                // onChange={(e) => onChange(e)}
              >
                <option>Select Event Type</option>
                <option>Select Event Type</option>
                <option>Select Event Type</option>
                <option>Select Event Type</option>
                <option>Select Event Type</option>
                
              </select> 
             
              <div className="form__group">
                <Input
                  className="form__input"
                  type="text"
                  name="tags"
                  id="tags"
                  // value='tags'
                />
                <Label htmlFor="tags" className="form__label">
                  Tag4
                </Label>
              </div>      
 
         </div>
      
      </div>
     

      <div className="head">
          <h3 className='heading-4 text-cap'>
            Location
          </h3>
        <div className='header'>
             
              <div className="form__group">
                <Input
                  className="form__input"
                  type="text"
                  name="tags"
                  id="tags"
                  // value='tags'
                />
                <Label htmlFor="tags" className="form__label">
                  Event Name
                </Label>
              </div>        
              <div className="form__group">
                <Input
                  className="form__input"
                  type="text"
                  name="tags"
                  id="tags"
                  // value='tags'
                />
                <Label htmlFor="tags" className="form__label">
                  Tag1-2
                </Label>
              </div>        
              <div className="form__group">
                <Input
                  className="form__input"
                  type="text"
                  name="tags"
                  id="tags"
                  // value='tags'
                />
                <Label htmlFor="tags" className="form__label">
                  Tag1-3
                </Label>
              </div>        
              <div className="form__group">
                <Input
                  className="form__input"
                  type="text"
                  name="tags"
                  id="tags"
                  // value='tags'
                />
                <Label htmlFor="tags" className="form__label">
                  Tag1-4
                </Label>
              </div>        
         </div>
      
        <div className='header'>
              <div className="form__group">
                <Input
                  className="form__input"
                  type="text"
                  name="tags"
                  id="tags"
                  // value='tags'
                />
                <Label htmlFor="tags" className="form__label">
                  Tag2
                </Label>
              </div>        
              <div className="form__group">
                <Input
                  className="form__input"
                  type="text"
                  name="tags"
                  id="tags"
                  // value='tags'
                />
                <Label htmlFor="tags" className="form__label">
                  Tag3
                </Label>
              </div>      
 
              <select
                name="eventType"
                // value={eventType}
                className="form__select form__select__size-2 form__height form__width"
                // onChange={(e) => onChange(e)}
              >
                <option>Select Event Type</option>
                <option>Select Event Type</option>
                <option>Select Event Type</option>
                <option>Select Event Type</option>
                <option>Select Event Type</option>
                
              </select> 
             
              <div className="form__group">
                <Input
                  className="form__input"
                  type="text"
                  name="tags"
                  id="tags"
                  // value='tags'
                />
                <Label htmlFor="tags" className="form__label">
                  Tag4
                </Label>
              </div>      
 
         </div>
      
      </div>
     
      </div>
      
      </>

  );
};
export default Header;
