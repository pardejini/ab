import { Component } from 'react';
export default class Main extends Component {
  constructor(){
    super()
    this.state = {
      data:[]
    }
    this.clicked = this.clicked.bind(this)
  }

  clicked(e) {

    e.preventDefault();
    var id = this.refs.id.value.trim();

    Meteor.call('getItem', function(err, results) {
      var res = null;
      var _results = [];

      if (!err) {
        res = JSON.parse(results.content).rgInventory;
        console.log(res)
        _results = _.map(res, function (item) {
          return {
            _id: item.id,
          };
        });
        console.log(_results)
        this.setState({data: _results});
      } else {
        console.log(err);
      }
    })
    this.refs.id.value = '';
  }

  render() {
    let createItem = function(item) {
      return <li key={item.id}>{item.id}</li>;
    };
    return (
        <div className="container">
          <form className="commentForm" onSubmit={this.clicked}>
            <input type="text" placeholder="Steam id" ref="id" />
            <input type="submit" value="Post" />
          </form>
          <div>
            <ul>
              <ul>{this.state.data.map(createItem)}</ul>
            </ul>
          </div>
        </div>
    );
  }
};
