import * as React  from 'react';
import styles from'./HelloWorldWebPart.module.scss'

const save_ico = require('./icons/NRD-00001_02013_ICO_Save cccccc_001.svg');
const delete_ico = require('./icons/NRD-00001_02013_ICO_Delete 52525b_001.svg');
const delete_icon1 = require('./icons/NRD-00001_02013_ICO_Delete cccccc_001.svg');
const edit_ico = require( './icons/NRD-00001_02013_ICO_Edit 52525b_001.svg');
const plus_ico = require('./icons/NRD-00001_02013_ICO_New 52525b_001.svg');
const toggle_ico  = require( './icons/NRD-00001_02013_ICO_ToggleLeft cccccc_001.svg');
const save_icon  = require( './icons/NRD-00001_02013_ICO_Save ff6600_001.svg');
const delete_icon  = require( './icons/NRD-00001_02013_ICO_Delete ff6600_001.svg');
const edit_icon  = require('./icons/NRD-00001_02013_ICO_Edit ff6600_001 (1).svg');
const plus_icon  = require( './icons/NRD-00001_02013_ICO_New ff6600_001 (2).svg');
import { state,country, canadaStates, usStates } from './data/Address';
import { comments,documents,parents } from './data/data';
// import { Typeahead } from 'react-bootstrap-typeahead';
// import 'react-bootstrap-typeahead/css/Typeahead.css';
// import { format } from 'url';


export default class IndForm extends React.Component{


    // return <div>Hello</div>;


       constructor(props) {
    super(props);
  }
    state = {
      states: state,
        countries: country,
        save: save_ico,
        edit: edit_ico,
        edit2: edit_ico,
        delete:delete_ico,
        plus:plus_ico,
        delete1:delete_icon1,
        delete2:delete_ico,
        delete3:delete_ico,
        comments:comments,
        documents:documents,
        selectedComment:{},
        tComments: [],
        selectedDocument:{},
        tDocuments:[],
        selected: [],
        selectedCountry: 0,
        zipvalidator:true
    }

    refe2;
    refe1;
  iconOver = (type) => {
    switch(type){
     case 'save':
       this.setState({save:save_icon})
       break;
       case 'edit':
         this.setState({edit:edit_icon})
         break;
         case 'edit2':
          this.setState( {edit2:edit_icon})
          break;
         case 'delete':
           this.setState( {delete: delete_icon})
           break;
           case 'plus':
           this.setState( {plus: plus_icon})
           break;
           case 'delete1':
            this.setState( {delete1:delete_icon})
            break;
            case 'delete2':
            this.setState( {delete2:delete_icon})
            break;
            case 'delete3':
            this.setState( {delete3:delete_icon})
            break;
           default:
             break;
   }
  }

  iconOut = (type) => {
    switch(type){
     case 'save':
       this.setState({save:save_ico})
       break;
       case 'edit':
         this.setState({edit:edit_ico})
         break;
         case 'edit2':
          this.setState({edit2:edit_ico})
          break;

         case 'delete':
           this.setState( {delete: delete_ico})
           break;
           case 'plus':
           this.setState( {plus: plus_ico})
           break;
           case 'delete1':
           this.setState( {delete1:delete_icon1})
           break;
           case 'delete2':
            this.setState( {delete2:delete_ico})
            break;
            case 'delete3':
            this.setState( {delete3:delete_ico})
            break;

           default:
             break;
   }
  }

  selectComment = (event, row) => {
    row._gcomment = row.gcomment;
    this.state.comments.map(c=>{
      if(c.id === row.id){
        c.selected = !c.selected;
        if(c.selected) {
          this.setState({selectedComment:row})
        }else {
          this.setState({selectedComment:{}})
          this.refe2.value = '';
        }
      }else{
        c.selected = false;
      }
    })
    console.log(comments);
  }
  selectDocument = (event, row) => {
    row._docname = row.docname;
    this.setState({selectedComment:row});
    this.state.documents.map(d=>{
      if(d.id === row.id){
        d.selected = !d.selected;
        if(d.selected){
          this.setState({selectedDocument: row})
        }else{
          this.setState({selectedDocument: {}})
          this.refe1.value = '';
        }
      }else{
        d.selected = false;
      }
    })
    console.log(documents);
  }

  changeComment = (event) => {
    let e = event.target.value;
    event.preventDefault();
    //let me = this;
    let _tcoment1 = this.state.comments;
    /** Mutablity isssue  */
    //_tcoment1 = Array.from(this.state.comments);
    let t = {};
    _tcoment1.forEach(c => {
      if(c.id === this.state.selectedComment["id"]){
        c._gcomment = e;
        t = c;
      }
    })
    this.setState({selectedComment: t});
    this.setState({tComments: _tcoment1});
  }
  changeDocument = (event) => {
    let e = event.target.value;
    event.preventDefault();
    //let me = this;
    let _dDoument1 = this.state.documents;
    /** Mutablity isssue  */
    //_tcoment1 = Array.from(this.state.comments);
    let t = {};
    _dDoument1.forEach(d => {
      if(d.id === this.state.selectedDocument["id"]){
        d._docname = e;
        t = d;
      }
    })
    this.setState({selectedDocument: t});
    this.setState({tDocuments: _dDoument1});
  }

  saveComments = () => {
    this.state.tComments.map(c => {
      c.gcomment = c._gcomment ? c._gcomment : c.gcomment;
    })
    this.setState({comments: this.state.tComments})
  }
  saveDocuments = () => {
    this.state.tDocuments.map(d => {
      d.docname = d._docname ? d._docname : d.docname;
    })
    this.setState({documents: this.state.tDocuments})
  }

  selectCountry = (e) => {
    this.setState({selectedCountry: e.target.selectedIndex });
  }

  getValidator = (e) => {
    if(e.target.value === ''){
      this.setState({zipvalidator: true})
      return;
    }
    switch(this.state.selectedCountry){
      case 214:
        this.setState({zipvalidator: (/^(([A-Za-z][A-Za-z]\s\d{5}))$/).test(e.target.value)})
        return;
      case 0:
          this.setState({zipvalidator: (/^(([A-Za-z]\d[A-Za-z]\s\d[A-Za-z]\d))$/).test(e.target.value)})
        return;
        default:
            this.setState({zipvalidator: true})
          return;
    }


  }

 render(){

   const states = this.state.selectedCountry === 0 ? canadaStates : (this.state.selectedCountry === 214 ? usStates : [])
    return (
      <div className="container main-container ">
        <h5 className="contact-header">Contact</h5>
        <div className="contact-toolbar">

          &nbsp;
          &nbsp;
          <img src={this.state.save as string}
            height="20px"
            width="20px"
            className="saveicons"
            alt="saveicon"
            onMouseOver={()=>this.iconOver('save')}
            onMouseOut ={()=>this.iconOut('save')}
          />
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <img src={this.state.delete1 as string}
            height="20px"
            width="20px"
            className="deleteicon1"
            alt="deleteicon"
            onMouseOver={()=>this.iconOver('delete1')}
            onMouseOut ={()=>this.iconOut('delete1')}
          />
          &nbsp;
          &nbsp;
          &nbsp;

          <div className="togglecontrol">
            <div className="row toggleupperspace">
              <div className="col4">
                <span className="togglespan">Individuals</span>
              </div>
              &nbsp;
              &nbsp;
         <div className="col4">
                <img src={toggle_ico as string}
                  height="25px"
                  width="25px"
                  className="toggleicon"
                  alt="toggleicon"
                />
              </div>
              &nbsp;
              &nbsp;
            <div className="col4">
                <span className="togglespan">Entities</span>
              </div>
            </div>
          </div>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;

          <div className="container myform"></div>

          <div className= "flex-container">

          <div> Name </div>

          <div className ={styles.wrapper }></div>
          <label> First name </label>
          <input type="text" name="fname"></input>

          <div className ={styles.wrapper}></div>
          <label>Middle Name </label>
          <input type="text" name="Mname"></input>

          <div className ={styles.wrapper}></div>
          <label>Last name </label>
          <input type="text" name="lname"></input>

          <div className ={styles.wrapper}></div>
          <label>Preferred Name </label>
          <input type ="text" name ="pname"></input>

         <hr/>

         <div> Name </div>

         <div className="flex-container2">

         <div className ={styles.wrapper}></div>
           <label> Home Phone</label>
            <input type ="integer" className="form-control"  maxLength={12} name ="hphn"></input>



         <div className ={styles.wrapper}></div>
         <label> Mobile Number</label>
            <input type ="integer" className="form-control"  maxLength={12} name ="mno"></input>



         <div className ={styles.wrapper}></div>
         <label> Business Phone</label>
            <input type ="integer" className="form-control" maxLength={12} name ="bno"></input>



            <div className ={styles.wrapper}></div>
         <label> Ext </label>
            <input type ="integer" className="form-control"  maxLength={12} name ="ext"></input>

            <div className ={styles.wrapper}></div>
         <label> Fax Number</label>
            <input type ="integer" className="form-control" maxLength={12} name ="fno"></input>

            <div className ={styles.wrapper}></div>
         <label> Email Address</label>
            <input type ="text" className="form-control" maxLength={12} name ="Email"></input>

</div>
</div>
<hr/>





        {/* </div>
     {/*    <div className="container myform">> */}
      {/*   <div className= {styles.contactcolsize}> */}

          {/* <div className= "namemargin"></div>
          <h5>Name</h5>
          <div className="row">
          <div className="col-2 wrapper">
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">First Name <span className="required" > *</span></label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder=" " />
              </div>
            </div>



            <div className="col-2 contactcolsize">
              <div className="form-group">
              <label htmlFor="formGroupExampleInput">Middle Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder=" " />
              </div>
            </div>
            <div className="col-2 contactcolsize">
              <div className="form-group">
              <label htmlFor="formGroupExampleInput">Last Name <span className="required" > *</span></label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder=" " />
              </div>
            </div>
            <div className="col-3 ">
              <div className="form-group">
              <label htmlFor="formGroupExampleInput">Preferred Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder=" " />
              </div>
            </div>
            <div className="col-2" >
              <div className="form-group">
                <div className="form-check">
                  <span>
                    <label className="form-check-box labelposition" htmlFor="gridCheck">
                      Deceased
                </label>
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <hr className="marigin"/> *//* } */}


{/*
<div className="row">
            <div className="col-12">
              <h5>Contact</h5>
              <div className="row ">
                <div className="col-2">
                  <div className="homephn" >
                    <label htmlFor="formGroupExampleInput">Home Phone</label>
                     <input type="text" className="form-control" maxLength={12} id="formGroupExampleInput" placeholder=" " />
                  </div>
                </div>
                <div className="col-2">
                  <div className="mobileno">
                    <label htmlFor="formGroupExampleInput">Mobile Number</label>
                    <input type="text" className="form-control"  maxLength={12} id="formGroupExampleInput" placeholder=" " />
                  </div>
                </div>
                <div className="col-2">
                  <div className="businessphn">
                    <label htmlFor="formGroupExampleInput">Business Phone</label>
                    <input type="text" className="form-control"  maxLength={12} id="formGroupExampleInput" placeholder=" " />
                  </div>
                </div>
                <div className="col-1">
                  <div className="extension">
                    <label htmlFor="formGroupExampleInput">Ext</label>
                    <input type="text" className="form-control"  maxLength={12} id="formGroupExampleInput" placeholder=" " />
                  </div>
                </div>
                <div className="col-2">
                  <div className="faxno">
                    <label htmlFor="formGroupExampleInput">Fax Number</label>
                    <input type="text" className="form-control"  maxLength={12} id="formGroupExampleInput" placeholder=" " />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <div className="email">
                    <label htmlFor="formGroupExampleInput">Email Address</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder=" " />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="marigin"/> */}



          {/* <h5>Address</h5>
          <div className="row">
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Address</label>
                <textarea rows={5} className="form-control" id="formGroupExampleInput" placeholder="" />
              </div>
            </div>
            <div className="col-4">
             <div>
             <div className="city">
            <label htmlFor="formGroupExampleInput">City/Municipality</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder=" " />
                </div>
              </div>
              <div>

                <div className="province">
                  <label htmlFor="formGroupExampleInput">Province/State</label>
                  {(this.state.selectedCountry === 0 || this.state.selectedCountry === 214) && <select className="form-control"  >
                    {
                      states.map((v, i) => {
                        return (
                          <option key={i} value="i">{v}</option>
                        )
                      })
                    }
                  </select>}
                  {
                    (this.state.selectedCountry !== 0 && this.state.selectedCountry !== 214) && <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter a state " />
                  }

                </div>
              </div>
            </div>
            <div className="col-4">
              <div>
                <div className="contry">
                  <label htmlFor="formGroupExampleInput">Country</label>
                  <select className="form-control" defaultValue="0" onChange={e=> this.selectCountry(e)} >
                    {
                      this.state.countries.map((v, i) => {
                        return (
                          <option key={i} value={i}>{v}</option>
                        )
                      })
                    }
                  </select>
                </div>
              </div>
              <div>
                <div className="postalcode">
                  <label htmlFor="formGroupExampleInput">Postal/Zip Code</label>
                  <input type="text" className="form-control" maxLength= {8} id="formGroupExampleInput" placeholder=" " onChange={e => this.getValidator(e)} />
                    {!this.state.zipvalidator && 'Invalid zip code entered'}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Home Quarter</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder=" " />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group align-residence">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck" />
                  <label className="form-check-residence" htmlFor="gridCheck">
                    Residence is the same as listed address
                </label>
                </div>
              </div>
            </div>
          </div>
          <hr className="marigin"/> */}



          <div>Address</div>

          <div className ={styles.wrapper}></div>
         <label> Address</label>
            <input type ="text" className="form-control" maxLength={12} name ="Address"></input>


          <div className={styles.wrapper}></div>
          <label> City/Muncipality</label>
            <input type ="text" className="form-control" maxLength={12} name ="City"></input>

            <div className={styles.wrapper}></div>
          <label> Province</label>
            <input type ="text" className="form-control" maxLength={12} name ="Province"></input>

            <div className={styles.wrapper}></div>
          <label> Country</label>
            <input type ="text" className="form-control" maxLength={12} name ="Country"></input>

            <div className={styles.wrapper}></div>
          <label> Postal/Zip Code</label>
            <input type ="text" className="form-control" maxLength={12} name ="Postal"></input>
            <hr/>




          <div>Tax Numbers </div>
          <div className={styles.wrapper}></div>
          <label> GST</label>
            <input type ="text" className="form-control" maxLength={17} name ="GST"></input>

            <div className={styles.wrapper}></div>
            <label> HST</label>
            <input type ="text" className="form-control" maxLength={17} name ="HST"></input>

            <div className={styles.wrapper}></div>
          <label> PST</label>
            <input type ="text" className="form-control" maxLength={17} name ="PST"></input>

            <div className={styles.wrapper}></div>
          <label> QST</label>
            <input type ="text" className="form-control" maxLength={17} name ="QST"></input>

<hr/>
          <h5>Parent (Individual or Entity)</h5>

          <div className={styles.wrapper}></div>
           <input type ="text" className="form-control" name ="Typeaheadbox"></input>
           <div className="usericon-align">
            <i className="fas fa-user"></i>
            </div>
          </div>
          <hr/>


          <h5>Comments</h5>

         <table>


            <tr>
             <th>General Comment regarding Individual</th>
             <th>Date</th>
             <th>Who</th>
          </tr>



          <tr>
          <td>Comment about person</td>
          <td>June 4</td>
          <td>Dave King</td>
          </tr>

       <tr>
          <td>Comment about person</td>
          <td>June 4</td>
          <td>Dave King</td>
          </tr>
         </table>


         <h5>Documents</h5>

         <table>

           {/*  <th>
              <div className="form-check form-check-align">
               <input className="form-check-input" type="checkbox" id="gridCheck" />
                </div>
            </th> */}

            <tr>
             <th>Document Name</th>
             <th>Date</th>
             <th>Who</th>
          </tr>

          <tr>
          <td>abc.xlsx</td>
          <td>June 4</td>
          <td>Dave King</td>
          </tr>

          <tr>
          <td>xyz.docx</td>
          <td>June 4</td>
          <td>Dave King</td>
          </tr>

          <tr>

          <td>mno.pdf</td>
          <td>June 4</td>
          <td>Dave King</td>
          </tr>
        </table>




         {/*  <h5>Comments</h5>
          <div>
            <img src={this.state.edit as string}
              height="18px"
              width="18px"
              className="editicons"
              alt="editicon"
              onMouseOver={()=>this.iconOver('edit')}
              onMouseOut={()=>this.iconOut('edit')}
            />
            &nbsp;
            &nbsp;
            &nbsp;

          <img src={this.state.delete3 as string}
              height="18px"
              width="18px"
              className="deleteicons"
              alt="deleteicon"
              onMouseOver={()=>this.iconOver('delete3')}
              onMouseOut={()=>this.iconOut('delete3')}
              />

          </div>
          <div className="row">
          <div className="col-11 ">
           <div className="form-group custom-form-input">
           <input type="text" className="form-control form-control-te "  ref={node=>this.refe2 = node}  value={this.state.selectedComment["_gcomment"]} id="formGroupExampleInput" placeholder=" " onChange={(e)=>this.changeComment(e)} />


           </div>
           </div>

            <div className="col-1 icons-align">
             <img src={this.state.plus as string}
                height="18px"
                width="18px"
                className="plusicon"
                alt="plusicon"
                onMouseOver={()=>this.iconOver('plus')}
                onMouseOut ={()=>this.iconOut('plus')}
                onClick={this.saveComments}
              />
               </div>
               </div>

          <div className="row tableborder">
          <div className="col-12 "></div>
          <table className="table  table-bordered table-striped">
           <thead>
          <tr>
          <th scope="row">
          <div className="form-check form-check-align">
           <input className="form-check-input" type="checkbox" id="gridCheck" />
           </div>
          </th>
          <th scope="col">General comment regarding Individual</th>
           <th scope="col">Date</th>
           <th scope="col">Who</th>
           </tr>
           </thead>
           </table>
           </div>


         <div className="row">
          <div className="col-12 scroll-table">
          <table className="table table-bordered table-striped">

            <tbody>


  {
    this.state.comments.map( row=>(
      <tr>
       <th scope= "row">


<div className="form-check form-check-align">

<input className="form-check-input" type="checkbox" id="gridCheck" name="comment_chk" defaultValue={row.selected} checked={row.selected} onChange={(e)=>{this.selectComment(e,row)}}  />

</div>

</th>

<td>{row.gcomment}</td>

<td>{row.date}</td>

<td>{row.who}</td>

</tr>
))
  }
   </tbody>
   </table>
    </div>
    </div>

<hr className="marigin"/>
<h5>Documents</h5>
<div>
            <img src={this.state.edit2 as string}
              height="18px"
              width="18px"
              className="editicons"
              alt="editicon"
              onMouseOver={()=>this.iconOver('edit2')}
            onMouseOut={()=>this.iconOut('edit2')}
            />
            &nbsp;
            &nbsp;
            &nbsp;

            <img src={this.state.delete as string}
              height="18px"
              width="18px"
              className="deleteicons"
              alt="deleteicon"
              onMouseOver={()=>this.iconOver('delete')}
            onMouseOut={()=>this.iconOut('delete')}
            />
          </div>
          <div className="row">
            <div className="col-11 ">
              <div className="form-group custom-form-input">

                <input type="text" className="form-control form-control-te " ref={node=>this.refe1 = node} value={this.state.selectedDocument["_docname"]} id="formGroupExampleInput" placeholder=" " onChange={(e)=>this.changeDocument(e)} />
              </div>
            </div>
            <div className="col-1 icons-align" >
              <i className="far fa-2x fa-folder" onClick={this.saveDocuments}></i>
            </div>
          </div>


           <div className="row tableborder">
            <div className="col-12"></div>
              <table className="table table-bordered table-striped">
              <thead>
          <tr>
          <th scope="row">
          <div className="form-check form-check-align">
           <input className="form-check-input" type="checkbox" id="gridCheck" />
           </div>
          </th>
          <th scope="col">Document Name</th>
           <th scope="col">Date</th>
           <th scope="col">Who Uploaded</th>
           </tr>
           </thead>
           </table>
           </div>

           <div className="row">
           <div className="col-12 scroll-table">
          <table className="table table-bordered table-striped">

         <tbody>
                {
                this.state.documents.map (row =>(
                    <tr>
                    <th scope="row">
                     <div className="form-check form-check-align">
                  <input className="form-check-input" type="checkbox" id="gridCheck" name="document_chk" defaultValue={row.selected} checked={row.selected} onChange={(e)=>{this.selectDocument(e,row)}}  />
                   </div>
                  </th>
                  <td>{row.docname}</td>
                    <td>{row.dateuploaded}</td>
                    <td>{row.whouploaded}</td>
                    </tr>
                       ))
                  }
                  </tbody>
                 </table>
               </div>
              </div>*/}
            </div>




    )
  }
}