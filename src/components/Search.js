import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/Search.css";
import {Form, Button, Col, InputGroup} from 'react-bootstrap'
import RangeSlider from 'react-bootstrap-range-slider';

function Search() {
    const [ value, setValue ] = useState(0); 
    return (
        <div>
        <div className="searchBox">
            <Form>
            <Form.Row>
            <Col sm="3">
                <Form.Control className="inputField rightBorder" size="sm" type="text" placeholder="Location" />
             </Col>
             <Col  sm="0.5">
                <Form.Label>Check In:</Form.Label>
             </Col>
             <Col sm="2" >   
                <Form.Control className="inputField border"  size="sm" type="date" placeholder="Check in" />
             </Col>
             <Col sm="0.5">
                <Form.Label>Check Out:</Form.Label>
             </Col>
             <Col sm="2" >
                <Form.Control className="inputField border"  size="sm" type="date" placeholder="Check out" />
             </Col>
             <Col sm="2">
               <Form.Control className="inputField border"  size="sm" as="select" defaultValue="Choose...">
                    <option>4 rooms 22 guests</option>
                    <option>...</option>
                    </Form.Control>
             </Col>
             <Col>
             <Button className="leftBorder" size="sm" variant="warning" type="submit">search</Button>
             </Col>
            </Form.Row>
            </Form>
        </div>
        <div className="secondSearch">
        <Form.Row>
        <Col xs="4">
          <div className="component">
          <Form.Row>
          <Col>
          <Form.Label>Hotel Name:</Form.Label>
          </Col>
          <Col sm="8">
            <Form.Control className="hotelName"
             size="sm" id="inlineFormInputGroupUsername" />
             </Col>
           </Form.Row>
          </div>
        </Col> 
        <Col xs="5">
        <div className="component" >
            <Col>
                <Form.Label>Star rating:</Form.Label>
                <Button className="rating" size="sm" variant="primary" type="submit">5</Button>
                <Button className="rating" size="sm" variant="primary" type="submit">4</Button>
                <Button className="rating" size="sm" variant="primary" type="submit">3</Button>
                <Button className="rating" size="sm" variant="primary" type="submit">2</Button>
                <Button className="rating" size="sm" variant="primary" type="submit">1</Button>
                <Button className="rating" size="sm" variant="primary" type="submit">Unrated</Button>
             </Col>
        
          </div> 
          </Col>
          <Col xs="3">
              <div className="component">
              <Form.Row>
                 <Col>
                 <Form.Label>Price:</Form.Label>
                 </Col>
                  <Col>
                  <Form.Control className="price" size="sm" id="inlineFormInputGroupUsername" placeholder="From" />
                  </Col>
                  <Col>
                  <Form.Control className="price" size="sm" id="inlineFormInputGroupUsername" placeholder="To" />
                  </Col>
              </Form.Row>
              </div>
          </Col>
          <Col xs="4">
          <div className="component">
           {['checkbox'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check inline label="Breakfast Included" type={type} id={`inline-${type}-1`} />
                <Form.Check inline label="All exclusive" type={type} id={`inline-${type}-2`} />
              </div>
            ))}
            
            </div>
          </Col>
          <Col xs="4">
          <div className="component">
              <Form.Row>
                  <Col>
                  <Form.Label>Reviews rating:</Form.Label>
                  </Col>
                  <Col>
                  <RangeSlider
                    value={value}
                    onChange={changeEvent => setValue(changeEvent.target.value)}
                  /> 
                  </Col>
              </Form.Row>
          </div>
          </Col>
          <Col xs="2">
          <div className="component">
           {['checkbox'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check inline label="Refundable" type={type} id={`inline-${type}-1`} />
              </div>
            ))}
            </div>
          </Col>
          <Col xs="2">
          <div className="component">
           {['checkbox'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check className="checkBox" inline label="Selected only" type={type} id={`inline-${type}-1`} />
              </div>
            ))}
            </div>
          </Col>
          </Form.Row>
        </div>
        

        </div>
    )
}

export default Search;