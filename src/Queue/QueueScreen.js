import React, { Component } from 'react';
import { fetchQueueData } from "../mockApi";

// eslint-disable-next-line
import base64 from 'base-64';


export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: []
        };
    }

    componentDidMount() {
        fetchQueueData()
            .then(response => response.json())
            .then(json => {
                this.setState({
                    customers: json.queueData.queue.customersToday
                })
            });
    }

    render() {
        let customers = [];
        for(let i = 0; i < this.state.customers.length; ++i) {
            customers.push(
                <div key={this.state.customers[i].id}>
                    <div>
                        {this.state.customers[i].customer.name}
                    </div>
                </div>
            );
        }

        return (
            <div>
                {
                    customers
                }
            </div>
        );
    }
}
