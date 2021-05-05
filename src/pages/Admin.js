import React, {Component} from 'react';
import axios from "axios";
import {TOKEN_NAME} from "../tools/constants";



class Admin extends Component {
    constructor(props) {
        super(props);
        this.state ={
            ProductName:[],
            data: []
        }
    }
    componentDidMount() {

        axios.get("https://face.ox-sys.com/variations", {headers: {Authorization: "Bearer " + localStorage.getItem(TOKEN_NAME)}})
            .then(res =>{
                this.setState({data: res.data.items, ProductName: res.data.items})

                console.log(res)
            })
            .catch(err =>{
                console.log(err)
            })


    }




    render() {

        function  logout(history)  {
            localStorage.clear();
            window.location.reload(false);

        }

        const imgStyle = {
            width: "20px",
        };
        const changeChat = (e) => {

            let newArr = this.state.data.filter(item => item.name.includes(e.target.value));
            this.setState({ProductName: newArr});



        };
        return (
            <div>
                <div className="container pt-5">


                    <div className="row align-items-center mb-3">
                        <div className="col-md-8">
                            <h1 >TASK TABLE</h1>
                        </div>
                        <div className="col-md-4 text-right">
                            <button className="btn btn-danger " onClick={logout}>logout</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <input type="text" className="form-control" placeholder="Search..." onChange={changeChat}/>
                        </div>
                        <div className="card-body">

                            <table className="table mt-5">

                                <thead>
                                <tr>
                                    <th scope="col">№</th>
                                    <th scope="col">Img</th>
                                    <th scope="col">ProductName</th>
                                    <th scope="col">lastUpdateTime</th>
                                    <th scope="col">Size</th>
                                </tr>
                                </thead>
                                {
                                    this.state.ProductName.map((item, index) => (



                                            <tbody >
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td ><img style={imgStyle} src={item.images[0]?.urls.original}  alt=""/></td>
                                                <td>{item.name}</td>
                                                <td>{item.lastUpdateTime}</td>
                                                <td>{item.properties[0]?.value}</td>
                                            </tr>

                                            </tbody>



                                        )
                                    )
                                }
                            </table>

                            {this.state.data.length !== 0 && this.state.ProductName.length === 0 &&
                            <div>
                                <h5 className="text-center text-secondary my-5">Product not found</h5>
                            </div>
                            }

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Admin;







