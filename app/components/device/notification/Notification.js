import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react'
import _ from 'lodash'

class Notifiction extends Component {
    state = {
        column: null,
        data: this.props.data.GetCoreNotificationsResult,
        direction: null,
      }
    
      handleSort = clickedColumn => () => {
        const { column, data, direction } = this.state
    
        if (column !== clickedColumn) {
          this.setState({
            column: clickedColumn,
            data: _.sortBy(data, [clickedColumn]),
            direction: 'ascending',
          })
    
          return
        }
    
        this.setState({
          data: data.reverse(),
          direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
      }

    render() {
        const { column, data, direction } = this.state        
        return (
            <div className="notifction">
            <Table width="100%"  padded >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell sorted={column === 'date' ? direction : null} onClick={this.handleSort('name')}>
            Date
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'NOTIFICATION_TYPE' ? direction : null} onClick={this.handleSort('age')}>
            Notification type
                        </Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'COORDINATES' ? direction : null} onClick={this.handleSort('gender')}>
            Coordinates 
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'STATUS' ? direction : null} onClick={this.handleSort('gender')}>
            Status 
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(data, ({ CreatedDate, NotificationType, LatPosition,LongPosition }) => (
            <Table.Row key={name}>
            <Table.Cell>{CreatedDate}</Table.Cell>
              <Table.Cell>{NotificationType}</Table.Cell>
              <Table.Cell className="blue-table" >{LatPosition},{LongPosition}</Table.Cell>
              <Table.Cell>read</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      </div>
        );
    }
}



export default Notifiction;