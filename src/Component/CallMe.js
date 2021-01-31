import React, { Component } from "react";

class CallMe extends Component{
    constructor(props){
        super(props);
        this.state=({
            employee:{
                name:'',
                mobile:'',
                email:'',
                interested:''
            },
            success_message:''
        });
    };

    ChangeName =(e) =>{
        const name = e.target.name;
        const value = e.target.value;
        
        this.setState({
           employee:{
               ...this.state.employee,
               [name]:value
           }
        });
    }

    updateInformation=(e)=>{
        e.preventDefault();
        fetch('https://zandofi.com/api/insertInformation',{
            method:'post',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(this.state.employee)
        }).then(res=>res.json()).then(response=>{
            this.setState({
                employee:{
                    name:'',
                    mobile:'',
                    email:'',
                    interested:''
                },
                success_message:response
            });
            console.log(this.state.employee);
        }).catch((error)=>{
            console.log(error);
        });
    }
    render(){
        return (
            <>
                    <div id="callMe" className="form-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="text-container">
                                        <div className="section-title">CALL ME</div>
                                        <h2 className="white">Have Us Contact You By Filling And Submitting The Form</h2>
                                        <p className="white">You are just a few steps away from a personalized offer. Just fill in the form and send it to us and we'll get right back with a call to help you decide what service package works.</p>
                                        <ul className="list-unstyled li-space-lg white">
                                            <li className="media">
                                                <i className="fas fa-square"></i>
                                                <div className="media-body">It's very easy just fill in the form so we can call</div>
                                            </li>
                                            <li className="media">
                                                <i className="fas fa-square"></i>
                                                <div className="media-body">During the call we'll require some info about the company</div>
                                            </li>
                                            <li className="media">
                                                <i className="fas fa-square"></i>
                                                <div className="media-body">Don't hesitate to email us for any questions or inquiries</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div> 
                                <div className="col-lg-6">
                                    <form id="callMeForm" data-toggle="validator" data-focus="false">
                                        <div className="form-group">
                                            <input type="text" className="form-control-input" value={this.state.employee.name} onChange={this.ChangeName} id="lname" name="name" required />
                                            <label className="label-control">Name</label>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control-input" value={this.state.employee.mobile} onChange={this.ChangeName} id="lphone" name="mobile" required />
                                            <label className="label-control" >Phone</label>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control-input" value={this.state.employee.email} onChange={this.ChangeName} id="lemail" name="email" required />
                                            <label className="label-control">Email</label>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-group">
                                            <select className="form-control-select" id="lselect" value={this.state.employee.interest} onChange={this.ChangeName} name="interested" required >
                                                <option className="select-option" value="" disabled selected>Interested in...</option>
                                                <option className="select-option" value="Off The Ground">Off The Ground</option>
                                                <option className="select-option" value="Accelerated Growth">Accelerated Growth</option>
                                                <option className="select-option" value="Market Domination">Market Domination</option>
                                            </select>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-group checkbox white">
                                            <input type="checkbox" id="lterms" value="Agreed-to-Terms" name="lterms"  />I agree with Aria's stated <a className="white" href="privacy-policy.html">Privacy Policy</a> and <a className="white" href="terms-conditions.html">Terms & Conditions</a>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="form-control-submit-button" onClick={this.updateInformation}>CALL ME</button>
                                            <h3 className="success-message">{this.state.success_message}</h3>
                                        </div>
                                        <div className="form-message">
                                            <div id="lmsgSubmit" className="h3 text-center hidden"></div>
                                        </div>
                                    </form>
                                </div> 
                            </div> 
                        </div> 
                    </div> 
            </>
        );
    };
}

export default CallMe;