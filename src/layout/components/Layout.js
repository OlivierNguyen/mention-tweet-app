import React, { Component } from 'react';
import Radium from 'radium';
import FeedList from '../../twitter/components/FeedList';
import Footer from './Footer';
import { extractTwitterStatuses } from '../../utils/utils';
import { MOCK_TWITTER_API_SEARCH_REACTJS } from '../../mock';

class Layout extends Component {
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
                position: 'fixed',
                top: 0,
                left: 0,
                '@media (max-width: 500px)': {
                    width: 100,
                    padding: 5,
                },
            },
            containerFeed: {
                marginTop: 40,
                zIndex: 10,
                borderRadius: 5,
            },
            containerFooter: {
                position: 'fixed',
                bottom: 0,
                right: 0,
                paddingRight: 20,
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

export default Radium(Layout);