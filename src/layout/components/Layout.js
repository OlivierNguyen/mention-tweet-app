import React, { Component } from 'react';
import FeedList from '../../twitter/components/FeedList';
import Footer from './Footer';
import { extractTwitterStatuses } from '../../utils/utils';
import { MOCK_TWITTER_API_SEARCH_REACTJS } from '../../mock';

export default class Layout extends Component {
    static defaultProps = {
        data: extractTwitterStatuses(MOCK_TWITTER_API_SEARCH_REACTJS),
    };

    render() {
        const S = {
            container: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
            logo: {
                width: 300,
                padding: 20,
                position: 'absolute',
                top: 0,
                left: 0,
            },
            containerFeed: {
                marginTop: 40,
                zIndex: 10,
                borderRadius: 5,
            },
            containerFooter: {
                position: 'absolute',
                bottom: 0,
                paddingLeft: 20,
                paddingBottom: 10,
            },
        };
        return (
            <div style={S.container}>
                <img
                    style={S.logo}
                    src="/images/blue-bg-logo-txt.jpg"
                    alt="Mention"
                />
                <div style={S.containerFeed}>
                    <FeedList data={this.props.data} />
                </div>
                <div style={S.containerFooter}>
                    <Footer />
                </div>
            </div>
        );
    }
}
