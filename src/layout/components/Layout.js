import React, { Component } from 'react';
import FeedList from '../../twitter/components/FeedList';
import { extractTwitterStatuses } from '../../utils/utils';
import { MOCK_TWITTER_API_SEARCH_REACTJS } from '../../mock';

export default class Layout extends Component {
    static defaultProps = {
        data: extractTwitterStatuses(MOCK_TWITTER_API_SEARCH_REACTJS)
    };

    render() {
        return (
            <div>
                <FeedList data={this.props.data}/>
            </div>
        );
    }
}
