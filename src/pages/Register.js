    import React, { Component } from 'react'
    import axios from 'axios';
    export default class Register extends Component {
        constructor(props) {
            super(props);
        
            this.onChangeEmail = this.onChangeEmail.bind(this);
            this.onChangeNumber = this.onChangeNumber.bind(this);
            this.onChangeName = this.onChangeName.bind(this);
            this.onChangeNameg = this.onChangeNameg.bind(this);
            this.onChangeBirthDate = this.onChangeBirthDate.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
        
            this.state = {
              email: '',
              number: '',
              name: '',
              nameg:'Mr',
              birthdate:''
            }
          }
        
          onChangeEmail(e) {
            this.setState({email: e.target.value})
          }
        
          onChangeNumber(e) {
            this.setState({ number: e.target.value})
          }
        
          onChangeName(e) {
            this.setState({name: e.target.value})
          }
          onChangeNameg(e) {
            this.setState({nameg: e.target.value})
            console.log(this.setState({nameg: e.target.value}))
          }
          onChangeBirthDate(e) {
            this.setState({birthdate: e.target.value})
            console.log(this.setState({birthdate: e.target.value}))
          }
        
        
           onSubmit(e) {
            e.preventDefault();
        
            const detail = {
              email: this.state.email,
              number: this.state.number,
              name: this.state.name,
              nameg: this.state.nameg,
              birthdate: this.state.birthdate
            }
            
            axios.post('http://localhost:5000/details/add', detail)
              .then(res => console.log(res.data));
            
            window.location = '/';
          }
      render() {
        return (
            <div className='container'>
                <section className="user-form">
                    <form onSubmit={this.onSubmit}>
                        <div className='form-container'>
                            <h3>Contact Details</h3>
                            <div className="form-group"> 
                                <div>
                                    <input type="email"
                                        required
                                        className="form-control"
                                        placeholder="Email ID*"
                                        value={this.state.email}
                                        onChange={this.onChangeEmail}
                                    />
                                </div>
                                <div>
                                    <input type="tel"
                                        required
                                        className="form-control"
                                        placeholder="Mobile No.*"
                                        value={this.state.number}
                                        onChange={this.onChangeNumber}
                                    />
                                </div>
                                <div className='nameformet'>
                                    <select name="firstNameSalutation" className="form-control" value ={this.state.value} onChange={this.onChangeNameg}>
                                        <option value="Mr">Mr</option>
                                        <option value="Ms">Ms</option>
                                        <option value="Mrs">Mrs</option>
                                        <option value="Dr">Dr</option>
                                    </select>
                                    <input type="text" 
                                        name="fullName" 
                                        className="form-control c_name" 
                                        placeholder="Full Name as per PAN card*" 
                                        value={this.state.name}
                                        onChange={this.onChangeName}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='form-container'>
                            <h3>Personal Data</h3>
                            <div className="form-group"> 
                                <div>
                                    <input type="text"
                                        required
                                        className="form-control"
                                        placeholder="Father's First Name*"
                                        value={this.state.father_fname}
                                        onChange={this.onChangeFatherfName}
                                    />
                                </div>
                                <div>
                                    <input type="text"
                                        required
                                        className="form-control"
                                        placeholder="Father's Last Name*"
                                        value={this.state.father_lname}
                                        onChange={this.onChangeFatherlName}
                                    />
                                </div>
                                <div>
                                    <input type="date"
                                        required
                                        className="form-control"
                                        value={this.state.birthdate}
                                        onChange={this.onChangeBirthDate}
                                    />
                                </div>
                                <div>
                                    <input type="text"
                                        required
                                        className="form-control"
                                        placeholder="Mother's First Name*"
                                        value={this.state.mother_fname}
                                        onChange={this.onChangeMotherfName}
                                    />
                                </div>
                                <div>
                                    <input type="text"
                                        required
                                        className="form-control"
                                        placeholder="Mother's Last Name*"
                                        value={this.state.mother_lname}
                                        onChange={this.onChangeMotherlName}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <div class="radio-container-wrapper">
                                        <p>Marital Status*</p>
                                        <div class="radio-container">
                                            <div class="radio-button">
                                                <input type="radio" name="marital" value="Married"/>
                                                <label for="marital">Married</label>
                                            </div>
                                            <div class="radio-button">
                                                <input type="radio" name="marital" value=""/>
                                                <label for="marital">Unmarried</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="radio-container-wrapper">
                                        <p>Citizenship*</p>
                                        <div class="radio-container">
                                            <div class="radio-button">
                                                <input type="radio" name="citizen" value="Indian"/>
                                                <label for="citizen">Indian</label>
                                            </div>
                                            <div class="radio-button">
                                                <input type="radio" name="citizen" value="Other"/>
                                                <label for="citizen">Other</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="radio-container-wrapper">
                                        <p>Residential Status*</p>
                                        <div class="radio-container">
                                            <div class="radio-button">
                                                <input type="radio" name="resident" value="Resident Individual"/>
                                                <label for="resident">Resident Individual</label>
                                            </div>
                                            <div class="radio-button">
                                                <input type="radio" name="resident" value="Non Resident Indian"/>
                                                <label for="resident">Non Resident Indian</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <input type="text"
                                        required
                                        className="form-control"
                                        placeholder="Pan Card*"
                                        value={this.state.pancard}
                                        onChange={this.onChangePancard}
                                    />
                                </div>
                                <div>
                                    <input type="text"
                                        required
                                        className="form-control"
                                        placeholder="CKYC / KIN (IF AVAILABLE)*"
                                        value={this.state.ckyc}
                                        onChange={this.onChangeCkyc}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='form-container'>
                            <h3>Professional Details</h3>
                            <div className="form-group"> 
                                <div>
                                    <select name="profession" className="form-control" value={this.state.profession} onChange={this.onChangeProfession}>
                                        <option value>Profession</option>
                                        <option value="Ms">Salaried</option>
                                    </select>
                                </div>
                                <div>
                                    <input type="text"
                                        required
                                        className="form-control"
                                        placeholder="Company Name*"
                                        value={this.state.company}
                                        onChange={this.onChangeCompany}
                                    />
                                </div>
                                <div>
                                    <select name="Designation" className="form-control" value ={this.state.designation} onChange={this.onChangeDesignation}>
                                        <option value="" disabled="">Designation*</option>
                                        <option value="Accountant">Accountant</option>
                                        <option value="Consultant">Consultant</option>
                                        <option value="Engineer">Engineer</option>
                                        <option value="Executive/ Officer">Executive/ Officer</option>
                                        <option value="Assistant Manager/ Manager">Assistant Manager/ Manager</option>
                                        <option value="AVP/ AGM">AVP/ AGM</option>
                                        <option value="VP/ GM">VP/ GM</option>
                                        <option value="Contract employee">Contract employee</option>
                                        <option value="Director/ CXO">Director/ CXO</option>
                                        <option value="Teacher/ Professor">Teacher/ Professor</option>
                                        <option value="Doctor">Doctor</option>
                                        <option value="CA/ CS">CA/ CS</option>
                                        <option value="Lawyer">Lawyer</option>
                                        <option value="Architect">Architect</option>
                                        <option value="Real Estate Broker">Real Estate Broker</option>
                                        <option value="Wellness Expert">Wellness Expert</option>
                                        <option value="Artist/ Designer">Artist/ Designer</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                                <div>
                                    <input type="text"
                                        required
                                        className="form-control"
                                        placeholder="Gross Annual Income*"
                                        value={this.state.gross}
                                        onChange={this.onChangeGross}
                                    />
                                </div>
                                <div>
                                    <input type="email"
                                        required
                                        className="form-control"
                                        placeholder="Coporate Email ID*"
                                        value={this.state.coemail}
                                        onChange={this.onChangeCoEmail}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='form-container'>
                            <h3>Address</h3>
                            <div className="form-group"> 
                                <div>
                                    <input type="text"
                                        required
                                        className="form-control"
                                        placeholder="Flat/ House no*"
                                        value={this.state.house}
                                        onChange={this.onChangeHouse}
                                    />
                                </div>
                                <div>
                                    <input type="text"
                                        required
                                        className="form-control"
                                        placeholder="Street and road*"
                                        value={this.state.street}
                                        onChange={this.onChangeStreet}
                                    />
                                </div>
                                <div>
                                    <input type="text"
                                        required
                                        className="form-control"
                                        placeholder="Area / Locality*"
                                        value={this.state.area}
                                        onChange={this.onChangeArea}
                                    />
                                </div>
                                <div>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Landmark (if any)"
                                        value={this.state.landmark}
                                        onChange={this.onChangeLandmark}
                                    />
                                </div>
                                <div>
                                    <input type="text"
                                        required
                                        className="form-control"
                                        placeholder="Pincode*"
                                        value={this.state.pincode}
                                        onChange={this.onChangePincode}
                                    />
                                </div>
                                <div>
                                    <input type="text"
                                        required
                                        className="form-control"
                                        placeholder="City*"
                                        value={this.state.pincode}
                                        onChange={this.onChangePincode}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-submit">
                            <input type="submit" value="Submit" className="btn btn-primary" />
                        </div>
                    </form>
                </section>
            </div>
        )
      }
    }
    