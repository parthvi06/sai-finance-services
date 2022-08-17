    import React, { Component } from 'react'
    import axios from 'axios';
    export default class Register extends Component {
        constructor(props) {
            super(props);
        
            this.onChangeEmail = this.onChangeEmail.bind(this);
            this.onChangeNumber = this.onChangeNumber.bind(this);
            this.onChangeName = this.onChangeName.bind(this);
            this.onChangeNameg = this.onChangeNameg.bind(this);
            // this.onChangeDate = this.onChangeDate.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
        
            this.state = {
              email: '',
              number: '',
              name: '',
              nameg:'Mr'
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
        
        //   onChangeDate(date) {
        //     this.setState({
        //       date: date
        //     })
        //   }
        
           onSubmit(e) {
            e.preventDefault();
        
            const detail = {
              email: this.state.email,
              number: this.state.number,
              name: this.state.name,
              nameg: this.state.nameg
            //   date: this.state.date
            }
            
            axios.post('http://localhost:5000/details/add', detail)
              .then(res => console.log(res.data));
            
            window.location = '/';
          }
      render() {
        return (
            <div className='container'>
                <section className="user-form">
                    <h3>Contact names</h3>
                    <form onSubmit={this.onSubmit}>
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
                        <div className="">
                            <input type="submit" value="Create detail Log" className="btn btn-primary" />
                        </div>
                    </form>
                </section>
            </div>
        )
      }
    }
    