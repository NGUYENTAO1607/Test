import React, { Component } from 'react';
import { Prompt, Redirect } from 'react-router-dom'
const  subject = [
    "ASP",
    "PHP",
    "Java",
    "Android"
]
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBlocking: false,
            isRedirect: false,
            txtName: '',
            txtEmail: '',
            txtMessage: '',
            sltCity :'ThaiBinh',
            rdoGioiTinh : 1,
            chkSubject :new Set()


        }

    }
    checkboxSubject = ()=>{
        const monhoc = subject.map((value,key)=>{
            return <label key={key} className="checkbox-inline"> <input onChange={()=>this.checkedSubject(value)} name="chkSubject" type="checkbox" value={value} checked={this.state.chkSubject.has(value)}/>{value}</label>
        })
        return monhoc
    }
    checkedSubject = (monhoc)=>{
        if(this.checkedCheckbox.has(monhoc)){
            this.checkedCheckbox.delete(monhoc)
        }else{
            this.checkedCheckbox.add(monhoc)
        }
        this.setState({
            chkSubject : this.checkedCheckbox
        })
        console.log(this.state.chkSubject)
    }
    componentWillMount(){
        this.checkedCheckbox = new Set()

    }
    isInputChange = (event) => {
        // console.log(event.target.value.length > 0)
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            isBlocking: event.target.value.length > 0,
            [name]: value
        })
    }
    isFileChange = (event)=>{
        console.log(event.target.files[0].name)
        this.setState({
            file : event.target.files[0].name 
        })
    }
    submitForm = (event) => {
        event.preventDefault()
        event.target.reset()
        this.setState({
            isBlocking: false,
            isRedirect: false
        })
        // const {txtName, }
        var gioitinh =''
        if(parseInt(this.state.rdoGioiTinh)===1){
            gioitinh = 'Nam'
        }else{
            gioitinh = "Nu"
        }
        var mhoc = ''
        for(const mh of this.state.chkSubject){
            mhoc += mh+","
        }
        let content = ''
        content += " Fullname : " + this.state.txtName
        content += " - Email : " + this.state.txtEmail
        content += " - Message : " + this.state.txtMessage
        content+= " - Thanh pho : "+this.state.sltCity
        content += " - Gioi tinh : "+gioitinh
        content += " - Mon hoc :" +mhoc
        console.log(content)
    }
    render() {
        // const {from} = this.props.location.state || {from :{pathname:'/'}}
        // const {redirectToReferrer} = this.state
        if (this.state.isRedirect) {
            return (
                <Redirect to="/trang-chu" />
            )
        }
        return (

            <div>

                <Prompt
                    when={this.state.isBlocking}
                    message={location => (
                        `Are you sure you want to go to ${location.pathname}`
                    )}
                />

                {/* Breadcrumb*/}

                {/* Contact Section Begin */}
                <section className="contact spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                                <div className="contact__widget">
                                    <span className="icon_phone" />
                                    <h4>Phone</h4>
                                    <p>+01-3-8888-6868</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                                <div className="contact__widget">
                                    <span className="icon_pin_alt" />
                                    <h4>Address</h4>
                                    <p>60-49 Road 11378 New York</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                                <div className="contact__widget">
                                    <span className="icon_clock_alt" />
                                    <h4>Open time</h4>
                                    <p>10:00 am to 23:00 pm</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                                <div className="contact__widget">
                                    <span className="icon_mail_alt" />
                                    <h4>Email</h4>
                                    <p>hello@colorlib.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Contact Section End */}
                {/* Map Begin */}
                <div className="map">
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49116.39176087041!2d-86.41867791216099!3d39.69977417971648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca48c841038a1%3A0x70cfba96bf847f0!2sPlainfield%2C%20IN%2C%20USA!5e0!3m2!1sen!2sbd!4v1586106673811!5m2!1sen!2sbd" height={500} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                    <div className="map-inside">
                        <i className="icon_pin" />
                        <div className="inside-widget">
                            <h4>New York</h4>
                            <ul>
                                <li>Phone: +12-345-6789</li>
                                <li>Add: 16 Creek Ave. Farmingdale, NY</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Map End */}
                {/* Contact Form Begin */}
                <div className="contact-form spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="contact__form__title">
                                    <h2>Leave Message</h2>
                                </div>
                            </div>
                        </div>
                        <form action="#" onSubmit={(e) => { this.submitForm(e) }}>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <input name="txtName" type="text" placeholder="Your name" value={this.state.txtName} onChange={(event) => { this.isInputChange(event) }} />
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <input name="txtEmail" value={this.state.txtEmail} type="text" placeholder="Your Email" onChange={(event) => this.isInputChange(event)} />
                                </div>
                                <div className='col-lg-12 text-center'>
                                    <div className="form-group">
                                        <select value={this.state.sltCity} className="form-control" name="sltCity"  onChange={(event) => this.isInputChange(event)} >
                                            <option value="">Please choose City</option>
                                            <option value="Hanoi">Ha Noi</option>
                                            <option value="HochiMinh">Ho chi Minh</option>
                                            <option value="DaNang">Da Nang</option>
                                            <option value="ThaiBinh" >Thai Binh</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        {this.checkboxSubject()}
                                        {/* <label className="checkbox-inline"><input  onChange={(event) => this.isInputChange(event)}  name="chkSubject" type="checkbox" value="php">PHP</input></label>
                                        <label className="checkbox-inline"><input  onChange={(event) => this.isInputChange(event)}   name="chkSubject" type="checkbox" value="java">Java</input></label>
                                        <label className="checkbox-inline"><input  onChange={(event) => this.isInputChange(event)}  name="chkSubject" type="checkbox" value="Android">Android</input></label>
                                        <label className="checkbox-inline"><input  onChange={(event) => this.isInputChange(event)}  name="chkSubject" type="checkbox" value="asp">ASP</input></label> */}
                                    </div>
                                    <div className="form-group">
                                        <label className="radio-inline"><input  type="radio" name="rdoGioiTinh" value="1"   onChange={(event) => this.isInputChange(event)}  checked={parseInt(this.state.rdoGioiTinh) === 1}/>Nam</label>
                                        <label className="radio-inline"><input  type="radio"  name="rdoGioiTinh" value="2" onChange={(event) => this.isInputChange(event)}  checked={parseInt(this.state.rdoGioiTinh) === 2} />Nu</label>
                                    </div>
                                    <div className="form-group">
                                        <label className="custom-file">
                                            <input type="file" id="file"  onChange={(event) => this.isFileChange(event)}  className="customr-file-input" name="fAvatar"></input>
                                            <span className="custom-file-control"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-12 text-center">
                                    <textarea name="txtMessage" defaultValue={this.state.txtMessage} placeholder="Your message" onChange={(event) => this.isInputChange(event)} />

                                    <button type="submit" className="site-btn">SEND MESSAGE</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Contact Form End */}
            </div>
        );
    }
}

export default Contact;